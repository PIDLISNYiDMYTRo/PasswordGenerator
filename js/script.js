function generatePassword() {
	// Get the desired password length and the different character types to include
	var passwordLength = document.getElementById('passwordLength').value;
	var includeLowercase = document.getElementById('includeLowercase').checked;
	var includeUppercase = document.getElementById('includeUppercase').checked;
	var includeNumbers = document.getElementById('includeNumbers').checked;
	var includeSymbols = document.getElementById('includeSymbols').checked;

	// Build the character set to choose from
	var charSet = '';
	if (includeLowercase) {
		charSet += 'abcdefghijklmnopqrstuvwxyz';
	}
	if (includeUppercase) {
		charSet += 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
	}
	if (includeNumbers) {
		charSet += '0123456789';
	}
	if (includeSymbols) {
		charSet += '!@#$%^&*()';
	}

	// Generate the password
	var password = '';
	for (var i = 0; i < passwordLength; i++) {
		password += charSet.charAt(Math.floor(Math.random() * charSet.length));
	}

	// Display the generated password
	document.getElementById('password').value = password;
}
function copyPassword() {
	// Select the password text
	var passwordInput = document.getElementById('password');
	passwordInput.select();

	// Copy the selected text to the clipboard
	document.execCommand('copy');

	// Flip the button
	var button = document.getElementById('copy-button');
	button.classList.add('flipped');

	// Hide the message after a few seconds
	setTimeout(function () {
		button.classList.remove('flipped');
	}, 1000);

	// Deselect the text
	passwordInput.setSelectionRange(0, 0);
}