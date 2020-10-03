import React from 'react';
import { Link } from 'react-router-dom';
import { CardGrid } from '../../components/CardGrid';
import { H1, Section } from './styles';


export const Home = () => {
	return (
		<main>
			<Section>
				<H1><Link to='recipes'>Recetas</Link></H1>
				<CardGrid content='recipes' />
			</Section>
			<Section>
				<H1><Link to='methods'>Métodos</Link></H1>
				<CardGrid content='methods' />
			</Section>
		</main>
	)
}