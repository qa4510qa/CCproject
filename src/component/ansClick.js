import React, { Component } from 'react';
import { View, Text, Switch, Button, TouchableOpacity } from 'react-native';
import styles from './style';

class AnsClick extends Component {
	render() {
		const {onAnsClick} = this.props;
		return (
			<TouchableOpacity style={{marginRight:3,marginBottom:10,flex:1,borderColor:"gray",borderWidth:2,borderRadius:5,width:200,paddingBottom:7,backgroundColor:"whitesmoke"}} onPress={()=>{onAnsClick()}}>
				<Text style={[styles.EnterBottomText]}>確定</Text>
			</TouchableOpacity>
		);
	}
}

export default AnsClick;
