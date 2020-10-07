import React, { Fragment } from 'react'
import { LoadPostTitle } from '../LoadPostTitle';
import { Image, Title, Section } from './styles';

export const PostTitle = ({ title, imageSrc }) => {
	return ( 
		<Section>
			{
				title ? (
				<Fragment>
					<Image src={imageSrc} alt={`${title} photo`} />
					<Title>{title}</Title>
				</Fragment>
				)
				: <LoadPostTitle />
			}
		</Section>
	)
}