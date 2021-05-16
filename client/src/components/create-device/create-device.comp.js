import React from 'react';
import useCreateDevice from '../../utils/hooks/useCreateDevice';

import Button from '../button/button.comp';
import FormField from '../form-field/form-field.comp';
import { Container } from './create-device.styled';

export default function CreateDeviceForm() {
	const {
		values,
		handleChange,
		handleSubmit,
		errors,
		loading,
		checked,
		setChecked,
	} = useCreateDevice();

	const { os, device, manufacturer } = values;

	return (
		<Container>
			<FormField
				name='os'
				placeholder='OS'
				value={os}
				onChange={handleChange}
				error={errors.os}
			/>
			<FormField
				name='device'
				placeholder='Device name'
				value={device}
				onChange={handleChange}
				error={errors.device}
			/>

			<FormField
				name='manufacturer'
				placeholder='Manufacturer'
				value={manufacturer}
				onChange={handleChange}
				error={errors.manufacturer}
			/>

			<label htmlFor='is_checked_out'>Is checked out? </label>
			<input
				type='checkbox'
				name='is_checked_out'
				label='is_checked_out'
				onChange={({ target: { checked } }) => {
					setChecked(checked);
				}}
				defaultChecked={checked}
			/>
			<br />

			<div className='btn-wrapper'>
				<Button
					text='Create'
					onClick={handleSubmit}
					loading={loading.toString()}
				/>
			</div>
		</Container>
	);
}
