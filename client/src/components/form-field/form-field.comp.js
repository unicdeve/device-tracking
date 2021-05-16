import React from 'react';
import PropTypes from 'prop-types';

import { FormFieldContainer } from './form-field.styled';

const FormField = ({
	name,
	placeholder,
	value,
	info,
	error,
	type,
	label,
	onChange,
	options,
	icon,
	...props
}) => {
	const renderInput = () => {
		switch (type) {
			case 'text':
			case 'email':
			case 'password':
			case 'date':
			case 'number':
				return (
					<input
						type={type}
						placeholder={placeholder}
						name={name}
						onChange={onChange}
						value={value}
						{...props}
					/>
				);

			default:
				return null;
		}
	};

	return (
		<FormFieldContainer error={error}>
			{label && <label>{label}</label>}
			{renderInput()}
			{info && <small className='form-info'>{info}</small>}
			{error && <div className='error-feedback'>{error}</div>}
		</FormFieldContainer>
	);
};

FormField.propTypes = {
	name: PropTypes.string.isRequired,
	placeholder: PropTypes.string,
	type: PropTypes.string.isRequired,
	value: PropTypes.string,
	onChange: PropTypes.func,
	info: PropTypes.string,
};

FormField.defaultProps = {
	type: 'text',
};

export default FormField;
