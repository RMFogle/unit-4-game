$(document).ready(function() {

// Generate random number to be displayed when the page loads. 
// Random number should be between 19-120. 
var randomNumber = Math.floor(Math.random() * 120) + 19;  
$('#match-number').html("<h2>Match this number: </h2>" + randomNumber); 
console.log("Match this number: " + randomNumber); 


// Generate random numbers for each crystal. 
// Random number should be between 1-12.
buttonOne = Math.floor(Math.random() * 12) + 1;
buttonTwo = Math.floor(Math.random() * 12) + 1;
buttonThree = Math.floor(Math.random() * 12) + 1;
buttonFour = Math.floor(Math.random() * 12) + 1; 
console.log("btn one: " + buttonOne); 
console.log("btn two: " + buttonTwo);
console.log("btn three: " + buttonThree);
console.log("btn four: " + buttonFour);


// Create variable for wins, losses and player total score. 
playerTotal = 0; 
wins = 0; 
losses = 0; 

// Create game reset. 

function resetGame() {
    randomNumber = Math.floor(Math.random() * 120) + 19;  
    $('#match-number').html("<h2>Match this number: </h2>" + randomNumber); 
    console.log("Match this number: " + randomNumber); 
    buttonOne = Math.floor(Math.random() * 12) + 1;
    buttonTwo = Math.floor(Math.random() * 12) + 1;
    buttonThree = Math.floor(Math.random() * 12) + 1;
    buttonFour = Math.floor(Math.random() * 12) + 1;
    playerTotal = 0; 
    $('#total-score').html(playerTotal); 
}


// Create a function and or method to add wins to player wins. 
function playerWins() {
    wins++;
    $('#wins').html(wins); 
    resetGame();
}

// Create a function and or method to add losses to player losses. 
function playerLosses() {
    losses++; 
    $('#losses').html(losses) 
    resetGame(); 
}


// Create a button, click functions for each cyrstal. 4 total. 
// Should display to player total score each time when clicked.  
// Create conditionals for win or lose. 





//*Note try .push, .text, .append, or .html to link variables to html id's or classes. 


}); 