let message = document.querySelector(".message");
let choices = document.querySelectorAll(".choice");
let compScore = document.querySelector('#Comp-score');
let userScore = document.querySelector('#User-score');
let Score = document.querySelector('.score')

let button = document.createElement("button");
const compChoice = () => {
  const array = ["rock", "paper", "scissor"];
  let rndElement = array[Math.floor(Math.random() * array.length)];
  return rndElement;
};

const playGame = (userChoice) => {
  const computerChoice = compChoice(); 
    button.innerText= ` You choose ${userChoice} and Computer choose ${computerChoice}`;
    button.id = 'button';
    message.before(button);
  if (
    (userChoice === "paper" && computerChoice === "rock") ||
    (userChoice === "rock" && computerChoice === "scissor") ||
    (userChoice === "scissor" && computerChoice === "paper")
  ) {
    message.innerText = "Congratulations! You won the match from the computer.";
    userScore.innerText++;
  }  
  else if (
    (userChoice === "rock" && computerChoice === "paper") ||
    (userChoice === "scissor" && computerChoice === "rock") ||
    (userChoice === "paper" && computerChoice === "scissor")
  ) {
    message.innerText = "Bad Luck! Computer wins the game from you.";
    compScore.innerText++;
  } else if ( userChoice === computerChoice){
    message.innerText = 'Game Draw. Play it again.';
  }
};

choices.forEach((choice) => {
  choice.addEventListener("click", () => {
    const userChoice = choice.getAttribute("id");
    playGame(userChoice);
  });
});
