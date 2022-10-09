function getComputerChoice() {
  let array = ["rock", "paper", "scissors"];
  return array[Math.floor(Math.random() * array.length)];
}

function changePlayerPoint() {
  playerPoint += 1;
  const point = document.querySelector("#player-points");
  const number = Number(point.innerHTML);
  point.innerHTML = (number + 1).toString();
}

function changeComputerPoint() {
  computerPoint += 1;
  const point = document.querySelector("#computer-points");
  const number = Number(point.innerHTML);
  point.innerHTML = (number + 1).toString();
}

function resetEverything() {
  document.getElementById("text").innerHTML = null;
  document.getElementById("result").innerHTML = null;
  document.getElementById("winner").innerHTML = null;
  document.getElementById("computer-points").innerHTML = "0";
  document.getElementById("player-points").innerHTML = "0";
  disableButtons(false);
  playerPoint = 0;
  computerPoint = 0;
}

function changeText(newText) {
  document.getElementById("text").innerHTML = newText;
}

function changeResult(newText) {
  document.getElementById("result").innerHTML = newText;
}
function anounceWinner(newText) {
  document.getElementById("winner").innerHTML = newText;
}
function disableButtons(value) {
  const buttons = Array.from(document.querySelectorAll(".button"));
  buttons.forEach((button) => (button.disabled = value));
}

function playRound(playerSelection, computerSelection) {
  // your code here!
  if (playerSelection.toUpperCase() == computerSelection.toUpperCase()) {
    return 0;
  } else if (playerSelection.toUpperCase() == "ROCK") {
    if (computerSelection.toUpperCase() == "PAPER") {
      return -1;
    } else {
      return 1;
    }
  } else if (playerSelection.toUpperCase() == "PAPER") {
    if (computerSelection.toUpperCase() == "ROCK") {
      return 1;
    } else {
      return -1;
    }
  } else if (playerSelection.toUpperCase() == "SCISSORS") {
    if (computerSelection.toUpperCase() == "PAPER") {
      return 1;
    } else {
      return -1;
    }
  }
}

function game(e) {
  let playerSelection = e.target.id;
  const computerSelection = getComputerChoice();
  const text =
    "You choose " +
    playerSelection.toLowerCase() +
    ". The computer choose " +
    computerSelection.toLowerCase() +
    ".";
  changeText(text);
  let result = playRound(playerSelection, computerSelection);
  if (result > 0) {
    changePlayerPoint();
    changeResult("You win this round.");
  } else if (result < 0) {
    changeComputerPoint();
    changeResult("You lose this round.");
  } else {
    changeResult("It's a tie.");
  }
  if (playerPoint == 5) {
    anounceWinner("The winner is the player!");
    disableButtons(true);
  } else if (computerPoint == 5) {
    anounceWinner("The winner is the computer!");
    disableButtons(true);
  }
}
let playerPoint = 0;
let computerPoint = 0;
const buttons = Array.from(document.querySelectorAll(".button"));
buttons.forEach((button) => button.addEventListener("click", game));

const resetButton = document.querySelector("#reset");
resetButton.addEventListener("click", resetEverything);
console.log(playerPoint);

//console.log(computerSelection);
//console.log(playRound(playerSelection, computerSelection));
