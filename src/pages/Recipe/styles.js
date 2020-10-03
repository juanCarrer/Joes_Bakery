import styled from 'styled-components';

export const Main = styled.main`
	margin: 15px;
	font-size: 20px;
	
	& h1 {
		text-align: center;
	} 

`;

export const RecommendationsSection = styled.section`
	text-align: center;
`;

export const InfoSection = styled.section`
	text-align: center;
`;

export const IngredientsSection = styled.section`
	& > table {		
		&:not(:last-child) {
			margin-bottom: 50px;
		}
	}
`;