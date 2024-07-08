let humanScore = 0;
let computerScore = 0;

const buttons = document.querySelector(".buttons");
const scores = document.querySelector(".scores");
const results = document.querySelector(".results");

const rockButton = document.createElement("button");
const paperButton = document.createElement("button");
const scissorsButton = document.createElement("button");



const scoresHeading = document.createElement("h3");

const divResults1 = document.createElement("div");
const divResults2 = document.createElement("div");
const resultsHumanHeading = document.createElement("h3");
const resultsHuman = document.createElement("p");
const resultsBotHeading = document.createElement("h3");
const resultsBot = document.createElement("p");

buttons.append(rockButton);
buttons.append(paperButton);
buttons.append(scissorsButton);

scores.append(scoresHeading);
scoresHeading.textContent = "";

divResults1.setAttribute("class", "results-box");
divResults2.setAttribute("class", "results-box");

divResults1.append(resultsHumanHeading);
divResults1.append(resultsHuman);
divResults2.append(resultsBotHeading);
divResults2.append(resultsBot);

results.append(divResults1);
results.append(divResults2);

resultsHumanHeading.textContent = "Human";
resultsBotHeading.textContent = "Bot";
resultsHuman.textContent = humanScore;
resultsBot.textContent = computerScore;

rockButton.textContent = "rock";
paperButton.textContent = "paper";
scissorsButton.textContent = "scissors";

const listOfButtons = document.querySelectorAll(".buttons button");

function getComputerChoice(){
    const choices = ["rock", "paper", "scissors"];
    return choices[Math.floor(Math.random() * choices.length)];
}

function playRound(humanChoice, computerChoice){
    
    if(humanChoice === "rock"){
        if(computerChoice === "rock"){
            scoresHeading.textContent = "It's a tie!";
        }else if(computerChoice === "paper"){
            scoresHeading.textContent = "You lose! Paper beats Rock.";
            ++computerScore;
        }else{
            scoresHeading.textContent = "You win! Rock beats Scissors.";
            ++humanScore;
        }
    }else if(humanChoice === "paper"){
        if(computerChoice === "rock"){
            scoresHeading.textContent = "You win! Paper beats Rock.";
            ++humanScore;
        }else if(computerChoice === "paper"){
            scoresHeading.textContent = "It's a tie!";
        }else{
            scoresHeading.textContent = "You lose! Scissors beats Paper.";
            ++computerScore;
        }
    }else{
        if(computerChoice === "rock"){
            scoresHeading.textContent = "You lose! Rock beats Scissors.";
            ++computerScore;
        }else if(computerChoice === "paper"){
            scoresHeading.textContent = "You win! Scissors beats Paper.";
            ++humanScore;
        }else{
            scoresHeading.textContent = "It's a tie!";
        }
    }

    resultsHuman.textContent = humanScore;
    resultsBot.textContent = computerScore;

    if(humanScore == 5) {
        scoresHeading.textContent = "Congratulations, you won!";
        humanScore = 0;
        computerScore = 0;
    }else if(computerScore == 5){
        scoresHeading.textContent = "The computer wins, you lost!";
        humanScore = 0;
        computerScore = 0;
    }
}

listOfButtons.forEach((button) => {
    button.addEventListener("click", () => {
        let botChoice = getComputerChoice();
        playRound(button.textContent, botChoice);
    });
});