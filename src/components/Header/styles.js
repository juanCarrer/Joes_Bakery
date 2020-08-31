import styled from 'styled-components';
import { color, fontFamily, fontSize, media } from '../../styles/variables';

export const HeaderContainer = styled.header`
	background-color: ${color.primary};
	display: grid;
	grid-template-columns: repeat(4, 1fr);
	height: 100px;
	width: auto;
	align-items: center;
`;

export const H1 = styled.h1` 
	display: flex;
	align-items: center;
	justify-content: center;
	font-size: 24px;
	font-family: ${fontFamily.primary};
	text-align: center;
	grid-column-start: 2;
	grid-column-end: 4;
	margin: auto 0;
	color: ${color.white};

	@media screen and (min-width: ${media.mobile}) {
		font-size: 33px;
	}
`;

export const ButtonContainer = styled.div`
	display: flex;
	justify-content: flex-end;
	align-items: center;
	height: 100%;
	padding: 5px 10px 0 10px;
	grid-column-start: 4;
	position: relative;

`;

export const Nav = styled.nav`
	overflow: hidden;
	float: right;
	text-align: -webkit-right;

	& ul {
		display: flex;
		justify-content: space-between;
		align-items: center;
		list-style-type: none;
		padding: 0 10px 0 0;
		font-size: 20px;
		font-family: ${fontFamily.secondary};
		max-width: 200px;

		@media screen and (min-width: ${media.laptop}) {
		font-size: 24px;
		max-width: 220px;
	}

	}

	& a {
		text-decoration: none;
		color: ${color.white};
	}
`;

export const MenuContainer = styled.ul`
	background-color: ${color.secondary};
	padding: 0;
	position: absolute;
	z-index: 1;
	right: 30%;
	top: 50%;
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	list-style: none;
	box-shadow: 4px 5px 4px 1px ${color.black}77;


	& li {
		width: 100%;
	}

	& a {
		float: center;
		text-decoration: none;
		color: ${color.white};
		font-size: 24px;
	}

	& :hover {
	  background-color: ${color.white};

	  & a {
	  color: ${color.black};
	  }
	}

`;