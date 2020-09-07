var word = document.getElementById("word");
var wordTyped = document.getElementById("text");
var timeLeft = document.getElementById("time-left");
var score = document.getElementById("score");
var endGame = document.querySelector(".end-game-container");
const difficulty = document.getElementById("difficulty");
const settingsBtn = document.getElementById("settings-btn");
const difficultySettings = document.getElementById("settings");

const level = {
  hard: 1,
  medium: 2,
  easy: 4,
};

const words = [
  "bad",
  "view",
  "world",
  "release",
  "caracteristic",
  "grass",
  "homeland",
  "building",
  "juice",
  "illness",
  "eight",
  "drag",
];

text.focus();

function chooseWord() {
  var randomIndex = Math.floor(Math.random() * words.length);
  word.textContent = words[randomIndex];
  wordTyped.value = "";
}

function countdown() {
  var currentTime = parseInt(timeLeft.textContent) - 1;
  timeLeft.textContent = currentTime;
  if (currentTime == 0) {
    lostTheGame();
  } else setTimeout(countdown, 1000);
}

function lostTheGame() {
  endGame.style.display = "flex";
  endGame.innerHTML = `<h1>Time ran out</h1>
   <p> Your final score is ${score.innerHTML}</p> 
   <button onclick=reload() > Reload </button>`;
}

function reload() {
  wordTyped.value = "";
  timeLeft.textContent = "10";
  score.textContent = "0";
  chooseWord();
  endGame.style.display = "none";
  setTimeout(countdown, 1000);
}

function addTime(seconds) {
  timeLeft.textContent = parseInt(timeLeft.textContent) + seconds;
}

function getValueFromStorage() {
  let currentIndex = JSON.parse(localStorage.getItem("selectedIndex"));
  difficulty.selectedIndex = currentIndex;
}

wordTyped.addEventListener("keyup", function () {
  if (wordTyped.value == word.textContent) {
    addTime(level[difficulty.value]);
    chooseWord();
    score.innerHTML = parseInt(score.innerHTML) + 1;
  }
});

difficulty.addEventListener("change", () => {
  if (localStorage.getItem("selectedIndex") != null) {
    localStorage.clear("selectedIndex");
  }
  localStorage.setItem(
    "selectedIndex",
    JSON.stringify(difficulty.selectedIndex)
  );
});

settingsBtn.addEventListener("click", () => {
  difficultySettings.classList.toggle("hide");
});

getValueFromStorage();
reload();
