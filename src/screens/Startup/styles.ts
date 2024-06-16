import { StyleSheet, TextStyle, ViewStyle } from 'react-native';

interface Styles {
	container: ViewStyle;
	errorTextStyles: TextStyle;
	marginVertical: ViewStyle;
}

export const styles = StyleSheet.create<Styles>({
	container: {
		flex: 1,
		flexDirection: 'column',
		justifyContent: 'center',
		alignItems: 'center',
	},
	marginVertical: {
		marginVertical: 24,
	},
	errorTextStyles: {
		fontSize: 16,
		color: '#C13333',
	},
});
