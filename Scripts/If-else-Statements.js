
let user_age = 25;
let haslicence = false;

if (user_age >= 18){
    console.log("ur an adult")

    if (haslicence) {
        console.log("ur able to drive")

    } else {
        console.log("ur not able to drive")
    }
     
} else if (user_age >= 18 & user_age <= 65){
    console.log("ur a senior")
} else {
    console.log("ur still a kid")
}