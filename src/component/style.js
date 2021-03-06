import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  mainHeadline:{
    fontSize:25,
    color:"red",
    textAlign:"center",
    fontWeight:"bold"
  },
  PickerTitle:{
    flex:3,
    textAlign:"center",
    marginLeft:10,
  },
  cropOptInfo_text:{
    marginBottom:10,
    marginLeft:10,
    marginRight:10,
  },
  setLocation_Picker_Title:{
    marginLeft:10,
    marginRight:10,
    textAlign:"center"
  },
  cropItemTitle:{
    flex:4,
    textAlign:"left",
    marginLeft:10,
    marginTop:5,
    fontWeight:"bold",
    fontSize:22,
    color:"navy"
  },
  cropItemText:{
    flex:2.2,
    textAlign:"left",
    marginRight:0,
  },
  EnterBottomText:{
    textAlign:"center",
    marginTop:6,
    fontSize:25,
    color:"olivedrab",
    fontWeight:"bold",
  },
  tabTextUnclicked:{
    textAlign:"center",
    marginTop:2,
    fontSize:10,
    color:"gray"
  },
  tabTextClicked:{
    textAlign:"center",
    marginTop:2,
    fontSize:10
  },
  ansTitle:{
    textAlign:"center",
    fontSize:20,
  },
  ansContent:{
    textAlign:"left",
    color:"black",
    fontSize:18,
    padding:1,
    marginLeft:2,
    flex:4    
  },
  remarkWords:{
    textAlign:"center",
    fontSize:15,
  },
  climateDisplayTitle:{
    flex:1,
    fontSize:22,
    fontWeight:"bold",
    textAlign:"center",
    color:"navy"
  },
  cropDisplayTitle:{
    flex:4,
    fontSize:30,
    fontWeight:"bold",
    textAlign:"left",
    color:"navy",
    paddingLeft:20,
    paddingTop:20
  },
  TabImgClicked:{
    alignSelf:"center",
    opacity:1,
    width:40,
    height:40
  },
  TabImgUnclicked:{
    alignSelf:"center",
    opacity:0.2,
    width:40,
    height:40
  },
  InfoDisplayTitle:{
    textAlign:"left",
    fontSize:23,
    marginLeft:15,
    marginTop:10,
    fontWeight:"bold",
  },
  InfoDisplaySubtitle:{
    textAlign:"center",
    fontSize:20,
    padding:5,
    color:"black",
    fontWeight:"bold"
  },
  InfoDisplayContent:{
    textAlign:"left",
    fontSize:18,
    margin:10,
    marginBottom:2,
  },
  InfoDisplayContentOl:{
    textAlign:"left",
    fontSize:18,
    marginLeft:5,
    marginBottom:2,
    fontWeight:"bold"
  },
  InfoDisplayContentLi:{
    textAlign:"left",
    fontSize:18,
    marginLeft:23,
    marginRight:10,
    marginBottom:4
  }
});

module.exports = styles;