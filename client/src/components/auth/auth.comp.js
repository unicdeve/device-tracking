import React, { useState } from 'react';
import LoginForm from '../login/login.comp';
import SignUpForm from '../signup/signup.comp';
import { Container, Tab } from './auth.styled';

export default function Auth() {
	const [current, setCurrent] = useState(1);

	return (
		<Container>
			<div className='tabs'>
				<Tab active={current === 0} onClick={() => setCurrent(0)}>
					Login
				</Tab>
				<Tab active={current === 1} onClick={() => setCurrent(1)}>
					Sign up
				</Tab>
			</div>
			{current === 0 ? <LoginForm /> : <SignUpForm />}
		</Container>
	);
}
