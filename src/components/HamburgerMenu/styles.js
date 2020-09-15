import styled from 'styled-components';
import { color, media, fontFamily } from '../../styles/variables';


export const MenuContainer = styled.div`
	position: absolute;
	background-color: ${color.cream};
	z-index: 1;
	right: 60%;
	top: 60%;
	box-shadow: 4px 5px 4px 1px ${color.black}77;

	@media screen and (min-width: ${media.mobile}) {
		right: 45%;
	}
`;

export const Ul = styled.ul`
	list-style: none;
	padding: 0;
	margin: 10px;
`;

export const Li = styled.li`
	font-size: 34px;
	font-family: ${fontFamily.primary};

	@media screen and (min-width: ${media.mobile}) {
		font-size: 40px;
	}

	&:not(:last-child) {
		border-bottom: solid 1px ${color.black};
	}

	& a {
		text-decoration: none;
		color: ${color.black};
	}

	:hover {
		background-color: ${color.secondary};
		a {
			color: ${color.white};
		} 
	}
`;