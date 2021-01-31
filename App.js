import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, Button, TextInput, SectionList, TouchableHighlight, View, ScrollView } from 'react-native';
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

    constructor(props){
	super(props);
	this.addData = this.addData.bind(this);
	this.swedishPress = this.swedishPress.bind(this);
	this.japanesePress = this.japanesePress.bind(this);
	this.portuguesePress = this.portuguesePress.bind(this);
	this.chinesePress = this.chinesePress.bind(this);
	this.firstOnSubmitEditing = this.firstOnSubmitEditing.bind(this);
	this.convertName = this.convertName.bind(this);
	this.pronunciationPress = this.pronunciationPress.bind(this);
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
        var data = []

	if(lang === "sv"){    
            data = [
                ["adjektiv\nadjective","advokat\nlawyer","ansikte\nface","april\napril","armén\narmy"],["arton\neighteen","augusti\naugust","axel\nshoulder","badrum\nbathroom","banan\nbanana"],["bank\nbank","barn\nchild","bebis\nbaby","ben\nbone","bensin\ngasoline"],["bibliotek\nlibrary","bil\nbill","bild\nimage","billig\ncheap","bit\npiece"],["blad\nleaf","blod\nblood","blomma\nflower","blå\nblue","bok\nbook"],["boll\nball","botten\nbottom","bra\ngood","bred\nwide","brev\nletter"],["bror\nbrother","brun\nbrown","bränn\nburn","bröd\nbread","bröllop\nwedding"],["buss\nbus","byggnad\nbuilding","byxor\npants","båt\nboat","böj\nbend"],["böjd\ncurved","centimeter\ncentimeter","chef\nmanager","cykel\nbicycle","dag\nday"],["dal\nvalley","dans\ndance","dator\ncomputer","december\ndecember","det\nit"],["djup\ndeep","dollar\ndollar","domstol\ncourt","dotter\ndaughter","drottning\nqueen"],["dryck\nbeverage","dyr\nexpensive","dålig\nbad","död\ndead","dörr\ndoor"],["döv\ndeaf","eftermiddag\nafternoon","elektronik\nelectronics","elva\neleven","energi\nenergy"],["ett\none","familj\nfamily","far\nfather","farfar\ngrandfather","fartyg\nship"],["fattig\npoor","februari\nfebruary","fem\nfive","femtio\nfifty","femton\nfifteen"],["ficka\npocket","film\nmovie","finger\nfinger","fjorton\nfourteen","flaska\nbottle"],["flicka\ngirl","flod\nriver","flygplats\nairport","fläsk\npork","fotografera\nphotograph"],["fred\npeace","fredag\nfriday","fru\nwife","frukost\nbreakfast","främre\nfront"],["ful\nugly","fyra\nfour","fyrkant\nsquare","fyrtio\nforty","fängelse\nprison"],["fågel\nbird","fönster\nwindow","förälder\nparent","gaffel\nfork","gift\nmarry"],["glas\nglass","golv\nfloor","granne\nneighbor","gris\npig","grund\nshallow"],["gräs\ngrass","grå\ngray","grön\ngreen","gud\ngod","gul\ngold"],["gård\nfarm","gåva\ngift","halv\nhalf","han\nhe","hand\nhand"],["hatt\nhat","hav\nocean","helvete\nhell","himmel\nheaven","hjärna\nbrain"],["hjärta\nheart","hon\nshe","hotell\nhotel","hud\nskin","hund\ndog"],["hundra\nhundred","hus\nhouse","huvud\nhead","hälsosam\nhealthy","häst\nhorse"],["hål\nhole","hår\nhair","hård\nhard","hög\nhigh","högt\nloud"],["hör\ncorner","inuti\ninside","ja\nyes","jag\ni","januari\njanuary"],["jobb\njob","jord\nground","juice\njuice","juli\njuly","juni\njune"],["kaffe\ncoffee","kaka\ncake","kall\ncold","kamera\ncamera","kant\nedge"],["karta\nmap","katt\ncat","kilogram\nkilogram","kjol\nskirt","klocka\nclock"],["kläder\nclothing","kniv\nknife","knä\nknee","ko\ncow","konsonant\nconsonant"],["konst\nart","konstnär\nartist","kontor\noffice","kopp\ncup","koppar\ncopper"],["kort\ncard","krig\nwar","kropp\nbody","kulle\nhill","kung\nking"],["kvinna\nfemale","kväll\nevening","kyckling\nchicken","kyrka\nchurch","kyss\nkiss"],["känd\nfamous","kärn\nnuclear","kök\nkitchen","lampa\nlamp","lastbil\ntruck"],["ledsen\nsad","lera\nclay","ljud\nsound","luft\nair","lukt\nsmell"],["lunch\nlunch","lycklig\nhappy","lägenhet\napartment","läkare\ndoctor","läpp\nlip"],["lärare\nteacher","låg\nlow","lång\nlong","långsam\nslow","låt\nsong"],["lördag\nsaturday","lösa\nloose","maj\nmay","majs\ncorn","make\nhusband"],["man\nman","manlig\nmale","marknadsföra\nmarket","mars\nmarch","mat\nfeed"],["material\nmaterial","medicin\nmedicine","metall\nmetal","meter\nmeter","middag\ndinner"],["miljard\nbillion","miljon\nmillion","minut\nminute","mjuk\nsoft","mjölk\nmilk"],["mor\nmother","mormor\ngrandmother","motor\nengine","mun\nmouth","mus\nmouse"],["musik\nmusic","mänsklig\nhuman","måla\npaint","månad\nmonth","måndag\nmonday"],["måne\nmoon","mönster\npattern","mörk\ndark","nacke\nneck","natt\nnight"],["natur\nnature","nej\nno","ner\ndown","nio\nnine","nittio\nninety"],["nitton\nnineteen","norr\nnorth","november\nnovember","näsa\nnose","nätverk\nnetwork"],["nål\nneedle","nötkött\nbeef","offer\nvictim","oktober\noctober","olja\noil"],["onsdag\nwednesday","ost\ncheese","papper\npaper","pengar\nmoney","penna\npen"],["person\nperson","pistol\ngun","plan\nplane","plast\nplastic","plats\nlocation"],["pojke\nboy","polis\npolice","president\npresident","pris\nprice","präst\npriest"],["punkt\ndot","radio\nradio","religion\nreligion","ren\nclean","reporter\nreporter"],["restaurang\nrestaurant","rik\nrich","riktning\ndirection","ringa\nring","ris\nrice"],["rosa\npink","rot\nroot","röd\nred","sand\nsand","se\nsex"],["sekreterare\nsecretary","september\nseptember","servitör\nwaiter","sex\nsix","sextio\nsixty"],["sexton\nsixteen","sida\npage","siffra\nnumber","sju\nseven","sjuk\nsick"],["sjukdom\ndisease","sjuttio\nseventy","sjutton\nseventeen","sjö\nlake","skada\ninjury"],["sked\nspoon","skjorta\nshirt","skog\nforest","skola\nschool","skor\nshoes"],["skägg\nbeard","skärm\nscreen","skådespelare\nactor","skön\nbeautiful","smal\nnarrow"],["smutsig\ndirty","smärta\npain","snabb\nfast","socker\nsugar","sol\nsun"],["soldat\nsoldier","sommar\nsummer","son\nson","soppa\nsoup","sovrum\nbedroom"],["spel\ngame","spelare\nplayer","sport\nsport","stad\ncity","stark\nstrong"],["sten\nstone","stjärna\nstar","strand\nbeach","studerande\nstudent","svag\nweak"],["svart\nblack","syster\nsister","säng\nbed","säsong\nseason","söder\nsouth"],["söndag\nsunday","tabell\ntable","tak\nceiling","tallrik\nplate","tand\ntooth"],["te\ntea","team\nteam","teater\ntheater","teknologi\ntechnology","telefon\nphone"],["temperatur\ntemperature","tidning\nnewspaper","tidskrift\nmagazine","timme\nhour","tio\nten"],["tisdag\ntuesday","tjock\nthick","tjugo\ntwenty","tolv\ntwelve","topp\ntop"],["torr\ndry","torsdag\nthursday","transport\ntransportation","tre\nthree","trettio\nthirty"],["tretton\nthirteen","trevlig\nnice","trä\nwood","träd\ntree","trädgård\ngarden"],["tum\ninch","tung\nheavy","tunga\ntongue","tunn\nthin","tusen\nthousand"],["tv\ntelevision","två\ntwo","tvål\nsoap","tyst\nquiet","tå\ntoe"],["tåg\ntrain","ung\nyoung","universitet\nuniversity","upp\nup","utanför\noutside"],["utsäde\nseed","vakna\nwake","val\nelection","varm\nhot","varuhus\nstore/shop"],["vecka\nweek","verb\nverb","verktyg\ntool","vetenskap\nscience","vi\nalive"],["vikt\nweight","vin\nwind","vinge\nwing","vit\nwhite","vokal\nvowel"],["vuxen\nadult","vägg\nwall","vän\nfriend","värld\nworld","ägg\negg"],["äktenskap\nmarriage","äpple\napple","ärm\narm","år\nyear","åtta\neight"],["åttio\neighty","ö\nisland","öl\nbeer","öra\near","öster\neast"]
            ]
	    for(var i = 0; i < data.length; i++){
                DATA.push({title: (i+1)+".", data: data[i]})
	    }
        }
	else if(lang === "ja"){
	    DATA.push({title: "1.", data: ["dd"]})
        }
	else if(lang === "pt"){
	    DATA.push({title: "1.", data: ["dd"]})
        }
	else if(lang === "ch"){
	    DATA.push({title: "1.", data: ["dd"]})
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
    convertName(name){
	for(var i = 0; i < name.length; i++){
            if(name[i] === 'å' || name[i] === 'ä'){
	        name[i] = 'a'
	    }
	    else if(name[i] === 'ö'){
                name[i] = 'o'
	    }
	    else if(name[i] === 'é'){
                name[i] = 'e'
	    }
	}
        return name
    }
    pronunciationPress(item){
	var source = ''
	if(this.state.swedishColor === 'red'){
            source += 'pronunciation_sv_'
	}
	else if(this.state.japaneseColor === 'red'){
            source += 'pronunciation_ja_'
	}
	else if(this.state.portugueseColor === 'red'){
            source += 'pronunciation_pt_'
	}
	else if(this.state.chineseColor === 'red'){
            source += 'pronunciation_zh_'
	}
	var new_name = this.convertName(item.split('\n')[0])
	source += new_name + '.mp3'
        var pronunciation = new Sound(source, null, (error) => {
	    if(error){
	    }
	    pronunciation.play();
	})
    }

    render(){
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
		<ScrollView>
		<SectionList sections={this.state.DATA} keyExtractor={(item, index) => item + index} renderItem={({ item, index }) => <Item title={item} onPress={() => this.pronunciationPress(item)} />} renderSectionHeader={({ section: { title } }) => ( <Text style={styles.header}>{title}</Text> )} />
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
