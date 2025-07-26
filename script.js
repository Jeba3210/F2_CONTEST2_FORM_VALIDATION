const form = document.getElementById('loginForm');
const emailInput = document.getElementById('email');
const passwordInput = document.getElementById('password');
const emailError = document.getElementById('emailError');
const passwordError = document.getElementById('passwordError');

form.addEventListener('submit', function (e) {
	e.preventDefault(); // prevent default form submission
	let isValid = true;

	// Clear previous errors
	emailError.textContent = '';
	passwordError.textContent = '';

	const email = emailInput.value.trim();
	const password = passwordInput.value;

	// Email validation
	if (email.length < 3 || !email.includes('@') || !email.includes('.')) {
		emailError.textContent =
			'Make sure email is more than 3 characters and has @ and a .';
		isValid = false;
	}

	// Password validation
	if (password.length < 8) {
		passwordError.textContent =
			'Make sure password is more than 8 characters.';
		isValid = false;
	}

	if (isValid) {
		alert('Login Successful!');
		form.reset();
	}
});
