const computerChoiceDisplay = document.getElementById("computer-choice");
const userChoiceDisplay = document.getElementById("user-choice");
const resultDisplay = document.getElementById("result");
const possibleChoices = document.querySelectorAll("button");
let userChoice;
let computerChoice;
let result;

possibleChoices.forEach((possibleChoice) =>
  possibleChoice.addEventListener("click", (e) => {
    userChoice = e.target.id;
    userChoiceDisplay.innerHTML = userChoice;
    generateComputerChoice();
    getResult();
  })
);

function generateComputerChoice() {
  const choices = ["Rock", "Scissors", "Paper"];
  const randomIndex = Math.floor(Math.random() * choices.length);
  computerChoice = choices[randomIndex];
  computerChoiceDisplay.innerHTML = computerChoice;
}

function getResult() {
  if (computerChoice.toLowerCase() === userChoice.toLowerCase()) {
    result = "It's a draw!";
  } else if (
    (computerChoice === "Rock" && userChoice === "Scissors") ||
    (computerChoice === "Scissors" && userChoice === "Paper") ||
    (computerChoice === "Paper" && userChoice === "Rock")
  ) {
    result = "You lose!";
  } else {
    result = "You Won!";
  }

  resultDisplay.innerHTML = result;
}
