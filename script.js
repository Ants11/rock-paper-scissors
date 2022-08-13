let roundResult = "";
let playerScore = 0;
let computerScore = 0;
let roundsPlayed = 0;

function getComptuerChoice() {
    const randomChoice = Math.round((Math.random() * 2) +1);

    switch(randomChoice) {
        case 1:
            return "ROCK";
        case 2:
            return "PAPER";
        case 3:
            return "SCISSORS";
    }
}

function playRound(playerSelection, computerSelection) {
    if (playerSelection == "ROCK" && computerSelection == "ROCK") {
        roundResult = "Tie";
        console.log("It's a tie!");
        return roundResult;
    } else if (
        (playerSelection == "ROCK" && computerSelection == "SCISSORS") ||
        (playerSelection == "PAPER" && computerSelection == "ROCK") ||
        (playerSelection == "SCISSORS" && computerSelection == "PAPER")
    ) {
        playerScore++;
        console.log(`You Win! ${playerSelection} beats ${computerSelection}!`);
        return playerScore;
    } else if (
        (computerSelection == "ROCK" && playerSelection == "SCISSORS") ||
        (computerSelection == "PAPER" && playerSelection == "ROCK") ||
        (computerSelection == "SCISSORS" && playerSelection == "PAPER")
    ) {
        computerScore++;
        console.log(`You Lose! ${computerSelection} beats ${playerSelection}!`);
        return computerScore;
    }
}



function game() {
    const playerSelection = "ROCK";
    roundsPlayed++;
    console.log("Round " + roundsPlayed);
    const computerSelection = getComptuerChoice();
    playRound(playerSelection, computerSelection);
    console.log("Player Score: " + playerScore);
    console.log("Computer Score: " + computerScore);
}

for(i = 0; i < 5; i++) {
    game();
}

