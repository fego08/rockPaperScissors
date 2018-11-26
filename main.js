let resultMsg = "";
let playerScore = 0;
let computerScore = 0;
function computerPlay() {
    randNumber = Math.floor(Math.random() * 3);
    if (randNumber == 0) return "rock";
    else if (randNumber == 1) return "paper";
    else return "scissors";
}
function playRound(playerSelection, computerSelection) {
    if (playerSelection == computerSelection) {
        resultMsg = "Tie, try again!";
        return "tie";
    }
    else if (playerSelection == "rock") {
        if (computerSelection == "paper") {
            resultMsg = "Paper beats rock, you lose!";
            return "lose";
        }
        else if (computerSelection == "scissors") {
            resultMsg = "Rock beats scissors, you win!";
            return "win";
        }
    }
    else if (playerSelection == "paper") {
        if (computerSelection == "rock") {
            resultMsg = "Paper beats rock, you win!";
            return "win";
        }
        else if (computerSelection == "scissors") {
            resultMsg = "Scissors beat paper, you lose!";
            return "lose"
        }
    }
    else if (playerSelection == "scissors") {
        if (computerSelection == "rock") {
            resultMsg = "Rock beats scissors, you lose!";
            return "lose";
        }
        else if (computerSelection == "paper") {
            resultMsg = "Scissors beat paper, you win1";
            return "win"
        }
    }
}
function showScore() {
    const roundResult = document.getElementById("roundResult");
    const playerTotal = document.getElementById("playerTotal");
    const computerTotal = document.getElementById("computerTotal");
    const finalResult = document.getElementById("finalResult")

    finalResult.textContent = "";

    roundResult.textContent = resultMsg;
    playerTotal.textContent = "Player Score: " + playerScore;
    computerTotal.textContent = "Computer Score: " + computerScore;

    if (playerScore === 5) {
        finalResult.textContent = "You win by beating the computer ${playerScore} to ${computerScore}!";
        playerScore = 0;
        computerScore = 0;
    }
    else if (computerScore === 5) {
        finalResult.textContent = "Computer wins by beating you ${computerScore} to ${playerScore}!";
        playerScore = 0;
        computerScore = 0;
    }
}
window.onload = function() {
	const buttons = document.querySelectorAll('button');
	buttons.forEach(function(button) {
		button.addEventListener('click', function(e) {
			let playerChoice = e.target.id;
			console.log('player choice: ' + playerChoice);
			let computerChoice = computerPlay();
			console.log('computer choice: ' + computerChoice);
			let result = playRound(playerChoice, computerChoice);
			console.log('result: ' + result);

			if (result === "win") {
				playerScore++;
			} else if (result === "lose") {
				computerScore++;
			}
			showScore();
		});
	});
}