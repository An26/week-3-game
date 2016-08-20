//-----------------varibles------------------------------------------
var wins = 0;
var losses = 0;
var guessChances = 12;
var wrongGuess = [];
var spacesArray = [];
var choiceWords = ["rick", "morty", "jeez", "summer", "jerry", "beth", "meseeks", "squanchy", "plutonians", "snuffles", "snowball", "cromulons", "unity", "gazorpazorp"];

//possible key guesses
var alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');

//computer picks random word
var computerGuess = choiceWords[Math.floor(Math.random() * choiceWords.length)];
console.log(computerGuess);

var computerGuessArray = computerGuess.split('');
console.log(computerGuessArray);


//splice method changes _ to letters MGM
//----------------functions------------------------------
function reset() {
    computerGuess = choiceWords[Math.floor(Math.random() * choiceWords.length)];
    computerGuessArray = computerGuess.split('');
    spacesArray = [];
    spaceControl();
    guessChances = 12;
    wrongGuess = [];
    console.log("this is my reset");

}

//prints out blank spaces of computer guess
function spaceControl() {
    for (var i = 0; i < computerGuess.length; i++) {
        spacesArray.push('_');
        console.log("guess this word " + spacesArray);
    }
}

//check letter is in array
function checkLetter(userGuess) {
    if (computerGuessArray.indexOf(userGuess) !== -1) {
        for (var i = 0; i < computerGuessArray.length; i++) {
            if (userGuess === computerGuessArray[i]) {
                spacesArray.splice(i, 1, userGuess);
                console.log("spacesArray: " + spacesArray)
                console.log("userGuess: " + userGuess);
            }
        }
    } else if (guessChances < 1) {
        //console.log("guess chances = " + guessChances);
        console.log("that\'s it! press any letter to play again.");
        alert("nice try! The word to save Morty was " + computerGuess + "!!!");
        losses++;
        reset();

    } else if ((guessChances < 12) && (spacesArray.indexOf('_') === -1)) {
        alert("Nice you saved a Morty!!");
        wins++;
        reset();
    } else {
        //not in word
        wrongGuess.push(userGuess);
        guessChances--;
        console.log(wrongGuess + " is not a right letter");
        console.log(guessChances);
    }
}


//-----------------method/execution-------------------------------

spaceControl(computerGuessArray);

//starts the process...
document.onkeyup = function(event) {

    //takes the user's guess
    var userGuess = String.fromCharCode(event.keyCode).toLowerCase();

    console.log("user guess: " + userGuess);
    console.log("computer guess: " + computerGuess);


    checkLetter(userGuess);


    var html =
        "<p>guess this word: " + spacesArray + "</p>" +
        //"<p>guess word: " + spaceControl(userGuess) + "</p>" +
        "<p>wins: " + wins + "</p>" +
        "<p>losses: " + losses + "</p>" +
        "<p>guesses: " + guessChances + "</p>" +
        "<p>letters guessed: " + wrongGuess + "</p>";
    // Placing the html into the game 
    document.querySelector('.hangman').innerHTML = html; //prints out var html


}