// ------------Monitors viewing height------------
function setContainerHeight() {
	var windowHeight = window.innerHeight;
	document.querySelector('.row__main').style.height = windowHeight + 'px';
}

// Call the function initially to set the container height
setContainerHeight();

// Call the function whenever the window is resized
window.addEventListener('resize', setContainerHeight);
// ---------------------------------------------------------------------------


























// HEADER =================================================

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
}

// Copy the password to the clipboard
function copyPassword() {
	passwordOutput.select();
	document.execCommand("copy");
	passwordOutput.blur();
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

// ===================================================================








// ------------When you click on the label, a checkbox is selected------------
// Get required elements
const labels = document.querySelectorAll('.item__container');

// Add event listener to each label
labels.forEach((label) => {
	label.addEventListener('click', () => {
		const checkbox = label.querySelector('input[type="checkbox"]');
		checkbox.checked = !checkbox.checked;
	});
});
// ---------------------------------------------------------------------------

// ------------Range adjustment------------
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
// ---------------------------------------------------------------------------







// AAAddd animation copy-button



