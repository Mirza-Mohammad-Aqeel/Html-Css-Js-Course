

const calculate = document.getElementById("calctemp")
const celtofar = document.getElementById("celtofar")
const fartocel = document.getElementById("fartocel")


calculate.onclick = function () {
    temp = document.getElementById("temp").value;

    if(celtofar.checked) {
        document.getElementById("value").textContent = `${temp} ° C into Farhen-hiet = ${Math.round(temp * 9/5 + 32)} ° F`;
    } else if (fartocel.checked) {
        document.getElementById("value").textContent = `${temp} ° F into Celsius = ${Math.round(temp - 32 * 5/9)} ° C`;
    } else {
        document.getElementById("value").textContent = `Choose a Valid conversion Method`;
    }
}