
const urnumber = document.getElementById("num");
const makecountdown = document.getElementById("givenum");
const label = document.getElementById("mylabel");

makecountdown.onclick = function () {
    number = urnumber.value;
    for (let i = number; i = 0; i--) {
        label.textContent = i;
    }
}