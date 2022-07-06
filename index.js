const debugPhrase = 'Hello World';
const phraseBox = document.querySelector('#phrase ul');
const phraseItems = document.getElementsByTagName('li');
const letterBtns = document.getElementsByTagName('button');
const lives = document.getElementsByTagName('span');

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
phraseDisplay(debugPhrase);

// a function that checks if phrase is completed
function winChecker() {
	const str = debugPhrase.replace(/\s/g, '').toLowerCase();
	if (str.length === document.getElementsByClassName('show').length) {
		alert('You win!');
	}
}

function takeDamage() {
	for (let i = 0; i < lives.length; i++) {
		if (!lives[i].classList.contains('hide')) {
			lives[i].classList.add('hide');
			break;
		}
	}
	// for (let life of lives) {
	// 	if (life.classList.contains('hide')) {
	// 		continue;
	// 	} else {
	// 		life.classList.add('hide');
	// 		break;
	// 	}
	// }
}

// Listens for on-screen button click and displays all instances of letter in phrase
document.getElementById('qwerty').addEventListener('click', e => {
	let damage = true;
	if (e.target.tagName === 'BUTTON') {
		for (let box of phraseItems) {
			if (e.target.innerText === box.innerText) {
				box.classList.add('show');
				winChecker();
				damage = false;
			}
		}
	}
	if (damage === true) {
		takeDamage();
	}
	damage = true;
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

// awsome code AI ACHIEVED.
