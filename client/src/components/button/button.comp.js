import React from 'react';
import PropTypes from 'prop-types';

import { StyledButton } from './button.styled';

function Button({ text, ...rest }) {
	return <StyledButton {...rest}>{text}</StyledButton>;
}

Button.propTypes = {
	text: PropTypes.string,
};

export default Button;
