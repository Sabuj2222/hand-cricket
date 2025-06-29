let userScore = 0;
let userWickets = 0;
let botScore = 0;
let botWickets = 0;
let isUserBatting = true;
let isGameOver = false;
let target = 0;

function playTurn(userInput) {
  if (isGameOver) return;

  const botInput = Math.floor(Math.random() * 6) + 1;

  if (isUserBatting) {
    if (userInput === botInput) {
      userWickets++;
      logMessage(`😵 OUT! You: ${userInput}, Bot: ${botInput}`);
    } else {
      userScore += userInput;
      logMessage(`🏏 You: ${userInput}, Bot: ${botInput}`);
    }

    updateScore();

    if (userWickets >= 5) {
      isUserBatting = false;
      target = userScore + 1;
      logMessage(`🧢 All out! Target for Bot: ${target}`);
    }
  } else {
    if (userInput === botInput) {
      botWickets++;
      logMessage(`💥 BOT OUT! You: ${userInput}, Bot: ${botInput}`);
    } else {
      botScore += botInput;
      logMessage(`🤖 Bot: ${botInput}, You: ${userInput}`);
    }

    updateScore();

    if (botScore >= target) {
      isGameOver = true;
      logMessage("🏆 Bot wins the match!");
    } else if (botWickets >= 5) {
      isGameOver = true;
      logMessage("🎉 You win the match!");
    }
  }
}

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
