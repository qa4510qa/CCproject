/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import { View, Text, ScrollView, ImageBackground} from 'react-native';
import TimePicker from '../component/timePicker';
import styles from '../component/style';
import SetLocation from '../component/setLocation';
import SetCrop from '../component/setCrop';
import Tab from './Tab';
import AnsClick from '../component/ansClick';
import AnsDisplay from '../component/ansDisplay';
import DataUpdate from '../component/dataUpdate';

let list2 = [];

export default class Main extends Component {
  constructor() {
    super();
    this.state = {
      cropData:["spinach","tonghao","jyelan","bakchoy(sum)","bakchoy(win)","huangong","amaranth","lettuce","headlettuce"],
      cropDataChinese:["菠菜","茼蒿","芥蘭","小白菜(夏天)","小白菜(冬天)","皇宮菜","莧菜","葉萵苣","結球萵苣"],
      cropIsSelect:{"spinach":false,"tonghao":false,"jyelan":false,"bakchoy(sum)":false,"bakchoy(win)":false,"huangong":false,"amaranth":false,"lettuce":false,"headlettuce":false},
      climateIsSelect:{
        "p":{"spinach":false,"tonghao":false,"jyelan":false,"bakchoy(sum)":false,"bakchoy(win)":false,"huangong":false,"amaranth":false,"lettuce":false,"headlettuce":false},
        "t":{"spinach":false,"tonghao":false,"jyelan":false,"bakchoy(sum)":false,"bakchoy(win)":false,"huangong":false,"amaranth":false,"lettuce":false,"headlettuce":false},
        "w":{"spinach":false,"tonghao":false,"jyelan":false,"bakchoy(sum)":false,"bakchoy(win)":false,"huangong":false,"amaranth":false,"lettuce":false,"headlettuce":false},
        "s":{"spinach":false,"tonghao":false,"jyelan":false,"bakchoy(sum)":false,"bakchoy(win)":false,"huangong":false,"amaranth":false,"lettuce":false,"headlettuce":false}},
      start_year:2020,
      start_month:7,
      start_day:1,
      end_year:2020,
      end_month:9,
      end_day:30,
      id_Crop:[],
      p:[],
      t:[],
      w:[],
      s:[],
      cropPrice:{"spinach":"10","tonghao":"20","jyelan":"30","bakchoy(sum)":"40","bakchoy(win)":"45","huangong":"50","amaranth":"60","lettuce":"70","headlettuce":"80"},
      start_date:"",
      end_date:"",
      location:"",
      max_score:0,
      max_sequence:[],
      new_maxscore:[],
    };
  }

  setStartDate = (date) => {
    this.setState((prevState) => ({
      ...prevState,
      start_date:date,
      start_year:parseFloat(date.substring(0,4)),
      start_month:parseFloat(date.substring(5,7)),
      start_day:parseFloat(date.substring(8,10))
    }))
    this.props.setDate("start_year",this.state.start_year)
    this.props.setDate("start_month",this.state.start_month)
    this.props.setDate("start_day",this.state.start_day)
  }
 
  setEndDate = (date) => {
    this.setState((prevState) => ({
      ...prevState,
      end_date:date,
      end_year:parseFloat(date.substring(0,4)),
      end_month:parseFloat(date.substring(5,7)),
      end_day:parseFloat(date.substring(8,10))
    }))
    this.props.setDate("end_year",this.state.end_year)
    this.props.setDate("end_month",this.state.end_month)
    this.props.setDate("end_day",this.state.end_day)
  }

  setLocation = (location) => {
    this.setState((prevState) => ({
      ...prevState,
      location:location
    }))
  }

  switchCrop = (item) => {
    this.setState((prevState) => ({
      ...prevState,
      cropIsSelect:{
        ...prevState.cropIsSelect,
        [item]:!this.state.cropIsSelect[item]
      }
    }))
  }

  switchClimate =(crop,climate) =>{
    this.setState((prevState) => ({
      ...prevState,
      climateIsSelect:{
        ...prevState.climateIsSelect,
        [climate]:{
          ...prevState.climateIsSelect[climate],
          [crop]:!this.state.climateIsSelect[climate][crop]
        }
      }
    }))
  }

  setPrice = (crop,price) => {
    this.setState((prevState) => ({
      ...prevState,
      cropPrice:{
        ...prevState.cropPrice,
        [crop]:[price]
      }
    }))
  }

  onAnsClick = () => {
    this.setState((prevState) => ({
      ...prevState,
      max_sequence:[],
      new_maxscore:[] 
    }));
    list2=[];
    Object
    .keys(this.state.cropIsSelect)
    .filter((item)=>this.state.cropIsSelect[item]===true)
    .map((item) => {
      list2.push(this.state.cropData.indexOf(item))
    })
    list2.sort();

    let list = {"p":[],"t":[],"s":[],"w":[]}
    list2
    .map((item) => {
      this.state.climateIsSelect.p[this.state.cropData[item]]===true?list["p"].push(1):list["p"].push(0)
      this.state.climateIsSelect.t[this.state.cropData[item]]===true?list["t"].push(1):list["t"].push(0)
      this.state.climateIsSelect.s[this.state.cropData[item]]===true?list["s"].push(1):list["s"].push(0)
      this.state.climateIsSelect.w[this.state.cropData[item]]===true?list["w"].push(1):list["w"].push(0)
    })
    let price = []
    Object
    list2
    .map((item) => {
      price.push(parseFloat(this.state.cropPrice[this.state.cropData[item]]))
    })

    console.log(
      this.state.start_year,
      this.state.start_month,
      this.state.start_day,
      this.state.end_year,
      this.state.end_month,
      this.state.end_day,
      list2,
      list["p"],
      list["t"],
      list["s"],
      list["w"],
      price,
      this.state.location,);
    fetch(`http://${this.props.ip}:8001/`, {
      method: 'POST',
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        params: {
          start_year:this.state.start_year,
          start_month:this.state.start_month,
          start_date:this.state.start_day,
          end_year:this.state.end_year,
          end_month:this.state.end_month,
          end_date:this.state.end_day,
          id_Crop:list2,
          p:list["p"],
          t:list["t"],
          s:list["s"],
          w:list["w"],
          cropPrice:price,
          location:this.state.location,
        },
      }),
    })
    .then(response => response.json())
    .then((responseJson) => {
      let sequence = [];
      Object
      .values(responseJson.max_sequence)
      .map((item) => {
        sequence.push([Object.values(responseJson.max_sequence).indexOf(item),item[0],item[2]]);
      })
      let Newscore = [];
      Object
      .values(responseJson.new_maxscore)
      .filter(item => responseJson.new_maxscore.indexOf(item)!==0)
      .map((item) => {
        Newscore.push(item);
      })
      this.setState((prevState) => ({
        ...prevState,
        max_score:responseJson.max_score,
        max_sequence:sequence,
        new_maxscore:Newscore //為什麼不是用[]？！！！！！？？！！？？！！？！？！
      }));
    })
    .catch((error) =>{
      console.error(error);
    });
  }

  onDataUpdate = () => {
    fetch("http://cwbservice.zapto.org/seasonal/prp/?county=臺北市&yyyymm=201807")
    .then((response) => response.text())
    .then(function(response) {
      console.log(response);
    }).catch(function(err) {
      console.error(err);
    });
      
    // fetch("http://cwbservice.zapto.org/seasonal/prp/?county=臺北市&yyyymm=201601", {
    //   method: 'GET',
    //   body: JSON.stringify(data), // data can be `string` or {object}!
    //   headers: new Headers({
    //     'Content-Type': 'application/json'
    //   })
    // })
    // .then(response => response.json())
    // .then((responseJson) => {
    //   console.log("test DataUpdate fetch")
    //   console.log(responseJson);
    // })
    // .catch((error) =>{
    //   console.error(error);
    // });
  }

  render() {
    const {switchScreen} = this.props; //一定要有大括號！！！
    return (
      
      <View style={{flex:1, flexDirection:'column'}}>
        <View style={{flex:1, backgroundColor:'white'}}></View>
        <View style={{flex:1, backgroundColor:'white',borderBottomColor:'gray',borderBottomWidth:2}}>  
          <Text style={[styles.mainHeadline]}>農纖合度--最佳化農作小幫手</Text> 
        </View>
        <View style={{flex:12}}>
          <ScrollView>
            <TimePicker innertext="開始時間" date={this.state.start_date} setDate={this.setStartDate}/>
            <TimePicker innertext="結束時間" date={this.state.end_date} setDate={this.setEndDate}/>
            <SetLocation innertext="耕作地點" location={this.state.location} setlocation={this.setLocation}/>
            <SetCrop 
              cropData={this.state.cropData} 
              cropDataChinese={this.state.cropDataChinese}
              switchCrop={this.switchCrop} 
              cropIsSelect={this.state.cropIsSelect} 
              switchClimate={this.switchClimate}
              climateIsSelect={this.state.climateIsSelect} 
              setPrice={this.setPrice}
              cropPrice={this.state.cropPrice}
              id_Crop={this.state.id_Crop} p={this.state.p} 
              t={this.state.t} w={this.state.w} s={this.state.s} />
            <View>
              <DataUpdate onDataUpdate={this.onDataUpdate} />
              <View style={{flex:1}}></View>
              <AnsClick onAnsClick={this.onAnsClick} />
            </View>
            <AnsDisplay idCrop={list2} cropData={this.state.cropDataChinese} max_score={this.state.max_score} max_sequence={this.state.max_sequence} new_maxscore={this.state.new_maxscore}/>
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