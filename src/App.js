import React, { lazy, Suspense } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { MainContentContainer, GlobalStyle } from './styles/global';
import { LoadingSpinner } from './components/LoadingSpinner'
import { Layout } from './components/Layout'
const Home = lazy(() => import('./pages/Home'));
const Recipe = lazy(() => import('./pages/Recipe'));
const Recipes = lazy(() => import('./pages/Recipes'));
const Method = lazy(() => import('./pages/Method'));
const Methods = lazy(() => import('./pages/Methods'));
const NotFound = lazy(() => import('./pages/NotFound'));

export const App = () => (
	<>
		<GlobalStyle />
		<BrowserRouter>
		 <Layout>
				<MainContentContainer>
					<Suspense fallback={<LoadingSpinner/>} >
						<Switch>
							<Route exact path="/" component={Home} />
							<Route exact path="/recipes/:id" component={Recipe} />
							<Route exact path="/recipes" component={Recipes} />
							<Route exact path="/methods/:id" component={Method} />
							<Route exact path="/methods" component={Methods} />
							<Route component={NotFound} />
						</Switch>
					</Suspense>
				</MainContentContainer>
			</Layout>
		</BrowserRouter>
	</>
);