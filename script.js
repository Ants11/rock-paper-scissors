let computerScore = 0;
let playerScore = 0;
let roundsPlayed = 1;

const rockBtn = document.querySelector("#rock");
const paperBtn = document.querySelector("#paper");
const scissorsBtn = document.querySelector("#scissors");
const resetBtn = document.querySelector("#reset");

rockBtn.addEventListener('click', function() {
    game('ROCK');
});

paperBtn.addEventListener('click', function() {
    game('PAPER');
});

scissorsBtn.addEventListener('click', function() {
    game('SCISSORS');
});

resetBtn.addEventListener('click', function() {
    resetGame();
});

function playRound(playerSelection, computerSelection) {
    if (
        (playerSelection == "ROCK" && computerSelection == "ROCK") ||
        (playerSelection == "PAPER" && computerSelection == "PAPER") ||
        (playerSelection == "SCISSORS" && computerSelection == "SCISSORS")
    ) {
        document.getElementById("round-text").textContent = "It's a tie!";
        document.querySelector(".round-display").style.backgroundColor = "rgb(232, 229, 229)";
        return;
    } else if (
        (playerSelection == "ROCK" && computerSelection == "SCISSORS") ||
        (playerSelection == "PAPER" && computerSelection == "ROCK") ||
        (playerSelection == "SCISSORS" && computerSelection == "PAPER")
    ) {
        playerScore++;
        document.getElementById("round-text").textContent = `You win! ${capitalizeFirstLetter(playerSelection)} beats ${capitalizeFirstLetter(computerSelection)}!`;
        document.querySelector(".round-display").style.backgroundColor = "rgb(75, 187, 18)";
        return playerScore;
    } else if (
        (computerSelection == "ROCK" && playerSelection == "SCISSORS") ||
        (computerSelection == "PAPER" && playerSelection == "ROCK") ||
        (computerSelection == "SCISSORS" && playerSelection == "PAPER")
    ) {
        computerScore++;
        document.getElementById("round-text").textContent = `You lose! ${capitalizeFirstLetter(computerSelection)} beats ${capitalizeFirstLetter(playerSelection)}!`;
        document.querySelector(".round-display").style.backgroundColor = "rgb(212, 36, 36)";
        return computerScore;
    }
}

function updateGameScore(playerScore, computerScore) {
    document.getElementById("player-score").textContent = playerScore;
    document.getElementById("computer-score").textContent = computerScore;
    if(playerScore || computerScore == 5) {
        if(playerScore == 5) {
            document.getElementById("round-text").textContent = "Player Wins!";
        }
        else if(computerScore == 5) {
            document.getElementById("round-text").textContent = "Computer Wins!";
        }
    }
}

function game(player) {
    if(computerScore < 5 && playerScore < 5) {
        const playerSelection = player;
        const computerSelection = getComptuerChoice();
        playRound(playerSelection, computerSelection);
        updateGameScore(playerScore, computerScore);
        roundsPlayed++;
        document.getElementById("round-count").textContent = roundsPlayed;
    }
}

function resetGame() {
    playerScore = 0;
    computerScore = 0;
    roundsPlayed = 1;
    document.getElementById("player-score").textContent = playerScore;
    document.getElementById("computer-score").textContent = computerScore;
    document.getElementById("round-count").textContent = roundsPlayed;
    document.getElementById("round-text").textContent = "Pick your choice";
    document.querySelector(".round-display").style.backgroundColor = "rgb(232, 229, 229)";
}

function getComptuerChoice() {
    let randomChoice = Math.floor((Math.random() * 3) + 1);
    switch(randomChoice) {
        case 1:
            return "ROCK";
        case 2:
            return "PAPER";
        case 3:
            return "SCISSORS";
    }
}

function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase()
  }