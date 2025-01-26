function getComputerChoice(){
   let computer_choice
   let random = Math.random()
   if (random >= 0 && random <0.3) {
      computer_choice = "rock"
   }
   else if (random >= 0.3 && random < 0.6) {
      computer_choice = "paper"
   }
   else{
      computer_choice = "scissors"
   }
   return computer_choice
}

console.log(getComputerChoice())
