let answers = ['Rock', 'Paper', 'Scissors'];
const start = document.querySelector('#start_button');
const start_header = document.querySelector('#start_header');
const main_space = document.querySelector('#main_space')
start.addEventListener('click', createGamePage);

function createGamePage() {
    // Deleting all the start page elements
    start.remove();
    start_header.remove();

    // Adding all the game UI
    const score_container = document.createElement('div');
    score_container.id = 'score_container';
    main_space.appendChild(score_container);

    const your_score = document.createElement('h2');
    your_score.id = 'your_score';
    const computer_score = document.createElement('h2');
    computer_score.id = 'computer_score';
    your_score.textContent = 'You: '
    computer_score.textContent = 'Necromancer: '
    score_container.appendChild(your_score);
    score_container.appendChild(computer_score);

    const buttons_container = document.createElement('div');
    buttons_container.id = 'buttons_container';
    main_space.appendChild(buttons_container);

    const rock = document.createElement('button');
    rock.id = 'rock';
    const paper = document.createElement('button');
    paper.id = 'paper';
    const scissors = document.createElement('button');
    scissors.id = 'scissors';
    rock.textContent = 'Rock';
    paper.textContent = 'Paper';
    scissors.textContent = 'Scissors';
    buttons_container.appendChild(rock);
    buttons_container.appendChild(paper);
    buttons_container.appendChild(scissors);
}

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
