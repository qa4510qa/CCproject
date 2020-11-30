import React, { Component } from 'react';
import { View, Text } from 'react-native';
import DatePicker from 'react-native-datepicker';
import styles from './style';
import { materialDense } from 'react-native-typography';

class TimePicker extends Component {
  render() {
    return (
      <View style={{marginTop:10, height:50, backgroundColor:'white',flexDirection:"row"}}>
        <Text style={[styles.PickerTitle, materialDense.title]}>{this.props.innertext}</Text>
        <DatePicker
          style={{flex:7,marginRight:10,marginBottom:0}}
          date={this.props.date}
          mode="date"
          placeholder="請選擇日期"
          format="YYYY-MM-DD"
          minDate="2020-07-01"
          maxDate="2020-09-30"
          confirmBtnText="Confirm"
          cancelBtnText="Cancel"
          customStyles={{
            dateIcon: {
              position: 'absolute',
              left: 0,
              top: 4,
              marginLeft: 0
            },
            dateInput: {
              marginLeft: 36
            }
          }}
          onDateChange={(date) => {
            this.props.setDate(date);
          }}
        />
      </View>
    );
  }
}

export default TimePicker;
