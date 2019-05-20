import React, { Component } from 'react';
import { View, Text, Switch } from 'react-native';
import styles from './style';
import { materialDense } from 'react-native-typography';
import CropItem from './cropItem';

class SetCrop extends Component {

  render() {
    const {cropData, switchCrop, cropIsSelect, switchClimate, climateIsSelect, setPrice, cropPrice, cropDataChinese, id_Crop, p, t, w, s } = this.props;
    return (
      <View style={{height:"auto"}}>
        <Text style={[styles.PickerTitle, materialDense.title]}>作物與氣候因子設定</Text>
        {cropData.map((item,idx) => (
          <CropItem 
          key={item} 
          item={item} 
          name={cropDataChinese[idx]}
          switchCrop={switchCrop} 
          cropIsSelect={cropIsSelect[item]} 
          climateIsSelect={{"p":climateIsSelect["p"][item],"t":climateIsSelect["t"][item],"w":climateIsSelect["w"][item],"s":climateIsSelect["s"][item]}}
          switchClimate={switchClimate}
          setPrice={setPrice}
          cropPrice={cropPrice[item]}
        /> 
        )
          
        )}
      </View>
    );
  }
}

export default SetCrop;