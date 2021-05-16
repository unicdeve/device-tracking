import styled from 'styled-components';

export const Container = styled.div`
	min-height: 100vh;
	width: 100%;
	display: flex;
	flex-direction: column;
	align-items: center;
	margin: 0 auto;

	@media (min-width: 768px) {
		width: 50%;
	}

	@media (min-width: 1024px) {
		width: 30%;
	}
`;
