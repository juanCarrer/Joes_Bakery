import React, { Fragment, lazy, Suspense } from 'react';
import { Helmet } from 'react-helmet';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { MainContentContainer, GlobalStyle } from './styles/global';
import { LoadingSpinner } from './components/LoadingSpinner';
import { Layout } from './components/Layout';
import favicon32x32 from '../public/favicon32x32.png';
import favicon16x16 from '../public/favicon16x16.png';
import appleTouchIcon from '../public/apple-touch-icon.png';

const Home = lazy(() => import('./pages/Home'));
const Recipe = lazy(() => import('./pages/Recipe'));
const Recipes = lazy(() => import('./pages/Recipes'));
const Method = lazy(() => import('./pages/Method'));
const Methods = lazy(() => import('./pages/Methods'));
const NotFound = lazy(() => import('./pages/NotFound'));

export const App = () => (
	<Fragment>
		<Helmet>
			<link rel='icon' type='image.png' sizes='32x32' href={favicon32x32} />
			<link rel='icon' type='image.png' sizes='16x16' href={favicon16x16} />
			<link rel='apple-touch-icon' sizes='180x180' href={appleTouchIcon} />
		</Helmet>
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
	</Fragment>
);