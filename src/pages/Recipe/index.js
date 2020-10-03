import React, { useEffect, useState, Fragment} from 'react';
import { fetchPost } from '../../../firebase/client';
import { RecipeTitle } from '../../components/RecipeTitle';
import { PrecentageTable } from '../../components/PercentageTable';
import { CardGrid } from '../../components/CardGrid';
import { ProcessList } from '../../components/ProcessList';  
import { Main, InfoSection, RecommendationsSection, IngredientsSection } from './styles';

const infoDefault = `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
						incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
						exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irur
						dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
						Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt
						mollit anim id est laborum`



export const Recipe = ({ match, history }) => {
	const [ recipeId, setRecipeId ] = useState( match.params.recipeId );
	const [recipeData, setRecipeData] = useState({});

	const handelNavBottoms = (e) => {
		if (history.location.pathname.includes('/recipes/')) {
			const newId = history.location.pathname.slice(9)
			setRecipeId(newId)
		}
	}

	useEffect(() => {
		window.scrollTo(0, 0);
		fetchPost('recipes', recipeId).then(response => {
		setRecipeData(response);
	})
	}, [recipeId]);

	useEffect(() => {
			window.addEventListener('popstate', (e) => handelNavBottoms(e))

		return () => {
			window.removeEventListener('popstate', (e) => handelNavBottoms(e));
		}
	}, [])

	const handleRecomendationClick = (newId) => {
		setRecipeId( newId );
	} 

	return (
		<Fragment>
			<RecipeTitle title={recipeData.name} imageSrc={recipeData.image}/>
			<Main>
				<InfoSection>
					<p>
						{
							recipeData.description ? recipeData.description : infoDefault
						}
					</p>
				</InfoSection>
				{ recipeData.tables && 
					<IngredientsSection>
						<h1>Formula</h1>
						{
							recipeData.tables.map((table, i) => 
								<PrecentageTable
									key={`${recipeId}-table-${i}`}
									id={`${recipeId}-tableContent-${i}`}
									content={table.content}
									tableName={table.name}
								/>
							)
						}
					</IngredientsSection>
				}
				<section>
					<h1>Procedimiento</h1>
						{
							recipeData.process ? (
								<ProcessList 
									process={recipeData.process}
									id={recipeId}
								/>
							) : <p>{infoDefault}</p>
						}
				</section>
			</Main>
			<RecommendationsSection>
				<h1>Otras recetas y metodos</h1>
				<CardGrid
					content='recipes'
					handelClick={handleRecomendationClick}
					exclude={recipeData.name}
					limit={4}
				/>
			</RecommendationsSection>
		</Fragment>
	)
}