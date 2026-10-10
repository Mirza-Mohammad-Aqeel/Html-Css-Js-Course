
document.getElementById("mybutton").onclick = function () {
    let randomNum = Math.floor(Math.random() * 6) + 1;
    document.getElementById("urnumber").textContent = randomNum;
}
