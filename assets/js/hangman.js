// <script type="text/javascript">
//-----------------varibles------------------------------------------
var wins = 0;
var losses = 0;
var guessChances = 12;
var wrongGuess = [];
var correctGuessArray = [];
var spacesArray = [];
//word bank
var choiceWords = ["rick", "morty", "jeez" , "summer", "jerry","beth", "meseeks", "squanchy", "plutonians", "snuffles", "snowball", "cromulons", "zigerions", "unity", "gazorpazorp", "hamurai"];

//possible key guesses
 var alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');

 //computer picks random word
 var computerGuess = choiceWords[Math.floor(Math.random()*choiceWords.length)];

 var computerGuessArray = computerGuess.split('');

 console.log(computerGuessArray);
//document.adEventListener ("DOMContentLoaded", function(){
//});

//splice method changes _ to letters MGM
//----------------functions------------------------------
function reset () {
    guessChances = 12;
    wrongGuess = [];
    var computerGuess = choiceWords[Math.floor(Math.random()*choiceWords.length)];
}

//prints out blank spaces of computer guess
function spaceControl (){
for (var i = 0; i < computerGuess.length; i++){
    spacesArray.push('_'); 
    console.log("guess this word " + spacesArray);
    }
}

//check letter is in array
    function checkLetter(userGuess){
        if(computerGuessArray.indexOf(userGuess) !== -1){
            //spacesArray = userGuess;
            //spacesArray.push(userGuess);
            console.log("fdhskjfds" + spacesArray);

            for (var i = 0; i < computerGuessArray.length; i++){
                if (userGuess === computerGuessArray[i]) {
                    spacesArray.splice(i,1,userGuess);
                    //spacesArray[i] === userGuess;
                    console.log("spacesArray: " + spacesArray)
                    console.log("userGuess: " + userGuess);
                }
            }
        } else if (guessChances < 1){
            //console.log("guess chances = " + guessChances);
            console.log("that\'s it! press any letter to play again.");
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
        // if (userGuess = )
    console.log("user guess: " + userGuess);
    console.log("computer guess: " + computerGuess);

    checkLetter(userGuess);


    var html =
    "<p>guess this word: " + spacesArray + "</p>" +
    //"<p>guess word: " + spaceControl(userGuess) + "</p>" +
    "<p>wins: " + wins +"</p>" + 
    "<p>losses: " + losses + "</p>" +
    "<p>guesses: " + guessChances + "</p>" +
    "<p>letters guessed: " + wrongGuess + "</p>";
    // Placing the html into the game ID
    document.querySelector('.hangman').innerHTML = html; //prints out var html

}

    //get user's guess
    //get computer's guess from word bank
    //loop: see if user's guess is in computer's guess (compare)
    //if yes, print letter in the line for the word (what to do if it's there more than once?) (how to print it out in the line of dashes in order?)
    //how to print this out in the line???
    //if no, print out no and letter in wrongGuess array
    //loop back again
    //if user guess # of times is < set limit of guesses (12) then wins ++, print it out (how do i do a counter for that?).
    //if user guess #3 of trys is > set limit of guesses then loses ++, print loses out.

    // </script>