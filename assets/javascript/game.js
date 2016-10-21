// DIVS to have on DOM

// -guessesRemaining
// -guesses
// -hangmanWordArea
// -message


// variables

var wordList = ['Arles', 'Paris', 'Auvers Sur Oise', 'Saint Remy'];
var currentWord;
var letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 
                'h', 'i', 'j', 'k', 'l', 'm', 'n', 
                'o', 'p', 'q', 'r', 's', 't', 'u', 'v',
                'w', 'x', 'y', 'z'];
var guessedLetters;
var matchedLetters; 
var guessesRemaining;

// tally the number of words correctly chosen with another variable
var wins = 0
// create a finite number of var letters that can be chosen 
var allowedGuesses;

// create fx startGame
function startGame () {
    currentWord = chooseWord();
    guessedLetters = [];
    guessesRemaining = 10;
}

// create an event where any letter can activate the game
document.onkeypress = function(event) {
	addEventListener("click", function() {
    console.log("You clicked!");
};
startGame()
  // Code to run when they press a key goes here

function myFunction() {
    // document.getElementById("activate").style.backgroundColor = "red";
}

// create a way for the user to guess a letter from var letters 
function chooseLetterfirstWord (){}
// 	if letter = 'a', then 
// }
// userGuess === 'a'

// which can then be 

// div id word has a function that concatenates var blanks and then displays
// them in a span



// and then replaces the blanks with var words based on 
// right/wrong letters chosen


//blanks are replaced by letters as letters are chosen correctly


// (same letter can be chosen multiple times without penalty &

// letters are stored once in the guesses div-


// some sort of conditional statement?)


// create a function that relates var words with var blanks
function chooseWord () {
    return words[Math.floor(Math.random() * words.length)];
}

 // // Create code that "grabs" the div with the matching id (#word);

 // var drinkList = document.getelementbyId ('word') 

//create a function that substitutes var letters indices with 
// individual spaces in var blanks

function blanksFromAnswer ( answerWord ) {  
    var result = ""; 
    for ( i in answerWord ) {
        result = "_" + result;
    }
    return result;


// create a function that returns incorrect letters and displays 
 //them on the screen 

// function guessedLetters (){}

// return result

// create a function that links the varblanks string
 // displays the image from that city

// if player answers correctly, displays image with ear intact
// with message, "You Win! Van Gogh Keeps His Ear!"
// else, displays image with lost ear 
// with message, "You lost this round. Van Gogh cut off his ear. 
// Try to guess the next city where he lived to win the next round!"