import React, { Fragment } from 'react';
import { Title } from './styles';
import { CardGrid } from '../../components/CardGrid';

export const Methods = () => {
	return (
		<Fragment>
			<Title>Todos los Métodos</Title>
			<CardGrid content='methods' />
		</Fragment>
	)
}