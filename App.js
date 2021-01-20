import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, Button, TextInput, SectionList, TouchableHighlight, View, ScrollView } from 'react-native';
import Video from 'react-native-video';
import VideoPlayer from 'react-native-video-controls';
import SoundPlayer from 'react-native-sound-player';
var Sound = require('react-native-sound');

class Exam extends React.Component{
    render(){
	return(
	    <View style={styles.container}>
	        <Text>Foreign</Text>
		<TextInput style={styles.examTextInput} onSubmitEditing={this.props.examSubmit} />
	        <Button title="End" onPress={this.props.onPress} />
	    </View>
	);
    }
}

class Item extends React.Component{
    render(){
        return(
            <TouchableHighlight onPress={this.props.onPress}>
                <View style={styles.item}>
                    <Text style={styles.title}>{this.props.title}</Text>
                    <Text style={styles.subtitle}>{this.props.subtitle}</Text>
                </View>
            </TouchableHighlight>
	);
    }
}

class Home extends React.Component{

    _video;

    constructor(props){
	super(props);
	this.addData = this.addData.bind(this);
	this.swedishPress = this.swedishPress.bind(this);
	this.japanesePress = this.japanesePress.bind(this);
	this.portuguesePress = this.portuguesePress.bind(this);
	this.chinesePress = this.chinesePress.bind(this);
	this.firstOnSubmitEditing = this.firstOnSubmitEditing.bind(this);
	this.testPress = this.testPress.bind(this);
	this.state = {
	    examColor: "blue",
	    swedishColor: "blue", 
	    japaneseColor: "blue", 
	    portugueseColor: "blue", 
	    chineseColor: "blue",
	
	    DATA: [],

	    audioSource: require("./Swedish/pronunciation_sv_advokat.mp3"),
	    source: '',
	    videoPaused: true,
	    videoRepeat: true,
	};
    }

    addData(lang){
        var DATA = []
	if(lang === "sv"){
	    DATA.push({title: "5.", data: ["dd"]})
        }
	else if(lang === "ja"){
	    DATA.push({title: "6.", data: ["dd"]})
        }
	else if(lang === "pt"){
	    DATA.push({title: "7.", data: ["dd"]})
        }
	else if(lang === "ch"){
	    DATA.push({title: "8.", data: ["dd"]})
        }
	return DATA
    }

    swedishPress(){
	var DATA = this.addData("sv")
	this.setState({swedishColor: "red", japaneseColor: "blue", portugueseColor: "blue", chineseColor: "blue", DATA: DATA});
    }
    japanesePress(){
	var DATA = this.addData("ja")
	this.setState({swedishColor: "blue", japaneseColor: "red", portugueseColor: "blue", chineseColor: "blue", DATA: DATA});
    }
    portuguesePress(){
	var DATA = this.addData("pt")
	this.setState({swedishColor: "blue", japaneseColor: "blue", portugueseColor: "red", chineseColor: "blue", DATA: DATA});
    }
    chinesePress(){
	var DATA = this.addData("ch")
	this.setState({swedishColor: "blue", japaneseColor: "blue", portugueseColor: "blue", chineseColor: "red", DATA: DATA});
    }
    firstOnSubmitEditing(){
        console.log("test2")
    }
    testPress(){
        var whoosh = new Sound('pronunciation_sv_advokat.mp3', null, (error) => {
	    if(error){
	    }

	    whoosh.play();
	})
	//this._video && this._video.seek(0);
        this.setState({swedishColor: "blue", japaneseColor: "red", portugueseColor: "blue", chineseColor: "blue", audioSource: require("./Swedish/pronunciation_sv_advokat.mp3")});
    }

    render(){
        /*const renderItem = ({ item }) => (
            <Item title={item.title} subtitle={item.subtitle} onPress={this.testPress} />
        );*/
	return(
	    <View style={styles.container}>
		<Text>{this.state.videoPaused}</Text>
	        <View style={ styles.row }>
	            <TextInput style={styles.firstRowTextInput} />
	            <Text>  -  </Text>
	            <TextInput style={styles.firstRowTextInput} />
	            <Button title="Mock Exam" onPress={this.props.onPress} />
	        </View>
		<View style={ styles.row }>
		    <Button title="Swedish" color={this.state.swedishColor} onPress={this.swedishPress} />
		    <Button title="Japanese" color={this.state.japaneseColor} onPress={this.japanesePress} />
		    <Button title="Portuguese" color={this.state.portugueseColor} onPress={this.portuguesePress} />
		    <Button title="Chinese" color={this.state.chineseColor} onPress={this.chinesePress} />
		</View>
		<TextInput style={{ height: 40, width: 300, borderColor: 'gray', borderWidth: 1 }} onSubmitEditing={this.firstOnSubmitEditing} />
		<View>
		<Video source={this.state.audioSource} ref={component => (this._video = component)} paused={this.state.videoPaused} repeat={this.state.videoRepeat} onEnd={() => this.setState({})} />
		</View>
		<ScrollView>
		<SectionList sections={this.state.DATA} keyExtractor={(item, index) => item + index} renderItem={({ item }) => <Item title={item} onPress={this.testPress} />} renderSectionHeader={({ section: { title } }) => ( <Text style={styles.header}>{title}</Text> )} />
		</ScrollView>
	    </View>
	);
    }
}

class App extends React.Component{

    constructor(props){
	super(props);
	this.beginExamPress = this.beginExamPress.bind(this);
	this.endExamPress = this.endExamPress.bind(this);
	this.examSubmit = this.examSubmit.bind(this);
	this.state = {
	    isHome: true,
	    isExam: false,
	}
    }

    beginExamPress(){
        this.setState({isHome: false, isExam: true});
    }
    endExamPress(){
        this.setState({isHome: true, isExam: false});
    }
    examSubmit(){
        console.log("exam submitted")
    }

    render(){
	return(
	    <View style={styles.container}>
		{this.state.isHome && <Home onPress={this.beginExamPress} />}
		{this.state.isExam && <Exam onPress={this.endExamPress} examSubmit={this.examSubmit} />}
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
    row: {
	flexDirection: "row",
    },
    firstRowText: {
	height: 40,
    },
    firstRowTextInput: {
	height: 35,
	width: 40,
	borderWidth: 1,
    },
    item: {
        backgroundColor: '#61dafb',
	borderColor: '#20232a',
	borderWidth: 4,
	height: 70,
	width: 300,
	padding: 10,
    },
    title: {
        fontSize: 16,
    },
    subtitle: {
        fontSize: 12,
    },
    examTextInput: {
	height: 35,
	width: 200,
	borderWidth: 1,
    },
});

export default App;
