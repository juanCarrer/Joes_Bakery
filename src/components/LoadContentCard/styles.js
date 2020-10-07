import styled, { keyframes } from 'styled-components';
import { color } from '../../styles/variables';

export const CardContainer = styled.div`
	max-width: 300px;
	background-color: ${color.secondary}11;
	margin: 0 auto;
	margin-bottom: 10px;
	height: 240px;
	box-shadow: 0px 0px 14px -7px ${color.black};
	border-radius: 10px;
	position: relative;
	overflow: hidden;
`;

const load = keyframes`
	from {
		left: -100%;
	}

	to {
		left: 100%;
	}
`;

export const AnimationGradient = styled.div`
	height: 200px;
	width: 300px;
	position: absolute;
	background: linear-gradient(to right, transparent 0%, ${color.gray} 50%, transparent 100%);
	left: -100%;
	animation: ${load} 1s cubic-bezier(0.4, 0.0, 0.2, 1);
	animation-iteration-count: infinite;
`;


export const PhotoPlaceHolder = styled.div`
	background-color: ${color.black}11;
	width: 300px;
	height: 200px;
	border-top-left-radius: 10px;
	border-top-right-radius: 10px;
`;