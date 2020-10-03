import React from 'react';
import { List, ListItem } from './styles';

export const ProcessList = ({ id, process }) => {
	return (
		<List>
			{	
				process.map((element, i) => 
					<ListItem key={`${id}-process-${i}`}>{element}</ListItem>
				) 
			}
		</List>
	)
}