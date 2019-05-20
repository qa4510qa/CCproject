import React, { Component } from 'react';
import { View, Text} from 'react-native';
import styles from './style';
import { materialDense } from 'react-native-typography';
import ModalSelector from 'react-native-modal-selector';

class SetLocation extends Component {
  render() {
    const data = [
      { key: 0, section: true, label: 'Locations' },
      { key: 1, label: 'Taipei_NTU' },
     ];

    return (
      <View style={{marginTop:10, height:50, backgroundColor:'white',flexDirection:"row",borderBottomColor:'gray',borderBottomWidth:0}}>
        <Text style={[styles.PickerTitle, materialDense.title]}>{this.props.innertext}</Text>
        <ModalSelector style={{flex:7, marginRight:10,marginBottom:0}}
          data={data}
          initValue="請選擇耕作地點"
          onChange={(option)=>{ 
            alert(`You have choose ${option.label} to crop.`);
            this.props.setlocation(option.label);}
          } 
          />
      </View>
    );
  }
}

export default SetLocation;
