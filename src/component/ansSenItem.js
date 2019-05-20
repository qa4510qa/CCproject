import React, { Component } from 'react';
import { View, Text} from 'react-native';
import styles from './style';

class AnsSenItem extends Component {
	render() {
		const {idx,item,cropData,idCrop} = this.props;
		console.log(idCrop);
		if(item === "不建議種植" || item === "目前選定種植作物"){
			return(
				<View style={{flexDirection:"row"}}>
					<Text style={[styles.ansContent]}>{cropData[idCrop[idx]]} :</Text>
					<Text style={[styles.ansContent,{flex:6,textAlign:"left"}]}> {item} </Text>
				</View>
			);
		}else{
			return (
				<View style={{flexDirection:"row"}}>
					<Text style={[styles.ansContent]}>{cropData[idCrop[idx]]} : </Text>
					<Text style={[styles.ansContent,{flex:6,textAlign:"left"}]}>{item} 元/平方公尺</Text>
				</View>
			);
		}
	}
}

export default AnsSenItem;
