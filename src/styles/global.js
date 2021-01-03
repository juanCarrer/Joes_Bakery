import styled, { createGlobalStyle } from 'styled-components';
import { color, fontFamily } from './variables';

export const GlobalStyle = createGlobalStyle`	

	body {
		margin: 0;
		padding: 0;
    min-width: 320px;
		background-color: ${color.white};
		font-family: ${fontFamily.primary};
	}
`;

export const MainContentContainer = styled.div`
	min-height: calc(100vh - 70px);
`;


