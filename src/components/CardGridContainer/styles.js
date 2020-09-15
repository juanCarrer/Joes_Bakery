import styled from 'styled-components';
import { media } from '../../styles/variables';

export const Container = styled.div`
	margin 10px;
	display: grid;
	grid-template-columns: 1fr;

	@media screen and (min-width: ${media.tablet}) {
		grid-template-columns: 1fr 1fr;
	}

	@media screen and (min-width: ${media.laptop}) {
		grid-template-columns: 1fr 1fr 1fr;
	}

	@media screen and (min-width: ${media.desktop}) {
		grid-template-columns: 1fr 1fr 1fr 1fr;
	}

`;