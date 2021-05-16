import { useState } from 'react';
import axios from 'axios';
import useForm from '../../utils/hooks/useForm';
import { validateSignupData } from '../../utils/validations/signup.validation';
import setAuthToken from '../setAuthToken';

const initialValues = {
	email: '',
	password: '',
	confirm_password: '',
};

const useSignup = () => {
	const [loading, setLoading] = useState(false);

	const { values, handleChange, handleSubmit, errors, setErrors } = useForm(
		initialValues,
		submitForm
	);

	function submitForm() {
		const { isValid, errors } = validateSignupData(values);
		if (!isValid) setErrors(errors);
		else {
			setLoading(true);
			axios
				.post(`http://127.0.0.1:8000/account/`, values)
				.then((res) => {
					const token = res.data.token;
					if (token) {
						localStorage.setItem('token', JSON.stringify(token));
						setAuthToken(token);
						setLoading(false);

						// TODO: show home screen
					}
				})
				.catch((error) => {
					setLoading(false);
					setErrors({ error: 'some error' });
					console.error('Error: ');
				});
		}
	}

	return { values, handleChange, handleSubmit, errors, setErrors, loading };
};

export default useSignup;
