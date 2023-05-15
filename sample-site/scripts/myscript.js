/*global document,window,localStorage */


/* Code for image changer */

var flowerImages = document.querySelector('img');
flowerImages.onclick = function () {
    'use strict';
	var myImages = flowerImages.getAttribute('src');
	if (myImages === 'images/smith.jpg') {
		flowerImages.setAttribute('src', 'images/flowers.jpg');
	} else {
		flowerImages.setAttribute('src', 'images/smith.jpg');
	}
};



//Personalized welcome message code.

var nameButton = document.querySelector('button');
var myHeading = document.querySelector('h1');

function setUserName() {
	
    'use strict';
	var myName = window.prompt('Please enter your name.');
	localStorage.setItem('name', myName);
	myHeading.textContent = 'Have a  nice day, ' + myName;
	
}
if (!localStorage.getItem('name')) {
    setUserName();

} else {
	var storedName = localStorage.getItem('name');
	myHeading.textContent = 'Have a nice day, ' + storedName;

}
nameButton.onclick = function () {
	'use strict';
	setUserName();
};
