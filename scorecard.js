function updateScore() {
  document.getElementById("score").innerHTML = `
    You: ${userScore}/${userWickets} <br>
    Bot: ${botScore}/${botWickets} ${!isUserBatting ? '(Chasing)' : ''}
  `;
}

function logMessage(msg) {
  const log = document.getElementById("log");
  const entry = document.createElement("div");
  entry.textContent = msg;
  log.prepend(entry);
}
