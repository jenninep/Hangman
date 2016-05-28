var word = 'javahell';
var guessedCorrect = [];
var guessedIncorrect = [];
var guessesleft = 10
var wrongGuesses = 0


document.onkeyup = function(event) {
    var letter = String.fromCharCode(event.keyCode).toLowerCase();
    console.log(letter);
   

    //if user pressed a letter thats inside the word
    if (word.indexOf(letter) !== -1) {
        guessedCorrect.push(letter);
        guessesleft--;
        //then put it in the target word    
    
    } else {
        console.log('it worked');
        guessedIncorrect.push(letter);
        guessesleft--;
        wrongGuesses++;

    $('#hangman').html('<img src="assets/images/hang' + wrongGuesses + '.png">');

    }

    $('#guesses').html(guessedCorrect);
    $('#guessesIncorrect').html(guessedIncorrect);
    
    };


function myFunction() {
    document.getElementById("#reset").reset();
};


    

