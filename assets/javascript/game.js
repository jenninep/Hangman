var word = 'Javahell';
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






// //function intializeGame(){
//     div_used = document.getElementById('used');
//     div_puzzle = document.getElementById('puzzle');
//     div_available = document.getElementById('available');

// var buttons = function () {
//     myButtons = document.getElementById('buttons');
//     letters = document.createElement('ul');

//     for (var i = 0; i < alphabet.length; i++) {
//       letters.id = 'alphabet';
//       list = document.createElement('li');
//       list.id = 'letter';
//       list.innerHTML = alphabet[i];
//       check();
//       myButtons.appendChild(letters);
//       letters.appendChild(list);
//     }



    


// function chooseWord () {


// for (var i = 0; i < words.length; i++){
//     var ranNum= Math.floor(Math.random()*5);
//     return ranNum;

// function newGame() {
//     var placeholders = '',
//         frag = document.createDocumentFragment(),
//         abc = ['A','B','C','D','E','F','G','H','I','J','K','L','M',
//                'N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
// }

//    