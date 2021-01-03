import React, { useState, useEffect } from 'react';
import Button from '@material-ui/core/Button';
import MenuIcon from '@material-ui/icons/Menu';
import { HamburgerMenu } from '../HamburgerMenu';
import { media, color } from '../../styles/variables'
import { HeaderContainer, H1, ButtonContainer, Nav, MenuContainer} from './styles';
import { Link } from 'react-router-dom';

export const Header = () => {
	const mediaString = `(min-width: ${media.tablet})`;

	const [menu, setMenu] = useState(false);
	const [mediaButton, setMediaButton] = useState(window.matchMedia(mediaString).matches);
	
	useEffect(() => {
		const handleResize = () => setMediaButton(window.matchMedia(mediaString).matches);
		window.addEventListener("resize", handleResize);

		return () => window.removeEventListener("resize", handleResize);
	}, []);

	const handleMenu = () => {
		if (menu) {
			setMenu(false);
			return;
		} 
		setMenu(true);
	}

	const closeMenu = () => {
		setMenu(false);
	}

	return (
		<HeaderContainer>
			<H1 onClick={closeMenu}><Link to="/">Joe’s Bakery</Link></H1>
			{
				!mediaButton ? (
					<ButtonContainer>
						<Button onClick={handleMenu}>
							<MenuIcon style={{color: color.white}} />
						</Button>
						{
							menu && <HamburgerMenu onClick={handleMenu} clickHandler={closeMenu}/>
						}
					</ButtonContainer>	
				) :
				(
					<Nav>
						<ul>
							<li><Link to="/recipes">Recetas</Link></li>
							<li><Link to="/methods">Métodos</Link></li>
						</ul>
					</Nav>
				)
			}
		</HeaderContainer>
	)
}
