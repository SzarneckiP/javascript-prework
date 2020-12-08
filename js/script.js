
function playGame(playerInput){
  clearMessages();

  function getMoveName(argMoveId){
    if(argMoveId == 1){
      return 'kamień';
    } else 

    if(argMoveId == 2){
      return 'papier';
    } else 
    
    if(argMoveId == 3){
      return 'nożyce';
    } else
    {
      printMessage('Nie znam ruchu o id ' + argMoveId + '.');
      return 'nieznany ruch';
    }
  }

  let randomNumber = Math.floor(Math.random() * 3 + 1);

  console.log('Wylosowana liczba to: ' + randomNumber);

  let computerMove = getMoveName(randomNumber);

  printMessage('Mój ruch to: ' + computerMove);


  /*let playerInput = prompt('Wybierz swój ruch! 1: kamień, 2: papier, 3: nożyce.');*/

  let playerMove = getMoveName(playerInput);

  console.log('Gracz wpisał: ' + playerInput);

  printMessage('Twój ruch to: ' + playerMove);

  function displayResult(argComputerMove, argPlayerMove){
    console.log('moves:', argComputerMove, argPlayerMove);
    printMessage('Zagrałem ' + argComputerMove + ', a Ty ' + argPlayerMove);

    if(argComputerMove == 'kamień' && argPlayerMove == 'papier') {
      printMessage('Tym razem wygrywasz!');
    } else

    if(argComputerMove == 'nożyce' && argPlayerMove == 'kamień') {
      printMessage('Tym razem wygrywasz!');
    } else

    if(argComputerMove == 'papier' && argPlayerMove == 'nożyce') {
      printMessage('Tym razem wygrywasz!');
    } else

    if(argComputerMove == argPlayerMove) {
      printMessage('Remis!');
    } else 
    {
      printMessage('Przegrywasz!');
    }
  }
  console.log(displayResult);

  displayResult(computerMove, playerMove);

  console.log(getMoveName('2'));
}

document.getElementById('play-rock').addEventListener('click', function(){
  playGame('1');
});

document.getElementById('play-paper').addEventListener('click', function(){
  playGame('2');
});

document.getElementById('play-scissors').addEventListener('click', function(){
  playGame('3');
});




