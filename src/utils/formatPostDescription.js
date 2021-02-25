import replaceAll from 'string.prototype.replaceall';

export const formatPostDescription = (description) => {
	const formatedDescription = {
		__html: replaceAll(description, '\\n', '\n')
	};
	return formatedDescription;
}