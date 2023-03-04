let answers = ['Rock', 'Paper', 'Scissors'];
const start = document.querySelector('#start_button');
const start_header = document.querySelector('#start_header');
const main_space = document.querySelector('#main_space')
let round_counter = 0;
start.addEventListener('click',createGamePage);
let play_score = 0
let comp_score = 0

function createGamePage() {
    // Deleting all the start page elements
    start.remove();
    start_header.textContent = 'MAKE YOUR CHOICE!';

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
    rock.addEventListener('click', () => {game('Rock')});
    paper.addEventListener('click', () => {game('Paper')});
    scissors.addEventListener('click', () => {game('Scissors')});
}

function getComputerChoice() {
    let index = Math.round(Math.random() * answers.length);
    return answers[index];
}

function getPlayerChoice() {
    rock.addEventListener('click', () => {let player_choice = 'rock'});
    paper.addEventListener('click', () => {let player_choice = 'paper'});
    scissors.addEventListener('click', () => {let player_choice = 'scissors'});
    return player_choice
}

function playRound(playerSelection, computerSelection) {
    if (playerSelection == computerSelection) {
        let score_change = [1, 1]
        return score_change
    }
    else if ((playerSelection == "Scissors" && computerSelection == 'Paper') || (playerSelection == 'Rock' && computerSelection == 'Scissors') || 
    (playerSelection == 'Paper' && computerSelection == 'Rock')){
        let score_change = [1, 0];
        return score_change;
    }
    else {
        let score_change = [0, 1];
        return score_change;
    }
}

function game(pl_choice){
    let cm_choice = getComputerChoice();
    score_change = playRound(pl_choice, cm_choice)
    play_score += score_change[0];
    comp_score += score_change[1];
    round_counter += 1;
    your_score.textContent = `YOU:${play_score}`
    computer_score.textContent = `NECROMANCER:${comp_score}`
    if (round_counter == 5 && play_score > comp_score){
        start_header.textContent = 'VICTORY';
    }
    else if (round_counter == 5 && play_score < comp_score){
        start_header.textContent =  'DEFEAT';
    }
    else if (round_counter == 5){
        start_header.textContent =  "NILL";
    }
}
