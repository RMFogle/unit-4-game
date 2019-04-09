$(document).ready(function() {

// Generate random number to be displayed when the page loads. 
// Random number should be between 19-120. 
var randomNumber = Math.floor(Math.random() * 120) + 19;  
$('#match-number').html("<h2>Match this number:  </h2>" + randomNumber); 
console.log("Match this number: " + randomNumber); 


// Generate random numbers for each crystal. 
// Random number should be between 1-12.
var buttonOne = Math.floor(Math.random() * 12) + 1;
var buttonTwo = Math.floor(Math.random() * 12) + 1;
var buttonThree = Math.floor(Math.random() * 12) + 1;
var buttonFour = Math.floor(Math.random() * 12) + 1; 
console.log("btn one: " + buttonOne); 
console.log("btn two: " + buttonTwo);
console.log("btn three: " + buttonThree);
console.log("btn four: " + buttonFour);


// Create variable for wins, losses and player total score. 
var playerTotal = 0; 
var wins = 0; 
var losses = 0; 

// Create game reset. 

function resetGame() {
    randomNumber = Math.floor(Math.random() * 120) + 19;  
    $('#match-number').html("<h2>Match this number:  </h2>" + randomNumber); 
    console.log("Match this number: " + randomNumber); 
    buttonOne = Math.floor(Math.random() * 12) + 1;
    buttonTwo = Math.floor(Math.random() * 12) + 1;
    buttonThree = Math.floor(Math.random() * 12) + 1;
    buttonFour = Math.floor(Math.random() * 12) + 1;
    playerTotal = 0; 
    $('#total-score').html("<h3>Your total score is:   </h3>" + playerTotal);
}


// Create a function and or method to add wins to player wins. 
function playerWins() {
    wins++;
    $('#wins').html("<h2>Wins:  </h2>" + wins); 
    resetGame();
}

// Create a function and or method to add losses to player losses. 
function playerLosses() {
    losses++; 
    $('#losses').html("<h2>Losses:  </h2>" + losses) 
    resetGame(); 
}


// Create a button, click functions for each cyrstal. 4 total. 
// Should display to player total score each time when clicked.  
// Create conditionals for win or lose. 
$('.button-one').on("click", function() {
    playerTotal += buttonOne; 
    console.log("Your total score is: " + playerTotal); 
    // try .fadeToggle for fun? 
    $('#total-score').html("<h3>Your total score is:   </h3>" + playerTotal); 

    if (playerTotal === randomNumber) {
        playerWins(); 
    }
    else if (playerTotal >= randomNumber) {
        playerLosses()
    }
})

$('.button-two').on("click", function() {
    playerTotal = playerTotal + buttonTwo; 
    console.log("Your total score is: " + playerTotal); 
    // try .fadeToggle for fun? 
    $('#total-score').html("<h3>Your total score is:   </h3>" + playerTotal); 

    if (playerTotal === randomNumber) {
        playerWins(); 
    }
    else if (playerTotal >= randomNumber) {
        playerLosses()
    }
})

$('.button-three').on("click", function() {
    playerTotal = playerTotal + buttonThree; 
    console.log("Your total score is: " + playerTotal); 
    // try .fadeToggle for fun? 
    $('#total-score').html("<h3>Your total score is:   </h3>" + playerTotal); 

    if (playerTotal === randomNumber) {
        playerWins(); 
    }
    else if (playerTotal >= randomNumber) {
        playerLosses()
    }
})

$('.button-four').on("click", function() {
    playerTotal = playerTotal + buttonFour; 
    console.log("Your total score is: " + playerTotal); 
    // try .fadeToggle for fun? 
    $('#total-score').html("<h3>Your total score is:   </h3>" + playerTotal); 

    if (playerTotal === randomNumber) {
        playerWins(); 
    }
    else if (playerTotal >= randomNumber) {
        playerLosses()
    }
});



//*Note don't know if I need to .push, .text, .append, or .html to link variables to html id's or classes. 


}); 