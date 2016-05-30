var word = 'javahell';
var guessedCorrect = [];
var guessedIncorrect = [];
var guessesleft = 8
var wrongGuesses = 0

// if the input the user gave is inside of the word string 
// find the location of that letter inside of the string 
// replace the underscore in that location with the letter H 



    

                


  
document.onkeyup = function(event) {
    var letter = String.fromCharCode(event.keyCode).toLowerCase();
    //console.log(letter);
   
    for (var i = 0; i < word.length; i++) {
        guessedCorrect.push('_ ');
      if (word[i] === letter) {
            guessedCorrect[i] = letter;
          
      }else {

      }
    }
        
    //if user pressed a letter thats inside the word
    if (word.indexOf(letter) !== -1) {
        if(guessedCorrect.indexOf(letter) > -1 ){
            console.log("this has been guessed already")
        }else {
            console.log("this letter is inside of the string");
            guessedCorrect.push(letter);
            guessesleft--;
        }
    } else {
        // console.log('it worked');
        guessedIncorrect.push(letter);
        guessesleft--;
        wrongGuesses++;

       $('#hangman').html('<img src="assets/images/hang' + wrongGuesses + '.png">');
    }

    $('#guesses').html(guessedIncorrect);
    $('#guessesIncorrect').html(guessedCorrect);
    
    };


function resetGame() {
    window.location.reload()
};



    

