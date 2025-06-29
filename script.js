// script.js
let runs = 0;
let wickets = 0;
let balls = 0;

function play(playerChoice) {
  const botChoice = Math.floor(Math.random() * 6) + 1;
  balls++;

  const resultText = document.getElementById("result");

  if (playerChoice === botChoice) {
    wickets++;
    resultText.innerText = `Out! You chose ${playerChoice} and Bot chose ${botChoice}.`;
    playSound('out');
  } else {
    runs += playerChoice;
    resultText.innerText = `You scored ${playerChoice} (Bot chose ${botChoice})`;
    playSound('hit');
  }

  updateScore();

  if (wickets >= 5) {
    resultText.innerText += `\nGame Over! You scored ${runs} runs in ${balls} balls.`;
    document.getElementById("buttons").style.display = "none";
  }
}

function updateScore() {
  document.getElementById("runs").innerText = runs;
  document.getElementById("wickets").innerText = wickets;
  document.getElementById("balls").innerText = balls;
}

function playSound(type) {
  const sound = new Audio(type === 'out' ? 'assets/sounds/out.mp3' : 'assets/sounds/hit.mp3');
  sound.play();
}
