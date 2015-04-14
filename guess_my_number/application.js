$(document).ready(function(){
  //find a way for the program to choose a random number between 1 and 100, save this as a variable
  var answer = parseInt(Math.random() * 100) +1;
  //when the player clicks on the 'guess' button
  $('button').on('click', function(){
    //save their guess as a variable
    var guessednumber= $('input').val();
    
    //and compare this guess to the random number that the computer picked
    //if the user guessed the correct number...
    if (guess == this.num) {
                        alert("Correct! It took you " + this.turns + "turns to guess my number.");
                        return true;
                    }
                    else if(guess > this.num) {
                        alert("Your guess is too high. Try again.");
                        this.turns++;
                        return false;
                    }
                    else (guess < this.num) {
                        alert("Your guess is too low. Try again.");
                        this.turns++;
                        return false;at happens if the guess is correct?
    
      //update the 'feedback' paragraph to tell them to guess lower
    var game = {
                num : 0,
                turns : 1,
                reset : function() {
                    this.turns = 1;
                    this.newNum();
                },
    
    
                    catch(e) {
                        alert("Enter a guess!");
                        this.turns++;
                        return false;
                    }
                    }
                }
            };

            function guessNumber() {
                var guess = document.getElementById("guess").value;
                game.checkGuess(guess);
            }

            function resetGame() {
                game.reset();
            }

            resetGame(); 
)};

