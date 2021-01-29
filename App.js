import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, FlatList, View, Text } from 'react-native';
import mockData from './MOCK_DATA.json';

export default function App() {
	const [users] = useState(mockData);
	return (
		<View style={styles.container}>
			<Text>Hi</Text>
			<FlatList
				data={users}
				keyExtractor={(item) => `${item.id}`}
				renderItem={({ item }) => (
					<View style={styles.item}>
						<Text>{`${item.firstName} ${item.lastName} - ${item.email}`}</Text>
					</View>
				)}
				style={styles.list}
			/>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: 'white',
	},
	list: {
		flex: 1,
	},
	item: {
		padding: 4,
		marginBottom: 4,
	},
});
