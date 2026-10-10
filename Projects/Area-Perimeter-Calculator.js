
document.getElementById("submitname").onclick = function () {
    the_username = document.getElementById("users'name").value;
    document.getElementById("thegreeting").textContent = `Hello ${the_username} | Rectangle Area & Perimeter Calculator`;
    document.getElementById("asker").style.display = "";

    document.getElementById("1").style.display = "";
    document.getElementById("rectwidth").style.display = "";
    document.getElementById("2").style.display = "";
    document.getElementById("rectlength").style.display = "";
    document.getElementById("calcarea").style.display = "";
    document.getElementById("calcperi").style.display = "";

}

document.getElementById("calcarea").onclick = function () {
    length1 = document.getElementById("rectlength").value;
    width1 = document.getElementById("rectwidth").value;

    length1 = Number(length1);
    width1 = Number(width1);

    let area = length1 * width1;

    document.getElementById("urvalue").textContent = `The area calculated of your rectangle with length = ${length1} cm & width = ${width1} cm is ${area} cm squared`;

}

document.getElementById("calcperi").onclick = function () {
    length1 = document.getElementById("rectlength").value;
    width1 = document.getElementById("rectwidth").value;

    length1 = Number(length1);
    width1 = Number(width1);

    let peri = 2 * length1 + width1;

    document.getElementById("urvalue").textContent = `The perimeter calculated of your rectangle with length = ${length1} cm & width = ${width1} cm is ${peri} cm`;
}