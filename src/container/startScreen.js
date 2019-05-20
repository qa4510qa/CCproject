import React, { Component } from 'react';
import { View, Text,  ImageBackground, TextInput, TouchableOpacity} from 'react-native';


class StartScreen extends Component {
	render() {
		const {setServerIP, switchScreen, ip, } = this.props;
		return (
			<View>
				<ImageBackground source={require('../component/images/farm.jpg')} style={{width: '100%', height: '105%'}}>
					<Text style={{fontSize:35,textAlign:"center"}}>{"\n\n\n"}氣候變遷創意競賽</Text>
					<Text style={{fontSize:20,textAlign:"center",paddingLeft:5}}>Please enter your server IP</Text>
					<TextInput
								style={{alignSelf:"center",height:50, width:200, borderColor: 'black', borderWidth: 1, borderRadius: 10, margin:20}}
								onChangeText={(ip) => setServerIP(ip)}
								value={ip}
								fontSize={20}
					/>
					<TouchableOpacity 
					style={{marginLeft:190,borderColor:"black",borderWidth:1,borderRadius:5,width:100}} 
					onPress={() => switchScreen("Main")}>
						<Text style={{fontSize:20,textAlign:"center",fontWeight:"bold",color:"navy",padding:3}}>Enter</Text>
					</TouchableOpacity>	
				</ImageBackground>				
			</View>
		);
	}
}

export default StartScreen;
