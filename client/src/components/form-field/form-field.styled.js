import styled from 'styled-components';

export const FormFieldContainer = styled.div`
	position: relative;
	width: 100%;
	display: flex;
	flex-direction: column;
	font-weight: normal;
	margin-bottom: 1.6rem;

	label {
		font-size: 0.7rem;
	}

	input,
	select {
		height: 3.5rem;
		width: 100%;
		padding: 1rem;
		margin-top: 0.8rem;
		border-radius: 0.2rem;
		border: 1px solid ${({ error }) => (error ? 'tomato' : `#51B2F4`)};
		background-color: inherit;
		font-size: 1.2rem;
		color: #343333;

		&::placeholder {
			font-weight: 400;
			font-size: 13px;
			color: #000;
			opacity: 0.5;
		}

		&:focus {
			outline: none;
			border: 2px solid ${({ error }) => (error ? 'tomato' : '#000')};
			transition: all 0.3s ease-in-out;

			&::placeholder {
				opacity: 0.2;
			}
		}
	}

	.error-feedback {
		color: tomato;
		font-size: 11px;
		padding-left: 0.5rem;
	}

	@media (min-width: 768px) {
		label {
			font-size: 1.2rem;
		}

		input {
			font-size: 0.9rem;

			&::placeholder {
				font-size: 15px;
			}
		}
	}

	@media (min-width: 1024px) {
	}

	@media (min-width: 1600px) {
	}
`;
