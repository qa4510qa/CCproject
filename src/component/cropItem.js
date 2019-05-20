import React, { Component } from 'react';
import { View, Text, Switch, TextInput } from 'react-native';
import styles from './style';
import { materialDense } from 'react-native-typography';

class SetCrop extends Component {
  render() {
    const {item, name, switchCrop, cropIsSelect, climateIsSelect, switchClimate, setPrice, cropPrice} = this.props;
    return (
      <View style={{borderColor:"gray",borderWidth:1,borderRadius:10,margin:2,padding:2}}>
        <View style={{flexDirection:"row"}}>
          <View style={{flex:2, marginLeft:10}}>
            <Switch onValueChange={() => switchCrop(item)} value={cropIsSelect}/>
          </View>
          <Text style={[styles.cropItemTitle]}>{name}</Text>
          <Text style={[styles.cropItemText, materialDense.subheading]}>售價：</Text>
          <View style={{flex:2.5}}>
            <TextInput
              alignSelf={"flex-start"}
              editable={cropIsSelect}
              style={{height:30, width:60, borderColor: 'gray', borderWidth: 1, borderRadius: 10, marginRight:20, paddingLeft:10}}
              onChangeText={(price) => setPrice(item,price)}
              value={cropPrice}
            />
          </View>
          <View style={{flex:4}}>
            <Text style={{textAlign:"left",flex:4,paddingTop:7,marginLeft:5}}>元/平方公尺</Text>
          </View>
        </View>
        <View style={{flexDirection:"row",marginLeft:10,marginTop:10}}>
          <View style={{flex:1}}>
            <Text style={{textAlign:"center",fontSize:18}}>降雨量</Text>
            <Switch style={{alignSelf:"center",marginTop:5}} disabled={!cropIsSelect} onValueChange={() => switchClimate(item,"p")} value={climateIsSelect["p"]}/>
          </View>
          <View style={{flex:1}}>
            <Text style={{textAlign:"center",fontSize:18}}>溫度</Text>
            <Switch style={{alignSelf:"center",marginTop:5}} disabled={!cropIsSelect} onValueChange={() => switchClimate(item,"t")} value={climateIsSelect["t"]}/>
          </View>
          <View style={{flex:1}}>
            <Text style={{textAlign:"center",marginLeft:3,fontSize:18}}>風速</Text>
            <Switch style={{alignSelf:"center",marginTop:5}} disabled={!cropIsSelect} onValueChange={() => switchClimate(item,"w")} value={climateIsSelect["w"]}/>
          </View>
          <View style={{flex:1}}>
            <Text style={{textAlign:"center",fontSize:18}}>日照量</Text>
            <Switch style={{alignSelf:"center",marginTop:5}} disabled={!cropIsSelect} onValueChange={() => switchClimate(item,"s")} value={climateIsSelect["s"]}/>
          </View>
        </View>
      </View>
    );
  }
}

export default SetCrop;