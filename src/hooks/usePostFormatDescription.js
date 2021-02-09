export const usePostFormateDescription = (description) => {
	const formateDescription = {
		__html: description.replaceAll('\\n', '\n');
	}
	return formateDescription;
}