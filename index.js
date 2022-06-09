const debugPhraseArray = [
	'Cool as a cucumber',
	'Practice makes perfect',
	'No I in team',
	'Chip off the old block',
	'Mind your Ps and Qs',
];
const phraseBox = document.querySelector('#phrase ul');
const phraseItems = document.getElementsByTagName('li');
const letterBtns = document.getElementsByTagName('button');

//a function that returns random integer between two values.

function getRandomPhrase(arr) {
	return debugPhraseArray[
		Math.floor(Math.random() * (debugPhraseArray.length - 1 - 0 + 1) + 0)
	];
}

// a function that displays any string/phrase in blank boxes on the screen
function phraseDisplay(phrase) {
	let htmlString = '';
	for (let letter of phrase.toLowerCase()) {
		htmlString +=
			letter !== ' '
				? `<li class="letter">${letter}</li>`
				: `<li class="space"></li>`;
	}
	phraseBox.innerHTML = htmlString;
}
let gamePhrase = getRandomPhrase(debugPhraseArray);
phraseDisplay(gamePhrase);

// a function that checks if phrase is completed
function winChecker() {
	const str = gamePhrase.replace(/\s/g, '').toLowerCase();
	if (str.length === document.getElementsByClassName('show').length) {
		alert('You win!');
	}
}

// Listens for on-screen button click and displays all instances of letter in phrase
document.getElementById('qwerty').addEventListener('click', e => {
	if (e.target.tagName === 'BUTTON') {
		for (let box of phraseItems) {
			if (e.target.innerText == box.innerText) {
				box.classList.add('show');
				winChecker();
			}
		}
	}
	e.target.disabled = true;
});

// Listens for keypress and displays all instances of letter in phrase
document.addEventListener('keypress', e => {
	for (let letter of letterBtns) {
		if (letter.innerText === e.key) {
			letter.click();
		}
	}
});
