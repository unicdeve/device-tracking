import styled from 'styled-components';

export const StyledLoadingDonut = styled.div`
	display: inline-block;
	border: 3px solid #2e476e;
	border-left-color: #fff;
	border-radius: 50%;
	width: 25px;
	height: 25px;
	animation: donut-spin 1.2s linear infinite;

	@keyframes donut-spin {
		0% {
			transform: rotate(0deg);
		}
		100% {
			transform: rotate(360deg);
		}
	}
`;
