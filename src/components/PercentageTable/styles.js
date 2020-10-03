import styled from 'styled-components';
import { color } from '../../styles/variables';

export const Table = styled.table`
	margin: 0 auto;
	font-size: 24px;
	border-collapse: collapse;
	width: 100%;
	max-width: 1200px;
	text-align: left;

	& tr:nth-child(even) {
		background-color: ${color.secondary}11;
	}

	& tr:nth-child(odd) {
		background-color: ${color.cream}11;
	}

`;

export const Th = styled.th`
	font-size: 30px;
	padding: 10px 0 10px 10px;
	background-color: ${color.primary};
	color: ${color.white};
`;

export const Td = styled.td`
	padding: 10px 0 10px 10px;
	color: ${color.black};
`;
