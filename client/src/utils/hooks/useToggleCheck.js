import { useState } from 'react';
import axios from 'axios';
import { useData } from '../contexts/data';

const useToggleChecked = () => {
	const [loading, setLoading] = useState(false);

	const { setData } = useData();

	function toggleChecked(checked, id) {
		setLoading(true);
		axios
			.patch(`http://127.0.0.1:8000/device/${id}/`, {
				is_checked_out: checked,
			})
			.then((res) => {
				setData((data) => [res.data, ...data]);
			})
			.catch((error) => {
				setLoading(false);
				console.error('Error: ');
			});
	}

	return {
		toggleChecked,
		loading,
	};
};

export default useToggleChecked;
