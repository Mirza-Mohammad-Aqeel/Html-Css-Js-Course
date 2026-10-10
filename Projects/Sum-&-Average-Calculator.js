
let numbers = [];

const number = document.getElementById("number")
const add = document.getElementById("add")
const calc_sum = document.getElementById("calcsum")
const calc_avg = document.getElementById("calcaverage")

add.onclick = function () {
    urnumber = number.value;
    numbers.push(urnumber);
    document.getElementById("myLabel").textContent = `Your number = ${urnumber} has been Added into the Numbers list`;

}

calc_sum.onclick = function () {
    let sum = 0;
    for (num of numbers) {
        sum += num;
    }

    document.getElementById("myLabel").textContent = `Sum = ${i}`;
}

calc_avg.onclick = function () {
    let i = 0;
    let numofvalues = numbers.length;
    for (num of numbers) {
        i += num;
    }

    document.getElementById("myLabel").textContent = `Sum = ${i/numofvalues}`;
}

