import React, { useEffect, useState } from 'react';
import { ContentCard } from '../ContentCard';
import { fetchThumbnails } from '../../../firebase/client';
import { Container } from './styles';


export const CardGrid = ({ content, handelClick, exclude, limit }) => {
	const [ContentData, setContentData] = useState([]);

	useEffect(() => {
		fetchThumbnails(content).then(response => {
			const data = dataTreatment(response)
			setContentData(data);
		})
	}, [exclude, limit]);

	const dataTreatment = (data) => {
		let newData = data;

		if ( exclude ) {
			newData = data.filter(item => item.name != exclude); 
		}
		if ( limit ) {
			newData = newData.slice(0, limit);
		}

		return newData;
	}

	return (
		<Container>
			{
				ContentData.length != 0 ? 
				(
					ContentData.map(item => {
							return <ContentCard 
								handelClick={handelClick}
								key={item.id}
								contentLink={content}
								contentId={item.id}
								contentTitle={item.name}
								photo={item.image}
							/>
						}
					)	
				) : <h1>cargando...</h1>
			}
		</Container>
	);
};
