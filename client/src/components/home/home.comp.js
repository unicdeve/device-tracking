import React from 'react';
import { useData } from '../../utils/contexts/data';
import useToggleCheck from '../../utils/hooks/useToggleCheck';
import CreateDeviceForm from '../create-device/create-device.comp';
import { StyledHome } from './home.styled';

export default function Home() {
	const { data, dataLoading, currentUser } = useData();

	const { toggleChecked } = useToggleCheck();

	return (
		<StyledHome>
			<CreateDeviceForm />

			{dataLoading ? (
				<p>Loading devices ...</p>
			) : (
				data.map((d) => {
					const {
						id,
						device,
						manufacturer,
						is_checked_out,
						os,
						last_checked_out_by,
					} = d;
					return (
						<div key={id} className='device'>
							<div className='content'>
								<p>{manufacturer}</p>
								<p>{os}</p>
								<p>{device}</p>

								<label htmlFor='is_checked_out'>Is checked out? </label>
								<input
									type='checkbox'
									name='is_checked_out'
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
						</div>
					);
				})
			)}
		</StyledHome>
	);
}
