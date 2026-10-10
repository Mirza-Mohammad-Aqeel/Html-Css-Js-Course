

const newh1 = document.createElement("h1");
newh1.textContent = `I love Pizza`;
newh1.id = "myh1";

newh1.style.color = "red";
newh1.style.fontFamily = "Arial"
newh1.style.textAlign = "center";

const newp = document.createElement("p")
newp.style.fontFamily = "Arial";
newp.textContent = `This is a paragraph`
newp.id = "myp";
newp.style.color = "blue";

document.getElementById("box1").append(newh1)

document.getElementById("box1").removeChild(newh1)

const newlistitem = document.createElement("li");

newlistitem.textContent = `Coconuts`;
newlistitem.id = "Coconut";
newlistitem.style.color = "red";
newlistitem.style.fontFamily = "Arial";

const grapes = document.getElementById("grapes");

document.getElementById("fruits").insertBefore(newlistitem, grapes)

document.getElementById("fruits").removeChild(newlistitem)