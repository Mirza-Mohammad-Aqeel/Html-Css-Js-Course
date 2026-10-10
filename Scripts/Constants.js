
const PI = 3.14;
let radius;
let circumference;

document.getElementById("calc_circum").onclick = function () {
    radius = document.getElementById("radius").value;

    radius = Number(radius);
    circumference = 2 * PI * radius

    Math.round(circumference)
    document.getElementById("circumference").textContent = `The circumference of your Circle is ${circumference} cm`;
}