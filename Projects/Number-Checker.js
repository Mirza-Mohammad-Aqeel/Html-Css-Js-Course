 
document.getElementById("giveurname").onclick = function () {
    users_name = document.getElementById("the_name_user").value;
    document.getElementById("greetuser").textContent = `Hello ${users_name} | Number Checker`;
    document.getElementById("asknum").style.display = "";
    document.getElementById("urnumber").style.display = "";

    document.getElementById("evenorodd").style.display = "";
    document.getElementById("posorneg").style.display = "";




}

document.getElementById("evenorodd").onclick = function () {
    ur_number = document.getElementById("urnumber").value;
    ur_number = Number(ur_number)

    if(ur_number % 2 == 0) {
        document.getElementById("finalresponse").textContent = `Your number = ${ur_number} is Even`;
    } else {
        document.getElementById("finalresponse").textContent = `Your number = ${ur_number} is Odd`;

    }
}

document.getElementById("posorneg").onclick = function () {
    ur_number = document.getElementById("urnumber").value;
    ur_number = Number(ur_number)

    if(ur_number > 0) {
        document.getElementById("finalresponse").textContent = `Your number = ${ur_number} is Positive`;
    } else if (ur_number < 0) {
        document.getElementById("finalresponse").textContent = `Your number = ${ur_number} is Negative`;
    } else {
        document.getElementById("finalresponse").textContent = `Your number is Equal to Zero`
    }
}

