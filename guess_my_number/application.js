$(document).ready(function(){
  //find a way for the program to choose a random number between 1 and 100, save this as a variable
  var answer = parseInt(Math.random() * 100) +1;
  //when the player clicks on the 'guess' button
  $('button').on('click', function(){
    //save their guess as a variable
    var guessednumber= $('input').val();
    //and compare this guess to the random number that the computer picked
    //if the user guessed the correct number...
    if (guessednumber == answer) {
      alert("Correct!");
    }
    else if(guessednumber > answer) {
      alert("Your guess is too high. Try again.");
    }
    else {
      alert("Your guess is too low. Try again.");
    }
  }
    //                 catch(e) {
    //                     alert("Enter a guess!");
    //                     this.turns++;
    //                     return false;
    //                 }
    //                 }
    //             }
    //         };

    //         function guessNumber() {
    //             var guess = document.getElementById("guess").value;
    //             game.checkGuess(guess);
    //         }

    //         function resetGame() {
    //             game.reset();
    //         }

    //         resetGame(); 
)};

