
const contact_book = [
    {
        name:"Rahim",
        age:40,
        contact: {
            phone:103333308083,
            email:"abdulrahim@gmail.com"
        }

    },
    {
        name:"Hina",
        age:38,
        contact: {
            phone:103562901,
            email:"mahezehra@gmail.com"
        }

    },
    {
        name:"Zeeshan",
        age:45,
        contact: {
            phone:201939193,
            email:"zeeshanali@gmail.com"
        }

    }

]

function display (element) {
    console.log(element)
}

function oldpeople(element) {
    element > 40
}

contact_book.forEach(display)

people_old = contact_book.age.fitler(oldpeople)

console.log(people_old)

console.log(contact_book.sort())

year = Number(window.prompt("-- Enter the Year you were Born : "))
month = Number(window.prompt("-- Enter the month you were born : "))
day = Number(window.prompt("-- Enter the day you were born : "))

let date = new Date();
let m = date.getMonth();
let d = date.getDate()

let made = `${year}-${month}-${day}`;

age = date - made;
age_m = m - month;
age_d = d - day
console.log(`You are ${age} years, ${age_m} months, ${age_d} days old`)

function createCounter () {
    
    let count = 0 
    function increment () {
        count ++;
        console.log(count)
    }

    function decrement () {
        count --;
        console.log(count)
    }

    function get() {
        console.log(count)
    }


}

createCounter()
createCounter(increment())
createCounter(decrement())
createCounter(get())

for(let i = 5; i < 1; i++) {
    console.log(i)
}


console.log("Hello")

setTimeout(console.log("Wow, you waited a minute"), 60000)

