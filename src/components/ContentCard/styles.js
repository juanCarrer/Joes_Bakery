import styled, { keyframes } from 'styled-components';
import { color, fontFamily } from '../../styles/variables';

const imgZoom = keyframes`
	from {
		transform: none;
	}

	to {
		transform: scale(1.1);
	}

`;

export const CardContainer = styled.div`
	background-color: ${color.secondary};
	max-width: 300px;
	margin: 0 auto;
	margin-bottom: 10px;
	height: 240px;
	box-shadow: 0px 0px 14px -7px ${color.black};
	border-radius: 10px;

	& a {
		text-decoration: none;
	}

	:hover {

		& img {
			animation-duration: 1s;
			animation-name: ${imgZoom};
			transform: scale(1.1);
		}
	}
`;

export const PhotoContainer = styled.div`
	width: 300px;
	height: 200px;
	display: flex;
	justify-content: center;
	overflow: hidden;
	border-top-left-radius: 10px;
	border-top-right-radius: 10px;
`;

export const Photo = styled.img`
	width: inherit;
`;

export const Text = styled.p`
	color: ${color.black};
	margin: 0;
`;

export const TextContainer = styled.div`
	display: flex;
	justify-content: center;
	font-size: 30px;
	font-family: ${fontFamily.primary};
`; 