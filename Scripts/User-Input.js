

let username;


document.getElementById("givename").onclick = function() {
    username = document.getElementById("getname").value;
    document.getElementById("urname").textContent = `Hello ${username}`;
    document.getElementById("greeting").textContent = `Hello ${username}`;

}

