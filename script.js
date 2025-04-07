let choices = ["rock", "scissors", "papers"]; //array of choices

function getComputerChoice(){
    let val = Math.floor(Math.random() * 3);
    return choices[val];
}

function getHumanChoice(){
    return parseInt(prompt("Enter 1 for rock, 2 for scissors, 3 for papers: "));
}

let humanScore = 0;
let computerScore = 0;



function playGame(){
    function playRound(humanChoice, computerChoice){
        if(humanChoice == computerChoice){
            alert(`It's a tie. Both picked ${humanChoice}`);
        }
        else if((humanChoice == 'rock' && computerChoice == 'scissors')||
                (humanChoice == 'paper' && computerChoice == 'rock') ||
                (humanChoice == 'scissors' && computerChoice == 'paper')){
                    alert(`Human wins!!! ${humanChoice} beats ${computerChoice}`);
                    humanScore++;
                }
        else{
            alert(`Computer Wins!!! ${computerChoice} beats ${humanChoice}`);
            computerScore++;
        }
    }
    
    for(let i = 0; i < 5;){
        let computer = getComputerChoice();
        let number = getHumanChoice();

        if(isNaN(number) || number < 1 || number > 3){
            alert("Enter an integer between 1 and 3");
            continue;
        }        
        let human = choices[number - 1];
        playRound(human, computer);
        i++;
    }
        
}

playGame();
alert(`Overall final score: \nComputer: ${computerScore} \nHuman: ${humanScore}`);

