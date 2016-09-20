var word = 'snowman';
var guessedCorrect = [];
var guessedIncorrect = [];
var guessesleft = 8
var wrongGuesses = 0

for (var i = 0; i < word.length; i++) {
    guessedCorrect.push('_ ');
}

$('#guessesIncorrect').html(guessedCorrect);

document.onkeyup = function(event) {
    var letter = String.fromCharCode(event.keyCode).toLowerCase();
    //console.log(letter);
   
    for (var i = 0; i < word.length; i++) {
      if (word[i] === letter) {
            guessedCorrect[i] = letter;

      }
    }
        
    //if user pressed a letter thats inside the word
    if (word.indexOf(letter) === -1) {
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



    

