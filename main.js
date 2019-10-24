//Element nodes
playerScoreText = document.getElementById('playerScoreText');
computerScoreText = document.getElementById('computerScoreText');
resetButton = document.getElementById('resetBtn');

//Event Listeners
const buttons = document.getElementsByClassName('btn-choice');

for (let i = 0; i<buttons.length; i++) {
    buttons[i].addEventListener('click', function(event) {
        let playerChoice = event.currentTarget.getAttribute('data-option');
        playRound(playerChoice);
    });
}

resetButton.addEventListener('click', resetGame)


//Variables for the game
const choices = ["Rock", "Paper", "Scissors"];
var playerScore = 0;
var computerScore = 0;
const winningScore = 10;


//Play a round of Rock, Paper, Scissors
function playRound(playerChoice) {
    let randomIndex = Math.floor(Math.random() * (choices.length));
    let computerChoice = choices[randomIndex];
    console.log(playerChoice);
    console.log(computerChoice);
    if (computerChoice === playerChoice) {
        console.log('tie');
        resultText("It's a Tie!", "Both Players Choose " + playerChoice)
        return;
    }

    if (computerChoice === "Rock" && playerChoice === "Paper") {
        console.log("Computer Lost");
        resultText("You Won", "Paper Covers Rock")
        playerScore += 1;
    } else if (computerChoice === "Rock" && playerChoice === "Scissors") {
        console.log("You Lost");
        resultText("Computer Won", "Rock Smashes Scissors")
        computerScore += 1;
    } else if (computerChoice === "Scissors" && playerChoice === "Rock") {
        console.log("Computer Lost");
        resultText("You Won", "Rock Smashes Scissors")
        playerScore += 1;
    } else if (computerChoice === "Scissors" && playerChoice === "Paper") {
        console.log("You Lost");
        resultText("Computer Won", "Scissors Cuts Paper")
        computerScore += 1;
    } else if (computerChoice === "Paper" && playerChoice === "Rock") {
        console.log("You Lost");
        resultText("Computer Won", "Paper Covers Rock")
        computerScore += 1;
    } else if (computerChoice === "Paper" && playerChoice === "Scissors") {
        console.log("Computer Lost");
        resultText("You Won", "Scissors Cuts Paper")
        playerScore += 1;
    }

    playerScoreText.innerHTML = playerScore;
    computerScoreText.innerHTML = computerScore;

    gameOver();
}

//Update the text between the scores with the result of the round and with what each player played
function resultText(resultText, resultPlays) {
    document.getElementById('roundResultPlays').innerHTML = resultPlays
    document.getElementById('roundResultText').innerHTML = resultText
}

//Reset scores and text elements to 0
function resetGame() {
    playerScore = 0;
    computerScore = 0;
    document.getElementById('roundResultPlays').innerHTML = ""
    document.getElementById('roundResultText').innerHTML = ""
    playerScoreText.innerHTML = playerScore
    computerScoreText.innerHTML = computerScore
}

//Alert the player whether they won or not after someone reaches 10 points
function gameOver() {
    if (playerScore === winningScore) {
        alert("Player Won");
        resetGame();
    }
    else if (computerScore === winningScore) {
        alert("Computer Won");
        resetGame();
    }
}