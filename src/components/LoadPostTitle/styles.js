import styled, { keyframes } from 'styled-components';
import { color } from '../../styles/variables';

export const Container = styled.div`
	width: inherit;
	max-height: inherit;
	overflow: hidden;
	position: relative;
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
	width: inherit;
	content: "";
	padding-bottom: 65%;
	max-height: inherit;
	max-width: 1200px;
	position: absolute;
	left: -100%;
	background: linear-gradient(to right, transparent 0%, ${color.gray} 50%, transparent 100%);
	animation: ${load} 2s cubic-bezier(0.4, 0.0, 0.2, 1);
	animation-iteration-count: infinite;
`;


export const Image = styled.div`
	width: inherit;
	content: "";
	padding-bottom: 65%;
	max-height: inherit;
	max-width: 1200px;
	margin: 0 auto;
	background-color: ${color.white}ee;
`;