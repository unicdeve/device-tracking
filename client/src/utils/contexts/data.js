import { useEffect, useState } from 'react';

import React, { createContext, useMemo, useContext } from 'react';

// Context
const DataContext = createContext();

function DataProvider(props) {
	const [screen, setScreen] = useState('auth');

	let token = '';
	if (localStorage.token) {
		token = JSON.parse(localStorage.getItem('token'));
	}

	useEffect(() => {
		if (token) setScreen('home');
		else setScreen('auth');
	}, [token]);

	const value = useMemo(() => {
		return {
			screen,
			setScreen,
		};
	}, [screen]);

	return <DataContext.Provider value={value} {...props} />;
}

const useData = () => useContext(DataContext);

export { DataContext, useData };

export default DataProvider;
