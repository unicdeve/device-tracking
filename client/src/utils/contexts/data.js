import React, {
	useEffect,
	useState,
	createContext,
	useMemo,
	useContext,
	useRef,
} from 'react';
import axios from 'axios';
import setAuthToken from '../setAuthToken';
import config from '../../config';

// Context
const DataContext = createContext();

function DataProvider(props) {
	const [screen, setScreen] = useState('auth');
	const [currentUser, setCurrentUser] = useState({});
	const [loading, setLoading] = useState(false);
	const [data, setData] = useState([]);

	let userRef = useRef({});
	if (localStorage.user) {
		userRef.current = JSON.parse(localStorage.getItem('user'));
	}

	useEffect(() => {
		if (userRef.current.token) {
			setAuthToken(userRef.current.token);
			setCurrentUser(userRef.current);
			setScreen('home');
		} else setScreen('auth');
	}, []);

	useEffect(() => {
		axios
			.get(`${config.API_URL}/device/`)
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
			setData,
			currentUser,
			setCurrentUser,
			dataLoading: loading,
		};
	}, [screen, data, loading, currentUser]);

	return <DataContext.Provider value={value} {...props} />;
}

const useData = () => useContext(DataContext);

export { DataContext, useData };

export default DataProvider;
