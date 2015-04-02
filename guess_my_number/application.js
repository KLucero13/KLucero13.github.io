$(document).ready(function(){
  //find a way for the program to choose a random number between 1 and 100, save this as a variable
            var game = {
                num : 0,
                turns : 1,
                reset : function() {
                    this.turns = 1;
                    this.newNum();
                },
                newNum() : function() {
                    this.num = parseInt(Math.random() * 10) +1;
                },
                checkNum() : function(guess) {
                    try {
                        guess = parseInt(guess);
                    }
                    catch(e) {
                        alert("Enter a guess!");
                        this.turns++;
                        return false;
                    }

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
                        return false;
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

