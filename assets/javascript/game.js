
var alphabet = ["a","b","c","d","e","f","g","h","i","j","k","l","m",
"n","o","p","q","r","s","t","u","v","w","x","y","z"];

var wins = 0;
var losses = 0;
var guessesLeft = 10;
var guessed = [];

function reset() {
    guessesLeft = 10;
    guessed = [];
    computerChoice = alphabet[Math.floor(Math.random() * alphabet.length)];
}

var computerChoice = alphabet[Math.floor(Math.random() * alphabet.length)];


document.onkeypress = function(event) {
    var userGuess = event.key;


    if (userGuess === computerChoice) {
        wins++;
        reset();
    } else if ((userGuess !== computerChoice) && (guessesLeft === 0)) {
        losses++;
        reset();
    }
    else {
        guessesLeft--;
        
    } 


    if (userGuess !== computerChoice && (!guessed.includes(userGuess))) {
        guessed.push(userGuess);
    }

    document.getElementById('wins').innerHTML = wins;
    document.getElementById('losses').innerHTML = losses;
    document.getElementById('guessesLeft').innerHTML = guessesLeft;
    document.getElementById('guessed').innerHTML = guessed;


}

var text = "The Psychic Game!";

for(var i in text) { 
  if(text[i] === " ") {
    $(".wavetext").append( $("<span>").html("&nbsp;") ); 
  } else {  
    $(".wavetext").append( $("<span>").text(text[i]) ); 
  }
}