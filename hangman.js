// Let's start by grabbing a reference to the <span> below      
var inGame = false;
var used;
var word;
var puzzle;

var gameText = document.getElementById("game-text");

var wordList = ['grenadine',
'pomegranate',
'hefty',
'gladiolus',
'pelter',
'concretize',
'manikin',
'canvass',
'lubberly',
'cordial',
'jocular',
'Utopian',
'tamp',
'subnormality',
'obbligato',
'woodsy',
'ha-ha',
'stevedore',
'effervescence',
'bromidic',
'canoodle',
'satrap',
'congeries',
'twain',
'kittiwake',
'polysemy',
'madrigal',
'bollard',
'parvenu',
'bowdlerize',
'mountebank',
'hauteur',
'asphodel',
'annulment',
'quasi',
'Yugoslavia',
'paleobotany',
'cephalopodan',
'Serbian',
'tribunal',
'ague',
'Netherlands',
'Bosnian',
'Albanian',
'Kosovo',
'Chile',
'humiliating',
'Suharto',
'contemplate',
'Peruvian',
'oust',
'Saddam Hussein',
'subsequently',
'massacre',
'civilian',
'revolt',
'fascist',
'revered',
'regime',
'Mandela',
'triumphantly',
'Pretoria',
'culminate',
'assassinated',
'Ferdinand I',
'Suharto',
'Burmese',
'Beijing',
'Kyrgyzstan',
'Venezuela',
'charismatic',
'daw',
'upsurge',
'suffrage',
'minimal',
'insurgency',
'Sri Lanka',
'torture',
'Guatemala',
'Bangladesh',
'manipulate',
'Bolivia',
'stringent',
'vulnerable',
'prod',
'famine',
'eradicate'];

/**
 * { event listener }
 *
 * @param      {event}  event   The event
 */

 document.onkeyup = function(event) {
 	var userInput = event.key;

 	if(userInput == 'Escape'){
 		if(confirm("Are you sure?")){
 			tries=0;
 			puzzle = "";    		
 			inGame = false;
 			gameText.innerHTML = gameText.innerHTML ="Welcome to Hangman! Press enter to start!";
 		}
 	}
 	else{
 		if(!inGame && userInput=='Enter'){
		//wait for enter key then initialize game state
		
			used = "";
			word = wordList[Math.floor(Math.random()*wordList.length)].toLowerCase();
			tries = Math.floor(word.length*2.5);
			puzzle = "";

			for(let i=0 ; i<word.length ; i++){
				puzzle+="_";
			}
			gameText.innerHTML = gameText.innerHTML ="Tries left: "+tries+
			"<br> Puzzle: "+puzzle+
			"<br> Letters Used: "+used;
			inGame=true;
	    }
	    else if(inGame){    		

			var index = word.indexOf(userInput);
			if(index<0 && used.indexOf(userInput)<0){
				tries--;
				used += (userInput+" ");
				alert("WRONG!");
				gameText.innerHTML = gameText.innerHTML ="Tries left: "+tries+
				"<br> Puzzle: "+puzzle+
				"<br> Letters Used: "+used;  
			}
			else{
				temp = puzzle.split("");
				for(let i=0 ; i<word.length ; i++){
					if(userInput === word[i]){
						temp[i] = userInput;
					}
				}
				puzzle=temp.join("");
				gameText.innerHTML = gameText.innerHTML ="Tries left: "+tries+
				"<br> Puzzle: "+puzzle+
				"<br> Letters Used: "+used;

			}
			if(puzzle.indexOf("_")<0){
				alert("*!CONGRATULATIONS!*");
				alert("*!YOU WIN!*");
				alert("*!GREAT JOB!*");
				alert("*!YOU'RE THE BEST!*");
				inGame = false;
				gameText.innerHTML = gameText.innerHTML ="Tries left: "+tries+
				"<br> Puzzle: "+puzzle+
				"<br> Letters Used: "+used+
				"<br> You have won, press enter to play again or esc to exit to main menu";
			}
			if (tries<1){
				alert("*!CONGRATULATIONS!*");
				alert("*!YOU LOSE!*");
				alert("*!WEAK!*");
				alert("*!SO WEAK!*");
				inGame = false;
				gameText.innerHTML = gameText.innerHTML ="Tries left: "+tries+
				"<br> Puzzle: "+puzzle+
				"<br> Letters Used: "+used;
			}   
	    }
    }
}




