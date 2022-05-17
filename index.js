const debugPhrase = 'Hello World';
const phraseBox = document.querySelector('#phrase ul');
const phraseItems = document.querySelectorAll('li');

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

document.addEventListener('keypress', e => {
	console.log(e.key);
});
