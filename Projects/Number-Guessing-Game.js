
const guess = document.getElementById("guess")
const number = document.getElementById("number")
const result = document.getElementById("result")

let secret = Math.floor(Math.random() * 100 + 1)

guess.onclick = function () {
    user_guess = number.value;
    if (user_guess > secret) {
        result.textContent = `Too High - Try again`;
    } else if (user_guess < secret) {
        result.textContent = `Too Low - Try again`;
    } else if (user_guess == secret) {
        result.textContent = `Correct, the number was ${secret}`;
    }
}