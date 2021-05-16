import React from 'react';
import useSignup from '../../utils/hooks/useSignup';
import Button from '../button/button.comp';
import FormField from '../form-field/form-field.comp';
import { Container } from './signup.styled';

export default function SignUpForm() {
	const { values, handleChange, handleSubmit, errors, loading } = useSignup();

	const { email, password, confirm_password } = values;

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

			<FormField
				name='confirm_password'
				type='password'
				placeholder='Confirm passoword'
				value={confirm_password}
				onChange={handleChange}
				error={errors.confirm_password}
			/>

			<Button
				text='Sign up'
				onClick={handleSubmit}
				loading={loading.toString()}
			/>
		</Container>
	);
}
