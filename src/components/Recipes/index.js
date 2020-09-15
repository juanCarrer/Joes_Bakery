import React from 'react';
import { ContentCard } from '../ContentCard';
import { CardGridContainer } from '../CardGridContainer';


export const Recipes = () => {
	return (
		<CardGridContainer>
			<ContentCard contentTitle='Baguette' photo='../../../public/baguette.jpg' />

			<ContentCard contentTitle='Brioche' photo='../../../public/brioche.jpg' />

			<ContentCard contentTitle='Pain au Lait' photo='../../../public/Pain_au_Lait.jpg' />

			<ContentCard contentTitle='Ciabatta' photo='../../../public/Ciabatta.jpg' />

			<ContentCard contentTitle='Sourdough Bread' photo='../../../public/Sourdough_Bread.jpg' />

			<ContentCard contentTitle='Bagels' photo='../../../public/Bagels.jpg' />

		</CardGridContainer>
	);
};