function getComputerChoice(choices) {
    let index = Math.floor(Math.random() * choices.length)
    return choices[index]
}
let answers = ['Rock', 'Paper', 'Scissors']
console.log(getComputerChoice(answers))