function getComputerChoice() {
  // get number between 1 and 3
  let x = Math.floor(Math.random() * 3) + 1;
  switch (x) {
    case 1:
      return "rock";
    case 2:
      return "paper";
    case 3:
      return "scissors";
  }
}

function getHumanChoice() {
  return prompt("Choose: rock,paper,scissors");
}

let humanScore = 0;
let computerScore = 0;
const gameBtns = document.querySelector(".game-btns");

gameBtns.addEventListener("click", (e) => {
  switch (e.target.textContent) {
    case "rock":
      playRound("rock", getComputerChoice());
      break;
    case "paper":
      playRound("paper", getComputerChoice());
      break;
    case "scissors":
      playRound("scissors", getComputerChoice());
      break;
  }
});

function playRound(humanChoice, computerChoice) {
  humanChoice = humanChoice.toLowerCase();
  if (humanChoice === computerChoice) {
    return "Tie!";
  }

  const winningOutput = `Victory! ${humanChoice} beats ${computerChoice}.`;
  const losingOutput = `Defeat! ${computerChoice} beats ${humanChoice}.`;
  let humanWon = false;

  switch (humanChoice) {
    case "rock":
      if (computerChoice === "scissors") humanWon = true;
      break;
    case "scissors":
      if (computerChoice === "paper") humanWon = true;
      break;
    case "paper":
      if (computerChoice === "rock") humanWon = true;
      break;
  }
}
