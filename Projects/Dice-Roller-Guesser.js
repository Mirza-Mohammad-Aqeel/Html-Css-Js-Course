
const submitname = document.getElementById("submitname")
const roll = document.getElementById("roll")


submitname.onclick = function () {
    name = document.getElementById("urname").value;
    document.getElementById("greeting").textContent = `Hello ${name} | Dice Roller`
    document.getElementById("label").style.display = "";
    document.getElementById("urnum").style.display = "";
    document.getElementById("roll").style.display = "";

}

roll.onclick = function () {
    made_num = Math.floor(Math.random() * 6) + 1;
    user_number = document.getElementById("urnum").value;

    made_num == user_number ? document.getElementById("value").textContent = `Your guess = ${user_number} is Equal to the guessed number = ${made_num} ` : document.getElementById("value").textContent = `Your guess = ${user_number} is Not equal to the guessed number = ${made_num} ` 

}