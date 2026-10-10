

document.getElementById('submitstring').onclick = function () {
    const userstring = document.getElementById("enteredstring").value;

    document.getElementById("firstletter").textContent = `First letter = ${userstring.charAt(0)}`;
    document.getElementById("occurence_of_a").textContent = `Occurence of A = ${userstring.indexOf("a")}`
    document.getElementById("length").textContent = `Occurence of A = ${userstring.length}`;
    document.getElementById("upper").textContent = `Uppercase Form = ${userstring.toUpperCase()}`
    document.getElementById("lower").textContent = `Lowercase Form= ${userstring.toLowerCase()}`
    document.getElementById("replaced").textContent = `Replaced I with O = ${userstring.replaceAll("i","o")}`

    document.getElementById("a1").textContent = `First four characters = ${userstring.slice(0,4)}`

}


