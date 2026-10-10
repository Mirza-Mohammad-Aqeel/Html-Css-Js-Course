

const arelower = document.getElementById("lowercase");
const areupper = document.getElementById("uppercase");
const arenumbers = document.getElementById("numbers");
const aresymbols = document.getElementById("symbols");
const userpasslen = document.getElementById("passlength");

const haslowerchar = true ? arelower.value = "True" : false;
const hasupperchar = true ? areupper.value = "True" : false;
const hasnumbers = true ? arenumbers.value = "True" : false;
const hassymbols =  true ? aresymbols.value = "True" : false;


document.getElementById("gen").onclick = function generatePassword (haslowerchar, hasupperchar, hasnumbers, hassymbols) {
    
    const lower = "abcdefghijklmnopqrstuvwxyz";
    const upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const nums = "1234567890";
    const sym = "!@#$%^&*()";
    
    let allowedchars = "0"
    let password = "";

    allowedchars += haslowerchar ? lower : "";
    allowedchars += hasupperchar ? upper : "";
    allowedchars += hasnumbers ? nums : "";
    allowedchars += hassymbols ? sym : "";

    if (userpasslen <= 0) {
        return `(Password length must be atleast 1)`;
    }   

    if (allowedchars.length === 0) {
        return `(Atleast 1 set of characters need to be selected)`;
    }

    for(let i = 0; i <= userpasslen; i ++){
        const randomIndex = Math.floor(Math.random() * allowedchars.length);
        password += allowedchars[randomIndex];

    }

    document.getElementById("pass").textContent = password;

}


