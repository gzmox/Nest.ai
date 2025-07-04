function sendMessage() {
  const input = document.getElementById("userInput");
  const chatLog = document.getElementById("chatLog");
  const userMessage = input.value.trim();

  if (!userMessage) return;

  // Show user message
  const userBubble = document.createElement("div");
  userBubble.className = "user";
  userBubble.textContent = userMessage;
  chatLog.appendChild(userBubble);

  // Fake AI response
  const aiBubble = document.createElement("div");
  aiBubble.className = "ai";
  aiBubble.textContent = generateFakeResponse(userMessage);
  chatLog.appendChild(aiBubble);

  input.value = "";
  chatLog.scrollTop = chatLog.scrollHeight;
}

function generateFakeResponse(message) {
  const msg = message.toLowerCase();
  if (msg.includes("crying")) {
    return "It's normal for newborns to cry 2–3 hours per day. If the cry sounds different or baby seems in pain, consult your pediatrician.";
  } else if (msg.includes("fever")) {
    return "Any fever over 100.4°F (38°C) in a baby under 3 months should be checked by a doctor immediately.";
  } else {
    return "Thanks for your question! This is something many parents ask. I recommend observing patterns and reaching out to your pediatrician if unsure.";
  }
}
