import React, { Component } from 'react';
import { View, Text, Switch, Button, TouchableOpacity } from 'react-native';
import styles from './style';

class DataUpdate extends Component {
	render() {
		const {onDataUpdate} = this.props;
		return (
			<TouchableOpacity style={{marginRight:3,marginBottom:10,flex:2,borderColor:"gray",borderWidth:2,borderRadius:5,width:200,paddingBottom:7,backgroundColor:"whitesmoke"}} onPress={()=>{onDataUpdate()}}>
				<Text style={[styles.EnterBottomText]}>氣象資料更新</Text>
			</TouchableOpacity>
		);
	}
}

export default DataUpdate;
