/* ==========================================
   HEALTHBRIDGE CHATBOT FRONTEND
   Complete version
   ========================================== */

// ==========================================
// ELEMENTS
// ==========================================

const chatbotToggle = document.getElementById("chatbotToggle");
const chatbotWindow = document.getElementById("chatbotWindow");
const chatbotClose = document.getElementById("chatbotClose");

const chatbotForm = document.getElementById("chatbotForm");
const chatbotInput = document.getElementById("chatbotInput");
const chatbotSend = document.getElementById("chatbotSend");

const chatbotMessages = document.getElementById("chatbotMessages");
const chatbotSuggestions = document.getElementById("chatbotSuggestions");

let chatbotHistory = [];
let chatbotBusy = false;

/* ==========================================
   AUTOMATIC CHAT SCROLLING
   ========================================== */

function scrollChatToBottom(smooth = true) {
  if (!chatbotMessages) return;

  requestAnimationFrame(() => {
    chatbotMessages.scrollTo({
      top: chatbotMessages.scrollHeight,
      behavior: smooth ? "smooth" : "instant"
    });
  });
}

// Automatically scroll when new messages or typing indicators appear
const chatObserver = new MutationObserver(() => {
  scrollChatToBottom(true);
});

chatObserver.observe(chatbotMessages, {
  childList: true,
  subtree: true,
  characterData: true
});

// Keep the newest message visible when the chat changes size
if ("ResizeObserver" in window) {
  const chatResizeObserver = new ResizeObserver(() => {
    scrollChatToBottom(false);
  });

  chatResizeObserver.observe(chatbotMessages);
  chatResizeObserver.observe(chatbotWindow);
}


// ==========================================
// CHAT WINDOW POSITIONING
// ==========================================


function positionChatbotWindow() {
  const margin = 12;
  const gap = 14;

  const isExpanded = chatbotWindow.classList.contains("maximized");

  const buttonRect = chatbotToggle.getBoundingClientRect();

  // Measure the chat window
  const availableWidth = window.innerWidth - margin * 2;
  const availableHeight = window.innerHeight - margin * 2;

  const width = isExpanded
    ? Math.min(window.innerWidth * 0.5, 700, availableWidth)
    : Math.min(390, availableWidth);

  const height = isExpanded
    ? Math.min(window.innerHeight * 0.82, 800, availableHeight)
    : Math.min(590, availableHeight);

  chatbotWindow.style.width = `${width}px`;
  chatbotWindow.style.height = `${height}px`;

  let x;
  let y;

  if (isExpanded) {
    // Expanded chat is centered on screen
    x = (window.innerWidth - width) / 2;
    y = (window.innerHeight - height) / 2;
  } else {
    // Normal chat opens beside the floating button
    const openLeft = buttonRect.left > window.innerWidth / 2;

    x = openLeft
      ? buttonRect.left - width - gap
      : buttonRect.right + gap;

    y = buttonRect.bottom - height;

    // If there isn't enough room beside the button,
    // place the chat on the opposite side
    if (x < margin || x + width > window.innerWidth - margin) {
      x = openLeft
        ? buttonRect.right + gap
        : buttonRect.left - width - gap;
    }

    // Keep everything inside the viewport
    x = Math.max(margin, Math.min(x, window.innerWidth - width - margin));
    y = Math.max(margin, Math.min(y, window.innerHeight - height - margin));
  }

  chatbotWindow.style.left = `${x}px`;
  chatbotWindow.style.top = `${y}px`;
  chatbotWindow.style.right = "auto";
  chatbotWindow.style.bottom = "auto";
}


// ==========================================
// OPEN CHAT
// ==========================================

function openChatbot() {
  chatbotWindow.hidden = false;
  chatbotWindow.classList.remove("is-closing");

  chatbotToggle.setAttribute("aria-expanded", "true");

  const icon = chatbotToggle.querySelector(".chatbot-toggle-icon");

  if (icon) {
    icon.textContent = "×";
  }

  // Wait for the panel to become visible before measuring it.
  requestAnimationFrame(() => {
    positionChatbotWindow();
    chatbotInput.focus();
  });
}

// ==========================================
// CLOSE CHAT
// ==========================================

function closeChatbot() {
  if (chatbotWindow.hidden) return;

  chatbotWindow.classList.remove("is-opening");
  chatbotWindow.classList.add("is-closing");

  chatbotToggle.setAttribute("aria-expanded", "false");

  const icon = chatbotToggle.querySelector(".chatbot-toggle-icon");

  if (icon) {
    icon.textContent = "✦";
  }

  setTimeout(() => {
    chatbotWindow.hidden = true;
    chatbotWindow.classList.remove("is-closing");
  }, 180);
}

// ==========================================
// TOGGLE BUTTON
// ==========================================

let suppressToggleClick = false;

chatbotToggle.addEventListener("click", () => {
  // Don't open the chat if the button was just dragged.
  if (suppressToggleClick) {
    suppressToggleClick = false;
    return;
  }

  if (chatbotWindow.hidden) {
    openChatbot();
  } else {
    closeChatbot();
  }
});

chatbotClose.addEventListener("click", closeChatbot);

// ==========================================
// DRAGGABLE FLOATING BUTTON
// ==========================================

let chatbotDragging = false;
let chatbotMoved = false;

let dragOffsetX = 0;
let dragOffsetY = 0;

let dragStartX = 0;
let dragStartY = 0;

function keepButtonInBounds(x, y) {
  const width = chatbotToggle.offsetWidth;
  const height = chatbotToggle.offsetHeight;

  return {
    x: Math.max(8, Math.min(x, window.innerWidth - width - 8)),
    y: Math.max(8, Math.min(y, window.innerHeight - height - 8))
  };
}

chatbotToggle.addEventListener("pointerdown", event => {
  if (event.button !== 0) return;

  chatbotDragging = true;
  chatbotMoved = false;

  const rect = chatbotToggle.getBoundingClientRect();

  dragOffsetX = event.clientX - rect.left;
  dragOffsetY = event.clientY - rect.top;

  dragStartX = event.clientX;
  dragStartY = event.clientY;

  chatbotToggle.setPointerCapture(event.pointerId);
});

chatbotToggle.addEventListener("pointermove", event => {
  if (!chatbotDragging) return;

  const distance = Math.hypot(
    event.clientX - dragStartX,
    event.clientY - dragStartY
  );

  // A small movement is still considered a normal click.
  if (distance < 5 && !chatbotMoved) return;

  chatbotMoved = true;

  const position = keepButtonInBounds(
    event.clientX - dragOffsetX,
    event.clientY - dragOffsetY
  );

  chatbotToggle.style.left = `${position.x}px`;
  chatbotToggle.style.top = `${position.y}px`;
  chatbotToggle.style.right = "auto";
  chatbotToggle.style.bottom = "auto";

  // Keep the open chat beside the button while dragging.
  if (!chatbotWindow.hidden) {
    positionChatbotWindow();
  }
});

function finishChatbotDrag() {
  if (!chatbotDragging) return;

  chatbotDragging = false;

  if (chatbotMoved) {
    suppressToggleClick = true;

    // The browser dispatches click immediately after pointerup.
    setTimeout(() => {
      suppressToggleClick = false;
    }, 0);

    if (!chatbotWindow.hidden) {
      positionChatbotWindow();
    }
  }
}

chatbotToggle.addEventListener("pointerup", finishChatbotDrag);
chatbotToggle.addEventListener("pointercancel", finishChatbotDrag);

// ==========================================
// ADD MESSAGE
// ==========================================

function addChatMessage(content, type) {
  const message = document.createElement("div");
  message.className = `chatbot-message ${type}-message`;

  const bubble = document.createElement("div");
  bubble.className = "chatbot-bubble";

  // Keep model output as text, never HTML.
  bubble.textContent = content;

  message.appendChild(bubble);
  chatbotMessages.appendChild(message);

  chatbotMessages.scrollTop = chatbotMessages.scrollHeight;

  return message;
}

// ==========================================
// SEND MESSAGE
// ==========================================

async function sendChatMessage(messageText) {
  const message = messageText.trim();

  if (!message || chatbotBusy) return;

  chatbotBusy = true;

  chatbotSend.disabled = true;
  chatbotInput.disabled = true;

  if (chatbotSuggestions) {
    chatbotSuggestions.style.display = "none";
  }

  addChatMessage(message, "user");

  chatbotHistory.push({
    role: "user",
    content: message
  });

  chatbotInput.value = "";

  const loading = document.createElement("div");
  loading.className = "chatbot-typing";
  loading.textContent = "HealthBridge Assistant is thinking...";

  chatbotMessages.appendChild(loading);
  chatbotMessages.scrollTop = chatbotMessages.scrollHeight;

  try {
    const response = await fetch("/api/chatbot", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        messages: chatbotHistory
      })
    });

    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.error || "Chatbot request failed.");
    }

    if (typeof data.reply !== "string") {
      throw new Error("The chatbot returned an invalid response.");
    }

    loading.remove();

    addChatMessage(data.reply, "assistant");

    chatbotHistory.push({
      role: "assistant",
      content: data.reply
    });

    // Keep conversation history manageable.
    chatbotHistory = chatbotHistory.slice(-12);

  } catch (error) {
    loading.remove();

    addChatMessage(
      "I'm sorry! I'm having trouble connecting right now. Please try again in a moment.",
      "assistant"
    );

    console.error("Chatbot error:", error);

  } finally {
    chatbotBusy = false;

    chatbotSend.disabled = false;
    chatbotInput.disabled = false;

    chatbotInput.focus();
  }
}

// ==========================================
// FORM SUBMISSION
// ==========================================

chatbotForm.addEventListener("submit", event => {
  event.preventDefault();
  sendChatMessage(chatbotInput.value);
});

// ==========================================
// SUGGESTED QUESTIONS
// ==========================================

if (chatbotSuggestions) {
  chatbotSuggestions.addEventListener("click", event => {
    const button = event.target.closest("button[data-question]");

    if (!button) return;

    sendChatMessage(button.dataset.question);
  });
}

// ==========================================
// KEYBOARD SUPPORT
// ==========================================

document.addEventListener("keydown", event => {
  if (event.key === "Escape" && !chatbotWindow.hidden) {
    closeChatbot();
  }
});

// ==========================================
// SCREEN RESIZING
// ==========================================

window.addEventListener("resize", () => {
  if (!chatbotWindow.hidden) {
    positionChatbotWindow();
  }

  // Keep the launcher visible if the viewport shrinks.
  const rect = chatbotToggle.getBoundingClientRect();

  const position = keepButtonInBounds(rect.left, rect.top);

  chatbotToggle.style.left = `${position.x}px`;
  chatbotToggle.style.top = `${position.y}px`;
  chatbotToggle.style.right = "auto";
  chatbotToggle.style.bottom = "auto";

  if (!chatbotWindow.hidden) {
    positionChatbotWindow();
  }
});

const openAIChat = document.getElementById("openAIChat");

if (openAIChat) {
  openAIChat.addEventListener("click", () => {
    if (chatbotWindow.hidden) {
      openChatbot();
    }
  });
}