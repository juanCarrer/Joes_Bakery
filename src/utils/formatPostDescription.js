export const formatPostDescription = (description) => {
	const formatedDescription = {
		__html: description.replaceAll('\\n', '\n')
	};
	return formatedDescription;
}