'use strict';

let numberCorrect= 0;

const getUsername = () => {
	let username = prompt('Who\'s that sexy bitch?')
	console.log(`I'm looking respectfully, ${username}.`)
	alert(`It's ${username}, bitch.`)
	
	// // get the span where userName will be displayed
	let mySpan = document.getElementById('username')
	
	// // insert the userName
	mySpan.textContent = username

	return username
}

let username = getUsername()

function wantHotBody() {
// "You better work, bitch" could be set as a global variable correctAnswer, but it would still need to be called inside every function, so I may as well leave it as is
let hotBody = prompt('You wanna hot body?');
// the || below is called logical or. && is called "logical and."" If the && was used instead, then each statement would have to be true to alert "You better work, bitch"
if (hotBody.toLowerCase() === 'yes' || hotBody.toLowerCase() === 'y') {
	console.log('You better work, bitch')
	// alert('You better work, bitch.')
	numberCorrect += 1
} else if (hotBody.toLowerCase() === 'no' || hotBody.toLowerCase() === 'n') {
	console.log('Yes, you do.')
	// alert('Yes, you do.')
} else {
	console.log('What was that?')
	// alert('What was that?')
}
}


function wantBugatti () {
let bugatti = prompt('You want a Bugatti?');

if (bugatti.toLowerCase() === 'yes' || bugatti.toLowerCase() === 'y') {
	console.log('You better work, bitch')
	// alert('You better work, bitch.')
	numberCorrect += 1
} else if (bugatti.toLowerCase() === 'no' || bugatti.toLowerCase() === 'n') {
	console.log('Just play along, okay?')
	// alert('Just play along, okay?')
} else {
	console.log('Come again?')
	// alert('Come again?')
}
}
wantBugatti();

function wantMaserati () {
let maserati = prompt('You want a Maserati?');

if (maserati.toLowerCase() === 'yes' || maserati.toLowerCase() === 'y') {
	console.log('You better work, bitch.')
	// alert('You better work, bitch.')
	numberCorrect += 1
} else if (maserati.toLowerCase() === 'no' || maserati.toLowerCase() === 'n') {
	console.log('I don\'t believe you.')
	// alert('I don\'t believe you.')
} else {
	console.log('Did you say something?')
	// alert('Did you say something?')
}
}
wantMaserati();


function wantLambo() {
let lambo = prompt('You want a Lamborghini?');

if (lambo.toLowerCase() === 'yes' || lambo.toLowerCase() === 'y') {
	console.log('You better work, bitch.')
	// alert('You better work, bitch.')
	numberCorrect += 1
} else if (lambo.toLowerCase() === 'no' || lambo.toLowerCase() === 'n') {
	console.log('Don\'t play.')
	// alert('Don\'t play.')
} else {
	console.log('What do you mean?')
	// alert('What do you mean?')
}
}
wantLambo();



// Assignment questions 6 and 7 will be down below bc I can't cut Britney off mid chorus, srry.


function wantMartini() {
let sipMartini = prompt('Sip martinis?');

if (sipMartini.toLowerCase() === 'yes' || sipMartini.toLowerCase() === 'y') {
	console.log('You better work, bitch.')
	// alert("You better work, bitch.")
	numberCorrect += 1
} else if (sipMartini.toLowerCase() === 'no' || sipMartini.toLowerCase() === 'n') {
	console.log('Oh, maybe you\'re sober, that\'s okay.')
	// alert('Oh, maybe you\'re sober, that\'s okay.')
} else {
	console.log('Hm?')
	// alert('Hm?')
}
}
wantMartini();

function inBikini() {
let hotBikini = prompt('Look hot in a bikini?');

if (hotBikini.toLowerCase() === 'yes' || hotBikini.toLowerCase() === 'y') {
	console.log('You better work, bitch.')
	// alert('You better work, bitch.')
	numberCorrect += 1
} else if (hotBikini.toLowerCase() === 'no' || hotBikini.toLowerCase() === 'n') {
	console.log('You already do, babe.')
	// alert('You already do, babe.')
} else {
	 console.log('You think you\'re funny, punk?')
	// alert('You think you\'re funny, punk?')
 }
}
inBikini();



// if I add the .toLowerCase after the prompt, it will make writing code easier for me, as well as make the code more readable :) It does the same thing as the way I wrote it above.
function liveFancy() {
let fancy = prompt('You wanna live fancy?').toLowerCase();

if (fancy === 'yes' || fancy === 'y') {
	console.log('You better work, bitch.')
	// alert('You better work, bitch.')
	numberCorrect += 1
} else if (fancy === 'no' || fancy === 'n') {
	console.log('Get bougie, bitch.')
	// alert('Get bougie, bitch.')
} else {
	console.log('Quit playin\'.')
	// alert('Quit playin\'.')
}
}
liveFancy();

function liveMansion() {
let mansion = prompt('Live in a big mansion?').toLowerCase();

if (mansion === 'yes' || mansion === 'y') {
	console.log('You better work, bitch.')
	// alert('You better work, bitch.')
	numberCorrect += 1
} else if (mansion === 'no' || mansion === 'n') {
	console.log('Yeah, that\'s a lot to clean.')
	// alert('Yeah, that\'s a lot to clean...')
} else {
	console.log(`You're killin' me, ${username}.`)
	// alert(`You're killin me, ${username}.`)
}
}
liveMansion();


function partyFrance() {
let partyInFrance = prompt('Party in France?').toLowerCase();

if (partyInFrance === 'yes' || partyInFrance === 'y') {
	// console.log('You better work, bitch')
	alert('You better work, bitch.')
	numberCorrect += 1
} else if (partyInFrance === 'no' || partyInFrance === 'n') {
	console.log('You sound kinda boring, no offense.')
	// alert('You sound kind of boring, no offense')
} else {
	console.log('Alright, alright, we\'re done now.')
	// alert('Alright, alright, we\'re done now.')
}
}
partyFrance();



alert(`Okay ${username}, next game!`)


function laurelCry() {
let cry= 0;
let attempts= 4;

for (let i = 0; i < attempts; i++) {
	console.log(i)
	let number= prompt('How many times have I cried this week?').toLowerCase();
// .toLowerCase is not needed since my answer is a number and not a string.

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
}
laurelCry();


alert('Let\'s play one more, and keep with the theme...')

function britneyEra () {

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
}
britneyEra ();
// end of question logic.

alert('So, how did you do?');
alert(`Congratulations! You got ${numberCorrect} questions correct! Thank's for playing.`);

// **** Heart Snow **** not working **** i is undefined

// Set the number of snowflakes (more than 30 - 40 not recommended)
var snowmax=12;

// Set the colors for the snow. Add as many colors as you like
var snowcolor=new Array("#aaaacc","#ddddFF","#ccccDD","#ffffff","#ffc0cb");

// Set the fonts, that create the snowflakes. Add as many fonts as you like
var snowtype=new Array("Arial Black","Arial Narrow","Times","Comic Sans MS");

// **** CHANGE YOUR IMAGE HERE ****

// Set the letter that creates your snowflake (recommended: * )
var snowletter="<img src=images/heart.png>";

// Set the speed of sinking (recommended values range from 0.3 to 2)
var sinkspeed=0.6;

// Set the maximal-size of your snowflaxes
var snowmaxsize=40;

// Set the minimal-size of your snowflaxes
var snowminsize=20;

// Set the snowing-zone
// Set 1 for all-over-snowing, set 2 for left-side-snowing
// Set 3 for center-snowing, set 4 for right-side-snowing
var snowingzone=1;

// Do not edit below this line
var snow=new Array();
var marginbottom;
var marginright;
var timer;
var i_snow=0;
var x_mv=new Array();
var crds=new Array();
var lftrght=new Array();
var browserinfos=navigator.userAgent;
var ie5=document.all&&document.getElementById&&!browserinfos.match(/Opera/);
var ns6=document.getElementById&&!document.all;
var opera=browserinfos.match(/Opera/);
var browserok=ie5||ns6||opera;

function randommaker(range) {
    rand=Math.floor(range*Math.random())
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


	var snowsizerange=snowmaxsize-snowminsize

	for (i=0;i<=snowmax;i++) {
	crds[i] = 0;
	lftrght[i] = Math.random()*15;
	x_mv[i] = 0.03 + Math.random()/10;
	snow[i]=document.getElementById("s"+i)
	snow[i].style.fontFamily=snowtype[randommaker(snowtype.length)]
	snow[i].size=randommaker(snowsizerange)+snowminsize
	snow[i].style.fontSize=snow[i].size
	snow[i].style.color=snowcolor[randommaker(snowcolor.length)]
	snow[i].sink=sinkspeed*snow[i].size/5
	if (snowingzone==1) {snow[i].posx=randommaker(marginright-snow[i].size)}
	if (snowingzone==2) {snow[i].posx=randommaker(marginright/2-snow[i].size)}
	if (snowingzone==3) {snow[i].posx=randommaker(marginright/2-snow[i].size)+marginright/4}
	if (snowingzone==4) {snow[i].posx=randommaker(marginright/2-snow[i].size)+marginright/2}
	snow[i].posy=randommaker(2*marginbottom-marginbottom-2*snow[i].size)
	snow[i].style.left=snow[i].posx
	snow[i].style.top=snow[i].posy
	}


	movesnow()
}

function movesnow() {
	for (i=0;i<=snowmax;i++) {
	crds[i] += x_mv[i];
	snow[i].posy+=snow[i].sink
	snow[i].style.left=snow[i].posx+lftrght[i]*Math.sin(crds[i]) + 'px';
	snow[i].style.top=snow[i].posy + 'px';

	if (snow[i].posy>=marginbottom-2*snow[i].size || parseInt(snow[i].style.left)>(marginright-3*lftrght[i])){
			if (snowingzone==1) {snow[i].posx=randommaker(marginright-snow[i].size)}
			if (snowingzone==2) {snow[i].posx=randommaker(marginright/2-snow[i].size)}
			if (snowingzone==3) {snow[i].posx=randommaker(marginright/2-snow[i].size)+marginright/4}
			if (snowingzone==4) {snow[i].posx=randommaker(marginright/2-snow[i].size)+marginright/2}
			snow[i].posy=0
	}
	}
	var timer=setTimeout("movesnow()",50)
}

for (i=0;i<=snowmax;i++) {
	document.write("<span id='s"+i+"' style='position:absolute;top:-"+snowmaxsize+"px'>"+snowletter+"</span>")

}

window.onload=initsnow;

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