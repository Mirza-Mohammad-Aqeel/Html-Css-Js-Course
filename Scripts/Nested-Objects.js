
const fruits = [{name:"Apple", calories:95},
                {name:"Oranges", calories:93},
                {name:"Kiwis", calories:81},
                {name:"Bananas", calories:97}
];

console.log(fruits[0].name)
console.log(fruits[1].calories)

fruits.push({name:"Grapes", calories:91})

for (fruit of fruits) {
    console.log(fruit)
}

function increaseCalories (cal) {
    cal += 15;
}

function highcalfruits (cal) {
    cal > 100;
}

increased_cal_fruits = fruits.calories.map(increaseCalories)

for (fruit of increased_cal_fruits) {
    console.log(fruit)
}

high_calory_fruits = fruits.calories.filter(highcalfruits)

for (fruit of high_calory_fruits) {
    console.log(fruit)
}


date = new Date();
year = date.getFullYear();
month = date.getMonth();
dayofWeek = date.getDay();
day = date.getDate();
hour = date.getHours();
mins = date.getMinutes();
seconds = date.getSeconds();

function outer () {
    
    let message = "Hello";
    function inner () {
        console.log(message)
    }

    inner();
}

outer();

function one () {
    console.log("This is function 1")
}

function two () {
    console.log("This is function 2")
}

one();

const timeout1 = setTimeout(two, 5000);

