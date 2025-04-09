let choices = ["rock", "scissors", "paper"]; //array of choices

function getComputerChoice(){
    let val = Math.floor(Math.random() * 3);
    return choices[val];
}

// function getHumanChoice(){
//     return parseInt(prompt("Enter 1 for rock, 2 for scissors, 3 for papers: "));
// }

let humanScore = 0;
let computerScore = 0;


const pChoice = document.querySelector(".choices");
const pWinner = document.querySelector(".winner");
const pScore = document.querySelector(".score");


function playRound(humanChoice, computerChoice){
    pChoice.innerHTML = `Human:  ${humanChoice} <br> Computer:  ${computerChoice}`;
    if(humanChoice == computerChoice){
        // alert(`It's a tie. Both picked ${humanChoice}`);
        pWinner.textContent = `Tie`;
    }
    else if((humanChoice == 'rock' && computerChoice == 'scissors')||
            (humanChoice == 'paper' && computerChoice == 'rock') ||
            (humanChoice == 'scissors' && computerChoice == 'paper')){
                // alert(`Human wins!!! ${humanChoice} beats ${computerChoice}`);
                pWinner.textContent = `Human`;
                humanScore++;
            }
    else{
        // alert(`Computer Wins!!! ${computerChoice} beats ${humanChoice}`);
        pWinner.textContent = `Computer`;
        computerScore++;
    }
    

    if(humanScore == 5 || computerScore == 5){
        alert(`Winner is: ${(humanScore == 5) ? "Human": "Computer"}`);
    }
    pScore.innerHTML = `Human: ${humanScore} <br> Computer: ${computerScore}`;

}


const buttons = document.querySelectorAll("button");
buttons.forEach((button) => {
    button.addEventListener("click", (e) => {
        let human = e.target.id;
        e.target.style.backgroundColor = "lightpink";

        setTimeout(() => {
            e.target.style.backgroundColor = "";
        }, 200);
        // console.log(e.target);
        // console.log(e.target.id);
        let computer = getComputerChoice();
        playRound(human, computer);
    });
});



