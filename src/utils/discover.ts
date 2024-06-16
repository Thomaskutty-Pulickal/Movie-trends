export const getPosterImage = (path: string) => {
	const prefixUrl = process.env.TMDB_IMAGE_URL;
	return `${prefixUrl}/w500/${path}`;
};
