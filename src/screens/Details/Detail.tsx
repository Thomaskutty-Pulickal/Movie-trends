import { View, ActivityIndicator, Text, ScrollView, Image } from 'react-native';
import { useQuery } from '@tanstack/react-query';

import { SafeScreen } from '@/components/template';

import { fetchMovieById } from '@/services/movies/discover';
import { RootScreenProps } from '@/types/navigation';
import { Movie } from '@/types/discover/discover';
import { getPosterImage } from '@/utils/discover';

import { styles } from './styles';

const USDollar = new Intl.NumberFormat('en-US', {
	style: 'currency',
	currency: 'USD',
});

function Details({ route }: RootScreenProps<'Details'>) {
	const { isSuccess, data, isPending } = useQuery<Movie>({
		queryKey: ['fetchMovieById'],
		queryFn: () => fetchMovieById(route.params?.id?.toString()),
	});

	return (
		<SafeScreen>
			<ScrollView>
				<View style={styles.container}>
					{isPending ? <ActivityIndicator /> : null}
					{isSuccess ? (
						<>
							<View style={styles.headerContainer}>
								<Text style={styles.heading}>
									{data?.title}
									<Text style={styles.subHeading}>
										({data?.release_date?.split('-')[0]})
									</Text>
								</Text>
							</View>
							<Image
								source={{ uri: getPosterImage(data?.poster_path || '') }}
								height={350}
								width={250}
								resizeMode="cover"
							/>
							<View style={styles.detailContainer}>
								<View style={styles.detailRow}>
									<View style={styles.flexRow}>
										<Text style={styles.ratingTexts}>User rating: </Text>
										<Text style={styles.valueText}>
											{`${Math.round(Number(data?.vote_average || 0) * 10)}%`}
										</Text>
									</View>
									<Text style={styles.ratingTexts}>
										{`Total votes: ${data?.vote_count || 0}`}
									</Text>
								</View>
								{data?.production_companies ? (
									<Text style={styles.detailTexts}>
										{`Production Company: ${data?.production_companies
											?.map(company => company?.name)
											.join(', ')}`}
									</Text>
								) : null}
								<Text style={styles.detailTexts}>
									{`Languages: ${data?.spoken_languages
										?.map(lang => lang?.name)
										.join(', ')}`}
								</Text>
								<Text style={styles.detailTexts}>
									{`Date of release: ${data?.release_date}`}
								</Text>
								<Text style={styles.detailTexts}>
									{`Total revenue: ${USDollar.format(data?.revenue || 0)}`}
								</Text>
								<Text style={styles.keyTexts}>
									Overview:
									<Text style={styles.overViewText}>{data?.overview}</Text>
								</Text>
							</View>
						</>
					) : null}
				</View>
			</ScrollView>
		</SafeScreen>
	);
}

export default Details;
