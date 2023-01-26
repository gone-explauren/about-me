'use strict';
console.log('hello');
let numberCorrect= 0;
let username = getUserName();

function getUserName () {
let username = prompt('Who\'s that sexy babe?');
console.log('I\'m looking respectfully');
alert('It\'s ' + username + ', bitch.');
// alert(`It's ${username}, bitch`); is a template (or string) literal. It's used to add a variable without using cancatonation (sp?)
// this is used more often than what I'm using above. and I'll use this for the rest of the code :)
let hotBody = prompt('You wanna hot body?');
// the || below is called logical or. && is called logical and. If the && was used insted, then each statement would have to be true to alert "You better work, bitch"
if (hotBody.toLowerCase() === 'yes' || hotBody.toLowerCase() === 'y') {
	// console.log('You better work, bitch')
	alert('You better work, bitch.')
	numberCorrect += 1
} else if (hotBody.toLowerCase() === 'no' || hotBody.toLowerCase() === 'n') {
	// console.log('Yes, you do.')
	alert('Yes, you do.')
} else {
	// console.log('I\'m sorry, I don\'t uderstand your accent.')
	alert('I\'m sorry, I don\'t understand your accent.')
}

return username;
}  
getUserName();


function wantBugatti () {
let bugatti = prompt('You want a Bugatti?');

if (bugatti.toLowerCase() === 'yes' || bugatti.toLowerCase() === 'y') {
	// console.log('You better work, bitch')
	alert('You better work, bitch.')
	numberCorrect += 1
} else if (bugatti.toLowerCase() === 'no' || bugatti.toLowerCase() === 'n') {
	// console.log('Quit lyin\'.')
	alert('Quit lyin\'.')
} else {
	// console.log('Come again?')
	alert('Come again?')
}
}
wantBugatti();

function wantMaserati () {
let maserati = prompt('You want a Maserati?');

if (maserati.toLowerCase() === 'yes' || maserati.toLowerCase() === 'y') {
	// console.log('You better work, bitch')
	alert('You better work, bitch.')
	numberCorrect += 1
} else if (maserati.toLowerCase() === 'no' || maserati.toLowerCase() === 'n') {
	// console.log('I don\'t believe you.')
	alert('I don\'t believe you.')
} else {
	// console.log('Say what?')
	alert('Say what?')
}
}
wantMaserati();


function wantLambo() {
let lambo = prompt('You want a Lamborghini?');

if (lambo.toLowerCase() === 'yes' || lambo.toLowerCase() === 'y') {
	// console.log('You better work, bitch')
	alert('You better work, bitch.')
	numberCorrect += 1
} else if (lambo.toLowerCase() === 'no' || lambo.toLowerCase() === 'n') {
	// console.log('Don\'t play.')
	alert('Don\'t play.')
} else {
	// console.log('What do you mean by that?')
	alert('What do you mean by that?')
}
}
wantLambo();



// Assignment questions 6 and 7 will be down below bc I can't cut Britney off mid chorus, srry.


function wantMartini() {
let sipMartini = prompt('Sip martinis?');

if (sipMartini.toLowerCase() === 'yes' || sipMartini.toLowerCase() === 'y') {
	// console.log('You better work, bitch')
	alert("You better work, bitch.")
	numberCorrect += 1
} else if (sipMartini.toLowerCase() === 'no' || sipMartini.toLowerCase() === 'n') {
	// console.log('Oh, maybe you\'re sober, that\'s okay.')
	alert('Oh, maybe you\'re sober, that\'s okay.')
} else {
	// console.log('Hm?')
	alert('Hm?')
}
}
wantMartini();

function inBikini() {
let hotBikini = prompt('Look hot in a bikini?');

if (hotBikini.toLowerCase() === 'yes' || hotBikini.toLowerCase() === 'y') {
	// console.log('You better work, bitch')
	alert('You better work, bitch.')
	numberCorrect += 1
} else if (hotBikini.toLowerCase() === 'no' || hotBikini.toLowerCase() === 'n') {
	// console.log('Everyone looks hot in a bikini!')
	alert('Everyone looks hot in a bikini!')
} else {
	// console.log('You think you\'re funny, punk?')
	alert('You think you\'re funny, punk?')
 }
}
inBikini();



// if I add the .toLowerCase after the prompt, it will make writing code easier for me, as well as make the code more readable :) It does the same thing as the way I wrote it above.

function liveFancy() {
let fancy = prompt('You wanna live fancy?').toLowerCase();

if (fancy === 'yes' || fancy === 'y') {
	// console.log('You better work, bitch')
	alert('You better work, bitch.')
	numberCorrect += 1
} else if (fancy === 'no' || fancy === 'n') {
	// console.log('Get bougie, bitch.')
	alert('Get bougie, bitch.')
} else {
	// console.log('Quit playin\' me.')
	alert('Quit playin\' me.')
}
}
liveFancy();


let mansion = prompt('Live in a big mansion?').toLowerCase();

if (mansion === 'yes' || mansion === 'y') {
	// console.log('You better work, bitch')
	alert('You better work, bitch.')
	numberCorrect += 1
} else if (mansion === 'no' || mansion === 'n') {
	// console.log('Yeah, that\'s a lot to clean.')
	alert('Yeah, that\'s a lot to clean...')
} else {
	// console.log(`C'mon now ${username}.`)
	alert(`C'mon now ${username}.`)
};

let partyInFrance = prompt('Party in France?').toLowerCase();

if (partyInFrance === 'yes' || partyInFrance === 'y') {
	// console.log('You better work, bitch')
	alert('You better work, bitch.')
	numberCorrect += 1
} else if (partyInFrance === 'no' || partyInFrance === 'n') {
	// console.log('You sound kinda boring, no offense.')
	alert('You sound kind of boring, no offense')
} else {
	// console.log('Alright party pooper, we\'re done now.')
	alert('Alright party pooper, we\'re done now.')
};


alert(`Okay ${username}, next game!`)

// This prompt could also go inside the for loop so the question is asked multiple times, instead of repeating the prompt like I did below
let number= prompt('How many times have I cried this week?').toLowerCase();
// .toLowerCase is not needed since my answer is a number and not a string.
let cry= 0;
let attempts= 4;

for (let i = 0; i < attempts; i++) {
	console.log(i)

	// parseInt turns prompt "number" into an integer to match the integers defined by "cry" and "attempts"

	// let num1= '26'
	// let num2= '5'
	// console.log(num1 + num2); will log 265
	// console.log(parseInt(num1) + parseInt(num2)); will log 31

	if (parseInt(number) === cry) {
		// console.log('That\'s right! I\'ve got on my big boy pants this week.') 
		alert('That\'s right!I\'ve got my big boy pants on this week.')
		console.log('Just kidding, it\'s cool to cry and we should all do it sometimes')
		// add to my total number correct with += 1
		numberCorrect += 1
		// break out of the loop if the answer was correct
		break
	} else {
		console.log('Sorry babe, try again.')
		// repeat the prompt if answer was incorrect
		number= prompt('How many times have I cried this week?').toLowerCase();
	}
}
if (attempts === 0) {
	console.log('Ohh, too bad. The correct answer is 0! I\'m unstoppable, baby!')
}

alert('Let\'s play one more, and keep with the theme...')


let userResponse= prompt('What is my favorite Britney era?').toLowerCase();
let faveBritney= ['toxic', 'gimme more', 'hold it against me', 'stronger'];
let attemptsRemaining= 6;
// default answer is set as "false"
let answerIsCorrect = false
	for (let i = 0; i < attemptsRemaining; i--) {
// inside first loop
// console.log(attemptsRemaining)
for (let j = 0; j < faveBritney.length; j++) {
		// inside second loop, this code is all running thr loop through the array I made
		if (userResponse === faveBritney[j]) {
			numberCorrect += 1;
			answerIsCorrect = true;
			console.log('What a queen, am I right?');
			alert(`Yes! I love ${userResponse}`);
			break
		}
	}
// outside of second loop, this code is all running the attemptsRemaining loop.
		if (answerIsCorrect) {
			// break out of loop if answerIsCorrect becomes true
			break
		}
		// attempts are counting down
		attemptsRemaining -= 1
		//console.log(`Try again, you have ${attemptsRemaining} attempts remaining`);
		alert(`Try again, you have ${attemptsRemaining} attempts remaining`);
		userResponse= prompt('What is my favorite Britney era?');

		if(attemptsRemaining === 0) {
			break
		}
	}
	
	if (attemptsRemaining === 0) {
console.log('I\'m sure you agree that the Toxic, Gimme More, Hold It Against Me, and Stronger eras were i c o n i c.');
}

alert('So, how did you do?');
alert(`Congratulations! You got ${numberCorrect} questions correct! Thank's for playing.`);

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