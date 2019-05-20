import React, { Component } from 'react';
import { View, Text,} from 'react-native';
import styles from './style';

class AnsCropItem extends Component {
	render() {
		const {idx,date,crop,cropData} = this.props;
		console.log(idx,date,crop);
		return (
			<View>
				<Text style={{fontSize:18,color:"dimgray",marginLeft:20,padding:2,fontWeight:"bold"}}>第{idx+1}次耕種</Text>
				<Text style={[styles.ansContent]}>開始時間：{date}</Text>
				<Text style={[styles.ansContent]}>項目：{cropData[crop]}</Text>
			</View>
		);
	}
}

export default AnsCropItem;
