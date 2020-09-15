import React from 'react';
import { Link } from 'react-router-dom';
import { Recipes } from '../../components/Recipes';
import { Methods } from '../../components/Methods';
import { H1, Section } from './styles';


export const Home = () => {
	return (
		<main>
			<Section>
				<H1><Link to='recipes'>Recetas</Link></H1>
				<Recipes />
			</Section>
			<Section>
				<H1><Link to='methods'>Métodos</Link></H1>
				<Methods />
			</Section>
		</main>
	)
}