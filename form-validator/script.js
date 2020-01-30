// Load DOM elements
const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const password2 = document.getElementById('password2');

// Show input error message
function showError(input, message) {
	const formControl = input.parentElement;
	formControl.className = 'form-control error';
	const small = formControl.querySelector('small');
	small.innerText = message;
}

// Show input success message
function showSuccess(input, message) {
	const formControl = input.parentElement;
	formControl.className = 'form-control success';
}

// Check email is valid
function isValidEmail(email) {
	const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
	return re.test(String(email).toLowerCase());
}

function checkRequire(inputArray) {
	inputArray.forEach(function(input) {
		if (input.value.trim() === '') {
			showError(input, `${getFieldName(input)} is required`);
		} else {
			showSuccess(input);
		}
	});
}

// Get field name with first letter upper case
function getFieldName(input) {
    return input.id.charAt(0).toUpperCase() + input.id.slice(1);
}

// Event listeners
form.addEventListener('submit', function(e) {
	e.preventDefault();
	checkRequire([ username, email, password, password2 ]);

	// if (username.value === '') {
	// 	showError(username, 'Username is a required field');
	// } else {
	// 	showSuccess(username);
	// }

	// if (email.value === '') {
	// 	showError(email, 'Email is a required field');
	// } else if (!isValidEmail(email)) {
	// 	showError(email, 'Invalid email address');
	// } else {
	// 	showSuccess(email);
	// }

	// if (password.value === '') {
	// 	showError(password, 'Password is a required field');
	// } else {
	// 	showSuccess(password);
	// }

	// if (password2.value === '') {
	// 	showError(password2, 'Password is a required field');
	// } else {
	// 	showSuccess(password2);
	// }
});
