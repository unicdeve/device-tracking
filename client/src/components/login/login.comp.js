import React from 'react';
import useLogin from '../../utils/hooks/useLogin';

import Button from '../button/button.comp';
import FormField from '../form-field/form-field.comp';
import { Container } from './login.styled';

export default function LoginForm() {
	const { values, handleChange, handleSubmit, errors, loading } = useLogin();

	const { email, password } = values;

	return (
		<Container>
			<FormField
				name='email'
				type='email'
				placeholder='email'
				value={email}
				onChange={handleChange}
				error={errors.email}
			/>
			<FormField
				name='password'
				type='password'
				placeholder='passoword'
				value={password}
				onChange={handleChange}
				error={errors.password}
			/>

			<Button
				text='Login'
				onClick={handleSubmit}
				loading={loading.toString()}
			/>
		</Container>
	);
}
