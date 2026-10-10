
let shopping_cart = [];

const additem = document.getElementById("adding");
const removeitem = document.getElementById("removing");
const printlist = document.getElementById("print");

const addingitem = document.getElementById("item1");
const value = document.getElementById("mylabel");

additem.onclick = function () {
    item = item1.value;
    item = String(item);

    shopping_cart.push(item);
    value.textContent = `Item = ${item} has been Added into your Shopping cart`;
}

removeitem.onclick = function () {
    item = item1,value;
    item = String(item);

    if (shopping_cart.includes(item)) {
        index = shopping_cart.indexOf(item);
        shopping_cart.splice(index, 1);
        value.textContent = `Item = ${item} has been Removed from your Shopping cart`;
    } else {
        value.textContent = `Item = ${item} is Not found in your Shopping cart`;

    }
}

printlist.onclick = function () {
    value.textContent = shopping_cart;
}