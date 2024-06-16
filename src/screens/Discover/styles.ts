import { StyleSheet, TextStyle, ViewStyle } from 'react-native';

interface Styles {
	container: ViewStyle;
	heading: TextStyle;
	flatListStyles: ViewStyle;
	listColumnStyles: ViewStyle;
	listRowStyles: ViewStyle;
	movieTitleStyles: TextStyle;
}

export const styles = StyleSheet.create<Styles>({
	container: {
		justifyContent: 'center',
		alignItems: 'center',
		padding: 30,
		columnGap: 30,
	},
	heading: {
		fontSize: 40,
		color: '#303030',
		fontWeight: 'bold',
	},
	flatListStyles: {
		paddingTop: 30,
		paddingBottom: 80,
		width: '100%',
		columnGap: 10,
	},
	listColumnStyles: {
		width: '45%',
		marginBottom: 10,
	},
	listRowStyles: {
		width: '100%',
		justifyContent: 'space-between',
	},
	movieTitleStyles: {
		fontSize: 16,
		color: '#303030',
	},
});
