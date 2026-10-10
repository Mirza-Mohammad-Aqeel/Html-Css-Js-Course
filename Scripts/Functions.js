
function greeting(name) {
    console.log(`Nice to meet you , ${name}`);
}

greeting("aqeel");
greeting("ibaad");
greeting("ghanim");


function add(num1 , num2) {
    console.log(`Number 1 = ${num1} added Up with Number 2 = ${num2} is ${num1 + num2}`)

}
function subtract(num1 , num2) {
    console.log(`Number 1 = ${num1} subtracted from  Number 2 = ${num2} is ${num1 - num2}`)

}
function multiply(num1 , num2) {
    console.log(`Number 1 = ${num1} multiplied with Number 2 = ${num2} is ${num1 * num2}`)

}
function divide(num1 , num2) {
    console.log(`Number 1 = ${num1} divided from Number 2 = ${num2} is ${num1 / num2}`)

}

function isEven (number) {
    
    if (number % 2 == 0) {
        console.log(`Your number = ${number} is Even`)
    } else {
        console.log(`Your number = ${number} is Odd`)
    }
}

function isPositive (number) {
    
    if (number > 0) {
        console.log(`Your number = ${number} is Positive`)
    } else {
        console.log(`Your number = ${number} is Negative`)
    }
}

function validEmail(email) {

    email.includes("@") ? console.log(`Your email = ${email} is Valid`) : console.log(`Your email = ${email} is Not valid`)
}

add(4,9)
subtract(2,8)
multiply(5,3)
divide(8,3)

isEven(5)
isPositive(8)

validEmail("max@gmail.com")
validEmail("luna.com")


 

