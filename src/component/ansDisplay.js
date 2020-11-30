import React, { Component } from 'react';
import { View, Text} from 'react-native';
import styles from './style';
import AnsCropItem from './ansCropItem';
import AnsSenItem from './ansSenItem';
import { materialDense } from 'react-native-typography';


class AnsDisplay extends Component {
	render() {
		const {cropData, max_score, max_sequence, new_maxscore, idCrop} = this.props;
		// console.log(new_maxscore);
		// console.log(max_sequence);

		return (
			<View style={{paddingLeft:5,paddingRight:5,backgroundColor:"#afeeee",paddingBottom:10,borderRadius:5}}>
			  <Text style={[styles.PickerTitle, materialDense.title]}>試算結果</Text>
				<View style={{flexDirection:"row"}}>
					<Text style={{fontSize:18,color:"red",paddingLeft:10}}>最高總分:{Math.round(max_score,-2)}</Text>
				</View>
				<View style={{borderColor:"gray",borderWidth:1,borderRadius:5,padding:2,marginTop:2}}>
					<Text style={[styles.ansTitle]}>最佳耕作時間:</Text>
					{max_sequence.map((item) => {
						return (
							<AnsCropItem key={"AnsCropItem_"+item} cropData={cropData} idx={item[0]} date={item[1]} crop={item[2]}/>
						);
					})}
				</View>
				<View style={{borderColor:"gray",borderWidth:1,borderRadius:5,padding:2,marginTop:2}}>
					<Text style={[styles.ansTitle]}>替換價格:</Text>
					<Text style={{fontSize:18,color:"dimgray",marginLeft:15,padding:2}}>（各作物成為最適種植作物所需之售價）</Text>
					{new_maxscore.map((item,idx) => (
						<AnsSenItem key={"AnsSenItem"+idx} cropData={cropData} idx={idx} item={item} idCrop={idCrop}/>
					))}
				</View>
			</View>
		);
	}
}

export default AnsDisplay;
