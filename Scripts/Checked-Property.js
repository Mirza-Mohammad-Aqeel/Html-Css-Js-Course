
const mycheckbox = document.getElementById("mycheckbox")
const mastercard = document.getElementById("mastercard")
const visa = document.getElementById("visa")
const paypal = document.getElementById("paypal")
const submit = document.getElementById("mysubmit")
const p1 = document.getElementById("one0")
const p2 = document.getElementById("two0")

submit.onclick = function () {
    if (mycheckbox.checked){
        p1.textContent = `Your checkbox is Checked`
    } else {
        p1.textContent = `Your checkbox is Not checked`
    }

    if (mastercard.checked) {
        p2.textContent = `Your payment plan is Mastercard`
    } else if (visa.checked) {
        p2.textContent = `Your payment plan is Visa`

    } else if (paypal.checked) {
        p2.textContent = `Your payment plan is Paypal`

    } else {
        p2.textContent = `You have Not selected a payment plan`
    }
}

