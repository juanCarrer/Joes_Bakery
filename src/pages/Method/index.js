import React, { Fragment } from 'react';
import { PostTitle } from '../../components/PostTitle';
import { PrecentageTable } from '../../components/PercentageTable';
import { CardGrid } from '../../components/CardGrid';
import { useUrlParams } from '../../hooks/useUrlParams';
import { useFetchPostData } from '../../hooks/useFetchPostData'; 
import { RecommendationsSection, Main, TableContainer } from './styles';

const infoDefault = `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
						incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
						exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irur
						dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
						Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt
						mollit anim id est laborum`

export const Method = ({ match, history }) => {
	const [methodId, setMethodId] = useUrlParams(match, history);
	const [methodData, setMethodData] = useFetchPostData('methods', methodId);

	const handleRecomendationClick = (newId) => {
		setMethodId( newId );
		setMethodData({});
	} 

	return (
		<Fragment>
			<PostTitle title={methodData.name} imageSrc={methodData.image}/>
			<Main>
				<p>{infoDefault.repeat(5)}</p>
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