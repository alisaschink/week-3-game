//declare variables
var movies = ['dawn of the dead', 'psycho', 'halloween', 'scream', 'evil dead', 're-animator', 
	 'nightmare on elm street', 'the conjuring', 'the texas chainsaw massacre', 'poltergeist'];
var books = ['the shining', 'carrie', 'pet semetary', 'the exorcist', 'house of leaves', 'dracula', 
	'frankenstein', 'the collector', 'silence of the lambs', 'in cold blood'];
var tv = ['the walking dead', 
	 'american horror story', 'buffy the vampire slayer', 'ash vs evil dead', 'bates motel', 
	'the twilight zone', 'the x files', 'penny dreadful', 'supernatural', 'tales from the crypt'];
var catagories = [movies, books, tv];
var guesses = [];
var guessCounter = 13; //sets number of guesses to 13
var chosenCatagory = catagories[Math.floor(Math.random()*catagories.length)];
var chosenWord = chosenCatagory[Math.floor(Math.random()*chosenCatagory.length)];


//randomly select catagory and word within catagory
//catagories: movies, books, and TV
//word arrays within catagory array

var play = function(){

	// var chosenCatagory = catagories[Math.floor(Math.random()*catagories.length)];
	// var chosenWord = chosenCatagory[Math.floor(Math.random()*chosenCatagory.length)];
	console.log(chosenWord);

	//if/else statements to indicate selected catagory
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
	var game = function () {
   		var wordHolder = document.getElementById('wordSelected');
    	var word = document.createElement('ul');

    for (var i = 0; i < chosenWord.length; i++) {
      		word.setAttribute('id', 'newWord');
      		var guess = document.createElement('li');
      		guess.setAttribute('class', 'guess');
      	if (chosenWord[i] === "-") {
        	guess.innerHTML = "-";
        	var space = 1;
      	} else if (chosenWord[i] === " ") {
      		guess.innerHTML = " "
      	} else {
        	guess.innerHTML = "_";
      	}

      	guesses.push(guess);
     	 wordHolder.appendChild(word);
      	word.appendChild(guess);

    	}

    	//turn user guess into a string and stores guessed letter

	document.onkeyup = function(event) {
        var userGuess = String.fromCharCode(event.keyCode).toLowerCase();
		
		//replace '_' with correct letter
		for (var i = 0; i < chosenWord.length; i++) {
			if (chosenWord[i] === userGuess){
      		guesses[i].innerHTML = userGuess;
      	}

      	var j = (chosenWord.indexOf(userGuess));
      		if (j === -1){
      			guessCounter -= 1;
      		};	
    	}
		console.log(userGuess);
	}

  	}

  game();

}

play();


 


//keep user from guessing lettter already guessed




//displays number of guesses

var guessDiv = document.createElement("div");
	if (guessCounter < 1){
		guessDiv.innerHTML = "Game Over";
	} else {
		guessDiv.innerHTML = "Guesses: " + guessCounter;
	}
	scoring.appendChild(guessDiv);


//adjust number of guesses left

//show picture when correct word is guessed

//show answer if user loses

 // Reset

  document.getElementById('reset').onclick = function() {
    word.parentNode.removeChild(word);
    play();
  };
