// function generatePassword() {
// 	// Get the desired password length and the different character types to include
// 	var passwordLength = document.getElementById('length').value;
// 	var includeLowercase = document.getElementById('lowercase').checked;
// 	var includeUppercase = document.getElementById('uppercase').checked;
// 	var includeNumbers = document.getElementById('numbers').checked;
// 	var includeSymbols = document.getElementById('symbols').checked;

// 	// Build the character set to choose from
// 	var charSet = '';
// 	if (includeLowercase) {
// 		charSet += 'abcdefghijklmnopqrstuvwxyz';
// 	}
// 	if (includeUppercase) {
// 		charSet += 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
// 	}
// 	if (includeNumbers) {
// 		charSet += '0123456789';
// 	}
// 	if (includeSymbols) {
// 		charSet += '!@#$%^&*()';
// 	}

// 	// Generate the password
// 	var password = '';
// 	for (var i = 0; i < passwordLength; i++) {
// 		password += charSet.charAt(Math.floor(Math.random() * charSet.length));
// 	}

// 	// Display the generated password
// 	document.getElementById('password').value = password;
// }
// function copyPassword() {
// 	// Select the password text
// 	var passwordInput = document.getElementById('password');
// 	passwordInput.select();

// 	// Copy the selected text to the clipboard
// 	document.execCommand('copy');

// 	// Flip the button
// 	var button = document.getElementById('copy-button');
// 	button.classList.add('flipped');

// 	// Hide the message after a few seconds
// 	setTimeout(function () {
// 		button.classList.remove('flipped');
// 	}, 1000);

// 	// Deselect the text
// 	passwordInput.setSelectionRange(0, 0);
// }





function setContainerHeight() {
	var windowHeight = window.innerHeight;
	document.querySelector('.row__main').style.height = windowHeight + 'px';
}

// Call the function initially to set the container height
setContainerHeight();

// Call the function whenever the window is resized
window.addEventListener('resize', setContainerHeight);











// // Get required elements
// const passwordLengthInput = document.getElementById("password-length");
// const passwordOutput = document.getElementById("password");
// const lowercaseCheckbox = document.getElementById("include-lowercase");
// const uppercaseCheckbox = document.getElementById("include-uppercase");
// const numbersCheckbox = document.getElementById("include-numbers");
// const symbolsCheckbox = document.getElementById("include-symbols");

// // Define character sets
// const lowercaseCharacters = "abcdefghijklmnopqrstuvwxyz";
// const uppercaseCharacters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
// const numberCharacters = "0123456789";
// const symbolCharacters = "!@#$%^&*()_-+=[]{}<>,.?/|";

// // Generate a random password
// function generatePassword() {
// 	const length = parseInt(passwordLengthInput.value);
// 	const includeLowercase = lowercaseCheckbox.checked;
// 	const includeUppercase = uppercaseCheckbox.checked;
// 	const includeNumbers = numbersCheckbox.checked;
// 	const includeSymbols = symbolsCheckbox.checked;

// 	let characters = "";

// 	if (includeLowercase) characters += lowercaseCharacters;
// 	if (includeUppercase) characters += uppercaseCharacters;
// 	if (includeNumbers) characters += numberCharacters;
// 	if (includeSymbols) characters += symbolCharacters;

// 	let password = "";
// 	for (let i = 0; i < length; i++) {
// 		const randomIndex = Math.floor(Math.random() * characters.length);
// 		password += characters.charAt(randomIndex);
// 	}

// 	return password;
// }

// // Generate password and update the output field
// function updatePassword() {
// 	const password = generatePassword();
// 	passwordOutput.value = password;
// }

// // Copy the password to the clipboard
// function copyPassword() {
// 	passwordOutput.select();
// 	document.execCommand("copy");
// }



// HEADER =================================================

// // Get required elements
// const generateBtn = document.getElementById("bottom__button-generate");
// const copyBtn = document.getElementById("bottom__button-copy");
// const passwordLengthInput = document.getElementById("password-length");
// const passwordLengthValue = document.getElementById("password-length-value");
// const passwordOutput = document.getElementById("password");
// const lowercaseCheckbox = document.getElementById("include-lowercase");
// const uppercaseCheckbox = document.getElementById("include-uppercase");
// const numbersCheckbox = document.getElementById("include-numbers");
// const symbolsCheckbox = document.getElementById("include-symbols");

// // Define character sets
// const lowercaseCharacters = "abcdefghijklmnopqrstuvwxyz";
// const uppercaseCharacters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
// const numberCharacters = "0123456789";
// const symbolCharacters = "!@#$%^&*()_-+=[]{}<>,.?/|";

// // Update password length value
// function updatePasswordLength() {
// 	const length = parseInt(passwordLengthInput.value);
// 	passwordLengthValue.textContent = length;
// }

// // Generate a random password
// function generatePassword() {
// 	const length = parseInt(passwordLengthInput.value);
// 	const includeLowercase = lowercaseCheckbox.checked;
// 	const includeUppercase = uppercaseCheckbox.checked;
// 	const includeNumbers = numbersCheckbox.checked;
// 	const includeSymbols = symbolsCheckbox.checked;

// 	let characters = "";

// 	if (includeLowercase) characters += lowercaseCharacters;
// 	if (includeUppercase) characters += uppercaseCharacters;
// 	if (includeNumbers) characters += numberCharacters;
// 	if (includeSymbols) characters += symbolCharacters;

// 	if (characters === "") {
// 		return "Please select at least one option.";
// 	}

// 	let password = "";
// 	for (let i = 0; i < length; i++) {
// 		const randomIndex = Math.floor(Math.random() * characters.length);
// 		password += characters.charAt(randomIndex);
// 	}

// 	return password;
// }

// // Generate password and update the output field
// function updatePassword() {
// 	const password = generatePassword();
// 	passwordOutput.value = password;
// }

// // Copy the password to the clipboard
// function copyPassword() {
// 	passwordOutput.select();
// 	document.execCommand("copy");
// }

// // Add event listeners
// generateBtn.addEventListener("click", updatePassword);
// copyBtn.addEventListener("click", copyPassword);
// passwordLengthInput.addEventListener("input", () => {
// 	updatePasswordLength();
// 	updatePassword();
// });

// // Initialize password length value
// updatePasswordLength();

// ===================================================================





// ++++++++++++++++++++++++++++++++++++++ 2222222222
// Get required elements
// const generateBtn = document.getElementById("bottom__button-generate");
// const copyBtn = document.getElementById("bottom__button-copy");
// const passwordLengthInput = document.getElementById("password-length");
// const passwordLengthValue = document.getElementById("password-length-value");
// const passwordOutput = document.getElementById("password");
// const lowercaseCheckbox = document.getElementById("include-lowercase");
// const uppercaseCheckbox = document.getElementById("include-uppercase");
// const numbersCheckbox = document.getElementById("include-numbers");
// const symbolsCheckbox = document.getElementById("include-symbols");

// // Define character sets
// const lowercaseCharacters = "abcdefghijklmnopqrstuvwxyz";
// const uppercaseCharacters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
// const numberCharacters = "0123456789";
// const symbolCharacters = "!@#$%^&*()_-+=[]{}<>,.?/|";

// // Update password length value
// function updatePasswordLength() {
// 	const length = parseInt(passwordLengthInput.value);
// 	passwordLengthValue.textContent = length;
// }

// // Generate a random password
// function generatePassword() {
// 	const length = parseInt(passwordLengthInput.value);
// 	const includeLowercase = lowercaseCheckbox.checked;
// 	const includeUppercase = uppercaseCheckbox.checked;
// 	const includeNumbers = numbersCheckbox.checked;
// 	const includeSymbols = symbolsCheckbox.checked;

// 	let characters = "";

// 	if (includeLowercase) characters += lowercaseCharacters;
// 	if (includeUppercase) characters += uppercaseCharacters;
// 	if (includeNumbers) characters += numberCharacters;
// 	if (includeSymbols) characters += symbolCharacters;

// 	if (characters === "") {
// 		return "Please select at least one option.";
// 	}

// 	let password = "";
// 	for (let i = 0; i < length; i++) {
// 		const randomIndex = Math.floor(Math.random() * characters.length);
// 		password += characters.charAt(randomIndex);
// 	}

// 	return password;
// }

// // Generate password and update the output field
// function updatePassword() {
// 	const password = generatePassword();
// 	passwordOutput.value = password;

// 	// Apply animation to generate button
// 	generateBtn.classList.add("generate-animation");
// 	setTimeout(() => {
// 		generateBtn.classList.remove("generate-animation");
// 	}, 1000);
// }

// // Copy the password to the clipboard
// function copyPassword() {
// 	const copyText = copyBtn.innerText;
// 	navigator.clipboard.writeText(copyText);

// 	// Apply animation to copy button
// 	copyBtn.innerText = "Скопійовано";
// 	copyBtn.classList.add("rotate-animation");
// 	setTimeout(() => {
// 		copyBtn.innerText = copyText;
// 		copyBtn.classList.remove("rotate-animation");
// 	}, 2000);
// }

// // Add event listeners
// generateBtn.addEventListener("click", updatePassword);
// copyBtn.addEventListener("click", copyPassword);
// passwordLengthInput.addEventListener("input", () => {
// 	updatePasswordLength();
// 	updatePassword();
// });

// // Initialize password length value
// updatePasswordLength();
// ++++++++++++++++++++++++++++++++++++++ 2222222222


// Get required elements
const generateBtn = document.getElementById("bottom__button-generate");
const copyBtn = document.getElementById("bottom__button-copy");
const passwordLengthInput = document.getElementById("password-length");
const passwordLengthValue = document.getElementById("password-length-value");
const passwordOutput = document.getElementById("password");
const lowercaseCheckbox = document.getElementById("include-lowercase");
const uppercaseCheckbox = document.getElementById("include-uppercase");
const numbersCheckbox = document.getElementById("include-numbers");
const symbolsCheckbox = document.getElementById("include-symbols");

// Define character sets
const lowercaseCharacters = "abcdefghijklmnopqrstuvwxyz";
const uppercaseCharacters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const numberCharacters = "0123456789";
const symbolCharacters = "!@#$%^&*()_-+=[]{}<>,.?/|";

// Update password length value
function updatePasswordLength() {
	const length = parseInt(passwordLengthInput.value);
	passwordLengthValue.textContent = length;
}

// Generate a random password
function generatePassword() {
	const length = parseInt(passwordLengthInput.value);
	const includeLowercase = lowercaseCheckbox.checked;
	const includeUppercase = uppercaseCheckbox.checked;
	const includeNumbers = numbersCheckbox.checked;
	const includeSymbols = symbolsCheckbox.checked;

	let characters = "";

	if (includeLowercase) characters += lowercaseCharacters;
	if (includeUppercase) characters += uppercaseCharacters;
	if (includeNumbers) characters += numberCharacters;
	if (includeSymbols) characters += symbolCharacters;

	if (characters === "") {
		return "Please select at least one option.";
	}

	let password = "";
	for (let i = 0; i < length; i++) {
		const randomIndex = Math.floor(Math.random() * characters.length);
		password += characters.charAt(randomIndex);
	}

	return password;
}

// Generate password and update the output field
function updatePassword() {
	const password = generatePassword();
	passwordOutput.value = password;

	// Apply animation to generate button
	generateBtn.classList.add("generate-animation");
	setTimeout(() => {
		generateBtn.classList.remove("generate-animation");
	}, 1000);
}

// Copy the password to the clipboard
function copyPassword() {
	const password = passwordOutput.value;
	navigator.clipboard.writeText(password);

	// Apply animation and text change to copy button
	copyBtn.classList.add("copy-animation");
	copyBtn.textContent = "Copied";
	setTimeout(() => {
		copyBtn.classList.remove("copy-animation");
		copyBtn.textContent = "Copy Password";
	}, 1000);
}

// Add event listeners
generateBtn.addEventListener("click", updatePassword);
copyBtn.addEventListener("click", copyPassword);
passwordLengthInput.addEventListener("input", () => {
	updatePasswordLength();
	updatePassword();
});

// Initialize password length value
updatePasswordLength();

















const rangeInputs = document.querySelectorAll('input[type="range"]')
const numberInput = document.querySelector('input[type="number"]')

function handleInputChange(e) {
	let target = e.target
	if (e.target.type !== 'range') {
		target = document.getElementById('range')
	}
	const min = target.min
	const max = target.max
	const val = target.value

	target.style.backgroundSize = (val - min) * 100 / (max - min) + '% 100%'
}

rangeInputs.forEach(input => {
	input.addEventListener('input', handleInputChange)
})

numberInput.addEventListener('input', handleInputChange)









// AAAddd animation copy-button



