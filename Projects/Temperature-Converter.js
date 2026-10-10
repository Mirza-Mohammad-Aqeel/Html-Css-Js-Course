
document.getElementById("givename").onclick = function () {
    username = document.getElementById("getname").value;
    document.getElementById("greettitle").textContent = `Welcome ${username} | Celsius Converter`;
    document.getElementById("celsiusconvert").textContent = `Enter your Temperature in Celsius`
    document.getElementById("celsius").style.display = "";
    document.getElementById("calf").style.display = "";

}

document.getElementById("calf").onclick = function () {
    celtemp = document.getElementById("celsius").value;
    celtemp = Number(celtemp)
    let farhen = celtemp * 9/5 + 32
    document.getElementById("urtemp").textContent = `${celtemp} ° C into Farhenhiet is ${farhen} ° F`
}