import styled from 'styled-components';
import { color } from '../../styles/variables';

export const CardContainer = styled.div`
	max-width: 300px;
	background-color: ${color.secondary}44;
	margin: 0 auto;
	margin-bottom: 10px;
	height: 240px;
	box-shadow: 0px 0px 14px -7px ${color.black};
	border-radius: 10px;

`;

export const PhotoPlaceHolder = styled.div`
	background-color: ${color.black}55;
	width: 300px;
	height: 200px;
	border-top-left-radius: 10px;
	border-top-right-radius: 10px;
`;