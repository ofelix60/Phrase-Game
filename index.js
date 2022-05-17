const debugPhrase = 'Hello World';
const phraseBox = document.querySelector('#phrase ul');
const phraseItems = document.getElementsByTagName('li');

// checks for duplicate letters in a single word
const getAllIndexes = function (arr, val) {
	var indexes = [];
	for (let i = 0; i < arr.length; i++) {
		if (arr[i] === val) indexes.push(i);
	}
	return indexes;
};

// display the phrase in blank boxes on the screen
let htmlString = '';
for (let letter of debugPhrase) {
	if (letter !== ' ') {
		htmlString += `<li class="letter">${letter}</li>`;
	} else {
		htmlString += `<li class="space"></li>`;
	}
}
phraseBox.innerHTML = htmlString;

// Listens for keypress and displays all instances of letter in phrase
document.addEventListener('keypress', e => {
	if (debugPhrase.toLowerCase().includes(e.key)) {
		let index = getAllIndexes([...debugPhrase.toLowerCase()], e.key);
		for (const i of index) {
			phraseItems[i].classList.add('show');
		}
	} else {
		console.log('no');
	}
});
