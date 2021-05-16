import { useState } from 'react';
import axios from 'axios';

const useToggleChecked = () => {
	const [loading, setLoading] = useState(false);

	function toggleChecked(checked, id) {
		setLoading(true);
		axios
			.patch(`http://127.0.0.1:8000/device/${id}/`, {
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

	return {
		toggleChecked,
		loading,
	};
};

export default useToggleChecked;
