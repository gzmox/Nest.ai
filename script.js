function sendMessage() {
  const input = document.getElementById("userInput");
  const chatLog = document.getElementById("chatLog");
  const userMessage = input.value.trim();

  if (!userMessage) return;

  // Add user message
  const userBubble = document.createElement("div");
  userBubble.className = "user";
  userBubble.textContent = userMessage;
  chatLog.appendChild(userBubble);

  // Simulate AI response
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
    return "Newborns cry 2–3 hours a day — it’s totally normal. Try white noise or gentle rocking.";
  } else if (msg.includes("fever")) {
    return "If your baby is under 3 months and has a fever over 100.4°F, call your doctor.";
  } else {
    return "That's a great question! I'm here to help you track, observe, and stay informed.";
  }
}
