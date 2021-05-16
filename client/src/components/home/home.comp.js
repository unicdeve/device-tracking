import React from 'react';
import { useData } from '../../utils/contexts/data';
import CreateDeviceForm from '../create-device/create-device.comp';
import DeviceCard from './device-card.comp';
import { StyledHome } from './home.styled';

export default function Home() {
	const { data, dataLoading, currentUser } = useData();

	return (
		<StyledHome>
			<CreateDeviceForm />

			{dataLoading ? (
				<p>Loading devices ...</p>
			) : (
				data.map((d) => {
					return (
						<div key={d.id} className='device'>
							<DeviceCard data={d} currentUser={currentUser} />
						</div>
					);
				})
			)}
		</StyledHome>
	);
}
