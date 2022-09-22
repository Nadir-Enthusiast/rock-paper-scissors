const serverChoice = document.getElementById("server-choice")
const userChoice = document.getElementById("user-choice")
const result = document.getElementById("result")
const availableChoices = document.querySelectorAll("button")
let currentChoice;
let currentComputer;
var currentResult;

availableChoices.forEach(availableChoices => availableChoices.addEventListener('click', (e) => {
    currentChoice = e.target.id
    userChoice.innerHTML = currentChoice
    computerChooses()
    getResult()
}))

function computerChooses() {
    const choice = Math.floor(Math.random()*3)+1

    if (choice === 1) {
        currentComputer = "rock"
    }
    if (choice === 2) {
        currentComputer = "paper"
    }
    if (choice === 3) {
        currentComputer = "scissors"
    }
    serverChoice.innerHTML = currentComputer
}

function getResult() {
    if(currentComputer === currentChoice) {
        currentResult = "Draw"
    }
    if(currentComputer === "rock" && currentChoice === "scissors") {
        currentResult = "You lose!"
    }
    if(currentComputer === "rock" && currentChoice === "paper") {
        currentResult = "You win!"
    }
    if(currentComputer === "paper" && currentChoice === "rock") {
        currentResult = "You lose!"
    }
    if(currentComputer === "paper" && currentChoice === "scissors") {
        currentResult = "You win!"
    }
    if(currentComputer === "scissors" && currentChoice === "paper") {
        currentResult = "You lose!"
    }
    if(currentComputer === "scissors" && currentChoice === "rock") {
        currentResult = "You win!"
    }
    result.innerHTML = currentResult
}
