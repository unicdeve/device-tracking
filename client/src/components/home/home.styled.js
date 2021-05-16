import styled from 'styled-components';

export const StyledHome = styled.div`
	.device {
		display: flex;
		justify-content: space-between;
		width: 20rem;
		box-shadow: 0px 24px 38px #d1cdcd29;
		margin-bottom: 1rem;
		border-radius: 5px;
		padding: 1rem 0.8rem;
		border: 0.5px solid #d1cdcd29;
		position: relative;

		.actions {
			button {
				cursor: pointer;
			}
		}

		.loading {
			position: absolute;
			height: 100%;
			width: 100%;
			background-color: rgba(255, 255, 255, 0.7);
			display: flex;
			justify-content: center;
			align-items: center;
		}
	}
`;
