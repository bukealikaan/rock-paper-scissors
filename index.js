const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const choices = ['rock', 'paper', 'scissors'];
const numbers = [1,2,3];

function getComputerChoice() {
    const randomChoice = choices[Math.floor(Math.random() * choices.length)];
    return randomChoice;
}

function handleUserChoice(choice){
    if (choices.includes(choice)) {
        return choice.toLowerCase();
    }
    else {
        if (choice.toLowerCase() === 'exit') {
            console.log("Thanks for playing! Goodbye!");
            process.exit(0);
        }
        else {
            console.log("Invalid choice. Please enter 'rock', 'paper', or 'scissors'.");
            process.exit(0);
        }
    }
}

function determineWinner(userChoice, computerChoice) {
    userNumber = choices.indexOf(userChoice) + 1;
    computerNumber = choices.indexOf(computerChoice) + 1;

    if (userNumber === computerNumber) {
        console.log(`It's a tie! Both chose ${userChoice}.`);
    }
    else if (userNumber - computerNumber === 1 || userNumber - computerNumber === -2) {
        console.log(`You win! ${userChoice} beats ${computerChoice}.`);
    }
    else if (userNumber - computerNumber === -1 || userNumber - computerNumber === 2) {
        console.log(`You lose! ${computerChoice} beats ${userChoice}.`);
    }
}

console.log("\nWelcome To The Rock Paper Scissors Game!");
console.log("Instructions: Type 'rock', 'paper', or 'scissors' to play. Type 'exit' to quit the game.\n");

rl.question("Enter your choice (rock/paper/scissors): ", (userChoice) => {
    const lowerUser = handleUserChoice(userChoice);
    if (!lowerUser) return;

    const lowerComp = getComputerChoice();
    determineWinner(lowerUser, lowerComp);

    rl.close();
});