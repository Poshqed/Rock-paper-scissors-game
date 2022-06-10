const choices = document.querySelectorAll('.choice');
const score = document.querySelector('.js-score');
const result = document.querySelector('.js-result');
const restart = document.querySelector('.js-restart-btn');
const modal = document.querySelector('.js-modal');
const scoreBoard = {
    player: 0,
    computer: 0
}


//Play the game - Main Function
function playGame(e) {

    restart.style.display = 'inline-block';
    const playerChoice = (e.target.id);
    const computerChoice = getComputerChoice();

    const winner = getWinner(playerChoice, computerChoice);
    displayWinner(winner, computerChoice);
}

//Computer's choice
function getComputerChoice() {
    const rand = Math.random();
    if (rand < 0.34) {
        return 'rock';
    } else if (rand <= 0.67) {
        return 'paper';
    } else {
        return 'scissors';
    }
}

// Determine winner
function getWinner(p, c) {
    if (p === c) {
        return 'draw';
    } else if (p === 'rock') {
        if (c === 'paper') {
            return 'computer';
        } else {
            return 'player';
        }
    } else if (p === 'paper') {
        if (c === 'scissors') {
            return 'computer';
        } else {
            return 'player';
        }
    } else if (p === 'scissors') {
        if (c === 'rock') {
            return 'computer';
        } else {
            return 'player'
        }
    }
}

//display winner
function displayWinner(winner, computerChoice) {
    if (winner === 'player') {
        scoreBoard.player++;
        result.innerHTML = `
        <h1 class="text-win">You win!</h1>
        <i class="fas fa-hand-${computerChoice} fa-10x"></i>
        <p> Computer chose <strong>${computerChoice.charAt(0).toUpperCase() + computerChoice.slice(1)}</strong></p>
        `;
    } else if (winner === 'computer') {
        scoreBoard.computer++;
        result.innerHTML = `
        <h1 class="text-lose">You lose!</h1>
        <i class="fas fa-hand-${computerChoice} fa-10x"></i>
        <p> Computer chose <strong>${computerChoice.charAt(0).toUpperCase() + computerChoice.slice(1)}</strong></p>
        `;
    } else {
        result.innerHTML = `
        <h1>Its a draw!</h1>
        <i class="fas fa-hand-${computerChoice} fa-10x"></i>
        <p> Computer chose <strong>${computerChoice.charAt(0).toUpperCase() + computerChoice.slice(1)}</strong></p>
        `;
    }

    //Show the score
    score.innerHTML = `<p class="score"> Player: ${scoreBoard.player}</p>
                                      <p class="score"> Computer: ${scoreBoard.computer}</p>`

    modal.style.display = 'block'
}

//clear modal after displayWinner
function clearModal(e) {
    if (e.target === modal) {
        modal.style.display = 'none';
    }
}


//Restart the game
function restartGame(e) {
    scoreBoard.player = 0;
    scoreBoard.computer = 0;
    score.innerHTML = `<p class="score"> Player: 0</p>
    <p class="score"> Computer:0</p>`
}

// All Event Listeners
choices.forEach(choice => choice.addEventListener('click', playGame));
window.addEventListener('click', clearModal);
restart.addEventListener('click', restartGame);