import React, { Fragment } from 'react';
import { PostTitle } from '../../components/PostTitle';
import { PrecentageTable } from '../../components/PercentageTable';
import { CardGrid } from '../../components/CardGrid';
import { ProcessList } from '../../components/ProcessList';  
import { useUrlParams } from '../../hooks/useUrlParams';
import { formatPostDescription } from '../../utils/formatPostDescription';
import { useFetchPostData } from '../../hooks/useFetchPostData'; 
import { Main, InfoSection, RecommendationsSection, IngredientsSection } from './styles';
import { Text } from '../../utils/postDescriptionStyle';
import { Helmet } from 'react-helmet';

const Recipe = ({ match, history }) => {
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
				{
					recipeData.description ?
					<Text dangerouslySetInnerHTML={formatPostDescription(recipeData.description)}/> : 
					<Text>Cargando...</Text>
				}
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
							) : <p>Cargando...</p>
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

export default Recipe;