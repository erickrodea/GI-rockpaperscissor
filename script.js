//get my buttons from html
const rock = document.getElementById('rock');
const paper = document.getElementById('paper');
const scissors = document.getElementById('scissors');
const wins = document.getElementById('wins');
const exit = document.getElementById('exit');
const exitMessage = document.getElementById('exitMessage');

// create variables to keep track of score iteration
let playerScore = 0;
let computerScore = 0;
let ties = 0;


// add event listeners for each button being clicked
rock.addEventListener('click', () => game('rock'));
paper.addEventListener('click', () => game('paper'));
scissors.addEventListener('click', () => game('scissors'));
exit.addEventListener('click', () => clear());

// this is the logic for the game
function game(choice) {
    const player = choice; // Use the passed 'choice' parameter
    // choices for the game
    const choices = ['rock', 'paper', 'scissors'];
    // random generator for computer choice
    const computer = choices[Math.floor(Math.random() * 3)];
    // determines winner based on player choice vs computer choice
    const result = winner(player, computer);
    // displays result for the computer
    displayResult(player, computer, result); // Pass 'player' and 'computer' as parameters
}

//function takes 2 parameters and based on those determines winner
//we also added a counter to keep track of points based on each case
function winner(player, computer) {
    trackers();

    if (player === computer) {
        ties++;
        return "its a tie, noone wins";


    }


    //player chose rock
    switch (player) {
        case 'rock':
            if (computer === 'scissors') {
                playerScore++;
                return "you win;"
            }
            else {
                computerScore++;
                return 'computer wins'

            }

        //player chose paper
        case 'paper':
            if (computer === 'rock') {
                playerScore++;
                return "you win;"
            }
            else {
                computerScore++;
                return 'computer wins'

            }

        //player chose scissors
        case 'scissors':
            if (computer === 'paper') {
                playerScore++;
                return "you win"
            }
            else {
                computerScore++;
                return 'computer wins'

            }


    }

}

// Get HTML elements to display player and computer scores
const playerScoreStorage = document.getElementById('playerScore');
const computerScoreStorage = document.getElementById('computerScore');
const tiesStorage = document.getElementById('ties');


// Function to display the game result and update the scores
function displayResult(player, computer, result) {
    wins.innerHTML = `You chose ${player}, computer chose ${computer}. ${result}`;

    exitMessage.innerHTML = '';

}

// Function to update the player and computer scores on the screen
function trackers() {
    playerScoreStorage.innerHTML = `Player wins: ${playerScore}`;
    computerScoreStorage.innerHTML = `Computer wins: ${computerScore}`;
    tiesStorage.innerHTML = `Ties: ${ties}`;
}
function clear() {
    wins.innerHTML = "";
    exitMessage.innerHTML = "you chose to reset the game ";
    playerScore = 0;
    computerScore = 0;
    ties = 0;

}
