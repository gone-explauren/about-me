'use strict';

let numberCorrect = 0;

// const allows you to modify the value of an array, but the reference to that array cannot be changed
const getUsername = () => {
	let username = prompt('Who\'s that sexy babe?')
	console.log(`I'm looking respectfully, ${username}.`)
	alert(`It's ${username}, bitch.`)

	// get the span where username will be displayed
	let mySpan = document.getElementById('username')

	// insert the username
	mySpan.textContent = username

	return username
}

let username = getUsername()

function wantHotBody() {
	// "You better work, bitch" could be set as a global variable correctAnswer, but it would still need to be called inside every function, so I may as well leave it as is
	let hotBody = prompt('You wanna hot body?');
	// the || below is called "logical or." && is called "logical and." If the && was used instead, then each statement would have to be true to alert "You better work, bitch"
	if (hotBody.toLowerCase() === 'yes' || hotBody.toLowerCase() === 'y') {
		//console.log('You better work, bitch')
		alert('You better work, bitch.')
		numberCorrect += 1
	} else if (hotBody.toLowerCase() === 'no' || hotBody.toLowerCase() === 'n') {
		//console.log('Yes, you do.')
		alert('Yes, you do.')
	} else {
		//console.log('What was that?')
		alert('What was that?')
	}
}


function wantBugatti() {
	let bugatti = prompt('You want a Bugatti?');

	if (bugatti.toLowerCase() === 'yes' || bugatti.toLowerCase() === 'y') {
		//console.log('You better work, bitch')
		alert('You better work, bitch.')
		numberCorrect += 1
	} else if (bugatti.toLowerCase() === 'no' || bugatti.toLowerCase() === 'n') {
		//console.log('Just play along, okay?')
		alert('Just play along, okay?')
	} else {
		//console.log('Come again?')
		alert('Come again?')
	}
}
wantBugatti();

function wantMaserati() {
	let maserati = prompt('You want a Maserati?');

	if (maserati.toLowerCase() === 'yes' || maserati.toLowerCase() === 'y') {
		//console.log('You better work, bitch.')
		alert('You better work, bitch.')
		numberCorrect += 1
	} else if (maserati.toLowerCase() === 'no' || maserati.toLowerCase() === 'n') {
		//console.log('I don\'t believe you.')
		alert('I don\'t believe you.')
	} else {
		//console.log('Did you say something?')
		alert('Did you say something?')
	}
}
wantMaserati();


function wantLambo() {
	let lambo = prompt('You want a Lamborghini?');

	if (lambo.toLowerCase() === 'yes' || lambo.toLowerCase() === 'y') {
		//console.log('You better work, bitch.')
		alert('You better work, bitch.')
		numberCorrect += 1
	} else if (lambo.toLowerCase() === 'no' || lambo.toLowerCase() === 'n') {
		//console.log('Don\'t play.')
		alert('Don\'t play.')
	} else {
		//console.log('What do you mean?')
		alert('What do you mean?')
	}
}
wantLambo();



// Assignment questions 6 and 7 will be down below bc I can't cut Britney off mid chorus, srry.


function wantMartini() {
	let sipMartini = prompt('Sip martinis?');

	if (sipMartini.toLowerCase() === 'yes' || sipMartini.toLowerCase() === 'y') {
		//console.log('You better work, bitch.')
		alert("You better work, bitch.")
		numberCorrect += 1
	} else if (sipMartini.toLowerCase() === 'no' || sipMartini.toLowerCase() === 'n') {
		//console.log('Oh, maybe you\'re sober, that\'s okay.')
		alert('Oh, maybe you\'re sober, that\'s okay.')
	} else {
		//console.log('Hm?')
		alert('Hm?')
	}
}
wantMartini();

function inBikini() {
	let hotBikini = prompt('Look hot in a bikini?');

	if (hotBikini.toLowerCase() === 'yes' || hotBikini.toLowerCase() === 'y') {
		//console.log('You better work, bitch.')
		alert('You better work, bitch.')
		numberCorrect += 1
	} else if (hotBikini.toLowerCase() === 'no' || hotBikini.toLowerCase() === 'n') {
		//console.log('You already do, babe.')
		alert('You already do, babe.')
	} else {
		//console.log('You think you\'re funny, punk?')
		alert('You think you\'re funny, punk?')
	}
}
inBikini();



// if I add the .toLowerCase after the prompt, it will make writing code easier for me, as well as make the code more readable :) It does the same thing as the way I wrote it above.
function liveFancy() {
	let fancy = prompt('You wanna live fancy?').toLowerCase();

	if (fancy === 'yes' || fancy === 'y') {
		//console.log('You better work, bitch.')
		alert('You better work, bitch.')
		numberCorrect += 1
	} else if (fancy === 'no' || fancy === 'n') {
		//console.log('Get bougie, bitch.')
		alert('Get bougie, bitch.')
	} else {
		//console.log('Quit playin\'.')
		alert('Quit playin\'.')
	}
}
liveFancy();

function liveMansion() {
	let mansion = prompt('Live in a big mansion?').toLowerCase();

	if (mansion === 'yes' || mansion === 'y') {
		//console.log('You better work, bitch.')
		alert('You better work, bitch.')
		numberCorrect += 1
	} else if (mansion === 'no' || mansion === 'n') {
		//console.log('Yeah, that\'s a lot to clean.')
		alert('Yeah, that\'s a lot to clean...')
	} else {
		//console.log(`You're killin' me, ${username}.`)
		alert(`You're killin' me, ${username}.`)
	}
}
liveMansion();


function partyFrance() {
	let partyInFrance = prompt('Party in France?').toLowerCase();

	if (partyInFrance === 'yes' || partyInFrance === 'y') {
		//console.log('You better work, bitch')
		alert('You better work, bitch.')
		numberCorrect += 1
	} else if (partyInFrance === 'no' || partyInFrance === 'n') {
		//console.log('You sound kinda boring, no offense.')
		alert('You sound kind of boring, no offense')
	} else {
		//console.log('Alright, alright, we\'re done now.')
		alert('Alright, alright, we\'re done now.')
	}
}
partyFrance();



alert(`Okay ${username}, next game!`)


function laurelCry() {
	const cry = 12;
	const numGuess = 0;
	let attemptsRemaining = 4;
	let userResponse = prompt('How many times have I cried this week?'); //.toLowerCase();
	// .toLowerCase is not needed since my answer is a number and not a string.

	while (attemptsRemaining > numGuess) {
		attemptsRemaining--;

		/* 
		
		parseInt turns prompt "number" into an integer to match the integers defined by "cry" and "attempts"
		
		let num1= '26'
		let num2= '5'
		console.log(num1 + num2); will log 265
		console.log(parseInt(num1) + parseInt(num2)); will log 31
		
		*/

		if (parseInt(userResponse) === cry) {
			alert('If I round down, I mean')
			//console.log('It\'s cool to cry, you should try it.')
			// add to my total number correct with += 1
			numberCorrect += 1
			// break out of the loop if the answer was correct
			break
		} else {
			//console.log('Sorry babe, try again.');
			alert(`Try again, you have ${attemptsRemaining} attempts remaining.`)
			// repeat the prompt if answer was incorrect
			userResponse = prompt('How many times have I cried this week?') //.toLowerCase();
			if (numGuess === attemptsRemaining - 1) {
				break
			}
		}
	}
	if (numGuess === attemptsRemaining) {
		alert('Ohh, too bad. The correct answer is 12. I\'m very in touch with my emotions.')
	}
}
laurelCry();


alert('That was fun! Let\'s play one more.')

function genieWish() {

	const myWish = ['wealth redistribution', 'world peace', 'my mom to live forever'];
	let attemptsRemaining = 6;
	let userResponse = prompt('A magic genie has promised to grant me three wishes. What do I wish for? (Exact wording only)').toLowerCase();
	console.log('I know I make the rules, but I do with them what I want. Sorry.');

	// default answer is set as "false"
	let answerIsCorrect = false;
	for (let i = 0; i < attemptsRemaining; i++) {
		// inside first loop
		// console.log(attemptsRemaining)

		for (let j = 0; j < myWish.length; j++) {
			// inside second loop, this code is all running thr loop through the array I made
			if (userResponse === myWish[j]) {
				numberCorrect += 1;
				answerIsCorrect = true;
				alert('It\'s like you read my mind!');
				break
			}
			// console.log(`J is: ${j}`)
			// console.log(`attemptsRemaining is: ${attemptsRemaining}`)
		}

		// outside of second loop, this code is all running the attemptsRemaining loop.
		if (answerIsCorrect) {
			// break out of loop if answerIsCorrect becomes true
			break
		}

		//console.log(`Try again, you have ${attemptsRemaining} attempts remaining`);
		alert(`Try again, you have ${attemptsRemaining-i} attempts remaining`);
		userResponse = prompt('Can you figure out one of my genie wishes?');

		if (attemptsRemaining === 0) {
			console.log(`Nice try, but I wished for ${myWish[0]}, ${myWish[1]}, and for ${myWish[2]}.`);
			break
		}
	}
}
genieWish();
// end of question logic.

alert('So, how did you do?');
alert(`Congratulations! You got ${numberCorrect} questions correct! Thanks for playing.`);

// **** Heart Snow **** 

// Set the number of snowflakes (more than 30 - 40 not recommended)
var snowmax = 12;

// Set the colors for the snow. Add as many colors as you like
var snowcolor = new Array("#aaaacc", "#ddddFF", "#ccccDD", "#ffffff", "#ffc0cb");

// Set the fonts, that create the snowflakes. Add as many fonts as you like
var snowtype = new Array("Arial Black", "Arial Narrow", "Times", "Comic Sans MS");

// **** CHANGE YOUR IMAGE HERE ****

// Set the letter that creates your snowflake (recommended: * )
var snowletter = "<img src=img/heart.png>";

// Set the speed of sinking (recommended values range from 0.3 to 2)
var sinkspeed = 0.8;

// Set the maximal-size of your snowflaxes
var snowmaxsize = 20;

// Set the minimal-size of your snowflaxes
var snowminsize = 15;

// Set the snowing-zone
// Set 1 for all-over-snowing, set 2 for left-side-snowing
// Set 3 for center-snowing, set 4 for right-side-snowing
var snowingzone = 1;

// Do not edit below this line
var snow = new Array();
var marginbottom;
var marginright;
var timer;
var i_snow = 0;
var x_mv = new Array();
var crds = new Array();
var lftrght = new Array();
var browserinfos = navigator.userAgent;
var ie5 = document.all && document.getElementById && !browserinfos.match(/Opera/);
var ns6 = document.getElementById && !document.all;
var opera = browserinfos.match(/Opera/);
var browserok = ie5 || ns6 || opera;

function randommaker(range) {
	let rand = Math.floor(range * Math.random())
	return rand
}

function initsnow() {
	if (ie5 || opera) {
		marginbottom = document.body.clientHeight
		marginright = document.body.clientWidth
	}
	else if (ns6) {
		marginbottom = window.innerHeight
		marginright = window.innerWidth
	}


	var snowsizerange = snowmaxsize - snowminsize

	for (let i = 0; i <= snowmax; i++) {
		crds[i] = 0;
		lftrght[i] = Math.random() * 15;
		x_mv[i] = 0.03 + Math.random() / 10;
		snow[i] = document.getElementById("s" + i)
		snow[i].style.fontFamily = snowtype[randommaker(snowtype.length)]
		snow[i].size = randommaker(snowsizerange) + snowminsize
		snow[i].style.fontSize = snow[i].size
		snow[i].style.color = snowcolor[randommaker(snowcolor.length)]
		snow[i].sink = sinkspeed * snow[i].size / 5
		if (snowingzone == 1) { snow[i].posx = randommaker(marginright - snow[i].size) }
		if (snowingzone == 2) { snow[i].posx = randommaker(marginright / 2 - snow[i].size) }
		if (snowingzone == 3) { snow[i].posx = randommaker(marginright / 2 - snow[i].size) + marginright / 4 }
		if (snowingzone == 4) { snow[i].posx = randommaker(marginright / 2 - snow[i].size) + marginright / 2 }
		snow[i].posy = randommaker(2 * marginbottom - marginbottom - 2 * snow[i].size)
		snow[i].style.left = snow[i].posx
		snow[i].style.top = snow[i].posy
	}


	movesnow()
}

function movesnow() {
	for (let i = 0; i <= snowmax; i++) {
		crds[i] += x_mv[i];
		snow[i].posy += snow[i].sink
		snow[i].style.left = snow[i].posx + lftrght[i] * Math.sin(crds[i]) + 'px';
		snow[i].style.top = snow[i].posy + 'px';

		if (snow[i].posy >= marginbottom - 2 * snow[i].size || parseInt(snow[i].style.left) > (marginright - 3 * lftrght[i])) {
			if (snowingzone == 1) { snow[i].posx = randommaker(marginright - snow[i].size) }
			if (snowingzone == 2) { snow[i].posx = randommaker(marginright / 2 - snow[i].size) }
			if (snowingzone == 3) { snow[i].posx = randommaker(marginright / 2 - snow[i].size) + marginright / 4 }
			if (snowingzone == 4) { snow[i].posx = randommaker(marginright / 2 - snow[i].size) + marginright / 2 }
			snow[i].posy = 0
		}
	}
	var timer = setTimeout("movesnow()", 50)
	return timer;
}


for (let i = 0; i <= snowmax; i++) {
	document.write("<span id='s" + i + "' style='position:absolute;top:-" + snowmaxsize + "px'>" + snowletter + "</span>")

}

window.onload = initsnow;

/* 

Writing Functions:

console.log('Happy Birthday River!')
console.log('I love you!')
console.log('You\'re a sweet baby, River!')
console.log('I\'ll give you get an extra treat since it's your special day!')
// all this does is wish River a happy birthday. What about the other birds?
// wrap this in a function and change "River" to a variable

// function declaration
// the second variable "gift" has a default value of "treat," but I can change it when envoking the function. 
function birdyBirthdayGreeting(bird, gift = 'treat') {
	console.log(`Happy Birthday ${bird}!`)
	console.log('I love you!')
	console.log('You\'re a sweet baby, ${bird}!')
	console.log(`I'll give you get an extra ${gift} since it's your special day!`)
}

// envoke (or call) function
// we need () on the end to make this happen
// in these cases, Poppy gets a toy, and Shasta gets the default treat.
birdyBirthdayGreeting();
birdyBirthdayGreeting('Poppy', 'toy');
birdyBirthdayGreeting('Shasta');

// the method of decaring a function above can be envoked anywhere. With the method used below, the function can not be envoked before it is declared.
// this is a function expression declaration.
let birdyBirthdayGreetingAnotherWay = function() {
	console.log('Happy birthday!') 
	// etc. etc
}

*/

/*

Array methods:

.push(); add a value to the end of an array
.unshift(); add a value to the beginning of an array
.pop(); remove the last item of an array
.splice(); change the values inside the middle of an array
	it takes in at 2 arguments.
	the first is the index of the first item you want to remove
	and then the total items you want remove
	if you don't want to remove any items, you just want to add, the number of items you want to remove will be 0
	then you would add the item you want to add.
	multiple items can be added this way.
months.splice(1, 0, 'March', 'April');
	if February is at index 0 and we want March at index 1, we don't want to remove any values, and we add March and April.
You can also log the push/nshift/pop/splice data as a variable to store it and call it back later
	let monthUnshift = (month.unshift())

*/

/*

// this array below is not a good choice for storing complex data
const riverArray = [
	'River',
	6, 
	gold-capped conure,
	true,
	true
]

// an onject would work better..
let riverObject = {
	// an object is mde of key-value pairs
	// 'name' is the key and 'River' is its value.
	name: 'River', 
	age: 6,
	species: gold-capped conure.
	goodBird: true,
	prettyBird: true
	// if you use strings in your object like this, you have to use bracket notation
	'favorite bird food': 'Zupreem fruit blend'
	// function
	speak: function(){
		// console has secretly been an object this whole time!
		console.log('I love you!');
	}
	faveTreats: ['almonds', 'banana', 'orange juice', 'pistash']
	// below is an object within an object
	health{
		wingClipped: false;
		checkUpThisYear: true;
	}
}

// dot notation
// <object-name>.<key-name>
console.log(`My bird ${riverObject.name}, is a ${riverObject.age}-year-old ${riverObject.species}.`)
console.log(`My bird ${this.name}, is a ${this.age}-year-old ${this.species}.`)

// bracket notation
// <object-name>['<key-name>']
console.log(riverObject)['favoite bird food'];

riverObject.speak

*/