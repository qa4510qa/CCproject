import React, { Component } from 'react';
import { View, Text, ScrollView} from 'react-native';
import styles from '../component/style';
import Tab from './Tab';
import InfoDisplay from '../component/infoDisplay';

class Info extends Component {
	render() {
		const {switchScreen} =this.props;
		return (
			<View style={{flex:1, flexDirection:'column'}}>
        <View style={{flex:1, backgroundColor:'white'}}></View>
        <View style={{flex:1, backgroundColor:'white',borderBottomColor:'gray',borderBottomWidth:2}}>  
          <Text style={[styles.mainHeadline]}>農纖合度--最佳化農作小幫手</Text> 
        </View>
        <View style={{flex:12}}>
          <ScrollView>
            <InfoDisplay switchScreen={switchScreen}/>
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

export default Info;
