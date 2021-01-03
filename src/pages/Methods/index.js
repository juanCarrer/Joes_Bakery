import React, { Fragment } from 'react';
import { Title } from './styles';
import { CardGrid } from '../../components/CardGrid';
import { Helmet } from 'react-helmet';

const Methods = () => {
	return (
		<Fragment>
			<Helmet>
				<title>Métodos | Joe’s Bakery</title>
				<meta name="description" content="Lista de Técnicas de panadería" />
			</Helmet>
			<Title>Todos los Métodos</Title>
			<CardGrid content='methods' />
		</Fragment>
	)
}

export default Methods;