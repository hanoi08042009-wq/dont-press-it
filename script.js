let score = 0;
let lives = 3;

const colors = [
  {
    name: "ĐỎ",
    value: "#ef4444"
  },
  {
    name: "XANH",
    value: "#22c55e"
  },
  {
    name: "XANH DƯƠNG",
    value: "#3b82f6"
  },
  {
    name: "VÀNG",
    value: "#eab308"
  }
];

const scoreText = document.getElementById("score");
const livesText = document.getElementById("lives");
const challengeText = document.getElementById("challenge");
const buttons = document.getElementById("buttons");
const message = document.getElementById("message");
const restart = document.getElementById("restart");

function newRound() {

  buttons.innerHTML = "";
  message.textContent = "";

  const correct =
    colors[Math.floor(Math.random() * colors.length)];

  challengeText.textContent =
    "Bấm vào nút màu " + correct.name;

  const shuffled = [...colors].sort(() => Math.random() - 0.5);

  shuffled.forEach(color => {

    const button = document.createElement("button");

    button.className = "game-button";
    button.textContent = color.name;

    button.style.background = color.value;

    button.onclick = () => {

      if (color.name === correct.name) {

        score += 100;
        scoreText.textContent = score;

        message.textContent = "ĐÚNG! +100 ⭐";

        setTimeout(newRound, 500);

      } else {

        lives--;
        livesText.textContent = lives;

        message.textContent = "SAI! ❌";

        if (lives <= 0) {
          gameOver();
        }
      }
    };

    buttons.appendChild(button);
  });
}

function gameOver() {

  challengeText.textContent = "GAME OVER";

  buttons.innerHTML = "";

  message.textContent =
    "Điểm của bạn: " + score;

  restart.style.display = "inline-block";
}

restart.onclick = () => {

  score = 0;
  lives = 3;

  scoreText.textContent = score;
  livesText.textContent = lives;

  restart.style.display = "none";

  newRound();
};

newRound();
