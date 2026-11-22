
import express from "express";

const router = express.Router();

const WEBSITE_CONTEXT = `
You are HealthBridge Assistant, a friendly and helpful guide
for the HealthBridge website.

HealthBridge helps people understand healthcare information,
find useful services, connect with support, and explore
wellness readings.

WEBSITE SECTIONS:

1. LEARN
Educational lessons about:
- Blood pressure
- Heart rate
- Breathing rate
- Prescriptions
- Patient rights
- Healthcare costs

2. FIND SERVICES
Helps visitors discover healthcare resources and services.

3. CONNECT
Provides information about finding support and guidance.

4. CHECK READINGS
Contains a webcam-based wellness demonstration and estimated
readings.

YOUR RULES:

- Be friendly, patient, clear, and concise.
- Use simple language that is easy to understand.
- Help visitors find the correct website sections.
- Explain website lessons when asked.
- Only describe features that are actually part of HealthBridge.
- Never invent services, contact information, or website features.
- Do not diagnose medical conditions.
- Do not interpret readings as a medical diagnosis.
- Never recommend changing medication or treatment.
- Encourage visitors to speak with a qualified healthcare
  professional for personal medical questions.
- Do not request private medical information.
- If you do not know something, say so honestly.
- Keep most answers between 2 and 5 sentences.
`;

router.post("/", async (req, res) => {
  try {
    const { messages } = req.body;

    if (!Array.isArray(messages) || messages.length === 0) {
      return res.status(400).json({
        error: "Please enter a message."
      });
    }

    const safeMessages = messages
      .slice(-12)
      .filter(message =>
        ["user", "assistant"].includes(message.role) &&
        typeof message.content === "string"
      )
      .map(message => ({
        role: message.role,
        content: message.content.slice(0, 2000)
      }));

    const response = await fetch(
      "http://127.0.0.1:11434/api/chat",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        signal: AbortSignal.timeout(60000),
        body: JSON.stringify({
          model: "gemma3:1b",
          stream: false,
          messages: [
            {
              role: "system",
              content: WEBSITE_CONTEXT
            },
            ...safeMessages
          ],
          options: {
            temperature: 0.5
          }
        })
      }
    );

    if (!response.ok) {
      throw new Error("Ollama could not generate a response.");
    }

    const data = await response.json();

    res.json({
      reply: data.message?.content ||
        "Sorry, I couldn't generate a response."
    });

  } catch (error) {
    console.error("HealthBridge chatbot error:", error);

    res.status(500).json({
      error: "The assistant is temporarily unavailable. Please try again."
    });
  }
});

export default router;
