import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { GlobalStyle } from './styles/global';
import { Home } from './pages/Home';
import { Recipe } from './pages/Recipe';
import { Recipes } from './pages/Recipes';
import { NotFound } from './pages/NotFound';
import { Layout } from './components/Layout';


export const App = () => (
	<>
		<GlobalStyle />
		<BrowserRouter>
			<Layout>
				<Switch>
					<Route exact path="/" component={Home} />
					<Route exact path="/recipe" component={Recipe} />
					<Route exact path="/recipes" component={Recipes} />
					<Route component={NotFound} />
				</Switch>
			</Layout>
		</BrowserRouter>
	</>
);