import styled from 'styled-components';
import { color, media, fontFamily } from '../../styles/variables';

export const H1 = styled.h1`
	text-align: center;
	margin: 0;

	& a {
		text-decoration: none;
		color: ${color.black};
		font-size: 33px;
		cursor: pointer;
	}
`;


export const Section = styled.section`
	box-shadow: 0px 0px 14px -7px ${color.black};
	margin: 10px 0px;
	overflow: hidden;
	font-family: ${fontFamily.primary};

	@media screen and (min-width: ${media.mobile}) {
		margin: 10px 10px;
	} 
`;