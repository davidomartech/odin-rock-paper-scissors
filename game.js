let humanScore = 0;
let computerScore = 0;

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

function playRound(humanChoice, computerChoice) {
  humanChoice = humanChoice.toLowerCase();
  if (humanChoice === computerChoice) {
    console.log("Tie!");
    return;
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

  if (humanWon) {
    humanScore++;
    console.log(winningOutput);
  } else {
    computerScore++;
    console.log(losingOutput);
  }
}
