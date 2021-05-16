import React from 'react';

import Button from '../button/button.comp';
import FormField from '../form-field/form-field.comp';
import { Container } from './login.styled';

export default function LoginForm() {
	return (
		<Container>
			<FormField type='email' placeholder='email' />
			<FormField type='password' placeholder='passowrd' />

			<Button text='Login' />
		</Container>
	);
}
