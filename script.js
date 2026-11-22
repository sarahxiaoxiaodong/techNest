
/* ==========================================================
   HEALTHBRIDGE — ORIGINAL WEBSITE FUNCTIONALITY RESTORED
   Lessons • Search • Quizzes • Read Aloud • Navigation
========================================================== */

// ==========================================================
// LESSON CONTENT
// ==========================================================

const lessonData = {

  bloodPressure: {
    title: "Understanding Blood Pressure",

    content: `
      <p>Blood pressure measures how strongly blood pushes
      against the walls of your arteries as your heart pumps.</p>

      <h3>What do the two numbers mean?</h3>

      <p><strong>Systolic (top number):</strong>
      Pressure when your heart beats.</p>

      <p><strong>Diastolic (bottom number):</strong>
      Pressure when your heart rests between beats.</p>

      <h3>Understanding your reading</h3>

      <p>A reading is written as two numbers, such as
      120/80 mmHg.</p>

      <p>Blood pressure can change throughout the day.
      One measurement alone does not establish a diagnosis.</p>

      <h3>Helpful tip</h3>

      <p>Sit quietly for a few minutes before measuring.
      Keep your arm supported and follow the instructions
      provided with your blood pressure monitor.</p>

      <p>Ask a healthcare professional what range is
      appropriate for you.</p>
    `,

    quiz: {
      question: "What does the top number in a blood pressure reading represent?",
      choices: [
        "Pressure when the heart beats",
        "Pressure when the heart rests",
        "Your breathing rate",
        "Your body temperature"
      ],
      answer: 0,
      explanation: "Correct! The systolic number measures pressure when your heart beats."
    }
  },

  heartRate: {
    title: "Understanding Heart Rate",

    content: `
      <p>Heart rate is the number of times your heart beats
      in one minute.</p>

      <h3>What does BPM mean?</h3>

      <p>BPM stands for <strong>beats per minute</strong>.
      It describes how many times your heart beats in
      sixty seconds.</p>

      <h3>What affects heart rate?</h3>

      <ul>
        <li>Physical activity and exercise.</li>
        <li>Stress and emotions.</li>
        <li>Sleep and rest.</li>
        <li>Medications and certain health conditions.</li>
        <li>Age and individual differences.</li>
      </ul>

      <h3>What is a typical resting heart rate?</h3>

      <p>For many adults, a resting heart rate is
      approximately 60–100 BPM. Individual circumstances
      can affect what is appropriate.</p>

      <p>Speak with a healthcare professional if you have
      concerns about your heart rate.</p>
    `,

    quiz: {
      question: "What does BPM stand for?",
      choices: [
        "Breaths Per Measurement",
        "Beats Per Minute",
        "Blood Pressure Measurement",
        "Body Pulse Monitor"
      ],
      answer: 1,
      explanation: "Exactly! BPM means beats per minute."
    }
  },

  breathingRate: {
    title: "Understanding Breathing Rate",

    content: `
      <p>Breathing rate is the number of breaths a person
      takes in one minute.</p>

      <h3>How is it measured?</h3>

      <p>One breath includes breathing in and breathing out.
      Breathing rate is usually measured while a person
      is resting.</p>

      <h3>What affects breathing rate?</h3>

      <ul>
        <li>Physical activity.</li>
        <li>Stress and emotions.</li>
        <li>Sleep.</li>
        <li>Illness and other health conditions.</li>
        <li>Age and individual circumstances.</li>
      </ul>

      <h3>What is a typical adult resting rate?</h3>

      <p>A commonly referenced range for adults is
      approximately 12–20 breaths per minute.</p>

      <p>This range is a general reference, not a diagnosis.
      A person's usual breathing pattern and symptoms
      also matter.</p>

      <h3>When should you seek help?</h3>

      <p>If someone has severe difficulty breathing,
      call 911. For non-emergency concerns, speak with
      a healthcare professional.</p>
    `,

    quiz: {
      question: "What counts as one complete breath?",
      choices: [
        "Breathing in only",
        "Breathing out only",
        "Breathing in and breathing out",
        "Two heartbeats"
      ],
      answer: 2,
      explanation: "Correct! One complete breath includes inhaling and exhaling."
    }
  },

  prescriptions: {
    title: "Understanding Medicine and Prescriptions",

    content: `
      <p>Medicines can help prevent, manage, and treat
      different health conditions.</p>

      <h3>Common prescription terms</h3>

      <ul>
        <li><strong>Dosage:</strong> The amount of medicine
        prescribed.</li>

        <li><strong>Frequency:</strong> How often medicine
        should be taken.</li>

        <li><strong>Side effect:</strong> An unwanted effect
        that may occur when taking medicine.</li>

        <li><strong>Refill:</strong> Getting another supply
        of a prescribed medicine.</li>

        <li><strong>Prescription:</strong> Instructions
        from an authorized healthcare professional
        for obtaining medicine.</li>
      </ul>

      <h3>Questions to ask your pharmacist</h3>

      <ul>
        <li>What is this medicine used for?</li>
        <li>When and how should I take it?</li>
        <li>Are there possible side effects?</li>
        <li>Does it interact with my other medicines?</li>
        <li>What should I do if I miss a dose?</li>
      </ul>

      <p>Never change your medication routine without
      speaking with an appropriate healthcare professional.</p>
    `,

    quiz: {
      question: "What does dosage refer to?",
      choices: [
        "The colour of a medicine",
        "The amount of medicine prescribed",
        "The name of a pharmacy",
        "The price of a prescription"
      ],
      answer: 1,
      explanation: "Correct! Dosage refers to the amount of medicine prescribed."
    }
  },

  patientRights: {
    title: "Understanding Patient Rights",

    content: `
      <p>Every patient deserves respectful, safe, and
      appropriate healthcare.</p>

      <h3>Important patient rights</h3>

      <ul>
        <li><strong>Respect:</strong> You deserve to be
        treated with dignity and respect.</li>

        <li><strong>Privacy:</strong> Your personal
        healthcare information should be protected.</li>

        <li><strong>Information:</strong> You can ask
        questions and request explanations about your care.</li>

        <li><strong>Consent:</strong> You generally have
        the right to make informed decisions about
        your healthcare.</li>

        <li><strong>Participation:</strong> You can take
        part in decisions about your care.</li>
      </ul>

      <h3>Remember</h3>

      <p>You are allowed to ask your healthcare provider
      to explain something again if you do not understand.</p>

      <p>You can also ask for information in a format
      that is easier for you to understand.</p>
    `,

    quiz: {
      question: "What should you do if you do not understand a healthcare explanation?",
      choices: [
        "Pretend you understand",
        "Avoid asking questions",
        "Ask your healthcare provider to explain it again",
        "Ignore the information"
      ],
      answer: 2,
      explanation: "Exactly! Patients can ask questions and request clearer explanations."
    }
  },

  costBasics: {
    title: "Understanding Healthcare Costs",

    content: `
      <p>Healthcare costs can vary depending on the service,
      coverage, and individual circumstances.</p>

      <h3>What is MCP?</h3>

      <p>The Medical Care Plan (MCP) is Newfoundland
      and Labrador's publicly funded health insurance plan
      for eligible residents.</p>

      <h3>What should you know?</h3>

      <ul>
        <li>Not every healthcare service is necessarily covered.</li>
        <li>Prescription coverage has separate eligibility
        and program requirements.</li>
        <li>Some services may involve out-of-pocket costs.</li>
        <li>Coverage can depend on your circumstances.</li>
      </ul>

      <h3>Questions worth asking</h3>

      <ul>
        <li>Is this service covered by MCP?</li>
        <li>Will I need to pay anything?</li>
        <li>Are there financial assistance programs?</li>
        <li>Where can I find official coverage information?</li>
      </ul>

      <p>For accurate and current information, consult
      Newfoundland and Labrador Health Services or
      the provincial government.</p>
    `,

    quiz: {
      question: "What should you do before paying for a healthcare service?",
      choices: [
        "Assume everything is covered",
        "Ask about coverage and possible costs",
        "Avoid checking your eligibility",
        "Ignore the service information"
      ],
      answer: 1,
      explanation: "Correct! Asking about coverage beforehand can help you understand potential costs."
    }
  }

};

// ==========================================================
// LESSON ELEMENTS
// ==========================================================

const lessonSearch =
  document.getElementById("lessonSearch");

const lessonGrid =
  document.getElementById("lessonGrid");

const emptyLessons =
  document.getElementById("emptyLessons");

const lessonDialog =
  document.getElementById("lessonDialog");

const closeDialog =
  document.getElementById("closeDialog");

const dialogTitle =
  document.getElementById("dialogTitle");

const dialogContent =
  document.getElementById("dialogContent");

const readLessonButton =
  document.getElementById("readLesson");

const quizPrompt =
  document.getElementById("quizPrompt");

const quizChoices =
  document.getElementById("quizChoices");

const quizFeedback =
  document.getElementById("quizFeedback");

let currentLesson = null;
let speechUtterance = null;

// ==========================================================
// OPEN LESSON
// ==========================================================

function openLesson(lessonKey) {

  const lesson = lessonData[lessonKey];

  if (!lesson || !lessonDialog) {
    console.error("Lesson not found:", lessonKey);
    return;
  }

  currentLesson = lesson;

  // Stop any previous read-aloud.
  if ("speechSynthesis" in window) {
    window.speechSynthesis.cancel();
  }

  if (dialogTitle) {
    dialogTitle.textContent = lesson.title;
  }

  if (dialogContent) {
    dialogContent.innerHTML = lesson.content;
  }

  if (quizPrompt) {
    quizPrompt.textContent = lesson.quiz.question;
  }

  if (quizFeedback) {
    quizFeedback.textContent = "";
  }

  // Generate quiz buttons.
  if (quizChoices) {

    quizChoices.innerHTML = "";

    lesson.quiz.choices.forEach((choice, index) => {

      const button = document.createElement("button");

      button.type = "button";
      button.className = "quiz-choice";
      button.textContent = choice;

      button.addEventListener("click", () => {

        // Prevent answering multiple times.
        if (quizChoices.dataset.answered === "true") {
          return;
        }

        quizChoices.dataset.answered = "true";

        const correct = index === lesson.quiz.answer;

        if (correct) {

          button.classList.add("correct");

          quizFeedback.textContent =
            "✓ Correct! " + lesson.quiz.explanation;

        } else {

          button.classList.add("incorrect");

          const correctButton =
            quizChoices.children[lesson.quiz.answer];

          if (correctButton) {
            correctButton.classList.add("correct");
          }

          quizFeedback.textContent =
            "Not quite. " + lesson.quiz.explanation;
        }

      });

      quizChoices.appendChild(button);

    });

    quizChoices.dataset.answered = "false";
  }

  // Show the dialog.
  if (!lessonDialog.open) {
    lessonDialog.showModal();
  }
}

// ==========================================================
// LEARN MORE BUTTONS
// ==========================================================

document.addEventListener("click", event => {

  const button = event.target.closest("[data-lesson]");

  if (!button) return;

  const lessonKey = button.dataset.lesson;

  openLesson(lessonKey);

});

// ==========================================================
// CLOSE LESSON DIALOG
// ==========================================================

closeDialog?.addEventListener("click", () => {

  if (lessonDialog?.open) {
    lessonDialog.close();
  }

  if ("speechSynthesis" in window) {
    window.speechSynthesis.cancel();
  }

});

// Stop speech when dialog closes.
lessonDialog?.addEventListener("close", () => {

  if ("speechSynthesis" in window) {
    window.speechSynthesis.cancel();
  }

});

// ==========================================================
// READ LESSON ALOUD
// ==========================================================

readLessonButton?.addEventListener("click", () => {

  if (!("speechSynthesis" in window)) {

    if (quizFeedback) {
      quizFeedback.textContent =
        "Read-aloud is not supported by this browser.";
    }

    return;
  }

  if (!currentLesson || !dialogContent) return;

  // Stop existing speech.
  window.speechSynthesis.cancel();

  const text = [
    currentLesson.title,
    dialogContent.innerText
  ].join(". ");

  speechUtterance = new SpeechSynthesisUtterance(text);

  speechUtterance.lang = "en-CA";
  speechUtterance.rate = 0.9;
  speechUtterance.pitch = 1;

  speechUtterance.onstart = () => {
    readLessonButton.textContent = "⏸ Reading lesson...";
  };

  speechUtterance.onend = () => {
    readLessonButton.textContent = "🔊 Read lesson aloud";
  };

  speechUtterance.onerror = () => {
    readLessonButton.textContent = "🔊 Read lesson aloud";
  };

  window.speechSynthesis.speak(speechUtterance);

});

// ==========================================================
// SEARCH LESSONS
// ==========================================================

lessonSearch?.addEventListener("input", () => {

  const searchTerm =
    lessonSearch.value.trim().toLowerCase();

  const cards = lessonGrid?.querySelectorAll(".lesson-card");

  if (!cards) return;

  let visibleCount = 0;

  cards.forEach(card => {

    const searchableText = [
      card.dataset.search || "",
      card.innerText || ""
    ].join(" ").toLowerCase();

    const matches =
      searchableText.includes(searchTerm);

    card.hidden = !matches;

    if (matches) {
      visibleCount++;
    }

  });

  if (emptyLessons) {
    emptyLessons.hidden = visibleCount !== 0;
  }

});

// ==========================================================
// MOBILE NAVIGATION
// ==========================================================

const menuToggle =
  document.getElementById("menuToggle");

const mainNav =
  document.getElementById("mainNav");

function closeMobileMenu() {

  if (!menuToggle || !mainNav) return;

  mainNav.classList.remove("open");

  menuToggle.setAttribute("aria-expanded", "false");

  menuToggle.setAttribute(
    "aria-label",
    "Open navigation"
  );

}

menuToggle?.addEventListener("click", () => {

  if (!mainNav) return;

  const isOpen =
    mainNav.classList.toggle("open");

  menuToggle.setAttribute(
    "aria-expanded",
    String(isOpen)
  );

  menuToggle.setAttribute(
    "aria-label",
    isOpen ? "Close navigation" : "Open navigation"
  );

});

// Close navigation after selecting a section.
mainNav?.querySelectorAll("a").forEach(link => {

  link.addEventListener("click", closeMobileMenu);

});

// Close menu when clicking elsewhere.
document.addEventListener("click", event => {

  if (!mainNav || !menuToggle) return;

  if (
    !mainNav.contains(event.target) &&
    !menuToggle.contains(event.target)
  ) {
    closeMobileMenu();
  }

});

// ==========================================================
// INITIALIZATION
// ==========================================================

console.log(
  "HealthBridge website functionality restored:",
  Object.keys(lessonData).length,
  "lessons available."
);

/* ==========================================
   HEALTHBRIDGE - COMPLETE CAMERA + PRESAGE
   ========================================== */

// ==========================================
// HTML ELEMENTS
// ==========================================

const previewButton = document.getElementById("startCamera");
const stopPreviewButton = document.getElementById("stopCamera");

const previewVideo = document.getElementById("cameraPreview");
const previewPlaceholder = document.getElementById("cameraPlaceholder");
const previewStatus = document.getElementById("cameraStatus");
const readingStatus = document.getElementById("sensorStatus");

const faceCanvas = document.getElementById("faceOverlay");
const faceContext = faceCanvas?.getContext("2d");

const startMeasurementButton = document.getElementById("startMeasurement");
const stopMeasurementButton = document.getElementById("stopMeasurement");

const heartRateDisplay = document.getElementById("heartRateValue");
const breathingRateDisplay = document.getElementById("breathingRateValue");

const waveformCanvas = document.getElementById("breathingWaveform");
const waveformContext = waveformCanvas?.getContext("2d");

const waveformStatus = document.getElementById("waveformStatus");

// ==========================================
// CONFIGURATION
// ==========================================

const API_BASE = "";

const FRAME_WIDTH = 320;
const FRAME_HEIGHT = 240;

const FRAME_INTERVAL = 40;
const POLL_INTERVAL = 750;

const MAX_HISTORY = 60;
const FACE_INTERVAL = 100;

// ==========================================
// STATE
// ==========================================

let previewStream = null;
let faceDetector = null;

let trackingFrame = null;
let trackingBusy = false;
let lastFaceTime = 0;

let measurementActive = false;
let measurementStarting = false;
let measurementStopping = false;

let frameTimer = null;
let frameSendingBusy = false;

let measurementPoll = null;

let lastBreathingValue = null;
let lastHeartValue = null;

const breathingHistory = [];

const frameCanvas = document.createElement("canvas");
frameCanvas.width = FRAME_WIDTH;
frameCanvas.height = FRAME_HEIGHT;

const frameContext = frameCanvas.getContext("2d", {
  willReadFrequently: true
});

// ==========================================
// STATUS
// ==========================================

function setStatus(message) {
  if (readingStatus) {
    readingStatus.textContent = message;
  }
}

function setCameraStatus(message, className = "") {
  if (!previewStatus) return;

  previewStatus.textContent = message;
  previewStatus.className = className;
}

function updateButtons() {
  if (startMeasurementButton) {
    startMeasurementButton.disabled =
      measurementActive ||
      measurementStarting ||
      measurementStopping;
  }

  if (stopMeasurementButton) {
    stopMeasurementButton.disabled =
      !measurementActive ||
      measurementStopping;
  }
}

// ==========================================
// CLEAR READINGS
// ==========================================

function clearReadings() {
  lastBreathingValue = null;
  lastHeartValue = null;

  breathingHistory.length = 0;

  if (heartRateDisplay) {
    heartRateDisplay.textContent = "—";
  }

  if (breathingRateDisplay) {
    breathingRateDisplay.textContent = "—";
  }

  drawBreathingGraph();
}

// ==========================================
// FACE DETECTION
// ==========================================

async function initializeFaceTracking() {
  if (faceDetector) return;

  if (typeof FaceDetection === "undefined") {
    throw new Error("MediaPipe Face Detection did not load.");
  }

  if (!faceCanvas || !faceContext) {
    throw new Error("Face overlay canvas is missing.");
  }

  faceDetector = new FaceDetection({
    locateFile: file =>
      `https://cdn.jsdelivr.net/npm/@mediapipe/face_detection/${file}`
  });

  faceDetector.setOptions({
    model: "short",
    minDetectionConfidence: 0.6
  });

  faceDetector.onResults(results => {
    if (!previewVideo) return;

    const width = previewVideo.videoWidth;
    const height = previewVideo.videoHeight;

    if (!width || !height) return;

    if (
      faceCanvas.width !== width ||
      faceCanvas.height !== height
    ) {
      faceCanvas.width = width;
      faceCanvas.height = height;
    }

    faceContext.clearRect(0, 0, width, height);

    const detections = results.detections || [];

    if (!detections.length) {
      setCameraStatus("Looking for face...", "face-missing");
      return;
    }

    const detection = detections[0];

    const box =
      detection.boundingBox ||
      detection.locationData?.relativeBoundingBox;

    if (!box) return;

    const centerX = box.xCenter * width;
    const centerY = box.yCenter * height;

    const boxWidth = box.width * width;
    const boxHeight = box.height * height;

    drawHeadSymbol(
      centerX,
      centerY,
      boxWidth,
      boxHeight
    );

    setCameraStatus("Face detected", "face-found");
  });
}

// ==========================================
// FACE OVERLAY DRAWING
// ==========================================

function drawHeadSymbol(centerX, centerY, boxWidth, boxHeight) {
  const ctx = faceContext;

  if (!ctx) return;

  const radius = boxWidth * 0.32;
  const headY = centerY - boxHeight * 0.05;

  ctx.save();

  ctx.strokeStyle = "#53e39b";
  ctx.fillStyle = "rgba(83, 227, 155, 0.12)";
  ctx.lineWidth = Math.max(3, boxWidth * 0.025);

  ctx.lineCap = "round";
  ctx.lineJoin = "round";

  ctx.beginPath();
  ctx.arc(centerX, headY, radius, 0, Math.PI * 2);
  ctx.fill();
  ctx.stroke();

  ctx.beginPath();

  ctx.moveTo(
    centerX - radius * 1.65,
    centerY + boxHeight * 0.65
  );

  ctx.bezierCurveTo(
    centerX - radius * 1.5,
    centerY + boxHeight * 0.12,
    centerX + radius * 1.5,
    centerY + boxHeight * 0.12,
    centerX + radius * 1.65,
    centerY + boxHeight * 0.65
  );

  ctx.stroke();

  ctx.beginPath();
  ctx.arc(centerX, centerY, 4, 0, Math.PI * 2);

  ctx.fillStyle = "#53e39b";
  ctx.fill();

  ctx.restore();
}

// ==========================================
// FACE TRACKING LOOP
// ==========================================

async function trackFace() {
  if (
    !previewStream ||
    !faceDetector ||
    !previewVideo ||
    previewVideo.readyState < 2 ||
    trackingBusy
  ) {
    return;
  }

  const now = performance.now();

  if (now - lastFaceTime < FACE_INTERVAL) return;

  lastFaceTime = now;
  trackingBusy = true;

  try {
    await faceDetector.send({
      image: previewVideo
    });
  } catch (error) {
    console.error("Face tracking error:", error);
  } finally {
    trackingBusy = false;
  }
}

function startTrackingLoop() {
  if (trackingFrame !== null) return;

  async function loop() {
    if (!previewStream) {
      trackingFrame = null;
      return;
    }

    await trackFace();

    if (previewStream) {
      trackingFrame = requestAnimationFrame(loop);
    }
  }

  loop();
}

function stopTracking() {
  if (trackingFrame !== null) {
    cancelAnimationFrame(trackingFrame);
    trackingFrame = null;
  }

  if (faceCanvas && faceContext) {
    faceContext.clearRect(
      0,
      0,
      faceCanvas.width,
      faceCanvas.height
    );
  }

  trackingBusy = false;
  lastFaceTime = 0;
}

// ==========================================
// OPEN CAMERA
// ==========================================

async function openPreviewCamera() {
  if (!navigator.mediaDevices?.getUserMedia) {
    throw new Error("Camera access requires localhost or HTTPS.");
  }

  const devices =
    await navigator.mediaDevices.enumerateDevices();

  const cameras = devices.filter(
    device => device.kind === "videoinput"
  );

  if (!cameras.length) {
    throw new Error("No camera was found.");
  }

  const ordered = [
    ...cameras.filter(camera =>
      camera.label.toLowerCase().includes("ps3 eye")
    ),
    ...cameras.filter(camera =>
      !camera.label.toLowerCase().includes("ps3 eye")
    )
  ];

  let lastError = null;

  for (const camera of ordered) {
    try {
      setCameraStatus(
        "Connecting to " + (camera.label || "camera")
      );

      const stream =
        await navigator.mediaDevices.getUserMedia({
          video: {
            deviceId: {
              ideal: camera.deviceId
            },
            width: {
              ideal: 320
            },
            height: {
              ideal: 240
            },
            frameRate: {
              ideal: 30
            }
          },
          audio: false
        });

      previewStream = stream;

      const track = stream.getVideoTracks()[0];

      console.log("Camera connected:", camera.label);
      console.log("Actual camera settings:", track.getSettings());

      const actualFPS = track.getSettings().frameRate;

      if (actualFPS && actualFPS < 25) {
        console.warn(
          "Camera is operating below 25 FPS:",
          actualFPS
        );
      }

      return;

    } catch (error) {
      console.warn("Camera selection failed:", error);
      lastError = error;
    }
  }

  throw lastError || new Error("Could not open a camera.");
}

// ==========================================
// START CAMERA
// ==========================================

previewButton?.addEventListener("click", async () => {
  previewButton.disabled = true;

  setCameraStatus("Starting camera...");
  setStatus("Opening camera...");

  try {
    await openPreviewCamera();

    previewVideo.srcObject = previewStream;
    previewVideo.style.display = "block";

    if (previewPlaceholder) {
      previewPlaceholder.style.display = "none";
    }

    await previewVideo.play();

    if (stopPreviewButton) {
      stopPreviewButton.disabled = false;
    }

    setStatus("Camera preview active.");

    try {
      await initializeFaceTracking();

      setCameraStatus("Looking for face...", "face-missing");
      startTrackingLoop();

    } catch (error) {
      console.warn("Face tracking unavailable:", error);
      setCameraStatus("Camera active; face tracking unavailable");
    }

  } catch (error) {
    console.error("Camera startup error:", error);

    setStatus(error.message);
    setCameraStatus("Camera unavailable");

    releasePreviewCamera();
  }
});

// ==========================================
// RELEASE CAMERA
// ==========================================

function releasePreviewCamera() {
  stopTracking();

  if (previewStream) {
    previewStream.getTracks().forEach(track => track.stop());
    previewStream = null;
  }

  if (previewVideo) {
    previewVideo.pause();
    previewVideo.srcObject = null;
    previewVideo.style.display = "none";
  }

  if (previewPlaceholder) {
    previewPlaceholder.style.display = "flex";
  }

  if (previewButton) {
    previewButton.disabled = false;
  }

  if (stopPreviewButton) {
    stopPreviewButton.disabled = true;
  }
}

// ==========================================
// SEND CAMERA FRAMES TO PRESAGE
// ==========================================

async function sendPresageFrame() {
  if (
    !measurementActive ||
    !previewStream ||
    !previewVideo ||
    previewVideo.readyState < 2 ||
    frameSendingBusy
  ) {
    return;
  }

  frameSendingBusy = true;

  try {
    frameContext.drawImage(
      previewVideo,
      0,
      0,
      FRAME_WIDTH,
      FRAME_HEIGHT
    );

    const imageData = frameContext.getImageData(
      0,
      0,
      FRAME_WIDTH,
      FRAME_HEIGHT
    );

    const timestampUs = Math.round(
      performance.now() * 1000
    );

    const response = await fetch(
      `${API_BASE}/api/frame`,
      {
        method: "POST",

        headers: {
          "Content-Type": "application/octet-stream",
          "X-Frame-Width": String(FRAME_WIDTH),
          "X-Frame-Height": String(FRAME_HEIGHT),
          "X-Timestamp-Us": String(timestampUs)
        },

        body: imageData.data.slice().buffer
      }
    );

    if (!response.ok) {
      const message = await response.text();

      console.error("Frame transmission failed:", {
        status: response.status,
        message
      });

      setStatus(`Frame error: ${message}`);
    }

  } catch (error) {
    console.error("Frame transmission error:", error);
    setStatus("Camera frames could not reach Presage.");

  } finally {
    frameSendingBusy = false;
  }
}

// ==========================================
// FRAME TRANSMISSION
// ==========================================

function startFrameSending() {
  if (frameTimer !== null) return;

  console.log("Starting camera frame transmission.");

  frameTimer = setInterval(
    sendPresageFrame,
    FRAME_INTERVAL
  );
}

function stopFrameSending() {
  if (frameTimer !== null) {
    clearInterval(frameTimer);
    frameTimer = null;
  }

  console.log("Frame transmission stopped.");
}

// ==========================================
// BREATHING GRAPH
// ==========================================

function drawBreathingGraph() {
  if (!waveformCanvas || !waveformContext) return;

  const rect = waveformCanvas.getBoundingClientRect();

  if (!rect.width || !rect.height) return;

  const ratio = window.devicePixelRatio || 1;

  waveformCanvas.width = Math.round(rect.width * ratio);
  waveformCanvas.height = Math.round(rect.height * ratio);

  const ctx = waveformContext;

  ctx.setTransform(ratio, 0, 0, ratio, 0, 0);

  const width = rect.width;
  const height = rect.height;

  ctx.clearRect(0, 0, width, height);

  const padding = 20;
  const graphWidth = width - padding * 2;
  const graphHeight = height - padding * 2;

  ctx.strokeStyle = "#dce4dc";
  ctx.lineWidth = 1;

  for (let i = 0; i < 4; i++) {
    const y = padding + graphHeight / 3 * i;

    ctx.beginPath();
    ctx.moveTo(padding, y);
    ctx.lineTo(width - padding, y);
    ctx.stroke();
  }

  if (breathingHistory.length < 2) {
    ctx.fillStyle = "#68746c";
    ctx.font = "13px Arial";
    ctx.textAlign = "center";

    ctx.fillText(
      "Waiting for breathing measurements...",
      width / 2,
      height / 2
    );

    return;
  }

  const minValue = Math.max(
    0,
    Math.min(...breathingHistory) - 3
  );

  const maxValue =
    Math.max(...breathingHistory) + 3;

  const range = Math.max(1, maxValue - minValue);

  ctx.beginPath();

  breathingHistory.forEach((value, index) => {
    const x =
      padding +
      index / (MAX_HISTORY - 1) * graphWidth;

    const y =
      height -
      padding -
      (value - minValue) / range * graphHeight;

    if (index === 0) {
      ctx.moveTo(x, y);
    } else {
      ctx.lineTo(x, y);
    }
  });

  ctx.strokeStyle = "#35a879";
  ctx.lineWidth = 3;
  ctx.lineJoin = "round";
  ctx.lineCap = "round";
  ctx.stroke();

  const latest = breathingHistory[breathingHistory.length - 1];

  ctx.fillStyle = "#315b48";
  ctx.font = "12px Arial";
  ctx.textAlign = "left";

  ctx.fillText(
    `Latest: ${Math.round(latest)} breaths/min`,
    padding,
    13
  );
}

// ==========================================
// AUTOMATIC MEASUREMENT UPDATES
// ==========================================

async function updateMeasurements() {
  if (!measurementActive) return;

  try {
    const response = await fetch(
      `${API_BASE}/api/metrics`,
      {
        cache: "no-store"
      }
    );

    if (!response.ok) {
      throw new Error("Could not retrieve Presage measurements.");
    }

    const data = await response.json();

    // HEART RATE
    if (data.heartRate != null) {
      const value = Number(data.heartRate);

      if (Number.isFinite(value) && value > 0) {
        lastHeartValue = value;

        if (heartRateDisplay) {
          heartRateDisplay.textContent = Math.round(value);
        }
      }
    }

    // BREATHING RATE
    if (data.breathingRate != null) {
      const value = Number(data.breathingRate);

      if (Number.isFinite(value) && value > 0) {
        lastBreathingValue = value;

        if (breathingRateDisplay) {
          breathingRateDisplay.textContent = Math.round(value);
        }

        const previous =
          breathingHistory[breathingHistory.length - 1];

        if (
          previous === undefined ||
          Math.abs(previous - value) >= 0.01
        ) {
          breathingHistory.push(value);

          if (breathingHistory.length > MAX_HISTORY) {
            breathingHistory.shift();
          }

          drawBreathingGraph();
        }
      }
    }

    if (data.status) {
      setStatus(data.status);
    }

    if (waveformStatus) {
      waveformStatus.textContent =
        breathingHistory.length > 0
          ? "Receiving breathing measurements"
          : "Waiting for breathing measurements";
    }

    // Detect SDK session failure.
    if (
      !data.isRunning &&
      !data.isStarting &&
      String(data.status || "").toLowerCase().includes("error")
    ) {
      measurementActive = false;

      stopFrameSending();

      if (measurementPoll !== null) {
        clearInterval(measurementPoll);
        measurementPoll = null;
      }

      updateButtons();
    }

  } catch (error) {
    console.error("Measurement update error:", error);
    setStatus(error.message);
  }
}

// ==========================================
// START MEASUREMENT
// ==========================================

async function startMeasurementSession() {
  if (measurementActive || measurementStarting) return;

  if (
    !previewStream ||
    !previewVideo ||
    previewVideo.readyState < 2
  ) {
    setStatus("Please start the camera preview first.");
    return;
  }

  measurementStarting = true;
  updateButtons();

  clearReadings();

  setStatus("Starting Presage measurement...");

  try {
    const response = await fetch(
      `${API_BASE}/api/start`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({})
      }
    );

    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.error || "Could not start Presage.");
    }

    measurementActive = true;

    setStatus("Presage started. Sending camera frames.");

    startFrameSending();

    if (measurementPoll !== null) {
      clearInterval(measurementPoll);
    }

    await updateMeasurements();

    measurementPoll = setInterval(
      updateMeasurements,
      POLL_INTERVAL
    );

  } catch (error) {
    console.error("Measurement startup error:", error);

    measurementActive = false;

    stopFrameSending();

    setStatus(error.message);

  } finally {
    measurementStarting = false;
    updateButtons();
  }
}

startMeasurementButton?.addEventListener(
  "click",
  startMeasurementSession
);

// ==========================================
// STOP MEASUREMENT
// ==========================================

async function stopMeasurementSession() {
  if (measurementStopping) return;

  if (!measurementActive && !measurementStarting) return;

  measurementStopping = true;
  measurementActive = false;

  stopFrameSending();

  if (measurementPoll !== null) {
    clearInterval(measurementPoll);
    measurementPoll = null;
  }

  updateButtons();

  setStatus("Stopping Presage measurement...");

  try {
    const response = await fetch(
      `${API_BASE}/api/stop`,
      {
        method: "POST"
      }
    );

    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.error || "Could not stop measurement.");
    }

    clearReadings();

    if (waveformStatus) {
      waveformStatus.textContent = "Waiting for measurements";
    }

    setStatus("Measurement stopped.");

  } catch (error) {
    console.error("Measurement stop error:", error);
    setStatus(error.message);

  } finally {
    measurementStopping = false;
    updateButtons();
  }
}

stopMeasurementButton?.addEventListener(
  "click",
  stopMeasurementSession
);

// ==========================================
// STOP CAMERA
// ==========================================

stopPreviewButton?.addEventListener("click", async () => {
  if (measurementActive || measurementStarting) {
    await stopMeasurementSession();
  }

  releasePreviewCamera();

  setCameraStatus("Camera stopped");
  setStatus("Camera preview stopped.");
});

// ==========================================
// INITIALIZATION
// ==========================================

window.addEventListener("resize", drawBreathingGraph);

drawBreathingGraph();

if (stopPreviewButton) {
  stopPreviewButton.disabled = true;
}

updateButtons();

console.log("HealthBridge complete dashboard initialized.");
