import React, { Component } from 'react';
import { View, Text} from 'react-native';
import styles from './style';

class ClimateDisplay extends Component {
	
	render() {
		const {future_weather} = this.props;
		console.log(future_weather);
		return (
			<View>
				<View style={{flexDirection:"row",margin:2}}>
					<Text style={[styles.climateDisplayTitle]}>日期</Text>
					<Text style={[styles.climateDisplayTitle]}>溫度</Text>
					<Text style={[styles.climateDisplayTitle]}>降雨</Text>
					<Text style={[styles.climateDisplayTitle]}>日照</Text>
					<Text style={[styles.climateDisplayTitle]}>風速</Text>
				</View>
				<View style={{flexDirection:"row",padding:2,borderBottomColor:"gray",borderBottomWidth:1,borderRadius:1}}>
					<Text style={{flex:1,fontSize:18,textAlign:"center"}}></Text>
					<Text style={{flex:1,fontSize:18,textAlign:"center"}}>(°Ｃ)</Text>
					<Text style={{flex:1,fontSize:18,textAlign:"center"}}>(mm)</Text>
					<Text style={{flex:1,fontSize:18,textAlign:"center"}}>(hr)</Text>
					<Text style={{flex:1,fontSize:18,textAlign:"center"}}>(m/s)</Text>
				</View>
				{future_weather
				.filter(i => future_weather.indexOf(i)!==0)
				.map((item,idx) => (
					<View key={item+idx} style={{flexDirection:"row",borderColor:"gray",borderWidth:1,borderRadius:1,paddingLeft:8,paddingRight:5}}>
						{item.map((element) => (
							<Text key={item+element} style={{flex:1,fontSize:15,textAlign:"center"}}>{element}</Text>
						))}
					</View>
				))}
			</View>
		);
	}
}

export default ClimateDisplay;
