import { StatusBar, View } from 'react-native';
import type { PropsWithChildren } from 'react';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { styles } from './styles';

function SafeScreen({ children }: PropsWithChildren) {
	const insets = useSafeAreaInsets();

	return (
		<View
			style={[
				styles.container,
				{
					// Paddings to handle safe area
					paddingTop: insets.top,
					paddingBottom: insets.bottom,
					paddingLeft: insets.left,
					paddingRight: insets.right,
				},
			]}
		>
			<StatusBar />
			{children}
		</View>
	);
}

export default SafeScreen;
