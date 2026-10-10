
function process_task(func) {
   func() 
}

function one() {
    console.log("Hello!")
}

function two() {
    console.log("Bye Bye!")
}

function three() {
    console.log("I Hate You!")
}

process_task(one)
process_task(two)
process_task(three)






