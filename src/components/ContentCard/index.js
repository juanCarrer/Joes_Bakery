import React from 'react';
import { Link } from 'react-router-dom';
import { CardContainer, Photo, PhotoContainer, Text, TextContainer} from './styles';
 
export const ContentCard = ({ contentLink = '/recipe', photo = '../../../public/foto.jpg', contentTitle = 'Titulo' }) => {
	return (
		<CardContainer>
			<Link to={contentLink}>
				<PhotoContainer>
					<Photo src={photo} alt='placeHolder'/>
				</PhotoContainer>
				<TextContainer>
					<Text>{contentTitle}</Text>
				</TextContainer>
			</Link>
		</CardContainer>
	)
}