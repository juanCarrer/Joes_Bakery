import React from 'react';
import { ContentCard } from '../ContentCard';
import { CardGridContainer } from '../CardGridContainer';

export const Methods = () => {
	return (
		<CardGridContainer>
			<ContentCard contentTitle='Amasado' photo='../../../public/amasado.jpg' />
			<ContentCard contentTitle='Formado' photo='../../../public/formado.jpg' />
			<ContentCard contentTitle='Masa Madre' photo='../../../public/masa_madre.jpg' />
			<ContentCard />
			<ContentCard />
			<ContentCard />
		</CardGridContainer>
	)
}