import React from 'react';
import Auth from '../components/auth/auth.comp';
import Home from '../components/home/home.comp';
import { useData } from '../utils/contexts/data';
import { Container } from './app.styled';

function App() {
	const { screen } = useData();

	return <Container>{screen === 'auth' ? <Auth /> : <Home />}</Container>;
}

export default App;
