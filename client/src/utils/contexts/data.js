import React, {
	useEffect,
	useState,
	createContext,
	useMemo,
	useContext,
} from 'react';
import axios from 'axios';

// Context
const DataContext = createContext();

function DataProvider(props) {
	const [screen, setScreen] = useState('auth');
	const [loading, setLoading] = useState(false);
	const [data, setData] = useState([]);

	let token = '';
	if (localStorage.token) {
		token = JSON.parse(localStorage.getItem('token'));
	}

	useEffect(() => {
		if (token) setScreen('home');
		else setScreen('auth');
	}, [token]);

	useEffect(() => {
		axios
			.get(`http://127.0.0.1:8000/device/`)
			.then((res) => {
				const data = res.data;
				setData(data);
			})
			.catch((error) => {
				setLoading(false);
				console.error('Error: ');
			});
	}, []);

	const value = useMemo(() => {
		return {
			screen,
			setScreen,
			data,
			dataLoading: loading,
		};
	}, [screen, data, loading]);

	return <DataContext.Provider value={value} {...props} />;
}

const useData = () => useContext(DataContext);

export { DataContext, useData };

export default DataProvider;
