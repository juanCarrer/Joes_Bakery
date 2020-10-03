import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { GlobalStyle } from './styles/global';
import { Home } from './pages/Home';
import { Recipe } from './pages/Recipe';
import { Recipes } from './pages/Recipes';
import { Method } from './pages/Method';  
import { Methods } from './pages/Methods';
import { NotFound } from './pages/NotFound';
import { Layout } from './components/Layout';

export const App = () => (
	<>
		<GlobalStyle />
		<BrowserRouter>
			<Layout>
				<Switch>
					<Route exact path="/" component={Home} />
					<Route exact path="/recipes/:recipeId" component={Recipe} />
					<Route exact path="/recipes" component={Recipes} />
					<Route exact path="/methods/:methodId" component={Method} />
					<Route exact path="/methods" component={Methods} />
					<Route component={NotFound} />
				</Switch>
			</Layout>
		</BrowserRouter>
	</>
);