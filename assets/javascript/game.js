

var wordList = ['snowman', 'christmas', 'rudolph', 'frosty', 'eggnog', 'lights', 'fruitcake', 'santa'];
var chosenWord = ""; //current word will ne stored here
var lettersInChosenWord = []; // This will break the word into individual letters to be stored in array
var numBlanks =[]; //This will be the number of blanks we show based on the chosenWord
// var blanksAndSuccesses = [];// Holds a mix of blank and solved letters 
var wrongGuesses = [];
var correctLetters;


var guessedCorrect = [];
var guessedIncorrect = [];

var guessesleft = 10;
var wins = 0;
var losses = 0;




function initGame(){
    correctLetters = 0;
    chosenWord = wordList[Math.floor(Math.random()* wordList.length)];
    guessedCorrect = [];
    guessesleft = 10;
    $('message').hide();

    letttersInChosenWord = chosenWord.split("");
    // numBlanks = lettersInChosenWord.length;
    for (var i = 0; i < chosenWord.length; i++) {
        guessedCorrect.push('_ ');


    }
    $('#guessesCorrect').html(guessedCorrect);


    console.log(chosenWord);
    blanksAndSuccesses = []; 
    wrongGuesses = []; 
    for (var i=0; i < numBlanks; i++){
        blanksAndSuccesses.push("_");
    }


   



    $('#wins').text("Wins: " + wins);
    $('#losses').text("Losses: " + losses);
    $('#button').hide();
    
   



}
initGame();



// $('#guessesCorrect').html(guessedCorrect);
// console.log(guessedCorrect);

document.onkeyup = function(event) {

    // Determines which exact key was selected. Make it lowercase
if (guessesleft > 0){


    var letter = String.fromCharCode(event.keyCode).toLowerCase();
    //console.log(letter);

    for (var i = 0; i < chosenWord.length; i++) {
        if (chosenWord[i] === letter) {
            guessedCorrect[i] = letter;
            correctLetters++;
       
        }
    }
    if (correctLetters ===  chosenWord.length){
        wins++; // add to the win counter 
     
        $('#message').text('You Won!');
        $('#button').show();
        $('#hangman').hide();
        

        $('#wins').text("Wins: " + wins)
        guessesleft = -1;
    }
    if (chosenWord.indexOf(letter) === -1) {
        // console.log('it worked');
        guessedIncorrect.push(letter);
        guessesleft--;
        wrongGuesses++;
        if(guessesleft > 0){


        $('#hangman').html('<img src="assets/images/hang' + wrongGuesses + '.png">');
        }   
    } 

    $('#guesses').html(guessedIncorrect);
    $('#guessesCorrect').html(guessedCorrect);

    if (guessesleft === 0) {
        losses++
        $('#message').text('You Lost!')
        $('#button').show()
        $('#hangman').hide()
        $('#losses').text("Losses:  " + losses);
       
    };
    }
};


$("button").on('click', function(){
    console.log("clicked init");


    initGame();
});    



