import { useState } from 'react';
import axios from 'axios';
import { useData } from '../contexts/data';
import config from '../../config';

const useToggleChecked = () => {
	const [loading, setLoading] = useState(false);

	const { setData } = useData();

	function toggleChecked(checked, id) {
		setLoading(true);
		axios
			.patch(`${config.API_URL}/device/${id}/`, {
				is_checked_out: checked,
			})
			.then((res) => {
				setLoading(false);
			})
			.catch((error) => {
				setLoading(false);
				console.error('Error: ');
			});
	}

	function deleteDevice(id) {
		setLoading(true);
		axios
			.delete(`${config.API_URL}/device/${id}/`)
			.then((res) => {
				setLoading(false);
				setData((data) => {
					return data.filter((d) => d.id !== id);
				});
			})
			.catch((error) => {
				setLoading(false);
				console.error('Error: ');
			});
	}

	return {
		toggleChecked,
		deleteDevice,
		loading,
	};
};

export default useToggleChecked;
