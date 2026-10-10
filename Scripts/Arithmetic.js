

let num1 = 9;
let num2 = 8;

let sum = num1 + num2;
let difference = num1 - num2;
let product = num1 * num2;
let quotient = num1 / num2;


document.getElementById("number1").textContent = `Number 1 = ${num1}`;
document.getElementById("number2").textContent = `Number 2 = ${num2}`;

document.getElementById("sum").textContent = `Sum = ${sum}`;
document.getElementById("diff").textContent = `Difference = ${difference}`;
document.getElementById("pr").textContent = `Product = ${product}`;
document.getElementById("qo").textContent = `Quotient = ${quotient}`;