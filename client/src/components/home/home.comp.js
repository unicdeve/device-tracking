import React from 'react';
import { useData } from '../../utils/contexts/data';
import { StyledHome } from './home.styled';

export default function Home() {
	const { data, dataLoading } = useData();

	console.log(data);

	return (
		<StyledHome>
			{dataLoading ? (
				<p>Loading devices ...</p>
			) : (
				data.map((d) => {
					const { id, device, manufacturer, is_checked_out, os } = d;
					return (
						<div key={id} className='device'>
							<div className='content'>
								<p>{manufacturer}</p>
								<p>{os}</p>
								<p>{device}</p>
								<p>Is checked out? {is_checked_out.toString()}</p>
							</div>

							<div className='actions'>
								<button>del</button>
							</div>
						</div>
					);
				})
			)}
		</StyledHome>
	);
}
