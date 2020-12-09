{
  const playGame = function(playerInput){
    clearMessages();

    const getMoveName = function(argMoveId){
      if(argMoveId == 1){
        return 'kamień';
      } else if(argMoveId == 2){
        return 'papier';
      } else if(argMoveId == 3){
        return 'nożyce';
      } else
      {
        printMessage('Nie znam ruchu o id ' + argMoveId + '.');
        return 'nieznany ruch';
      }
    }

    const randomNumber = Math.floor(Math.random() * 3 + 1),
      computerMove = getMoveName(randomNumber),
      playerMove = getMoveName(playerInput);

    console.log('Wylosowana liczba to: ' + randomNumber);

    printMessage('Mój ruch to: ' + computerMove);

    console.log('Gracz wpisał: ' + playerInput);

    printMessage('Twój ruch to: ' + playerMove);

    const displayResult = function(argComputerMove, argPlayerMove){
      console.log('moves:', argComputerMove, argPlayerMove);
      printMessage('Zagrałem ' + argComputerMove + ', a Ty ' + argPlayerMove);

      if(argComputerMove == 'kamień' && argPlayerMove == 'papier') {
        printMessage('Tym razem wygrywasz!');
      } else if(argComputerMove == 'nożyce' && argPlayerMove == 'kamień') {
        printMessage('Tym razem wygrywasz!');
      } else if(argComputerMove == 'papier' && argPlayerMove == 'nożyce') {
        printMessage('Tym razem wygrywasz!');
      } else if(argComputerMove == argPlayerMove) {
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

  const playRock = document.getElementById('play-rock'),
    playPaper = document.getElementById('play-paper'),
    playScissors = document.getElementById('play-scissors');

  playRock.addEventListener('click', function(){
    playGame('1');
  });

  playPaper.addEventListener('click', function(){
    playGame('2');
  });

  playScissors.addEventListener('click', function(){
    playGame('3');
  });
}



