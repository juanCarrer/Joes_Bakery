import { createGlobalStyle } from 'styled-components';
import { color } from './variables';

export const GlobalStyle = createGlobalStyle`
	body {
		margin: 0;
		padding: 0;
    min-width: 320px;
		background-color: ${color.white};
	}
`;