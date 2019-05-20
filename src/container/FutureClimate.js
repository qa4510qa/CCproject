import React, { Component } from 'react';
import { View, Text, ScrollView} from 'react-native';
import styles from '../component/style';
import Tab from './Tab';
import ClimateDisplay from '../component/climateDisplay';

class FutureClimate extends Component {
	constructor() {
    super();
    this.state = {
      future_weather:[]
    };
	}
	
	LoadData = () => {
		fetch(`http://${this.props.ip}:8001/FutureClimate`, {
      method: 'POST',
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(),
    })
    .then(response => response.json())
    .then((responseJson) => {
			this.setState((prevState) => ({
        ...prevState,
        future_weather:responseJson.future_weather,
			}));
		})
    .catch((error) =>{
      console.error(error);
		});
	}

  componentDidMount() {
    this.LoadData();
  }

	render() {
		const {switchScreen,start_year,start_month,start_day,end_year,end_month,end_day} = this.props;
		return (
			<View style={{flex:1, flexDirection:'column'}}>
        <View style={{flex:1, backgroundColor:'white'}}></View>
        <View style={{flex:1, backgroundColor:'white',borderBottomColor:'gray',borderBottomWidth:2}}>  
          <Text style={[styles.mainHeadline]}>農纖合度--最佳化農作小幫手</Text> 
        </View>
        <View style={{flex:12}}>
          <ScrollView>
						<ClimateDisplay future_weather={this.state.future_weather}/>
						<View style={{backgroundColor:"gray",marginTop:10,padding:5}}>
              <Text style={[styles.remarkWords]}>氣候變遷創意實作競賽</Text>
              <Text style={[styles.remarkWords]}>隊伍名稱：進擊的農夫</Text>
              <Text style={[styles.remarkWords]}>--程式開發中--</Text>
            </View>
          </ScrollView>
      	</View>
				<Tab activeScreen={this.props.activeScreen} switchScreen={switchScreen}/>
    	</View>
		);
	}
}

export default FutureClimate;
