import React from 'react';
import PropTypes from 'prop-types';

import { StyledButton } from './button.styled';
import LoadingSpinner from '../loading-spinner/LoadingSpinner';

function Button({ text, loading, ...rest }) {
	return (
		<StyledButton {...rest}>
			{loading === 'true' ? <LoadingSpinner /> : text}
		</StyledButton>
	);
}

Button.propTypes = {
	text: PropTypes.string,
};

export default Button;
