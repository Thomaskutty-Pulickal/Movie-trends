import { StyleSheet, TextStyle, ViewStyle } from 'react-native';

interface Styles {
	container: ViewStyle;
	headerContainer: ViewStyle;
	heading: TextStyle;
	subHeading: TextStyle;
	detailRow: ViewStyle;
	detailTexts: TextStyle;
	flexRow: ViewStyle;
	valueText: TextStyle;
	overViewText: TextStyle;
	keyTexts: TextStyle;
	detailContainer: ViewStyle;
	ratingTexts: TextStyle;
}

export const styles = StyleSheet.create<Styles>({
	container: {
		justifyContent: 'center',
		alignItems: 'center',
		rowGap: 20,
		paddingHorizontal: 32,
		paddingTop: 40,
		paddingBottom: 32,
	},
	headerContainer: {
		flexDirection: 'row',
		alignItems: 'flex-end',
	},
	heading: {
		fontSize: 40,
		color: '#303030',
		fontWeight: 'bold',
	},
	subHeading: {
		fontSize: 20,
		color: '#4D4D4D',
		marginLeft: 10,
		marginBottom: 10,
		fontWeight: 'normal',
	},
	detailRow: {
		flexDirection: 'row',
		columnGap: 16,
		justifyContent: 'space-evenly',
	},
	ratingTexts: {
		fontSize: 20,
		color: '#4D4D4D',
	},
	detailTexts: {
		fontSize: 16,
		color: '#4D4D4D',
	},
	flexRow: {
		flexDirection: 'row',
	},
	valueText: {
		fontSize: 20,
		color: '#303030',
		fontWeight: 'bold',
	},
	keyTexts: {
		fontSize: 14,
		fontWeight: 'bold',
		color: '#4D4D4D',
	},
	overViewText: {
		fontSize: 14,
		color: '#4D4D4D',
		fontWeight: 'normal',
	},
	detailContainer: {
		rowGap: 10,
	},
	bigBlue: {
		color: 'blue',
		fontWeight: 'bold',
		fontSize: 30,
	},
	red: {
		color: 'red',
	},
});
