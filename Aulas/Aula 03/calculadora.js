let operator = '-'
let number1 = 7
let number2 = 3

switch (operator) {
    case '+':
        result = number1 + number2;
        break;
    case '-':
        result = number1 - number2;
        break;
    case '/':
        result = number1 / number2;
        break;
    case '*':
        result = number1 * number2;
        break;
    default:
        result = 'Invalid operator';
}

console.log(result)