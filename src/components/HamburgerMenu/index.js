import React from 'react';
import { Link } from 'react-router-dom';
import { MenuContainer, Li, Ul } from './styles';

export const HamburgerMenu = ({ clickHandler }) => {
	return (
		<MenuContainer>
			<Ul>
				<Li><Link onClick={clickHandler} to="/recipes">Recetas</Link></Li>
				<Li><Link onClick={clickHandler} to="/methods">Métodos</Link></Li>
			</Ul>
		</MenuContainer>
	)
};