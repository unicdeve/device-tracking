import styled from 'styled-components';

export const Container = styled.div`
	width: 100%;

	.tabs {
		display: flex;
		justify-content: center;
		align-items: center;
	}
`;

export const Tab = styled.div`
	width: 50%;
	cursor: pointer;
	text-align: center;
	border: 1px solid #51b2f4;
	padding: 1rem;
	background-color: ${({ active }) => (active ? '#51b2f4' : '#fff')};
	color: ${({ active }) => (active ? '#fff' : '#343333')};
`;
