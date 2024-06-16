import {
	View,
	ActivityIndicator,
	Text,
	TouchableOpacity,
	Image,
} from 'react-native';
import {
	UseInfiniteQueryResult,
	useInfiniteQuery,
} from '@tanstack/react-query';

import { SafeScreen } from '@/components/template';
import { fetchTrendingMovies } from '@/services/movies';

import {
	FetchTrendingMoviesQueryResult,
	FetchTrendingMoviesResponse,
} from '@/types/discover/discover';
import { getPosterImage } from '@/utils/discover';
import { RootScreenProps } from '@/types/navigation';
import { FlatList } from 'react-native-gesture-handler';

import { styles } from './styles';

function Discover({ navigation }: RootScreenProps<'Discover'>) {
	const {
		data,
		fetchNextPage,
		hasNextPage,
		isFetching,
		isFetchingNextPage,
	}: UseInfiniteQueryResult<FetchTrendingMoviesQueryResult> = useInfiniteQuery({
		queryKey: ['trending-movies'],
		queryFn: fetchTrendingMovies,
		initialPageParam: 1,
		getNextPageParam: lastPage => {
			return lastPage.page < lastPage.total_pages
				? lastPage.page + 1
				: undefined;
		},
	});

	const loadMore = () => {
		if (hasNextPage) {
			fetchNextPage().catch(err => console.error(err));
		}
	};

	const handleMoviePress = (id: string) => {
		navigation.navigate('Details', { id });
	};

	return (
		<SafeScreen>
			<View style={styles.container}>
				<View>
					<Text style={styles.heading}>
						Welcome, See this weeks trending movies!
					</Text>
				</View>
				<FlatList
					data={
						data?.pages
							?.map((currPage: FetchTrendingMoviesResponse) => currPage.results)
							.flat() ?? []
					}
					keyExtractor={movie => movie.id.toString()}
					renderItem={({ item }) => (
						<TouchableOpacity
							style={styles.listColumnStyles}
							onPress={() => handleMoviePress(item.id)}
						>
							<Image
								source={{ uri: getPosterImage(item.poster_path) }}
								height={200}
								width={150}
								resizeMode="cover"
							/>
							<Text style={styles.movieTitleStyles}>{item.title}</Text>
						</TouchableOpacity>
					)}
					numColumns={2}
					onEndReached={loadMore}
					style={styles.flatListStyles}
					columnWrapperStyle={styles.listRowStyles}
					ListFooterComponent={
						isFetching || isFetchingNextPage ? (
							<ActivityIndicator size="large" />
						) : null
					}
					ListEmptyComponent={<Text>Something went wrong</Text>}
				/>
			</View>
		</SafeScreen>
	);
}

export default Discover;
