const prompt= require("prompt-sync") ({signt: true});

let result;
const operator= prompt('enter operator (either +, -, * or / ): ');

const number = parseFloat (prompt('enter first number: '));
const number1 = parseFloat (prompt('enter second number: '));

switch (operator) {
    case '+': 
            result = number + number1;
            console.log(`${number} + ${number1} = ${result}`);
        break;
    case '-': 
            result = number + number1;
            console.log(`${number} - ${number1} = ${result}`);
        break;
    case '*': 
            result = number + number1;
            console.log(`${number} * ${number1} = ${result}`);
        break;
    case '/': 
            result = number + number1;
            console.log(`${number} / ${number1} = ${result}`);
        break;
    default:
        console.log(`invalid number`);
        break;
}
    