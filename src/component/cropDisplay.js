import React, { Component } from 'react';
import { View, Text, Switch, Button, TouchableOpacity, Image } from 'react-native';
import styles from './style';

const CROP_IMGS = {
	spinach: require('./images/spinach.jpg'),
	tong_hao: require('./images/tonghao.jpg'),
	jye_lan: require('./images/jyelan.jpg'),
	bak_choy: require('./images/bakchoy.jpg'),
	huan_gong: require('./images/huangong.jpg'),
	shian_tsai:require('./images/amaranth.jpg'),
	leaves_lettuce:require('./images/lettuce.jpg'),
	lettuce:require('./images/headlettuce.jpg')
};

class CropDisplay extends Component {
	render() {
		const {crop_data} = this.props;
		const cropDataList = Object.entries(crop_data).map(([engName, item]) => ({...item, engName, imgSrc: CROP_IMGS[engName]}))
		
		return (
			<View>
				{cropDataList.map((item,idx) => (
					<View key={item+idx} style={{borderBottomColor:"green",borderBottomWidth:1,padding:5}}>
						<View style={{flexDirection:"row",margin:2}}>
							<Text style={[styles.cropDisplayTitle]}>{item.name}</Text>
							<Image resizeMode={"cover"} style={{flex:6}} source={item.imgSrc}/>
						</View>
						{item.illustration.map((element) => (
							<View key={element} style={{flexDirection:"row",margin:2}}>
								<Text style={{flex:2,fontSize:20,fontWeight:"bold",textAlign:"center"}}>{element.substring(0,2)}</Text>
								<Text style={{flex:8,fontSize:18,paddingRight:10}}>{element.substring(3,element.length)}</Text>
							</View>
						))}
					</View>
				))}
			</View>
		);
	}
}

export default CropDisplay;
