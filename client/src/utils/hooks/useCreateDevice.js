import { useState } from 'react';
import axios from 'axios';
import useForm from './useForm';
import { useData } from '../contexts/data';
import { validateDeviceData } from '../validations/device.validation';

const initialValues = {
	os: '',
	device: '',
	manufacturer: '',
};

const useCreateDevice = () => {
	const [loading, setLoading] = useState(false);
	const [checked, setChecked] = useState(false);

	const { values, setValues, handleChange, handleSubmit, errors, setErrors } =
		useForm(initialValues, submitForm);

	const { setData } = useData();

	function submitForm() {
		const { isValid, errors } = validateDeviceData(values);
		if (!isValid) setErrors(errors);
		else {
			setLoading(true);
			axios
				.post(`http://127.0.0.1:8000/device/`, {
					...values,
					is_checked_out: checked,
				})
				.then((res) => {
					setData((data) => [res.data, ...data]);
					setValues(initialValues);
					setChecked(false);
					setLoading(false);
				})
				.catch((error) => {
					setLoading(false);
					setErrors({ error: 'some error' });
					console.error('Error: ');
				});
		}
	}

	return {
		values,
		handleChange,
		handleSubmit,
		errors,
		setErrors,
		loading,
		checked,
		setChecked,
	};
};

export default useCreateDevice;
