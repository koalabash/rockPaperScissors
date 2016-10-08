function getUserChoice() {
  var userInput = prompt('Rock, Paper, or Scissor?');
  userInput = userInput.toLowerCase();
  if (userInput === 'rock'|| userInput === 'paper'||userInput === 'scissors'|| userInput === 'bomb') { 
    return userInput;
      } 
  else { 
    console.log('Input error, Please input again.');
  }  
}
function getComputerChoice(){ 
  var computerNumber = Math.floor(Math.random()*3);
  if(computerNumber === 0) {
    return 'rock';
  } else if(computerNumber === 1) {
    return 'paper';
  } else if(computerNumber === 2) {
    return 'scissors';
  }
}
function determineWinner(userChoice,computerChoice){
  if (userChoice ==='bomb' ){
    return 'You won!';
  }
  
if (userChoice === computerChoice){
    return 'The game was a tie.';
  }
  
  if (userChoice === 'rock'){
    if(computerChoice === 'scissors'){
      return 'You won!';
    }else {
      return 'The computer won!';
    }
  }
 else if (userChoice ==='paper'){
   if(computerChoice === 'scissors'){
     return 'The computer won!';
   } else {
     return 'You won!';
   }
 }
else if(userChoice === 'scissors'){
  if(computerChoice === 'rock'){
    return 'The computer won!';
  } else {
    return 'You won!';
  }
 }
}
function playGame(){
  var userChoice = getUserChoice();
  var computerChoice = getComputerChoice();
  console.log('You threw: '+userChoice);
  console.log('Computer threw: '+computerChoice);
  console.log(determineWinner(userChoice,computerChoice));
}
playGame();
