//Scoreboard
//Player selects a hand
//Computer chooses random hand
//Compare hands
//If user wins
//  Add to score
//  Update scoreboard number
//  Display Player Wins text
//If Computer wins
//  Add to score
//  Update scoreboard number
//  Display Computer Wins text
//If tie
//  Display Tie text
//Toggle results box

//Scoreboard
let userScoreCount = 0
let computerScoreCount = 0

//HTML Selectors
let userScore = document.getElementById('userScore')
let computerScore = document.getElementById('computerScore')
let rock = document.getElementById('rock')
let paper = document.getElementById('paper')
let scissors = document.getElementById('scissors')
let resultText = document.getElementById('resultText')
let resetButton = document.getElementById('resetButton')
let handSelect = document.getElementById('handSelect')
let handReveal = document.getElementById('handReveal')
let userResult = document.getElementById('userResult')
let computerResult = document.getElementById('computerResult')

//Functions
//Get computer choice
function getComputerChoice() {
    let randomNumber = Math.floor(Math.random() * 3)
    if (randomNumber === 0) {
        return 'rock'
    } else if (randomNumber === 1) {
        return 'paper'
    } else {
        return 'scissors'
    }
}

//Compare hands
function compareHands(userChoice, computerChoice) {
    if (userChoice === computerChoice) {
        return 'tie'
    } else if (
        (userChoice === 'rock' && computerChoice === 'scissors') ||
        (userChoice === 'paper' && computerChoice === 'rock') ||
        (userChoice === 'scissors' && computerChoice === 'paper')
    ) {
        return 'user'
    } else {
        return 'computer'
    }
}

//Update scoreboard
function updateScoreboard(result) {
    if (result === 'user') {
        userScoreCount++
        userScore.innerHTML = userScoreCount
    } else if (result === 'computer') {
        computerScoreCount++
        computerScore.innerHTML = computerScoreCount
    }
}

//Display result
function displayResult(result, userChoice, computerChoice) {
    handSelect.style.display = 'none'
    handReveal.style.display = 'flex'
    handReveal.style.flexDirection = 'column'
    handReveal.style.alignItems = 'center'
    handReveal.style.justifyContent = 'center'

    if (userChoice === 'rock') {
        userResult.src = './resources/rock.png'
    } else if (userChoice === 'paper') {
        userResult.src = './resources/paper.png'
    } else {
        userResult.src = './resources/scissors.png'
    }

    if (computerChoice === 'rock') {
        computerResult.src = './resources/rock.png'
    } else if (computerChoice === 'paper') {
        computerResult.src = './resources/paper.png'
    } else {
        computerResult.src = './resources/scissors.png'
    }

    if (result === 'user') {
        resultText.innerHTML = `You Win! ${userChoice} beats ${computerChoice}`
    } else if (result === 'computer') {
        resultText.innerHTML = `You Lose! ${computerChoice} beats ${userChoice}`
    } else {
        resultText.innerHTML = `It's a Tie! You both chose ${userChoice}`
    }
}

//Play Game
function playGame(userChoice) {
    let computerChoice = getComputerChoice()
    let result = compareHands(userChoice, computerChoice)
    updateScoreboard(result)
    displayResult(result, userChoice, computerChoice)
}

//Reset Game
function resetGame() {
    handSelect.style.display = 'flex'
    handSelect.style.flexDirection = 'column'
    handSelect.style.justifyContent = 'center'
    handSelect.style.alignItems = 'center'
    handReveal.style.display = 'none'
}

//Event Listeners
    //Play Game
    rock.addEventListener('click', () => playGame('rock'))
    paper.addEventListener('click', () => playGame('paper'))
    scissors.addEventListener('click', () => playGame('scissors'))

    //Reset Game
    resetButton.addEventListener('click', () => resetGame())
