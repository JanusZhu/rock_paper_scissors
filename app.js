function getComputerChoice() {
  let array = ["rock", "paper", "scissors"];
  return array[Math.floor(Math.random() * array.length)];
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

function game() {
  let result = 0;
  for (let i = 0; i < 5; i++) {
    let array = ["rock", "paper", "scissors"];
    let playerSelection = prompt("What's your choice? (rock, paper, scissors)");
    while (true) {
      if (array.includes(playerSelection.toLowerCase())) {
        break;
      }
      playerSelection = prompt("Choose a valid option (rock, paper, scissors)");
    }
    const computerSelection = getComputerChoice();
    console.log(
      "Round " +
        (i + 1) +
        ": You choose " +
        playerSelection.toLowerCase() +
        ". The computer choose " +
        computerSelection.toLowerCase() +
        "."
    );
    result += playRound(playerSelection, computerSelection);
  }
  if (result > 0) {
    console.log("You win.");
  } else if (result < 0) {
    console.log("You lose.");
  } else {
    console.log("It's a tie.");
  }
}

game();

//console.log(computerSelection);
//console.log(playRound(playerSelection, computerSelection));
