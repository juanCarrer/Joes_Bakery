import styled from 'styled-components';
import { color, media } from '../../styles/variables';

export const Section = styled.section`
	width: 100%;
	max-height: 400px;
	min-height: 200px;
	position: relative;
	background-color: ${color.black}88;
	display: flex;

	@media screen and (min-width: ${media.mobile}) {
		max-height: 800px;
		min-height: 400px;
	}

`;

export const Image = styled.img`
	width: inherit;
	max-height: inherit;
	filter: brightness(0.7);
	max-width: 1200px;
	margin: 0 auto;
`;

export const Title = styled.h1`
	position: absolute;
	margin: 0;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
	color: ${color.white};
	font-size: 50px;

	@media screen and (min-width: ${media.mobile}) {
		font-size: 60px;
	}

	@media screen and (min-width: ${media.tablet}) {
		font-size: 80px;
	}
`;