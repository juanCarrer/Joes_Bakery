import styled from 'styled-components'; 

export const Text = styled.p`
	white-space: pre-line;
	margin: 0.5rem 1rem;

	& h1, h2, h3, h4, h5, h6 {
		margin: 0;
		display: inline;
	}
	& ul {
		margin: 0;
	}
`;