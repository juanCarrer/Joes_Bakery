import React, { Fragment } from 'react';
import { Title } from './styles';
import { CardGrid } from '../../components/CardGrid';
import { Helmet } from 'react-helmet';

const Recipes = () => {
	return (
		<Fragment>
			<Helmet>
				<title>Recetas | Joe’s Bakery</title>
				<meta name="description" content="Lista de recetas de panadería" />
			</Helmet>
			<Title>Todas las Recetas</Title>
			<CardGrid content='recipes' />
		</Fragment>
	)
}

export default Recipes;