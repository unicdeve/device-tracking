import { useState } from 'react';
import axios from 'axios';
import useForm from '../../utils/hooks/useForm';
import { validateLoginData } from '../validations/login.validation';
import setAuthToken from '../setAuthToken';
import { useData } from '../contexts/data';

const initialValues = {
	email: '',
	password: '',
};

const useLogin = () => {
	const [loading, setLoading] = useState(false);

	const { values, handleChange, handleSubmit, errors, setErrors } = useForm(
		initialValues,
		submitForm
	);

	const { setScreen } = useData();

	function submitForm() {
		const { isValid, errors } = validateLoginData(values);
		if (!isValid) setErrors(errors);
		else {
			setLoading(true);
			axios
				.post(`http://127.0.0.1:8000/account/login/`, values)
				.then((res) => {
					const token = res.data.token;
					if (token) {
						localStorage.setItem('token', JSON.stringify(token));
						setLoading(false);
						setAuthToken(token);

						setScreen('home');
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

export default useLogin;
