/*
  Divs to have on DOM

  - guessesRemaining
  - guessedLetters
  - hangmanWordArea
  - message

/*

/* Variables */

var words = ['Arles', 'Paris', 'Auvers Sur Oise', 'Saint Remy'];// Probably an array
var currentWord; // Probably a string
var validLetters = ['a', 'b', 'c', 'd', 'e', 'f','g','h', 'i', 'j', 'k', 'l', 'm', 
'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']; // Probably an array
var guessedLetters = []; // Probably an array
var matchedLetters; // Probably an array
var guessesRemaining; // Probably a number
var totalGuesses; // Probably a number
var wins = 0; // Probably a number
var ALLOWED_GUESSES; // Probably a number

/* Functions */

// create fx startGame
function startGame () {
    currentWord = chooseWord();
    guessedLetters = [];
    guessesRemaining = 10;
}

// function that creates blanks from the currentWord
function blanksFromAnswer (currentWord) {  
    var result = ''; 
    for (var i = 0; i < currentWord.length; i++) {
        result = '_' + result;
    }
    return result;
}
// Pick a word, Reset guessed & matched letters, totalGuesses, guessesRemaining
function resetGame() {
  // Reset game variables to starting point
  guessedLetters = [];
  guessesRemaining = 10;
  // Call chooseWord()
  currentWord = chooseWord();
  console.log (currentWord);
}
  
function chooseWord() {
  // Find a random number between 0 and the length of the wordList array
  // Get the word at this index in the wordList array
  // Set currentWord to this word
   return words[Math.floor(Math.random() * words.length)];
}

// Called each time a letter is pressed
// Calls refreshguessesRemaining(), refreshGuessedLetters(), refreshMatchedLetters()
// refresh WinOrLost()
function refreshViewGameStats() {
  refreshguessesRemaining ();
  refreshGuessedLetters ();
  refreshMatchedLetters ();
  refreshWinOrLost ();
}

// Updates "guessesRemaining" div to contain the current value of guessesRemaining
function refreshguessesRemaining() {
  // call guessesRemaining
  // document.getElementById('#guessesRemaining').innerHTML = 'Guesses Remaining: ' 
  // + guessesRemaining;
}

function refreshGuessedLetters() {
// Updates the "guessedLetters" div to contain list of letters guessed so far
 // document.getElementById('#guessedLetters').innerHTML = wordList;
// Updates the "hangmanWordArea" div to contain the current word "blanked out"
  //document.getElementById('#hangmanWordArea').innerHTML = result;
}

// (using "_" characters) except for the letters they have gotten correct
function refreshMatchedLetters() {
  // Create a new emtpy string
  var result = '';
  // For each letter in the currentWord (sounds like a for loop)
  for (var i = 0; i < currentWord.length; i++) {
// If they have guessed the letter, then concatenate that letter on the  
    result = '' + result; 
// new empty string you've created, otherwise concatenate "_"    
    result = '_' + result;
  }    
  return result;
}
// Update the inner html of the hangmanWordArea to equal this new string

// By default, in the html (when the page loads) this div will initially
// contain a "welcome" message: "Welcome to Hangman, press any key to play!"
// This will be overwritten by this method once they start playing their first
// game

// Checks to see if user has won, is still guessing, or has lost and displays
// The proper message in the message div accrodingly based on one of those
// 3 outcomes.
function refreshWinOrLost() {
// Check to see if user has won by calling hasUserWon()
  hasUserWon ();
// If hasUserWon is true  
  if (hasUserWon === true) {
// update messageDiv innerHTML to show a  message
    document.getElementById('#message').innerHTML = 'You won!';
  }
// Else if there are guesses left
  else if (guessesRemaining >= 0) {
// set the innerHTML of the message div to an empty string
// (game is still in progress, no message to show)
    document.getElementById('#message').innerHTML = '';
  }
  // Else
  else if (guessesRemaining === 0) {
      // They have run out of guesses and lost, display a "You Lost" message
    document.getElementById('#message').innerHTML = 'You lost!'
  }
}

// Else returns false
function hasUserWon() {
// Returns true if the hangmanWordAreaDiv's inner html === the currentWord
  if (document.getElementById('#hangmanWordArea').innerHTML === currentWord) {
// Increments wins if they've won
    wins++;
// Sets guessesRemaining to zero, so next keypress starts a new game
    guessesRemaining = 0;
    onkeyup = resetGame;
 } 
  return true;
}
// Takes 1 argument --> letterGuessed
function matchGuess(letterGuessed) {
// Checks to see if letter exists in currentWord  
    if (currentWord.indexOf(letterGuessed) === -1) {
// Increments totalGuesses
    totalGuesses ++;
// decrements guessesRemaining
    guessesRemaining --;
    console.log (letterGuessed + ' doesnt exist in current word')
  } else if (currentWord.indexOf(letterGuessed > -1)) {
    console.log (letterGuessed + ' already exists in the currentWord')
  }

  guessedLetters.push(letterGuessed);
}

// Takes 1 argument --> the letter guessed
function isAValidLetter(letterGuessed) {
// Returns true if the letterGuessed is in the array of validLetters
    if (validLetters.indexOf(letterGuessed) === -1) {
      return true  
    }
}


// Takes 1 argument -> the letter guessed
function hasGuessedLetter(letterGuessed) {
// Checks to see if the letter guessed is in the array of guessed letters
    if (guessedLetters.indexOf(letterGuessed) === -1) {
  // Alerts ("you've already guessed this letter") if they have already
      alert ("You've already guessed this letter!")
// Returns true if they have, returns false if they have not
      return true    
    }
}


/*

Everything up until this point should be variables & functions declared at the
top of your .js file (or all in one big game object at the top of your .js file)
and NOT in the onkeyup function.

*/
// create an event where any letter can activate/reset the game
resetGame();

document.onkeyup = function(event) {
  var letterGuessed = String.fromCharCode(event.keyCode).toLowerCase();
  // If guessesRemaining is 0
  if (guessesRemaining === 0) {
    // call resetGame()
    resetGame();
  }
  // Else If it is a validLetter && the user has not guessed the letter yet
// Parse out the letterGuessed from the event 
  else if (validLetters.indexOf(letterGuessed) > -1) {
// call matchGuess() to match the guess with the word
    matchGuess(letterGuessed);
  }
// call refreshViewGameStats() on each keyup
  //refreshViewGameStats();
 } 

