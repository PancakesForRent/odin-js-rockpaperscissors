console.log("Hello World");

let humanScore = 0;
let computerScore = 0;

function getComputerChoice(){
    const choices = ["rock", "paper", "scissors"];
    return choices[Math.floor(Math.random() * choices.length)];
}

function getHumanChoice(){
    let input = prompt("Enter 'rock', 'paper', or 'scissors'.");

    switch (input.toLowerCase()) {
        case "rock": 
            return "rock";
        case "paper": 
            return "paper";
        case "scissors": 
            return "scissors";
        default: 
            console.log("Wrong input");
            getHumanChoice();
    }
}

function playRound(humanChoice, computerChoice){
    if(humanChoice === "rock"){
        if(computerChoice === "rock"){
            console.log("It's a tie!");
        }else if(computerChoice === "paper"){
            console.log("You lose! Paper beats Rock.");
            computerScore++;
        }else{
            console.log("You win! Rock beats Scissors.");
            humanScore++;
        }
    }else if(humanChoice === "paper"){
        if(computerChoice === "rock"){
            console.log("You win! Paper beats Rock.");
            humanScore++;
        }else if(computerChoice === "paper"){
            console.log("It's a tie!");
        }else{
            console.log("You lose! Scissors beats Paper.");
            computerScore++;
        }
    }else{
        if(computerChoice === "rock"){
            console.log("You lose! Rock beats Scissors.");
            computerScore++;
        }else if(computerChoice === "paper"){
            console.log("You win! Scissors beats Paper.");
            humanScore++;
        }else{
            console.log("It's a tie!");
        }
    }
}

function playGame(){
    for(let i = 0; i < 5; i++){
        console.log(`Round ${i+1}.`);
        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();
        playRound(humanSelection, computerSelection);
    }

    if(humanScore > computerScore){
        console.log("You win!");
    }else if(humanScore < computerScore){
        console.log("You lose!");
    }else{
        console.log("It's a tie!");
    }
}

playGame();