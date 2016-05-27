var word = 'javahell';
var guessed = [];
var guessesleft = 10

document.onkeyup = function(event) {
    var letter = String.fromCharCode(event.keyCode).toLowerCase();
    console.log(letter);
   

    //if user pressed a letter thats inside the word
    if (word.indexOf(letter) !== -1) {
        guessed.push(letter);
        guessesleft--;
        //then put it in the target word    
    
    } else {
        console.log('it worked');
        guessesleft--;

    
        //else put it in the you chosen letters 
    }

    $('#guesses').html(guessed);
    
    };


function myFunction() {
    document.getElementById("Play Again").reset();
};


    

