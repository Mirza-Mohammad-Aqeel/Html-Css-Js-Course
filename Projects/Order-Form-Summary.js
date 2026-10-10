
const submit = document.getElementById("submitgift")
const wrapped = document.getElementById("wrappedornot")

const paypal = document.getElementById("paypal")
const card = document.getElementById("card")
const cash = document.getElementById("cash")

submit.onclick = function () {
    gift = document.getElementById("itemname").value;
    gift = gift.trim()

    document.getElementById("numberone").textContent = `Your gift = ${gift}`;
    if (wrapped.checked) {
        document.getElementById("numbertwo").textContent = `Is the Gift wrapped = True`;
    } else {         
        document.getElementById("numbertwo").textContent = `Is the Gift wrapped = False`;
    }

    if (paypal.checked) {
        document.getElementById("numberthree").textContent = `Payment Method = Paypal`;
    } else if (card.checked) {
        document.getElementById("numberthree").textContent = `Payment Method = Card`;
    } else if (cash.checked) {
        document.getElementById("numberthree").textContent = `Payment Method = Cash`;
    } else {
        document.getElementById("numberthree").textContent = `Payment Method = Not Selected`;

    }
}