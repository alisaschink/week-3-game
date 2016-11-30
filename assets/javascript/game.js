//declare variables
var movies = ['dawn of the dead', 'psycho', 'halloween', 'scream', 'evil dead', 're-animator',
  'nightmare on elm street', 'the conjuring', 'the texas chainsaw massacre', 'poltergeist'
];
var books = ['the shining', 'carrie', 'pet semetary', 'the exorcist', 'house of leaves', 'dracula',
  'frankenstein', 'the collector', 'silence of the lambs', 'in cold blood'
];
var tv = ['the walking dead',
  'american horror story', 'buffy the vampire slayer', 'ash vs evil dead', 'bates motel',
  'the twilight zone', 'the x files', 'penny dreadful', 'supernatural', 'tales from the crypt'
];
var catagories = [movies, books, tv];


var guessCounter = 15; //sets number of guesses to 15
var matchCounter = 0; //sets number of matches to 0
var winsCounter = 0;//sets wins to 0
var lossesCounter = 0;//sets losses to 0

//displays number of wins and losses

var winsDiv = document.createElement("div");
  winsDiv.innerHTML = "Wins: " + winsCounter;
var lossDiv = document.createElement("div");
  lossDiv.innerHTML = "Losses: " + lossesCounter;

  
  scoring.appendChild(winsDiv);
  scoring.appendChild(lossDiv);
  


var play = function() {

  //declares empty guesses array
  var guesses = [];
 
 //sets number of guesses and matches upon start of game
  var matchDiv = document.createElement("div");
  matchDiv.innerHTML = "Matches: " + matchCounter;
  var guessDiv = document.createElement("div");
  guessDiv.innerHTML = "Guesses: " + guessCounter;

  scoring.appendChild(guessDiv);
  scoring.appendChild(matchDiv);

//randomly select catagory and word within catagory

  var chosenCatagory = catagories[Math.floor(Math.random() * catagories.length)];
  var chosenWord = chosenCatagory[Math.floor(Math.random() * chosenCatagory.length)];
  console.log(chosenWord);

  //if/else statements to indicate selected catagory
  var selectCatagory = function() {
    if (chosenCatagory === catagories[0]) {
      catagoryName.innerHTML = "The Chosen Catagory is Movies!";

    } else if (chosenCatagory === catagories[1]) {
      catagoryName.innerHTML = "The Chosen Catagory is Books!";

    } else if (chosenCatagory === catagories[2]) {
      catagoryName.innerHTML = "The Chosen Catagory is TV!";

    }
  }

  selectCatagory();


  //set _ for number of spaces in each word

    var wordHolder = document.getElementById('wordSelected');
    var word = document.createElement('div');
    word.setAttribute('id', 'newWord');

    for (var i = 0; i < chosenWord.length; i++) {
      var guess = document.createElement('div');
      guess.setAttribute('class', 'guess');
      if (chosenWord[i] === "-") {
        guess.innerHTML = "-";
        matchCounter++
        matchDiv.innerHTML = "Matches: " + matchCounter;
      } else if (chosenWord[i] === " ") {
        guess.innerHTML = " ";
        matchCounter++
        matchDiv.innerHTML = "Matches: " + matchCounter;
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
      


      //replace '_' with correct letter and increases matches by 1
      for (var i = 0; i < chosenWord.length; i++) {
        if (chosenWord[i] === userGuess) {
           guesses[i].innerHTML = userGuess;
           matchCounter++
           matchDiv.innerHTML = "Matches: " + matchCounter;

        };
      };
      


      //creates list of guessed letters
      var guessed = document.getElementById('guessed');

      var guessedList = document.createElement('div');
      	guessedList.setAttribute('id', 'newGuess');

      var guessedLetter = document.createElement('div');
      	guessedLetter.setAttribute('class', 'guess');
      	

      		//only stores guessed letter if not previously guessed
      		var newLetter = guesses.indexOf(userGuess);
      		 if (newLetter === -1){
      		 	guessedLetter.innerHTML = userGuess;
      		 	guessed.appendChild(guessedList);
      			guessedList.appendChild(guessedLetter);
      			//reduces guesses by 1
      			guessCounter--
      			guessDiv.innerHTML = "Guesses: " + guessCounter;

            //increases loss counter by 1
            if ( guessCounter < 0 ) {
              guessDiv.innerHTML = "Game Over";
              lossesCounter++
              lossDiv.innerHTML = "Losses: " + lossesCounter;
              //show answer if user loses
              //resets game
              guessCounter = 15; 
              guessDiv.innerHTML = "";
              matchCounter = 0; 
             matchDiv.innerHTML = "";
              //   var guesses = [];
             word.innerHTML = "";
            //guess.innerHTML = "";

            // guessedLetter.innerHTML = "";
            play();

            };
      		};

          //increases wins by 1 when word is correctly guessed
        if(matchCounter === chosenWord.length){
          winsCounter++
          winsDiv.innerHTML = "Wins: " + winsCounter;
          //show picture when correct word is guessed
          // automatically reset game
          guessCounter = 15; 
            guessDiv.innerHTML = "";
          matchCounter = 0; 
            matchDiv.innerHTML = "";
        //   var guesses = [];
          word.innerHTML = "";
          //guess.innerHTML = "";

         // guessedLetter.innerHTML = "";
          play();
        };


    };

};

play();





