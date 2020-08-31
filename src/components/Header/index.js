import React, { useState, useEffect } from 'react';
import Button from '@material-ui/core/Button';
import MenuIcon from '@material-ui/icons/Menu';
import { media, color } from '../../styles/variables'
import { HeaderContainer, H1, ButtonContainer, Nav, MenuContainer} from './styles';


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

	return (
		<HeaderContainer>
			<H1>Joe’s Bakery</H1>
			{
				!mediaButton ? (
					<ButtonContainer>
						<Button onClick={handleMenu}>
							<MenuIcon style={{color: color.white}} />
						</Button>
						{
							menu && <MenuContainer>
								<li><a href="#recetas">Recetas</a></li>
								<li><a href="#metodos">Metodos</a></li>
							</MenuContainer>
						}
					</ButtonContainer>	
				) :
				(
					<Nav>
						<ul>
							<li><a href="#recetas">Recetas</a></li>
							<li><a href="#metodos">Metodos</a></li>
						</ul>
					</Nav>
				)
			}
		</HeaderContainer>
	)
}
