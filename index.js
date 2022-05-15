const debugPhrase = 'hellow World';

// display the phrase in blank boxes on the screen
let htmlString = '';
for (let letter of debugPhrase) {
	if (letter !== '') {
		htmlString += `<li class="letter">${letter}</li>`;
	} else {
		htmlString += `<li class="space"></li>`;
	}
}
