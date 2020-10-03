import React, { Fragment } from 'react'
import { Image, Title, Section } from './styles';

export const RecipeTitle = ({ title, imageSrc }) => {
	return (
		<Section>
			{
				title ? (
				<Fragment>
					<Image src={imageSrc} alt={`${title} photo`} />
					<Title>{title}</Title>
				</Fragment>
				)
				: <h1>cargando</h1>
			}
		</Section>
	)
}