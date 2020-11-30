/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */
import React, {Component} from 'react';
import Info from './src/container/Info';
import Main from './src/container/Main';
import FutureClimate from './src/container/FutureClimate';
import CropData from './src/container/CropData';
import StartScreen from './src/container/startScreen';
import AppConfig from './src/const/AppConfig.const';

class App extends Component { 
  constructor(props){
    super(props);
    this.state = {
      activeScreen:'',
      start_year:2020,
      start_month:7,
      start_day:1,
      end_year:2020,
      end_month:9,
      end_day:30,
      ip:AppConfig.SERVER_IP,
    }
  } 

  switchScreen = (toScreen) => {
    this.setState((prevState) => ({
      ...prevState,
      activeScreen:toScreen
    }));
  }

  setDate = (item,value) => {
    this.setState((prevState) => ({
      ...prevState,
      [item]:[value]
    }))
  }

  setServerIP = (ip) => {
    this.setState((prevState) => ({
      ...prevState,
      ip:ip
    }))
  }

  render(){
    switch(this.state.activeScreen) {
      case '':
        return(<StartScreen ip={this.state.ip} setServerIP={this.setServerIP} switchScreen={(toScreen) => {this.switchScreen(toScreen)}}/>)
        break;
      case 'Info':
        return (<Info activeScreen={this.state.activeScreen} switchScreen={(toScreen) => {this.switchScreen(toScreen)}} />);
        break;
      case 'Main':
        return <Main ip={this.state.ip} activeScreen={this.state.activeScreen} switchScreen={(toScreen) => {this.switchScreen(toScreen)}} setDate={this.setDate} />;
        break;
      case 'FutureClimate':
        return <FutureClimate 
        ip={this.state.ip}
        activeScreen={this.state.activeScreen}
        switchScreen={(toScreen) => {this.switchScreen(toScreen)}} 
        start_year={this.state.start_year}
        start_month={this.state.start_month}
        start_day={this.state.start_day}
        end_year={this.state.end_year}
        end_month={this.state.end_month}
        end_day={this.state.end_day}
        />;
        break;
      case 'CropData':
        return <CropData ip={this.state.ip} activeScreen={this.state.activeScreen} switchScreen={(toScreen) => {this.switchScreen(toScreen)}} />;
        break;
      default:
        console.error('Navigation error: ' + this.state.activeScreen);
        return <Main />;
        break;
    }
  }
}


export default App;




// fetch('http://localhost:8001/', {
//                 method: 'POST',
//                 headers: {
//                   "Content-Type": "application/json"
//                 },
//                 body: JSON.stringify({
//                   params: {
//                     start_year:2019,
//                     start_month:3,
//                     start_date:1,
//                     end_year:2019,
//                     end_month:5,
//                     end_date:20,
//                     id_Crop:[0,1,2],
//                     p:[1,1,1],
//                     t:[1,1,1],
//                     w:[1,0,0],
//                     s:[1,0,1],
//                     cropPrice:[25,40,35],
//                     location:"Taipei_NTU",
//                   },
//                 }),
//               })
//               .then((response) => response.json())
//               .then(({ max_score, max_sequence }) => {
//                 this.setState(prevState => ({
//                   ...prevState,
//                   max_score,
//                   max_sequence
//                 }));
//               })
//               .catch((error) =>{
//                 console.error(error);
//               });

