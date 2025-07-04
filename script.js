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
    return "Newborns often cry 2–3 hours a day. It’s normal, but keep an eye out for patterns or pain indicators.";
  } else if (msg.includes("fever")) {
    return "For babies under 3 months, a fever over 100.4°F (38°C) means you should call your doctor right away.";
  } else {
    return "That’s a great question! Try tracking it and let me know if it continues. I’m here to help!";
  }
}
