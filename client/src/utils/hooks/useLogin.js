import { useState } from 'react';
import axios from 'axios';
import useForm from '../../utils/hooks/useForm';
import { validateLoginData } from '../validations/login.validation';
import setAuthToken from '../setAuthToken';
import { useData } from '../contexts/data';
import config from '../../config';

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

	const { setScreen, setCurrentUser } = useData();

	function submitForm() {
		const { isValid, errors } = validateLoginData(values);
		if (!isValid) setErrors(errors);
		else {
			setLoading(true);
			axios
				.post(`${config.API_URL}/account/login/`, values)
				.then((res) => {
					const user = res.data;
					if (user.token) {
						setCurrentUser(user);
						localStorage.setItem('user', JSON.stringify(user));
						setLoading(false);
						setAuthToken(user.token);

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
