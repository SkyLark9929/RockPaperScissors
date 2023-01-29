let answers = ['Rock', 'Paper', 'Scissors']

function getComputerChoice() {
    let index = Math.round(Math.random() * answers.length);
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

function playRound(playerSelection, computerSelection) {
    if (playerSelection == computerSelection) {
        return 0
    }
    else if (playerSelection == 'Error') {
        return 'Reload the page'
    }
    else if ((playerSelection == "Scissors" && computerSelection == 'Paper') || (playerSelection == 'Rock' && computerSelection == 'Scissors') || 
    (playerSelection == 'Paper' && computerSelection == 'Rock')){
            return 1
    }
    else {
        return -1
    }
}


function game(){
    let score = 0
    for (let i = 0; i < 5; i++) {
        let pl_choice = getPlayerChoice();
        let cm_choice = getComputerChoice();
        score += playRound(pl_choice, cm_choice)
        console.log(`Your choice ${pl_choice} \nComputer choice:${cm_choice} \nCurrent score: ${score}`)
    }
    if (score >= 1){
        return 'VICTORY'
    }
    else if (score < 0) {
        return 'DEFEAT'
    }
    else {
        return "NILL"
    }
}

result = game()
console.log(result);
alert(result)