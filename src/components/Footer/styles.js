import styled from 'styled-components';
import { color, fontFamily } from '../../styles/variables';


export const FooterContainer = styled.footer`
	height: 50px;
	width: 100%;
	background-color: ${color.primary};
	color: ${color.white};
	display: flex;
	justify-content: flex-start;
	align-items: center;

	& h2 {
		font-size: 16px;
		margin-left: 30px;
	}
`;
