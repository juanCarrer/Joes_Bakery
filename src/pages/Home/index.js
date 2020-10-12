import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import { CardGrid } from '../../components/CardGrid';
import { H1, Section } from './styles';
import { Helmet } from 'react-helmet';


export const Home = () => {
	return (
		<Fragment>
			<Helmet>
				<title>Home | Joe’s Bakery</title>
				<meta name="description" content="Recopilación de recetas técnicas y métodos de panadería para aficionados" />
				<meta name="keywords" content="Pan, Panadería, Técnicas, Recetas" />
			</Helmet>
			<main>
				<Section>
					<H1><Link to='recipes'>Recetas</Link></H1>
					<CardGrid content='recipes' limit={8}/>
				</Section>
				<Section>
					<H1><Link to='methods'>Métodos</Link></H1>
					<CardGrid content='methods' limit={8}/>
				</Section>
			</main>
		</Fragment>
	)
}