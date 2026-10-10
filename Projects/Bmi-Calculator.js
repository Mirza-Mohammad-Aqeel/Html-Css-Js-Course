
document.getElementById("submitname").onclick = function () {
    username = document.getElementById("name").value;
    document.getElementById("greeting").textContent = `Hello ${username} | Bmi Calculator`
    document.getElementById("labelone").style.display = "";
    document.getElementById("weight").style.display = "";
    document.getElementById("labeltwo").style.display = "";
    document.getElementById("height").style.display = "";
    document.getElementById("calcbmi").style.display = "";


}

document.getElementById("calcbmi").onclick = function () {
    weight = document.getElementById("weight").value;
    height = document.getElementById("height").value;
    bmi = weight / height ** 2
    Math.round(bmi)
    document.getElementById("bmivalue").textContent = `Your Bmi = ${bmi}`
    
    if (bmi <= 18.5) {
        document.getElementById("status").textContent = `● You are Underweight`;
    } else if (bmi > 18.5 && bmi <= 25) {
        document.getElementById("status").textContent = `● You are Normal`;
    } else if (bmi > 25) {
        document.getElementById("status").textContent = `● You are Overweight`;
    } else {
        document.getElementById("status").textContent = `● Invalid Input`;

    }
}