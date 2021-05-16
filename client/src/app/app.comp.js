import React from 'react';
import Auth from '../components/auth/auth.comp';
import { useData } from '../utils/contexts/data';
import { Container } from './app.styled';

function App() {
	const { screen } = useData();

	return (
		<Container>
			{screen === 'auth' ? <Auth /> : <div className='home'>Home</div>}
		</Container>
	);
}

export default App;
