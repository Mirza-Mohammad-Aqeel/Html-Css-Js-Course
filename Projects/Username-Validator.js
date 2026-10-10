
document.getElementById("submitname").onclick = function () {
    username = document.getElementById("name").value;
    document.getElementById("greeting").textContent = `Hello ${username} | Username Validator`

    firstletter = username.charAt(0);
    lastletter = username.charAt(-1);
    uppercase = username.toUpperCase();
    lowercase = username.toLowerCase();

    document.getElementById("firstletter").textContent = `● First letter = ${firstletter}`;
    document.getElementById("lastletter").textContent = `● Last letter = ${lastletter}`;
    document.getElementById("uppercase").textContent = `● Uppercase Form = ${uppercase}`;
    document.getElementById("lowercase").textContent = `● Lowercase Form = ${lowercase}`;

    if (username.length() >= 5 && !username.includes(" ")) {
        document.getElementById("valid").textContent = `Your username = ${username} is Valid`;   
    } else {
        document.getElementById("valid").textContent = `Your username = ${username} is Not valid`  ;      

    }


}

