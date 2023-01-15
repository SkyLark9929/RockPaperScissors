let answers = ['Rock', 'Paper', 'Scissors']

function getComputerChoice() {
    let index = Math.floor(Math.random() * answers.length);
    return answers[index];
}

function getPlayerChoice() {
    let player_choice = prompt('Make your choice!');
    if (!answers.includes(player_choice)) {
        console.log('Error: You can only choose between Rock, Paper and Scissors!');
        return ('Error');
    }
    else {
        return player_choice;
    }
}

function Round(playerSelection, computerSelection) {
    if (playerSelection == computerSelection) {
        return "Nill"
    }
    else if (playerSelection == 'Error') {
        return 'Reload the page'
    }
    else if ((playerSelection == "Scissors" && computerSelection == 'Paper') || (playerSelection == 'Rock' && computerSelection == 'Scissors') || 
    (playerSelection == 'Paper' && computerSelection == 'Rock')){
            return "That's a victory!" 
    }
    else {
        return "That's a defeat!"
    }
}


let pl_choice = getPlayerChoice();
let cm_choice = getComputerChoice();

console.log(Round(pl_choice, cm_choice))