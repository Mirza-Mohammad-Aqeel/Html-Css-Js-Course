
const adultornot = document.getElementById("adultornot")
const time = document.getElementById("time")

document.getElementById("submit").onclick = function () {
    a_age = document.getElementById("enteredage").value;
    a_time = document.getElementById("enteredtime").value;
    a_age >= 18 ? adultornot.textContent = `Your an adult` : adultornot.textContent = `Your still a child`;
    a_time >= 12 ? time.textContent = `It is afternoon` : time.textContent = `It is still morning`;
} 