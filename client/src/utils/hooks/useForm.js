import { useState } from 'react';

const useForm = (initialValues, submitCallback) => {
	const [values, setValues] = useState(initialValues);
	const [errors, setErrors] = useState({});

	const handleChange = ({ target: { name, value } }) => {
		setValues({ ...values, [name]: value });
		errors[name] && setErrors({ ...errors, [name]: '' });
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		submitCallback();
	};

	return { values, setValues, handleChange, handleSubmit, errors, setErrors };
};

export default useForm;
