import styled from 'styled-components';
import { color, fontFamily } from '../../styles/variables';


export const FooterContainer = styled.footer`
	padding: 0 30px;
	height: 50px;
	width: auto;
	background-color: ${color.primary};
	color: ${color.white};
	display: flex;
	align-items: center;
	justify-content: flex-start;
	position: absolute:
	bottom: 0;

	& h2 {
		font-size: 16px;
	}
`;
