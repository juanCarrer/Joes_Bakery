import { useState, useEffect } from 'react';
import { fetchPost } from '../../firebase/client';

export const useFetchPostData = (collection, id) => {
	const [data, setData] = useState({});

	useEffect(() => {
		let isMounted = true;
		window.scrollTo(0, 0);
		fetchPost(collection, id).then(response => {
			if (isMounted) {
				setData(response);
			}
		})
		return () => {
			isMounted = false;
		}

	}, [id]);

	return [data, setData];
}