
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
                    return "You lose! paper beats rock"
                    break;
                default:
                    return "You win! rock beats scissors"
            }
            break;
        case "paper":
            switch (computerSelection) {
                case "Rock":
                    return "You win! paper beats rock"
                    break;
                case "Paper":
                    return "tie you both chose paper"
                    break;
                default:
                    return "You lose, Scissors beats paper"
            }
            break;
        case "scissors":
            switch (computerSelection) {
                case "Rock":
                    return "You lose, rock beats scissors"
                    break;
                case "Paper":
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

   

  const playerSelection = "ROcK";
  const computerSelection = getComputerChoice();
  console.log(playRound(playerSelection, computerSelection));