import isEmpty from './is-empty';

export const validateSignupData = (data) => {
	const { email, password, confirm_password } = data;
	const errors = {};

	console.log(data);

	const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

	if (email === '') errors.email = 'Email is required';
	else if (email.length < 8 || !re.test(email)) {
		errors.email = 'Please, enter a valid email address';
	}

	if (password === '') errors.password = 'Password is required';

	if (confirm_password === '')
		errors.confirm_password = 'Confirm password is required';

	if (confirm_password !== password)
		errors.confirm_password = 'Both passwords must match';

	return { errors, isValid: isEmpty(errors) };
};
