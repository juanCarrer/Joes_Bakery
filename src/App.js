import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { MainContentContainer, GlobalStyle } from './styles/global';
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
				<MainContentContainer>
					<Switch>
						<Route exact path="/" component={Home} />
						<Route exact path="/recipes/:id" component={Recipe} />
						<Route exact path="/recipes" component={Recipes} />
						<Route exact path="/methods/:id" component={Method} />
						<Route exact path="/methods" component={Methods} />
						<Route component={NotFound} />
					</Switch>
				</MainContentContainer>
			</Layout>
		</BrowserRouter>
	</>
);