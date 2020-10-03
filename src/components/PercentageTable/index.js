import React, { useState, useEffect } from 'react';
import { Table, Td, Th } from './styles';

export const PrecentageTable = ({ content = {}, id, tableName }) => {

	const getContentKeys = () => {
		const keys = [];
		for (const item in content) {
			if (item.includes('Harina')) {
				keys.unshift(item);
			}
			else {
				keys.push(item);
			}
		}
		return keys;
	}

	return (
		<Table>
			<thead>
				<tr>
					<Th>{tableName}</Th>
					<Th>%</Th>
				</tr>
			</thead>
			<tbody>
					{ 
						content && getContentKeys().map((item, i) =>
							<tr key={`${id}-contentRow-${i}`} >
								<Td key={`${id}-content-${i}`} >
									{item}
								</Td>
								<Td key={`${id}-%-${i}`} >
									{content[item]}
								</Td>
							</tr>
						)
					}
			</tbody>
		</Table>
	)
}