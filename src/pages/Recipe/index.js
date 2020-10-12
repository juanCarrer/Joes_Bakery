import React, { Fragment } from 'react';
import { PostTitle } from '../../components/PostTitle';
import { PrecentageTable } from '../../components/PercentageTable';
import { CardGrid } from '../../components/CardGrid';
import { ProcessList } from '../../components/ProcessList';  
import { useUrlParams } from '../../hooks/useUrlParams';
import { useFetchPostData } from '../../hooks/useFetchPostData'; 
import { Main, InfoSection, RecommendationsSection, IngredientsSection } from './styles';
import { Helmet } from 'react-helmet';

const infoDefault = `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
						incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
						exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irur
						dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
						Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt
						mollit anim id est laborum`



export const Recipe = ({ match, history }) => {
	const [ recipeId, setRecipeId ] = useUrlParams(match, history);
	const [recipeData, setRecipeData] = useFetchPostData('recipes', recipeId);

	const handleRecomendationClick = (newId) => {
		setRecipeId( newId );
		setRecipeData({});
	} 

	return (
		<Fragment>
			<Helmet>
				<title>{`${recipeData.name ? recipeData.name : 'Receta'} | Joe’s Bakery`}</title>
				<meta name="description" content="explicación de recetas de panadería" />
			</Helmet>
			<PostTitle title={recipeData.name} imageSrc={recipeData.image}/>
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
				<h1>Otras recetas</h1>
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