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
