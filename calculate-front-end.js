const calculate = require('./calculate-back-end.js');


const num1 = process.argv[2]; //first number
const operation = process.argv[3]; //first half of argument
const num2 = process.argv[5]; //last number
const secondWord = process.argv[4]; //second half of argument


switch (secondWord) {
  case secondWord === undefined:
    console.log(num1, num2, Number(operation + secondWord) )
    break;

  default:
    console.log(num1, num2, operation)

}

let result = calculate(num1, num2, operation)
console.log(result)