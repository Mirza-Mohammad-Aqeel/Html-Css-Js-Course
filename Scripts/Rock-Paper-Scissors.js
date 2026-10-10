
const options = ["Rock","Paper","Scissors"];
const playerdisplay = document.getElementById("player");
const computerdisplay = document.getElementById("computer");
const result = document.getElementById("status")
const playerscore = document.getElementById("playerscore");
const compscore  = document.getElementById("computerscore");
let playersscore = 0;
let computerscore = 0;

playerscore.textContent = playersscore;
compscore.textContent = computerscore;



function playGame(playerChoice) {
    
    const computer_choice = options[Math.floor(Math.random() * 3)]

    if (playerChoice === computer_choice) {
        playerdisplay.textContent = `Player = ${playerChoice}`;
        computerdisplay.textContent = `Computer = ${computer_choice}`;
        result.textContent = `It's a Tie`;
        result.style.color = "black";
    } else {
        switch (playerChoice) {
            case "Rock":
                if (computer_choice === "Scissors") {
                    playerdisplay.textContent = `Player = ${playerChoice}`;
                    computerdisplay.textContent = `Computer = ${computer_choice}`;
                    result.textContent = `You Win`;
                    result.style.color = "green";
                    playerscore += 1;
                    playerscore.textContent = playersscore;


                } else {
                    playerdisplay.textContent = `Player = ${playerChoice}`;
                    computerdisplay.textContent = `Computer = ${computer_choice}`;
                    result.textContent = `You Lose`;
                    result.style.color = "red";
                    computerscore -= 1;
                    compscore.textContent = playersscore;
                }
                break;
            
            case "Paper":
                if (computer_choice === "Rock") {
                    playerdisplay.textContent = `Player = ${playerChoice}`;
                    computerdisplay.textContent = `Computer = ${computer_choice}`;
                    result.textContent = `You Win`;
                    result.style.color = "green";
                    playerscore += 1;
                    playerscore.textContent = playersscore;                    

                } else {
                    playerdisplay.textContent = `Player = ${playerChoice}`;
                    computerdisplay.textContent = `Computer = ${computer_choice}`;
                    result.textContent = `You Lose`;
                    result.style.color = "red";
                    computerscore -= 1;
                    compscore.textContent = playersscore;                    

                }
                break;
            
            case "Scissors":
                if (computer_choice === "Paper") {
                    playerdisplay.textContent = `Player = ${playerChoice}`;
                    computerdisplay.textContent = `Computer = ${computer_choice}`;
                    result.textContent = `You Win`;
                    result.style.color = "green";
                    playerscore += 1;
                    playerscore.textContent = playersscore;                      

                } else {
                    playerdisplay.textContent = `Player = ${playerChoice}`;
                    computerdisplay.textContent = `Computer = ${computer_choice}`;
                    result.textContent = `You Lose`;
                    result.style.color = "red";
                    computerscore -= 1;
                    compscore.textContent = playersscore;                       

                }    
                break;
        }
    }
}

