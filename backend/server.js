import chatbotRouter from "./chatbot-route.js";
import express from "express";
import dotenv from "dotenv";
import path from "path";
import { fileURLToPath } from "url";

import {
  SmartSpectraSDK,
  PixelFormat,
  FrameTransform,
  breathingMetrics,
  cardioMetrics
} from "@smartspectra/node-sdk";

import { decodeMetrics } from "@smartspectra/node-sdk/messages";

// ==========================================
// CONFIGURATION
// ==========================================

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const projectFolder = path.resolve(__dirname, "..");

dotenv.config({
  path: path.join(__dirname, ".env")
});

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(express.static(projectFolder));
app.use("/api/chatbot", chatbotRouter);

console.log("Presage API key loaded:", Boolean(process.env.PRESAGE_API_KEY));

// ==========================================
// SESSION STATE
// ==========================================

let sdk = null;
let isRunning = false;
let isStarting = false;
let isStopping = false;
let hasStarted = false;

let latestMetrics = {
  heartRate: null,
  breathingRate: null,
  status: "Not started",
  lastUpdated: null,
  validationHint: "Waiting for camera"
};

let framesReceived = 0;
let lastFrameTimestamp = 0;

// ==========================================
// METRIC EXTRACTION
// ==========================================

function getLatestValue(series) {
  if (!series) return null;

  const samples = Array.isArray(series)
    ? series
    : [series];

  if (!samples.length) return null;

  const sample = samples[samples.length - 1];

  const rawValue =
    typeof sample === "object" && sample !== null
      ? sample.value
      : sample;

  const value = Number(rawValue);

  return Number.isFinite(value) && value > 0
    ? value
    : null;
}

function extractMetrics(buffer) {
  const decoded = decodeMetrics(buffer);

  if (Buffer.isBuffer(decoded)) {
    throw new Error("Presage metrics decoder returned raw binary.");
  }

  return {
    heartRate: getLatestValue(
      decoded.cardio?.pulseRate
    ),

    breathingRate: getLatestValue(
      decoded.breathing?.rate
    )
  };
}

// ==========================================
// METRICS ENDPOINT
// ==========================================

app.get("/api/metrics", (req, res) => {
  res.set("Cache-Control", "no-store");

  res.json({
    ...latestMetrics,
    isRunning,
    isStarting,
    isStopping,
    framesReceived
  });
});

// ==========================================
// START PRESAGE
// ==========================================

app.post("/api/start", async (req, res) => {
  if (sdk || isStarting || isStopping) {
    return res.status(409).json({
      error: "A measurement session is already active."
    });
  }

  if (!process.env.PRESAGE_API_KEY) {
    return res.status(500).json({
      error: "Presage API key is missing. Check backend/.env."
    });
  }

  isStarting = true;
  isRunning = false;
  hasStarted = false;

  framesReceived = 0;
  lastFrameTimestamp = 0;

  let session = null;

  try {
    console.log("Creating Presage session...");

    session = new SmartSpectraSDK({
      apiKey: process.env.PRESAGE_API_KEY,

      requestedMetrics: [
        ...breathingMetrics,
        ...cardioMetrics
      ]
    });

    sdk = session;

    latestMetrics = {
      heartRate: null,
      breathingRate: null,
      status: "Starting Presage...",
      lastUpdated: null,
      validationHint: "Waiting for camera"
    };

    // ======================================
    // PROCESSING STATUS
    // ======================================

    session.on("processingStatus", status => {
      console.log("Presage processing status:", status);

      const names = {
        0: "Uninitialized",
        1: "Idle",
        2: "Starting measurement",
        3: "Measurement running",
        4: "Stopping measurement",
        5: "Measurement error"
      };

      isRunning = status === 3;

      if (status === 5) {
        isRunning = false;
        hasStarted = false;
        latestMetrics.status = "Presage measurement error";
      } else if (status === 3) {
        latestMetrics.status = "Measurement running";
      } else {
        latestMetrics.status = names[status] ?? `Status ${status}`;
      }
    });

    // ======================================
    // VALIDATION
    // ======================================

    session.on("validationStatus", (code, timestamp, hint) => {
      console.log("Presage validation:", {
        code,
        timestamp,
        hint
      });

      latestMetrics.validationHint = hint || "";

      if (hint) {
        latestMetrics.status = String(hint);
      }
    });

    // ======================================
    // LIVE METRICS
    // ======================================

    session.on("metrics", (buffer, timestampUs) => {
      try {
        const readings = extractMetrics(buffer);

        let receivedReading = false;

        if (readings.heartRate !== null) {
          latestMetrics.heartRate = readings.heartRate;
          receivedReading = true;
        }

        if (readings.breathingRate !== null) {
          latestMetrics.breathingRate = readings.breathingRate;
          receivedReading = true;
        }

        if (receivedReading) {
          latestMetrics.lastUpdated = Date.now();

          latestMetrics.status = "Receiving live measurements";

          console.log("LIVE VITALS:", {
            heartRate: latestMetrics.heartRate,
            breathingRate: latestMetrics.breathingRate,
            timestampUs
          });
        }

      } catch (error) {
        console.error("Metrics decoding error:", error);
        latestMetrics.status = "Waiting for valid measurements";
      }
    });

    // ======================================
    // SDK ERRORS
    // ======================================

    session.on("error", (code, message, retryable) => {
      console.error("Presage SDK error:", {
        code,
        message,
        retryable
      });

      isRunning = false;
      isStarting = false;
      hasStarted = false;

      latestMetrics.status = message || "Presage error";
    });

    // ======================================
    // CUSTOM CAMERA INPUT
    // ======================================

    session.useCustomInput(FrameTransform.kNone);

    session.start();

    hasStarted = true;

    console.log("Presage custom input started.");

    res.status(202).json({
      message: "Presage measurement started."
    });

  } catch (error) {
    console.error("Presage startup failed:", error);

    isRunning = false;
    hasStarted = false;

    latestMetrics.status = error.message;

    if (sdk === session) {
      sdk = null;
    }

    if (session) {
      try {
        await session.stopAsync();
      } catch {}

      try {
        await session.destroy();
      } catch {}
    }

    if (!res.headersSent) {
      res.status(500).json({
        error: error.message
      });
    }

  } finally {
    isStarting = false;
  }
});

// ==========================================
// RECEIVE CAMERA FRAMES
// ==========================================

app.post(
  "/api/frame",
  express.raw({
    type: "application/octet-stream",
    limit: "2mb"
  }),
  (req, res) => {
    try {
      if (!sdk || !hasStarted || isStopping) {
        return res.status(409).json({
          error: "Presage is not ready."
        });
      }

      const width = Number(req.headers["x-frame-width"]);
      const height = Number(req.headers["x-frame-height"]);
      const timestampUs = Number(req.headers["x-timestamp-us"]);

      if (
        !Number.isInteger(width) ||
        !Number.isInteger(height) ||
        !Number.isFinite(timestampUs) ||
        width <= 0 ||
        height <= 0
      ) {
        return res.status(400).json({
          error: "Invalid frame information."
        });
      }

      if (!Buffer.isBuffer(req.body)) {
        return res.status(400).json({
          error: "Missing camera frame."
        });
      }

      const expectedSize = width * height * 4;

      if (req.body.length !== expectedSize) {
        return res.status(400).json({
          error: "Incorrect frame size."
        });
      }

      if (timestampUs <= lastFrameTimestamp) {
        return res.status(422).json({
          error: "Frame timestamp is not increasing."
        });
      }

      const accepted = sdk.sendFrame(
        req.body,
        width,
        height,
        width * 4,
        PixelFormat.kRGBA,
        timestampUs
      );

      if (!accepted) {
        return res.status(422).json({
          error: "Presage did not accept this frame."
        });
      }

      lastFrameTimestamp = timestampUs;
      framesReceived++;

      return res.json({
        success: true,
        framesReceived
      });

    } catch (error) {
      console.error("Frame endpoint error:", error);

      return res.status(500).json({
        error: error.message
      });
    }
  }
);

// ==========================================
// STOP PRESAGE
// ==========================================

app.post("/api/stop", async (req, res) => {
  if (isStopping) {
    return res.status(409).json({
      error: "Measurement is already stopping."
    });
  }

  const session = sdk;

  isStopping = true;
  isRunning = false;
  isStarting = false;
  hasStarted = false;

  try {
    if (session) {
      await session.stopAsync();
      await session.destroy();
    }

    if (sdk === session) {
      sdk = null;
    }

    latestMetrics = {
      heartRate: null,
      breathingRate: null,
      status: "Stopped",
      lastUpdated: null,
      validationHint: ""
    };

    framesReceived = 0;
    lastFrameTimestamp = 0;

    console.log("Presage measurement stopped.");

    res.json({
      message: "Presage measurement stopped."
    });

  } catch (error) {
    console.error("Presage stop error:", error);

    if (sdk === session) {
      sdk = null;
    }

    latestMetrics.status = error.message;

    res.status(500).json({
      error: error.message
    });

  } finally {
    isStopping = false;
  }
});

// ==========================================
// SERVER
// ==========================================

app.listen(PORT, () => {
  console.log("--------------------------------");
  console.log(`HealthBridge running at http://localhost:${PORT}`);
  console.log("Presage custom-input server ready.");
  console.log("--------------------------------");
});
