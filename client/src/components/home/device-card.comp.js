import React from 'react';
import useToggleChecked from '../../utils/hooks/useToggleCheck';
import LoadingSpinner from '../loading-spinner/LoadingSpinner';

export default function DeviceCard({ data, currentUser }) {
	const { id, device, manufacturer, is_checked_out, os, last_checked_out_by } =
		data;

	const { toggleChecked, loading } = useToggleChecked();

	return (
		<>
			<div className='content'>
				<p>{manufacturer}</p>
				<p>{os}</p>
				<p>{device}</p>

				<label htmlFor={`is_checked_out_${id}`}>Is checked out? </label>
				<input
					type='checkbox'
					name={`is_checked_out_${id}`}
					label='is_checked_out'
					onChange={({ target: { checked } }) => {
						toggleChecked(checked, id);
					}}
					defaultChecked={is_checked_out}
				/>
			</div>

			{last_checked_out_by === currentUser.user_id ? (
				<div className='actions'>
					<button>del</button>
				</div>
			) : null}

			{loading && (
				<div className='loading'>
					<LoadingSpinner />
				</div>
			)}
		</>
	);
}
