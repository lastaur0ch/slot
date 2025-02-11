const prompt = require("prompt-sync")();

const ROWS = 3;
const COLS = 3;

const SYMBOLS_COUNT = {
    A: 2,
    B: 4,
    C: 6,
    D: 8
}

const SYMBOLS_VALUES = {
    A: 5,
    B: 4,
    C: 3,
    D: 2
}


const deposit = () => {
    while(true) {
        const depositAmount = prompt("Enter a deposit amount: ");
        const numberDepositAmount = parseFloat(depositAmount);

        if (isNaN(numberDepositAmount) || numberDepositAmount <= 0) {
            console.log("Invalid deposit amount, try again!")
        } else {
            return numberDepositAmount;
        }
    }
    
};

const getNumberOfLines = () => {
    while(true) {
        const lines = prompt("Enter the number of lines to bet on (1-3): ");
        const numberOfLines = parseFloat(lines);

        if(isNaN(numberOfLines) || numberOfLines <= 0 || numberOfLines >3) {
            console.log("Invalid number of lines. Must be between 1 and 3. Try again!")
        } else {
            return numberOfLines;
        }
    }
};

const getBet = (balance, lines) => {
    while(true) {
        const bet = prompt("Enter the bet: ");
        const numberBet = parseFloat(bet);

        if (isNaN(numberBet) || numberBet <= 0 || numberBet > balance/lines) {
            console.log("Invalid bet. Try again!");
        } else {
            return numberBet;
        }
    }
};

let balance = deposit();
const numberOfLines = getNumberOfLines();
const bet = getBet(balance, numberOfLines);
// console.log(depositAmount);