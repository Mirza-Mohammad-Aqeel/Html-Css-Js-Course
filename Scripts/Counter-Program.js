
const increaseBtn = document.getElementById("one");
const decreaseBtn = document.getElementById("two");
const resetBtn = document.getElementById("three");

const countlabel = document.getElementById("count")

let count = 0;

increaseBtn.onclick = function () {
    count++;
    countlabel.textContent = count;
}
decreaseBtn.onclick = function () {
    count--;
    countlabel.textContent = count;
}
resetBtn.onclick = function () {
    count = 0
    countlabel.textContent = count;
}