
var game;

$(document).ready(function() {

    var gameClass = function() {

    	// The DOM (document object model) is loaded.
		// Meaning, all html, javascript, images, fonts, css, etcetera.
		// It's now safe to execute the game code.

    	// Reference to self (root) for scoping purposes
    	var root = this;

    	// Declare properties
    	var currentScreen;
		var screens;
		var score;

		// Add interaction: start screen start button
		$(".startbutton").on("click", function() {
			root.setScreen(1);
		});

		// Add interaction: question answer buttons
		$(".gamescreen a").on("click", function(event) {

			// Check if the clicked anchor has a class named "correct"
			if($(event.currentTarget).hasClass("correct")) {
				// The anchor has a class named "correct": add score
				score += 1;
			}else{
				// The anchor doesn't have a class named "correct": no points
			}

			// Go to the next screen
			currentScreen++;
			root.setScreen(currentScreen);
		});
		// Method to switch to a different screen
		this.setScreen = function(screen) {
			// loop through all available screens
			for(var i=0; i<screens.length; i++) {
				// hide the screen
				$(screens[i]).addClass("ishidden");
				if(i == screen) {
					// show the given screen as parameter "screen"
					$(screens[i]).removeClass("ishidden");

					// check if we're on the final screen
					// if so, show the final score
					if(i == screens.length - 1) {
						$("#finalscore").text(score);
						$("#jumpscare_sound")[0].play();
						$("#jumpscare").show();
						setTimeout(function() {
							$("#jumpscare").fadeOut();
						}, 1500);
					}

				}
			}
		};

		this.startGame = function() {

			// Initial values
			currentScreen = 0;
			screens = $(".gamescreen");
			score = 0;

			// Go to start screen
			root.setScreen(currentScreen);
		};
	};
 	
 	// Create an instance of gameClass
 	game = new gameClass();

 	// Start the game
    game.startGame();
});
