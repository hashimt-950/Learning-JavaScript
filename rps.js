let computer_score = 0
let player_score = 0

function computer_choice() {
   let random = Math.random();
   if (random >= 0 && random < 0.3) {
      return "rock"
   }
   else if (random >= 0.3 && random < 0.6) {
      return "paper"
   }
   else {
      return "scissors"
   }
   
}


function player_choice(){
   return prompt().toLowerCase()
}

function play_round(playerChoice, computerChoice){
   if (playerChoice === "rock" && computerChoice === "rock") {
      alert("you choose rock computer choose rock its a draw")
   }
   else if (playerChoice === "rock" && computerChoice === "paper") {
      computer_score++
      alert("you choose rock computer choose paper computer won this round")
   }
   else if (playerChoice === "rock" && computerChoice === "scissors") {
      player_score++
      alert("you choose rock computer choose scissors you won this round")
   }
   else if (playerChoice === "paper" && computerChoice === "paper") {
      alert("you choose paper computer choose paper its a draw")
   }
   else if (playerChoice === "paper" && computerChoice === "rock") {
      player_score++
      alert("you choose paper computer choose rock you won this round")
   }
   else if (playerChoice === "paper" && computerChoice === "scissors") {
      computer_score++
      alert("you choose paper computer choose scissors you won this round")
   }
   else if (playerChoice === "scissors" && computerChoice === "scissors") {
      alert("you choose scissors computer choose scissors its a draw")
   }
   else if (playerChoice === "scissors" && computerChoice === "paper") {
      player_score++
      alert("you choose scissors computer choose paper you won this round")
   }
   else if (playerChoice === "scissors" && computerChoice === "rock") {
      computer_score++
      alert("you choose scissors computer choose rock computer won this round")
   }
}


function play_game(){
   for(let i = 0; i < 5 ; i++){
      let playerChoice = player_choice();
       let computerChoice = computer_choice();
      play_round(playerChoice, computerChoice)
   }
   if(player_score > computer_score){
      alert("your score = " + player_score + " computer score is = " + computer_score + "\n you won the game")
   }
   else if(player_score < computer_score){
      alert("your score = " + player_score + " computer score is = " + computer_score + "\n you lost the game")
   }
   else{
      alert("your score = " + player_score + " computer score is = " + computer_score + "\n its a draw")
   }

}

play_game()