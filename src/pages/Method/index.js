import React, { Fragment } from 'react';
import { PostTitle } from '../../components/PostTitle';
import { PrecentageTable } from '../../components/PercentageTable';
import { CardGrid } from '../../components/CardGrid';
import { useUrlParams } from '../../hooks/useUrlParams';
import { useFetchPostData } from '../../hooks/useFetchPostData'; 
import { RecommendationsSection, Main, TableContainer } from './styles';
import { Helmet } from 'react-helmet';

const Method = ({ match, history }) => {
	const [methodId, setMethodId] = useUrlParams(match, history);
	const [methodData, setMethodData] = useFetchPostData('methods', methodId);

	const handleRecomendationClick = (newId) => {
		setMethodId( newId );
		setMethodData({});
	} 

	return (
		<Fragment>
			<Helmet>
				<title>{`${methodData.name ? methodData.name : 'Método'} | Joe’s Bakery`}</title>
				<meta name="description" content="explicación de técnicas de panadería" />
			</Helmet>
			<PostTitle title={methodData.name} imageSrc={methodData.image}/>
			<Main>
				<p>
					{
						methodData.description ? methodData.description : 'Cargando...'
					}
				</p>
				{
					methodData.tables &&
						<TableContainer>
							{
								methodData.tables.map((table, i) => 
									<PrecentageTable
										key={`${methodId}-table-${i}`}
										id={`${methodId}-tableContent-${i}`}
										content={table.content}
										tableName={table.name}
									/>
								)
							}
						</TableContainer>
				}
			</Main>
			<RecommendationsSection>
				<h1>Otros métodos</h1>
				<CardGrid
					content='methods'
					handelClick={handleRecomendationClick}
					exclude={methodData.name}
					limit={4}
				/>
			</RecommendationsSection>
		</Fragment>
	)
}

export default Method;