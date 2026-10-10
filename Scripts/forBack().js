
let numbers = [9,4,3,6,1];
let names = ["henry","maria","joey"];
let ages = [60,34,28,19,56];
let words = ["television","apple","photosynthesis","card","processor"];
let prices = [12,18,13,20,11];

function display(element) {
    console.log(element);
}

function increase (element) {
    element += 2;
}

function ucase (element) {
    element = element.toUpperCase();
}

function lcase (element) {
    element = element.toLowerCase();
}

function double (element) {
    element ** 2;
}

function cube (element) {
    element ** 3
}

function odd (element) {
    element % 2 == 1;
}

function old (element) {
    element > 30;
}

function long (element) {
    element.length > 6;
}

function sum(el, el2) {
    return el +  el2
}

function multiply_all (el, el2) {
    return el * el2
}


numbers.forEach(display);
numbers.forEach(increase);
numbers.forEach(display);

names.forEach(display);
names.forEach(ucase);
names.forEach(display);
names.forEach(lcase);
names.forEach(display);

let doubled = [];

doubled = numbers.map(double);
doubled.forEach(display);
tripled = numbers.map(cube);
tripled.forEach(display);

odd_numbers = numbers.filter(odd)
odd_numbers.forEach(display)

old_people = ages.filter(old)
old_people.forEach(display)

long_words = words.filter(long)
long_words.forEach(display)

total = prices.reduce(sum)
console.log(`$ ${total}`)

total = prices.reduce(multiply_all)
console.log(`$ ${total}`)

const hi = () => console.log("hi")
const grounded = () => console.log("You are Grounded")
const gifted = () => console.log("You have been gived a Gift")
const oddnumbers = numbers.filter((element) => element % 2 == 1)


