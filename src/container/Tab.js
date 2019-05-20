import React, { Component } from 'react';
import { View, Text, TouchableOpacity, Image} from 'react-native';
import styles from '../component/style';
const TabIMGS = {
	Info: require('../component/images/Info.png'),
	Main: require('../component/images/Main.png'),
	Climate: require('../component/images/Climate.png'),
	CropData: require('../component/images/CropData.png')
}

class Tab extends Component {
	render() {
		const {switchScreen,  activeScreen} = this.props;
		return (
			<View style={{flex:1, flexDirection:"row",borderColor:"gray",borderWidth:2, borderRadius:10}}>
				
				<TouchableOpacity style={{flex:1}} onPress={()=>{switchScreen("Info")}}>
					<Image style={[activeScreen==="Info"?styles.TabImgClicked:styles.TabImgUnclicked]} source={TabIMGS.Info}/>
					<Text style={[activeScreen==="Info"?styles.tabTextClicked:styles.tabTextUnclicked]}>關於我們</Text>
				</TouchableOpacity>
				<TouchableOpacity style={{flex:1}} onPress={()=>{switchScreen("Main")}}>
					<Image style={[activeScreen==="Main"?styles.TabImgClicked:styles.TabImgUnclicked]} source={TabIMGS.Main}/>
					<Text style={[activeScreen==="Main"?styles.tabTextClicked:styles.tabTextUnclicked]}>試算</Text>
				</TouchableOpacity>
				<TouchableOpacity style={{flex:1}} onPress={()=>{switchScreen("FutureClimate")}}>
					<Image style={[activeScreen==="FutureClimate"?styles.TabImgClicked:styles.TabImgUnclicked]} source={TabIMGS.Climate}/>
					<Text style={[activeScreen==="FutureClimate"?styles.tabTextClicked:styles.tabTextUnclicked]}>未來氣候</Text>
				</TouchableOpacity>
				<TouchableOpacity style={{flex:1}} onPress={()=>{switchScreen("CropData")}}>
					<Image style={[activeScreen==="CropData"?styles.TabImgClicked:styles.TabImgUnclicked]} source={TabIMGS.CropData}/>
					<Text style={[activeScreen==="CropData"?styles.tabTextClicked:styles.tabTextUnclicked]}>作物資料</Text>
				</TouchableOpacity>
			</View>
		);
	}
}

export default Tab;
