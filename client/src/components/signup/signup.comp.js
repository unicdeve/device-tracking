import React from 'react';
import Button from '../button/button.comp';
import FormField from '../form-field/form-field.comp';
import { Container } from './signup.styled';

export default function SignUpForm() {
	return (
		<Container>
			<FormField type='email' placeholder='email' />
			<FormField type='password' placeholder='passoword' />
			<FormField type='password' placeholder='Confirm passoword' />

			<Button text='Sign up' />
		</Container>
	);
}
