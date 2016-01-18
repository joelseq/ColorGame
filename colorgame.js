var numSquares = 6;
var colors = getColors(numSquares);
var squares = document.querySelectorAll(".square");
fillSquares(squares,colors);
var headerDisplay = document.querySelector("#hdrtxt");
var feedback = document.querySelector("#feedback");
var pickedColor = pickColor(colors);
var h1Display = document.querySelector("h1");
headerDisplay.textContent = pickedColor;
var resetButton = document.querySelector("#reset");
var easyButton = document.querySelector("#easy");
var hardButton = document.querySelector("#hard");
var modeButtons = document.querySelectorAll(".mode");
var currentMode = document.querySelector(".selected");



/*				EVENT LISTENERS 		*/

//Add event listener to reset
resetButton.addEventListener("click", reset);


//Add event listeners to all the buttons
for(var i = 0; i < modeButtons.length; i++) {
	modeButtons[i].addEventListener("click", function() {
		if(currentMode !== this) {
			this.classList.add("selected");
			currentMode.classList.remove("selected");
			currentMode = this;
			reset();
		}
	});
}

//Add event listeners to the squares
for(var i = 0; i < squares.length; i++) {
	squares[i].addEventListener("click", function() {
		var clickedColor = this.style.background;
		if(clickedColor === pickedColor) {
			//Show user he/she won
			feedback.textContent = "Correct!";
			//Change color of all the squares to the right choice
			for(var i = 0; i < squares.length; i++) {
				squares[i].style.background = pickedColor;
			}
			h1Display.style.background = pickedColor;
			resetButton.textContent = "Play Again?";
		} else {
			//Show user he/she got it wrong
			feedback.textContent = "Incorrect";
			this.style.background = "#232323";
		}
	});
}



/*       FUNCTIONS  	*/

//Resets the game
function reset() {
	h1Display.style.background = "steelblue";
	feedback.textContent = "";
	resetButton.textContent = "New Color";
	//If Mode is Easy
	if(currentMode.textContent === "Easy") {
		numSquares = 3;
	}
	//Else Mode is Hard
	else {
		numSquares = 6;
	}
	colors = getColors(numSquares);
	fillSquares(squares, colors);
	pickedColor = pickColor(colors);
	headerDisplay.textContent = pickedColor;
}

//Returns an array of colors
function getColors(num) {
	var arr = [];
	for(var i = 0; i < num; i++) {
		arr.push(makeColor()); //push means add to array
	}
	return arr; //return this new array
}

//Picks a color from a bunch of choices
function pickColor(choices) {
	var random = Math.floor(Math.random() * choices.length);
	return choices[random];
}

//Fills all the squares with the colors
function fillSquares(squares, colors) {
	for(var i = 0; i < squares.length; i++) {
		squares[i].style.display = "block";
		if(colors[i]) {
			squares[i].style.background = colors[i];
		} else {
			squares[i].style.display = "none";
		}
	}
}


//Generates an r,g, and b value for a color
function makeColor() {
	//Random value between 0 and 255 (floor means cut off decimal)
	var r = Math.floor(Math.random() * 256); 
	var g = Math.floor(Math.random() * 256);
	var b = Math.floor(Math.random() * 256);
	return "rgb(" + r + ", " + g + ", " + b + ")";
}



