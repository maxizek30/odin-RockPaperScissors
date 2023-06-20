//add event listeners to buttons
let btns = document.querySelectorAll('button');
for (i of btns) {
    i.addEventListener('click', game);
  }
//keep count of stuff
let playerCount = 0;
let compCount = 0;









function getComputerChoice() {
    switch (Math.floor(Math.random() * 3)) {
        case 0:
            return "Rock";
            break;
        case 1:
            return "Paper";
            break;
        default:
            return "Scissors";
    }
}
function playRound(playerSelection, computerSelection) {
    switch (playerSelection.toLowerCase()) {
        case "rock":
            switch (computerSelection) {
                case "Rock":
                    return "tie you both chose rock"
                    break;
                case "Paper":
                    compCount++;
                    return "You lose! paper beats rock"
                    break;
                default:
                    playerCount++;
                    return "You win! rock beats scissors"
            }
            break;
        case "paper":
            switch (computerSelection) {
                case "Rock":
                    playerCount++;
                    return "You win! paper beats rock"
                    break;
                case "Paper":
                    return "tie you both chose paper"
                    break;
                default:
                    compCount++;
                    return "You lose, Scissors beats paper"
            }
            break;
        case "scissors":
            switch (computerSelection) {
                case "Rock":
                    compCount++;
                    return "You lose, rock beats scissors"
                    break;
                case "Paper":
                    playerCount++;
                    return "you win! scissors beats paper"
                    break;
                default:
                    return "tie, you both chose scissors "
            }
            break;
        default: 
            return "Player did not make a selection"
    }
}
function game(e) {
    //get playerSelection from click
    const playerSelection = e.target.getAttribute('id');

    //play a round 
    let str = playRound(playerSelection, getComputerChoice());
    const result = document.querySelector('.Result');
    result.innerHTML = str;

    //print scores
    const scores = document.querySelector('.Scores');
    scores.innerHTML = "You: " + playerCount + " Computer: " + compCount;

    //if someone won!
    if (compCount == 5) {
        const winner = document.querySelector(".Winner");
        winner.innerHTML = "Take the L, the computer is the winner and will take your job";
    }
    if (playerCount == 5) {
        const winner = document.querySelector(".Winner");
        winner.innerHTML = "Big W, the computer has nothing on you"
    }
};




