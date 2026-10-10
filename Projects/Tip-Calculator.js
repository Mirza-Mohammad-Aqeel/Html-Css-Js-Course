
document.getElementById("submitname").onclick = function () {
    the_user_name = document.getElementById("enteredname").value;
    document.getElementById("welcome").textContent = `Hello ${the_user_name} | Bill Calculator`;
    document.getElementById("billamount").style.display = "";
    document.getElementById("tipperc").style.display = "";
    document.getElementById("enteredbillam").style.display = "";
    document.getElementById("enteredtipperc").style.display = "";
    document.getElementById("calcfinalbill").style.display = "";


}

document.getElementById("calcfinalbill").onclick = function () {

    original_bill = document.getElementById("enteredbillam").value;
    tippe = document.getElementById("enteredtipperc").value;

    original_bill = Number(original_bill);
    tippe = Number(tippe);

    let tippe2 = tippe / 100;
    let temp = original_bill * tippe2;
    

    let final = original_bill + temp;
    Math.round(final)
    document.getElementById("finalanswer").textContent = `Your final Calculated bill, comes out at an Amount of ${final} $`

}