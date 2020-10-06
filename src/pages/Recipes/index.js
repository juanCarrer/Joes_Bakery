import React, { Fragment } from 'react';
import { Title } from './styles';
import { CardGrid } from '../../components/CardGrid';

export const Recipes = () => {
	return (
		<Fragment>
			<Title>Todas las Recetas</Title>
			<CardGrid content='recipes' />
		</Fragment>
	)
}