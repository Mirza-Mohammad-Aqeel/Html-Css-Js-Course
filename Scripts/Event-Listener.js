
const image =  document.getElementById("myimage");
const button = document.getElementById("mybutton");
const subjects = document.getElementById("subjects");


subjects.style.fontFamily = "Arial";
subjects.style.border = "5px solid black";
subjects.style.display = "inline-block";
subjects.style.padding = "20px"
subjects.style.borderRadius = "10px";


button.addEventListener("click", event => {
    if (image.style.visibility == "hidden") {
        button.textContent = `Hide`;
        image.style.visibility = "visible"
    } else {
        button.textContent = `Show`;
        image.style.visibility = "hidden";
    }    

})


let subjects0 = document.querySelectorAll(".subject");

subjects0.forEach(element => {
    element.style.backgroundColor = "red";
    element.textContent = `I hate Maths`;
    element.style.border = "2px solid black";
    element.style.padding = "10px";
    element.style.cursor = "pointer";
})

subjects0.forEach(element => {
    element.addEventListener("mouseover",event => {
        event.target.style.backgroundColor = "darkred";
    })
})

subjects0.forEach(element => {
    element.addEventListener("mouseout",event => {
        event.target.style.backgroundColor = "red";

    })
})

const newsub = document.createElement("li");
newsub.textContent = `I hate Maths`;
newsub.id = "islamiyat";
newsub.classList = "subject"
subjects0.append(newsub)

