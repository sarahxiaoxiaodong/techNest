/* HealthBridge interactive prototype
   Translator note: this is a local rule-based demo, not an AI service.
   It does not determine medical, legal, or benefit eligibility. */

const lessonData = {
  bloodPressure: {
    title: "Understanding blood pressure",
    html: `<p>Blood pressure describes the force of blood pushing against the walls of your arteries as your heart pumps.</p>
      <h3>Why are there two numbers?</h3>
      <ul><li><strong>Systolic pressure:</strong> the top number. It measures pressure when your heart beats.</li>
      <li><strong>Diastolic pressure:</strong> the bottom number. It measures pressure when your heart relaxes between beats.</li></ul>
      <p>A reading is often written like 120 over 80, or 120/80 mmHg. The unit mmHg means millimetres of mercury.</p>
      <h3>What should I remember?</h3><p>Blood pressure can change during the day. One reading by itself does not provide a complete picture. A healthcare professional can explain what your readings mean for you.</p>
      <h3>Questions you could ask</h3><ul><li>What do my two numbers mean?</li><li>Should I keep a record of my readings?</li><li>When and how should I measure my blood pressure?</li></ul>`,
    speech: "Blood pressure describes the force of blood pushing against artery walls. The top number, systolic pressure, measures pressure when the heart beats. The bottom number, diastolic pressure, measures pressure when the heart relaxes. One reading alone does not provide a complete picture. Ask a healthcare professional what your readings mean for you.",
    question: "What does the bottom number in a blood pressure reading describe?",
    options: ["Pressure when the heart relaxes", "The number of heartbeats", "Body temperature"], answer: 0,
    explanation: "The bottom number is diastolic pressure. It describes pressure when the heart relaxes between beats."
  },
  heartRate: {
    title: "What is heart rate?",
    html: `<p>Your heart rate is the number of times your heart beats in one minute.</p><h3>What does BPM mean?</h3><p>BPM means <strong>beats per minute</strong>. It is a way to describe how quickly your heart is beating.</p><h3>What can affect it?</h3><p>Activity, stress, illness, medicines, age, and other factors can affect heart rate. It can be different when you are resting compared with when you are moving around.</p><h3>Questions you could ask</h3><ul><li>How should I measure my pulse?</li><li>Is there anything about my medicines that may affect my heart rate?</li><li>When should I contact a healthcare professional about a change?</li></ul>`,
    speech: "Your heart rate is the number of times your heart beats in one minute. BPM means beats per minute. Activity, stress, illness, medicines, age, and other factors can affect heart rate.",
    question: "What does BPM stand for?", options: ["Blood pressure measurement", "Beats per minute", "Body pulse monitor"], answer: 1,
    explanation: "BPM stands for beats per minute."
  },
  oxygen: {
    title: "Understanding oxygen readings",
    html: `<p>SpO₂ is an estimate of how much of the haemoglobin in your blood is carrying oxygen.</p><h3>How is it measured?</h3><p>A pulse oximeter often clips onto a fingertip. It uses light to estimate oxygen saturation and pulse rate.</p><h3>What can affect a reading?</h3><p>Movement, circulation, skin temperature, nail products, device quality, and other factors can affect a reading. A pulse oximeter is not a diagnosis and should not be the only basis for a health decision.</p><h3>Questions you could ask</h3><ul><li>How should I use this device correctly?</li><li>How reliable is this reading for me?</li><li>What should I do if I feel unwell, regardless of the number?</li></ul>`,
    speech: "SpO2 is an estimate of how much of the haemoglobin in your blood is carrying oxygen. A pulse oximeter often clips onto a fingertip and uses light to estimate oxygen saturation. Readings can be affected by movement, circulation, skin temperature, and device limitations. It is not a diagnosis.",
    question: "What does SpO₂ estimate?", options: ["Body temperature", "Blood pressure", "Oxygen saturation"], answer: 2,
    explanation: "SpO₂ is an estimate of oxygen saturation."
  },
  prescriptions: {
    title: "Understanding prescriptions",
    html: `<p>A prescription is an instruction from an authorized healthcare professional for a medicine or treatment.</p><h3>Common words</h3><ul><li><strong>Dosage:</strong> the amount prescribed.</li><li><strong>Frequency:</strong> how often the medicine is to be taken.</li><li><strong>Route:</strong> how it is taken, such as by mouth or applied to the skin.</li><li><strong>Refill:</strong> another supply, when authorized.</li><li><strong>Pharmacist:</strong> a healthcare professional who can explain medicines and how to use them.</li></ul><h3>What if the label is confusing?</h3><p>Ask the pharmacist or prescriber to explain the instructions in a way that makes sense to you. Do not change a prescribed dose or stop a medicine based only on an online explanation.</p><h3>Questions to ask</h3><ul><li>What is this medicine for?</li><li>How and when should I take it?</li><li>What should I do if I miss a dose?</li><li>Could it interact with my other medicines?</li></ul>`,
    speech: "A prescription is an instruction from an authorized healthcare professional for a medicine or treatment. Dosage means the amount prescribed. Frequency means how often it is taken. A pharmacist can explain medicines and their instructions. Do not change a prescribed dose based only on an online explanation.",
    question: "Who can help explain medication instructions?", options: ["A pharmacist", "A random website", "An online guessing tool"], answer: 0,
    explanation: "A pharmacist is a trained healthcare professional who can explain medication instructions."
  },
  medicineQuestions: {
    title: "Medication questions to ask",
    html: `<p>It is okay to ask questions when you are given a new medicine or when your prescription changes. You can ask a pharmacist or the professional who prescribed it.</p><h3>Useful questions</h3><ul><li>What is the medicine meant to do?</li><li>How much should I take, and when?</li><li>Should I take it with food?</li><li>What side effects should I know about?</li><li>Could it interact with my other medicines, vitamins, or supplements?</li><li>What should I do if I miss a dose?</li><li>How should I store it?</li><li>What should I do when I run out?</li></ul><p>Bring an up-to-date list of your medicines to appointments if possible. Do not stop, start, or change a medicine without checking with an appropriate healthcare professional.</p>`,
    speech: "It is okay to ask questions about a new medicine. Ask what it is for, how much to take, when to take it, what side effects to know about, whether it interacts with other medicines, and what to do if you miss a dose. Check with a healthcare professional before changing how you take a medicine.",
    question: "Who should you ask before changing how you take a prescribed medicine?", options: ["A qualified healthcare professional", "A random online comment", "No one"], answer: 0,
    explanation: "Check with the prescriber or pharmacist before changing how you take a prescribed medicine."
  },
  mcp: {
    title: "What is MCP?",
    html: `<p>MCP stands for the <strong>Medical Care Plan</strong>. It is Newfoundland and Labrador's public health insurance plan.</p><h3>What does it do?</h3><p>MCP helps pay for eligible insured physician services for people who meet the plan's eligibility requirements.</p><h3>Does it cover every health-related cost?</h3><p>No. Do not assume every prescription, product, appointment, test, or service is automatically covered. Coverage rules can depend on the type of service and the person's circumstances.</p><h3>What can I do?</h3><ul><li>Check current information from the provincial government.</li><li>Ask the provider whether a service is insured and whether you may have to pay.</li><li>Ask where to confirm your eligibility or coverage.</li></ul><p>Official information: <a href="https://www.gov.nl.ca/hcs/mcp/" target="_blank" rel="noopener noreferrer">Newfoundland and Labrador MCP</a>.</p>`,
    speech: "MCP stands for Medical Care Plan. It is Newfoundland and Labrador's public health insurance plan. It helps pay for eligible insured physician services for people who meet the plan's eligibility requirements. It does not mean every health-related cost is automatically covered. Check current provincial information and ask the provider about possible fees.",
    question: "Does MCP automatically cover every health-related cost?", options: ["Yes, every cost", "No, coverage depends on the service and rules", "Only costs paid in cash"], answer: 1,
    explanation: "Coverage depends on the service and applicable rules. Confirm before assuming a cost is covered."
  },
  primaryCare: {
    title: "What is primary care?",
    html: `<p>Primary care is often the first place people go for ongoing or everyday healthcare needs.</p><h3>Who can provide primary care?</h3><ul><li><strong>Family doctor:</strong> a physician who provides general and ongoing medical care.</li><li><strong>Nurse practitioner:</strong> an advanced practice nurse who can assess, diagnose, and treat many health concerns within their scope of practice.</li></ul><h3>Why can it help?</h3><p>A primary care provider can get to know your health history, help manage ongoing concerns, and guide you to other services when needed.</p><h3>If you do not have a provider</h3><p>In Newfoundland and Labrador, you can review the current Patient Connect NL registration information.</p><p><a href="https://patientconnect.nlchi.nl.ca/Default" target="_blank" rel="noopener noreferrer">Visit Patient Connect NL</a>.</p>`,
    speech: "Primary care is often the first place people go for ongoing or everyday healthcare needs. A family doctor or nurse practitioner may provide primary care. If you do not have a provider in Newfoundland and Labrador, review Patient Connect NL registration information.",
    question: "Which professional may provide primary care?", options: ["A family doctor", "A nurse practitioner", "Both"], answer: 2,
    explanation: "Both family doctors and nurse practitioners may provide primary care."
  },
  patientRights: {
    title: "Understanding your rights as a patient",
    html: `<p>Patients should be treated with dignity and respect. The exact rights, processes, and exceptions can depend on the law, healthcare setting, and situation.</p><h3>Important topics to understand</h3><ul><li><strong>Respectful care:</strong> you should be treated respectfully and without discrimination.</li><li><strong>Information:</strong> you can ask for an explanation of your health, options, and proposed care in language you understand.</li><li><strong>Informed consent:</strong> in general, healthcare professionals should explain relevant information and seek consent before treatment, subject to applicable laws and exceptions.</li><li><strong>Privacy:</strong> your personal health information is protected by privacy rules. Ask who can access it and how it is used.</li><li><strong>Questions and concerns:</strong> you can ask questions, raise concerns, and ask how to make a complaint.</li></ul><h3>Questions you can ask</h3><ul><li>Can you explain my options and the possible benefits and risks?</li><li>Can I have this information in writing?</li><li>Who can I speak to if I have a concern about my care?</li><li>How can I access my health information?</li></ul><p>This is general education, not legal advice. For a concern about a specific situation, ask the healthcare organization about its patient-relations or complaints process, or seek qualified advice.</p>`,
    speech: "Patients should be treated with dignity and respect. You can ask for information about your care in language you understand, ask questions, and raise concerns. Privacy and consent are important, but the exact rules and exceptions depend on the situation. This is general education, not legal advice.",
    question: "What can you do if you do not understand a proposed treatment?", options: ["Ask the professional to explain it", "Pretend to understand", "Avoid asking questions"], answer: 0,
    explanation: "You can ask the healthcare professional to explain the information, options, benefits, and risks."
  },
  costBasics: {
    title: "Why can healthcare cost money?",
    html: `<p>Some healthcare services are publicly funded for eligible people, while other services, products, or situations may involve a fee.</p><h3>Why might a cost vary?</h3><ul><li>The type of service or product.</li><li>Whether the service is an insured service under a public plan.</li><li>Where the service is provided and who provides it.</li><li>Whether another program or private insurance applies.</li></ul><h3>Before you agree to pay</h3><ul><li>Ask for the total cost and any extra fees.</li><li>Ask whether the service is covered in your circumstances.</li><li>Ask whether a lower-cost or publicly funded option exists.</li><li>Ask for the explanation in writing if you need time to review it.</li></ul><p>Never rely on a general website to decide your personal coverage. Confirm with the provider or the relevant program.</p>`,
    speech: "Some healthcare services are publicly funded for eligible people, while other services, products, or situations may involve a fee. Costs can depend on the service, provider, location, and coverage rules. Before agreeing to pay, ask for the total cost and whether a public program or insurance may apply.",
    question: "What should you do if you are unsure whether a service is covered?", options: ["Assume it is free", "Ask the provider and check the relevant program", "Ignore the bill"], answer: 1,
    explanation: "Ask the provider and confirm with the relevant program before assuming a service is covered."
  }
};


// Shared read-aloud support.
const dialog = document.getElementById("lessonDialog");
const dialogTitle = document.getElementById("dialogTitle");
const dialogContent = document.getElementById("dialogContent");
const quizPrompt = document.getElementById("quizPrompt");
const quizChoices = document.getElementById("quizChoices");
const quizFeedback = document.getElementById("quizFeedback");
let activeLesson = null;
function stopSpeech() { if ("speechSynthesis" in window) window.speechSynthesis.cancel(); }
function speak(text) {
  if (!("speechSynthesis" in window)) { alert("Read aloud is not available in this browser. Try a current version of Chrome, Edge, or Safari."); return; }
  stopSpeech(); const utterance = new SpeechSynthesisUtterance(text); utterance.lang = "en-CA"; utterance.rate = 0.88; window.speechSynthesis.speak(utterance);
}
function openLesson(id) {
  const lesson = lessonData[id]; if (!lesson) return; activeLesson = lesson; stopSpeech();
  dialogTitle.textContent = lesson.title; dialogContent.innerHTML = lesson.html; quizPrompt.textContent = lesson.question; quizFeedback.textContent = ""; quizChoices.innerHTML = "";
  lesson.options.forEach((option, index) => { const button = document.createElement("button"); button.type = "button"; button.className = "quiz-choice"; button.textContent = option; button.addEventListener("click", () => {
    [...quizChoices.children].forEach((choice, i) => { choice.disabled = true; if (i === lesson.answer) choice.classList.add("correct"); if (i === index && i !== lesson.answer) choice.classList.add("incorrect"); });
    quizFeedback.textContent = index === lesson.answer ? "Correct! " + lesson.explanation : "Not quite. " + lesson.explanation;
  }); quizChoices.appendChild(button); }); dialog.showModal();
}
document.querySelectorAll("[data-lesson]").forEach(button => button.addEventListener("click", () => openLesson(button.dataset.lesson)));
document.getElementById("closeDialog").addEventListener("click", () => { stopSpeech(); dialog.close(); });
dialog.addEventListener("click", event => { if (event.target === dialog) { stopSpeech(); dialog.close(); } });
document.getElementById("readLesson").addEventListener("click", () => { if (activeLesson) speak(activeLesson.title + ". " + activeLesson.speech); });
document.getElementById("stopSpeech").addEventListener("click", stopSpeech);
document.getElementById("readPage").addEventListener("click", () => speak("HealthBridge. Learn about healthcare in simple language. Find trusted healthcare services in Newfoundland and Labrador. Connect with volunteer support or explore primary care options if you do not have a family doctor."));

// Lesson search.
const search = document.getElementById("lessonSearch");
const lessonCards = [...document.querySelectorAll(".lesson-card")];
search.addEventListener("input", () => { const term = search.value.trim().toLowerCase(); let shown = 0; lessonCards.forEach(card => { const visible = (card.dataset.search + " " + card.textContent).toLowerCase().includes(term); card.hidden = !visible; if (visible) shown++; }); document.getElementById("emptyLessons").hidden = shown !== 0; });

// Text-size and contrast controls.
let currentSize = 18;
document.getElementById("textLarger").addEventListener("click", () => { currentSize = Math.min(23, currentSize + 1); document.documentElement.style.setProperty("--base-size", currentSize + "px"); });
document.getElementById("textSmaller").addEventListener("click", () => { currentSize = Math.max(15, currentSize - 1); document.documentElement.style.setProperty("--base-size", currentSize + "px"); });
document.getElementById("contrastToggle").addEventListener("click", event => { const enabled = document.body.classList.toggle("high-contrast"); event.currentTarget.setAttribute("aria-pressed", String(enabled)); event.currentTarget.textContent = enabled ? "Standard contrast" : "High contrast"; });

// Mobile navigation closes after a selection.
const menuToggle = document.getElementById("menuToggle"); const mainNav = document.getElementById("mainNav");
menuToggle.addEventListener("click", () => { const open = mainNav.classList.toggle("open"); menuToggle.setAttribute("aria-expanded", String(open)); menuToggle.setAttribute("aria-label", open ? "Close navigation" : "Open navigation"); menuToggle.textContent = open ? "×" : "☰"; });
mainNav.querySelectorAll("a").forEach(link => link.addEventListener("click", () => { mainNav.classList.remove("open"); menuToggle.setAttribute("aria-expanded", "false"); menuToggle.setAttribute("aria-label", "Open navigation"); menuToggle.textContent = "☰"; }));

// Arduino USB-serial readings. The board sends one JSON object per line:
// {"heartRate":72,"spo2":98}
const connectSensorButton = document.getElementById("connectSensor");
const disconnectSensorButton = document.getElementById("disconnectSensor");
const sensorStatus = document.getElementById("sensorStatus");
const heartRateValue = document.getElementById("heartRateValue");
const oxygenValue = document.getElementById("oxygenValue");

let sensorPort = null;
let sensorReader = null;
let sensorReadTask = null;
let sensorKeepReading = false;

function showSensorStatus(message) {
  sensorStatus.textContent = message;
}

function displaySensorReading(line) {
  try {
    const reading = JSON.parse(line);
    const heartRate = Number(reading.heartRate);
    const oxygen = Number(reading.spo2);

    if (Number.isFinite(heartRate)) {
      heartRateValue.textContent = String(Math.round(heartRate));
    }

    if (Number.isFinite(oxygen)) {
      oxygenValue.textContent = String(Math.round(oxygen * 10) / 10);
    }
  } catch (error) {
    // Ignore incomplete or non-JSON serial lines while the sensor starts up.
  }
}

async function readSensorStream(port) {
  const decoder = new TextDecoder();
  let buffer = "";

  sensorReader = port.readable.getReader();

  try {
    while (sensorKeepReading) {
      const { value, done } = await sensorReader.read();
      if (done) break;

      buffer += decoder.decode(value, { stream: true });
      const lines = buffer.split(/\r?\n/);
      buffer = lines.pop() || "";

      lines.forEach(line => {
        if (line.trim()) displaySensorReading(line.trim());
      });
    }
  } catch (error) {
    if (sensorKeepReading) {
      showSensorStatus("Connection interrupted. Check the USB cable and Arduino.");
    }
  } finally {
    if (sensorReader) {
      sensorReader.releaseLock();
      sensorReader = null;
    }
  }
}

connectSensorButton.addEventListener("click", async () => {
  if (!("serial" in navigator)) {
    showSensorStatus("USB serial is not supported in this browser. Use Chrome or Edge on a computer, and open the site through localhost or HTTPS.");
    return;
  }

  try {
    connectSensorButton.disabled = true;
    showSensorStatus("Choose your Arduino in the browser's device window...");

    sensorPort = await navigator.serial.requestPort();
    await sensorPort.open({ baudRate: 115200 });

    sensorKeepReading = true;
    disconnectSensorButton.disabled = false;
    showSensorStatus("Connected. Waiting for readings from your sensor...");

    sensorReadTask = readSensorStream(sensorPort);
  } catch (error) {
    showSensorStatus(error.name === "NotFoundError"
      ? "No device was selected. You can try connecting again."
      : "Could not connect. Check the cable, browser permission, and Arduino connection.");
    connectSensorButton.disabled = false;
    sensorPort = null;
  }
});

disconnectSensorButton.addEventListener("click", async () => {
  sensorKeepReading = false;

  try {
    if (sensorReader) await sensorReader.cancel();
    if (sensorReadTask) await sensorReadTask;
    if (sensorPort) await sensorPort.close();
  } catch (error) {
    // The port may already have been disconnected.
  }

  sensorPort = null;
  sensorReadTask = null;
  disconnectSensorButton.disabled = true;
  connectSensorButton.disabled = false;
  showSensorStatus("Disconnected. Connect your sensor to begin again.");
});

console.log("HealthBridge simplified prototype ready.");
