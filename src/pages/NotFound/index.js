import React, { Fragment } from 'react';
import { Helmet } from 'react-helmet';

export const NotFound = () => {
	return (
		<Fragment>
			<Helmet>
				<title>404| Joe’s Bakery</title>
			</Helmet>
			<h1>esta pagina no existe</h1>
		</Fragment>
	)
}