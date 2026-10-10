
const numbers = [12,5,8,21,44,7,30,16];

displayeachnum = (element) => console.log(element)

evennums = (element) => element % 2 == 0;

greater15 = (element) => element > 15;

squared = (element) => element ** 2;

summed = (el1, el2) => el1 + el2;

numbers.forEach(displayeachnum)

evens = numbers.filter(evennums)
evens.forEach(displayeachnum)

greaterthan15 = numbers.filter(greater15)
greaterthan15.forEach(displayeachnum)

squares = numbers.map(squared)
squares.forEach(displayeachnum)

sum = numbers.reduce(summed)
console.log(`Sum of All the Numbers = ${sum}`)

