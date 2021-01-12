import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, Button, TextInput, FlatList, View } from 'react-native';

const firstOnPress = () => {
    console.log("test")
};

const firstOnSubmitEditing = () => {
    console.log("test2")
};

const DATA = [
    {
        id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
        title: 'First Item',
    },
    {
        id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
        title: 'Second Item',
    },
    {
        id: '58694a0f-3da1-471f-bd96-145571e29d72',
        title: 'Third Item',
    },
];

const Item = ({ title }) => (
    <View style={styles.item}>
        <Text style={styles.title}>{title}</Text>
    </View>
);

export default class App extends React.Component{
    render(){
        const renderItem = ({ item }) => (
            <Item title={item.title} />
        );
	return(
	    <View style={styles.container}>
		<Text>Open up App.js to start working on your app!</Text>
		<Button title="Press me" onPress={firstOnPress} />
		<TextInput style={{ height: 40, width: 300, borderColor: 'gray', borderWidth: 1 }} onSubmitEditing={firstOnSubmitEditing} />
                <FlatList data={DATA} renderItem={renderItem} />
	    </View>
	);
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: StatusBar.currentHeight || 0,
    },
    item: {
        backgroundColor: '#f9c2ff',
        padding: 20,
        marginVertical: 8,
        marginHorizontal: 16,
    },
    title: {
        fontSize: 32,
    },
    subtitle: {
        fontSize: 16,
    },
});

