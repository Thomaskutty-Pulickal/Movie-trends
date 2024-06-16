import { instance } from '@/services/instance';
import { FetchTrendingMoviesResponse, Movie } from '@/types/discover/discover';

export const fetchTrendingMovies = ({
	// @ts-expect-error -- expected
	pageParam,
}): Promise<FetchTrendingMoviesResponse> => {
	return instance.get(`discover/movie?page=${pageParam}`).json();
};

export const fetchMovieById = (id: string): Promise<Movie> => {
	return instance.get(`movie/${id}`).json();
};
