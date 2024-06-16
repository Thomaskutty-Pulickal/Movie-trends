import { useEffect } from 'react';
import {
	ActivityIndicator,
	Image,
	ImageSourcePropType,
	Text,
	View,
} from 'react-native';
import { useQuery } from '@tanstack/react-query';
import { CommonActions } from '@react-navigation/native';

import { SafeScreen } from '@/components/template';
import Logo from '@/assets/Logo.png';

import type { RootScreenProps } from '@/types/navigation';
import { styles } from './styles';

function Startup({ navigation }: RootScreenProps<'Startup'>) {
	const { isSuccess, isFetching, isError } = useQuery({
		queryKey: ['startup'],
		queryFn: () => {
			return Promise.resolve(true);
		},
	});

	useEffect(() => {
		if (isSuccess) {
			navigation.dispatch(
				CommonActions.reset({
					index: 0,
					routes: [{ name: 'Discover' }],
				}),
			);
		}
	}, [isSuccess]);

	return (
		<SafeScreen>
			<View style={styles.container}>
				<View testID="brand-img-wrapper">
					<Image
						testID="brand-img"
						source={Logo as ImageSourcePropType}
						resizeMode="cover"
					/>
				</View>
				{isFetching && (
					<ActivityIndicator size="large" style={styles.marginVertical} />
				)}
				{isError && (
					<Text style={styles.errorTextStyles}>
						Something went wrong, relaunch the app
					</Text>
				)}
			</View>
		</SafeScreen>
	);
}

export default Startup;
