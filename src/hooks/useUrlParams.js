import { useState, useEffect } from 'react';


export const useUrlParams = (match, history) => {
	const url = match.path.slice(0, -3);
	const [id, setId] = useState(match.params.id);

	const getUrlId = (url) => {
		const regexp = '/.+/';
		let match = url.matchAll(regexp);
		match = Array.from(match)
		const preId = match[0]
		const preIdLen = preId[0].length;

		return url.slice(preIdLen);
	}

	const handelNavBottoms = (e) => {
		if (history.location.pathname.includes(url)) {
			const newId = getUrlId(history.location.pathname);
			setId(newId);
		}
	}

	useEffect(() => {
			window.addEventListener('popstate', (e) => handelNavBottoms(e))

		return () => {
			window.removeEventListener('popstate', (e) => handelNavBottoms(e));
		}
	}, [])


	return [id, setId];
}