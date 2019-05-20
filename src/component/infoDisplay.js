import React, { Component } from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import styles from './style';

class InfoDisplay extends Component {
	render() {
		const {switchScreen} = this.props;
		return (
			<View>
				<View style={{marginBottom:10}}>
					<Text style={[styles.InfoDisplayTitle]}>動機</Text>
					<Text style={[styles.InfoDisplayContent]}>{"\t"}我們是來自台灣大學生工系四年級的學生，有感於近來極端氣候下，農民耕作常常面對非常大的氣候風險，因此開發農纖合度APP希望增加農民面對氣候的調適能力，讓農民能藉此APP評估種植作物的風險，藉由調整農作物種植日期、順序避開風險，降低農作物損失及促使利潤最大化。 </Text>
				</View>
				<View>
					<Text style={[styles.InfoDisplayTitle]}>分頁介紹</Text>

					<View style={{borderColor:"gray",borderWidth:2,borderRadius:5,margin:5}}>
						<View style={{margin:5,flexDirection:"row"}}>
							<TouchableOpacity style={{borderColor:"black",borderWidth:1,borderRadius:5,flex:3}} onPress={()=>{switchScreen("Info")}}>
								<Image style={{alignSelf:"center"}} source={require('./images/Info.png')} />
								<Text style={[styles.InfoDisplaySubtitle]}>關於我們</Text>
							</TouchableOpacity>
							<View style={{flex:7,paddingLeft:5}}>
								<Text style={{textAlign:"left",fontSize:20,margin:5,marginTop:10,color:"black"}}>主要功能：</Text>
								<Text style={[styles.InfoDisplayContent]}>
									動機與APP使用說明。
								</Text>
							</View>
						</View>
					</View>

					<View style={{borderColor:"gray",borderWidth:2,borderRadius:5,margin:5,padding:3}}>
						<View style={{margin:5,flexDirection:"row"}}>
							<TouchableOpacity style={{borderColor:"black",borderWidth:1,borderRadius:5,flex:3}} onPress={()=>{switchScreen("Main")}}>
								<Image style={{alignSelf:"center"}} source={require('./images/Main.png')} />
								<Text style={[styles.InfoDisplaySubtitle]}>試算</Text>
							</TouchableOpacity>
							<View style={{flex:7,paddingLeft:5}}>
								<Text style={{textAlign:"left",fontSize:20,margin:5,marginTop:10,color:"black"}}>主要功能：</Text>
								<Text style={[styles.InfoDisplayContent]}>
									根據您的輸入值試算此農地最佳種植組合。
								</Text>
							</View>
						</View>
						<View style={{marginBottom:5}}>
							<View>
								<Text style={{textAlign:"left",fontSize:20,margin:10,color:"black"}}>輸入資料：</Text>
								<View>
									<Image resizeMode="contain" style={{alignSelf:"flex-end",width:350,height:400}} source={require('./images/MainDisplayFinal.jpeg')} />
								</View>
								<View >
									<Text style={[styles.InfoDisplayContentOl]}>1.	日期:</Text>
									<Text style={[styles.InfoDisplayContentLi]}>由此輸入您的農地可以耕種的時間。</Text>
								</View>
								<View >
									<Text style={[styles.InfoDisplayContentOl]}>2.	地點:</Text>
									<Text style={[styles.InfoDisplayContentLi]}>選擇您的農地位置。</Text>
								</View>
								<View >
									<Text style={[styles.InfoDisplayContentOl]}>3.	作物選擇:</Text>
									<Text style={[styles.InfoDisplayContentLi]}>分別有菠菜、茼蒿、芥藍菜、夏天種小白菜、冬天種小白菜、皇宮菜、葉萵苣、結球萵苣、莧菜等作物可以選擇，另外也需自行輸入要種植的作物價格。</Text>
								</View>
								<View >
									<Text style={[styles.InfoDisplayContentOl]}>4.	氣候因子:</Text>
									<Text style={[styles.InfoDisplayContentLi]}>每種作物各有四種氣候因子，分別為雨量、溫度、風速、日照，請您選擇種植過程中各作物需要考慮的氣候因子。</Text>
								</View>
								<View >
									<Text style={[styles.InfoDisplayContentOl]}>5.	確定鈕:</Text>
									<Text style={[styles.InfoDisplayContentLi]}>當全部的輸入都結束後，即可按下確定鈕。</Text>
								</View>
							</View>
						</View>
						<View style={{marginBottom:5}}>
							<View>
								<Text style={{textAlign:"left",fontSize:20,margin:10,color:"black"}}>試算結果：</Text>
								<View>
									<Image resizeMode="contain" style={{alignSelf:"flex-end",width:350,height:400}} source={require('./images/OptAnsDisplayFinal.jpeg')} />
								</View>
								<View >
									<Text style={[styles.InfoDisplayContentOl]}>1.	最高總分:</Text>
									<Text style={[styles.InfoDisplayContentLi]}>此總分為在各種氣候因子的限制之下所得出來的總分，若未來氣候符合您所選擇的作物生長所需之氣候條件，則分數較高，反之則分數較低。</Text>
								</View>
								<View >
									<Text style={[styles.InfoDisplayContentOl]}>2.	最佳耕作時間:</Text>
									<Text style={[styles.InfoDisplayContentLi]}>此呈現的是最終產生最大利潤的耕作組合，也就是說在這段農地可種植的時間內，您每一輪耕作開始的時間以及應該種植的作物。</Text>
								</View>
								<View >
									<Text style={[styles.InfoDisplayContentOl]}>3.	替換價格:</Text>
									<Text style={[styles.InfoDisplayContentLi]}>由此可知當其他作物(非目前最佳化種植決策之作物)調整其價格至多少元時，其種植決策可以考慮種此作物以獲得最大利潤。</Text>
								</View>
							</View>
						</View>
					</View>
					
					<View style={{borderColor:"gray",borderWidth:2,borderRadius:5,margin:5,padding:3}}>
						<View style={{margin:5,flexDirection:"row"}}>
							<TouchableOpacity style={{borderColor:"black",borderWidth:1,borderRadius:5,flex:3}} onPress={()=>{switchScreen("FutureClimate")}}>
								<Image style={{alignSelf:"center"}} source={require('./images/Climate.png')} />
								<Text style={[styles.InfoDisplaySubtitle]}>未來氣候</Text>
							</TouchableOpacity>
							<View style={{flex:7,paddingLeft:5}}>
								<Text style={{textAlign:"left",fontSize:20,margin:5,marginTop:10,color:"black"}}>主要功能：</Text>
								<Text style={[styles.InfoDisplayContent]}>
									呈現未來季長期預測之氣候資料。
								</Text>
							</View>
						</View>
						
						<View style={{marginBottom:5}}>
							<View style={{flexDirection:"row"}}>
							</View>
							<View>
								<Text style={{textAlign:"left",fontSize:20,margin:10,color:"black"}}>說明：</Text>
								<View >
									<Text style={[styles.InfoDisplayContentLi]}>此頁面呈現短期未來氣候預測資料，因採用中央氣象局季長期氣候預測資料進行降尺度，故目前所產生的未來氣候資訊僅有4-6月，在我們可以取得的資料當中，僅納入溫度、降雨、日照、風速作為影響作物生長的氣候因子，因而只呈現該四種氣候資料。</Text>
								</View>
							</View>
						</View>
					</View>

					<View style={{borderColor:"gray",borderWidth:2,borderRadius:5,margin:5,padding:3}}>
						<View style={{margin:5,flexDirection:"row"}}>
							<TouchableOpacity style={{borderColor:"black",borderWidth:1,borderRadius:5,flex:3}} onPress={()=>{switchScreen("CropData")}}>
								<Image style={{alignSelf:"center"}} source={require('./images/CropData.png')} />
								<Text style={[styles.InfoDisplaySubtitle]}>作物資料</Text>
							</TouchableOpacity>
							<View style={{flex:7,paddingLeft:5}}>
								<Text style={{textAlign:"left",fontSize:20,margin:5,marginTop:10,color:"black"}}>主要功能：</Text>
								<Text style={[styles.InfoDisplayContent]}>
									呈現資料庫內有的各個作物所需的簡略種植方式。
								</Text>
							</View>
						</View>
						
						<View style={{marginBottom:10}}>
							<View style={{flexDirection:"row"}}>
							</View>
							<View>
								<Text style={{textAlign:"left",fontSize:20,margin:10,color:"black"}}>說明：</Text>
								<View >
									<Text style={[styles.InfoDisplayContentLi]}>主要以用土、播種、培育、收穫四大要項去呈現各個作物的簡略種植的注意事項，而目前的作物有菠菜、茼蒿、芥藍、夏天種小白菜、冬天種小白菜、皇宮菜、葉萵苣、結球萵苣、莧菜這幾種的說明，供您作種植參考。</Text>
								</View>
							</View>
						</View>
					</View>

				</View>
				
			</View>
		);
	}
}

export default InfoDisplay;
