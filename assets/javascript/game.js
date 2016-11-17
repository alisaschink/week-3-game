//set an array with letters of the alphabet

//var alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

//set catagories variable
var catagories = ['movies', 'books', 'TV'] //array of catagories
//var chosenCatagory ; //selected catagory

//set arrays of words for those catagories

var movies = ['dawn of the dead', 'psycho', 'halloween', 'scream', 'evil dead', 'reanimator', 'nightmare on elm street', 'the conjuring', 'the texas chainsaw massacre', 'poltergeist'];
var books = ['the shining', 'carrie', 'pet semetary', 'the exorcist', 'house of leaves', 'dracula', 'frankenstein', 'the collector', 'silence of the lambs', 'in cold blood'];
var tv = ['the walking dead', 'american horror story', 'buffy the vampire slayer', 'ash vs evil dead', 'bates motel', 'the twilight zone', 'the x files', 'penny dreadful', 'supernatural', 'tales from the crypt'];

//set variables for number of guesses, wins, and losses
//var word ; //selected word
//var guess ; //guess
var guessCounter = 10; //sets number of guesses to 10
var winsCounter = 0; //sets number of wins to 0
var lossesCounter = 0; //sets number of losses to 0

//set variable for number of spaces in each word

//var space ; //number of spaces in each word

//get elements by ID
	//document.getElementById("");
		//var name = 

	//var showWins = 
		//document.getElementById("winsCounter");

//allow user to select catagory
 	//var chosenCatagory;
//if/else statements to select catagory

	// var selectCatagory = function () {
	// 	if (chosenCatagory === catagories[0]) {
	// 		catagoryName.innerHTML = "The Chosen Catagory is Movies!";
	// 	} else if (chosenCatagory === catagories[1]) {
	// 		catagoryName.innerHTML = "The Chosen Catagory is Books!";
	// 	}else if (chosenCatagory === catagories[2]) {
	// 		catagoryName.innerHTML = "The Chosen Catagory is TV!";
	// 	}
	// }

//randomly select word within catagory

//function to record user guess and stored guessed letter

document.onkeyup = function(event) {
        var userGuess = String.fromCharCode(event.keyCode).toLowerCase();
		console.log(userGuess)
}



//keep user from guessing lettter already guessed


//replace '_' with correct letter


//adjust number of guesses left, wins, losses

//show picture when correct word is guessed

//show answer if user loses

