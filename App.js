import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, Button, TextInput, FlatList, View } from 'react-native';

const firstOnSubmitEditing = () => {
    console.log("test2")
};

const DATA = [
    {
        id: '1',
        title: 'First Item',
        subtitle: '1st Item',
    },
    {
        id: '2',
        title: 'Second Item',
        subtitle: '2nd Item',
    },
    {
        id: '3',
        title: 'Third Item',
        subtitle: '3rd Item',
    },
    {
        id: '4',
        title: 'Fourth Item',
        subtitle: '4th Item',
    },
    {
        id: '5',
        title: 'Fifth Item',
        subtitle: '5th Item',
    },
    {
        id: '6',
        title: 'Sixth Item',
        subtitle: '6th Item',
    },
    {
        id: '7',
        title: 'Seventh Item',
        subtitle: '7th Item',
    },
    {
        id: '8',
        title: 'Eighth Item',
        subtitle: '8th Item',
    },
    {
        id: '9',
        title: 'Ninth Item',
        subtitle: '9th Item',
    },
    {
        id: '10',
        title: 'Tenth Item',
        subtitle: '10th Item',
    },
];

const Item = ({ title, subtitle }) => (
    <View style={styles.item}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.subtitle}>{subtitle}</Text>
    </View>
);

export default class App extends React.Component{

    constructor(props){
	super(props);
	this.swedishPress = this.swedishPress.bind(this);
	this.japanesePress = this.japanesePress.bind(this);
	this.portuguesePress = this.portuguesePress.bind(this);
	this.chinesePress = this.chinesePress.bind(this);
	this.state = {swedishColor: "red", japaneseColor: "blue", portugueseColor: "blue", chineseColor: "blue"};
    }

    swedishPress(){
	this.setState({swedishColor: "red", japaneseColor: "blue", portugueseColor: "blue", chineseColor: "blue"});
    }
    japanesePress(){
	this.setState({swedishColor: "blue", japaneseColor: "red", portugueseColor: "blue", chineseColor: "blue"});
    }
    portuguesePress(){
	this.setState({swedishColor: "blue", japaneseColor: "blue", portugueseColor: "red", chineseColor: "blue"});
    }
    chinesePress(){
	this.setState({swedishColor: "blue", japaneseColor: "blue", portugueseColor: "blue", chineseColor: "red"});
    }

    render(){
        const renderItem = ({ item }) => (
            <Item title={item.title} subtitle={item.subtitle} />
        );
	return(
	    <View style={styles.container}>
		<Text>Open up App.js to start working on your app!</Text>
		<View style={{ flexDirection: "row" }}>
		    <Button title="Swedish" color={this.state.swedishColor} onPress={this.swedishPress} />
		    <Button title="Japanese" color={this.state.japaneseColor} onPress={this.japanesePress} />
		    <Button title="Portuguese" color={this.state.portugueseColor} onPress={this.portuguesePress} />
		    <Button title="Chinese" color={this.state.chineseColor} onPress={this.chinesePress} />
		</View>
		<TextInput style={{ height: 40, width: 300, borderColor: 'gray', borderWidth: 1 }} onSubmitEditing={firstOnSubmitEditing} />
                <FlatList data={DATA} renderItem={renderItem} numColumns="3" />
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
	height: 70,
	width: 140,
    },
    title: {
        fontSize: 16,
    },
    subtitle: {
        fontSize: 12,
    },
});

