
const submit = document.getElementById("submitname")

submit.onclick  = function () {

    username = document.getElementById("name1").value;
    while (username === "") {
        console.log(`You didnt enter ur username`) ;   
    }
    console.log(`Hello ${username}`);


}

for (let i = 1; i < 10; i+=2){
        console.log(i);
    }

for (let j = 9; j < 90; j += 2)  {
    
    if (j == 13) {
        continue;
    } else {
        console.log(j)
    }

}
