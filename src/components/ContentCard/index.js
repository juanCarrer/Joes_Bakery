import React from 'react';
import { Link } from 'react-router-dom';
import { CardContainer, Photo, PhotoContainer, Text, TextContainer} from './styles';


export const ContentCard = ({ contentLink = '/recipes', photo, contentTitle, contentId, handelClick}) => {
	return (
		<CardContainer>
			<Link to={`/${contentLink}/${contentId}`} onClick={() => {handelClick && handelClick(contentId)}}>
				<PhotoContainer>
					<Photo src={photo} alt={`${contentTitle} photo`}/>
				</PhotoContainer>
				<TextContainer>
					<Text>{contentTitle}</Text>
				</TextContainer>
			</Link>
		</CardContainer>
	)
}