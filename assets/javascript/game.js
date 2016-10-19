// choose the words for the hangman game. 
// assign their letters as variables in a string

var word1 = ['P','a','r','i', 's'];
var word2 =	['A','r','l','e','s'];		
var word3 =	['S','a','i','n','t','R','e','m','y','d','e','P','r','o','v','e','n','c','e'] 		']
var words4 = ['A','u','v','e','r','s','S','u','r','O','i','s','e' ]		

// make a second array that will correspond to the number of spaces 
// in each of the words

var blanks1 = ['_','_','_', '_', '_'] 
var blanks2	= ['_','_','_', '_', '_'] 		
var blanks3 = ['_', '_', '_', '_','_','_','_','_','_', '_', '_', '_', '_', '_' '_' '_', 
var blanks4	= ['_','_','_','_','_','_','_','_','_','_', '_','_', '_',];

// make a third array for the choices of letters that 
// can be chosen in the game

var letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 
				'h', 'i', 'j', 'k', 'l', 'm', 'n', 
				'o', 'p', 'q', 'r', 's', 't', 'u', 'v'
				'w', 'x', 'y', 'z'];

// tally the number of words correctly chosen with another variable
var wins = 0

// create a finite number of var letters that can be chosen 
var guesses = 10

// create an event where any letter can activate the game
document.getElementById("activate").onkeypress = function() {myFunction()};

function myFunction() {
    // document.getElementById("activate").style.backgroundColor = "red";
}



// create a way for the user to guess a letter from var letters 
function chooseLetterfirstWord (){
	if letter = 'a', then 
}
userGuess === 'a'

// which can then be 

// div id Answers that can store the blanks


//blanks are replaced by letters as letters are chosen correctly


// (same letter can be chosen multiple times without penalty &

// letters are stored once in the guesses div-



// some sort of conditional statement?)


// create a function that relates var words with var blanks
function chooseWord () {
    return words[Math.floor(Math.random() * words.length)];
}

 // // Create code that "grabs" the div with the matching id (#drinkOptions);

 // var drinkList = document.getelementbyId ('drinkOptions') 

//create a function that substitutes var letters indices with 
// individual spaces in var blanks

function blanksFromAnswer ( answerWord ) {  
    var result = ""; 
    for ( i in answerWord ) {
        result = "_" + result;
    }
    return result;
}

// create a function that returns incorrect letters and displays 
 //them on the screen 
function guessedLetters (){

}
return result

// 