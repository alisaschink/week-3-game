//randomly select catagory and word within catagory
//catagories: movies, books, and TV
//word arrays within catagory array

var play = function(){
	var catagories = [
	['dawn of the dead', 'psycho', 'halloween', 'scream', 'evil dead', 're-animator', 
	'nightmare on elm street', 'the conjuring', 'the texas chainsaw massacre', 'poltergeist'], 
	['the shining', 'carrie', 'pet semetary', 'the exorcist', 'house of leaves', 'dracula', 
	'frankenstein', 'the collector', 'silence of the lambs', 'in cold blood'], ['the walking dead', 
	'american horror story', 'buffy the vampire slayer', 'ash vs evil dead', 'bates motel', 
	'the twilight zone', 'the x files', 'penny dreadful', 'supernatural', 'tales from the crypt'] 
	];

	var chosenCatagory = catagories[Math.floor(Math.random()*catagories.length)];
	var chosenWord = chosenCatagory[Math.floor(Math.random()*chosenCatagory.length)];
	console.log(chosenWord);

//if/else statements to select catagory

	var selectCatagory = function () {
		if (chosenCatagory === catagories[0]) {
			catagoryName.innerHTML = "The Chosen Catagory is Movies!";
			
		} else if (chosenCatagory === catagories[1]) {
			catagoryName.innerHTML = "The Chosen Catagory is Books!";
			
		}else if (chosenCatagory === catagories[2]) {
			catagoryName.innerHTML = "The Chosen Catagory is TV!";
			
		}
	}

	selectCatagory();

	//set _ for number of spaces in each word
	var guesses = [];
	result = function () {
   		var wordHolder = document.getElementById('wordSelected');
    	var word = document.createElement('ul');

    	for (var i = 0; i < chosenWord.length; i++) {
      		word.setAttribute('id', 'newWord');
      		var guess = document.createElement('li');
      		guess.setAttribute('class', 'guess');
      	if (chosenWord[i] === "-") {
        	guess.innerHTML = "-";
        	var space = 1;
      	} else {
        	guess.innerHTML = "_";
      	}

      	guesses.push(guess);
     	 wordHolder.appendChild(word);
      	word.appendChild(guess);
    }
  }
  result();


}

play();




//turn user guess into a string and stores guessed letter

document.onkeyup = function(event) {
        var userGuess = String.fromCharCode(event.keyCode).toLowerCase();
		console.log(userGuess)
}



//keep user from guessing lettter already guessed


//replace '_' with correct letter


//set variables for number of guesses, wins, and losses

var guessCounter = 13; //sets number of guesses to 13
var guessDiv = document.createElement("div");
	guessDiv.innerHTML = "Guesses: " + guessCounter;
	scoring.appendChild(guessDiv);

var winsCounter = 0; //sets number of wins to 0
var winsDiv = document.createElement("div");
	winsDiv.innerHTML = "Wins: " + winsCounter;
	scoring.appendChild(winsDiv);

var lossesCounter = 0; //sets number of losses to 0
var lossesDiv = document.createElement("div");
	lossesDiv.innerHTML = "Losses: " + lossesCounter;
	scoring.appendChild(lossesDiv);



//adjust number of guesses left, wins, losses

//show picture when correct word is guessed

//show answer if user loses

