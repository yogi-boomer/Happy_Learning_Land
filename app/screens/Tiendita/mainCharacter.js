import React, { Component} from 'react';
import { StyleSheet, View, Image } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import normalize from 'react-native-normalize';
import {useNavigation} from '@react-navigation/native'


export default class MainCharacter extends Component {

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.topContainer}>
                    <View style = {styles.coins}>
                        <Image style={styles.coin} source={require('../../../assets/sources/Img-Tiendita/moneda.png')}></Image>
                    </View>
                </View>
                <View style={styles.elementsContainer}>
                    <View style={styles.charaContainer}>
                         <View style={styles.character}>
                                <View style>
                                    <Image style={ styles.img } source={require('../../../assets/sources/Personajes/character_12.png')}></Image>
                                    {/* <Image source={{ uri: charac }} style={{ ...styles.img}}></Image> */}
                                </View>
                        </View> 
                    </View>
                    <View style={styles.menuContainer}>
                        <View style={styles.containBtn}>
                            <View style={{ ...styles.Buttons}}>
                                <TouchableOpacity style={{marginTop: 10}} onPress={()=>this.props.navigation.navigate('listActivity')}>
                                    <Image style={ styles.list } source={require('../../../assets/sources/Iconos/nota.png')}></Image>
                                </TouchableOpacity>
                                <TouchableOpacity style={{marginTop: 10}}>
                                    <Image style={ styles.list } source={require('../../../assets/sources/Iconos/robot.png')}></Image>
                                </TouchableOpacity>
                                <TouchableOpacity style={{marginTop: 10}} onPress={()=>this.props.navigation.navigate('outsideStore')}>
                                    <Image style={ styles.list } source={require('../../../assets/sources/Iconos/supermarket.png')}></Image>
                                </TouchableOpacity>
                                <TouchableOpacity style={{marginTop: 10}}>
                                    <Image style={ styles.list } source={require('../../../assets/sources/Iconos/comer.png')}></Image>
                                </TouchableOpacity>
                                <TouchableOpacity style={{marginTop: 10}}>
                                    <Image style={ styles.list } source={require('../../../assets/sources/Iconos/reciclaje.png')}></Image>
                                </TouchableOpacity>
                                <TouchableOpacity style={{marginTop: 10}}>
                                    <Image style={ styles.list } source={require('../../../assets/sources/Iconos/ajustes.png')}></Image>
                                </TouchableOpacity>
                                <TouchableOpacity style={{marginTop: 10}}>
                                    {/* <Image style={ styles.list } sources={require('../assets/sources/Iconos/regresar.png')}></Image> */}
                                </TouchableOpacity>
                            </View>
                        </View> 
                    </View>    
                </View>
                <View style={styles.bottomContainer}>
                    <View style={styles.barraBottom}>
                    </View>                    
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    backgroundColor: "#b2f7ef",
  },
  topContainer: {
    flexDirection: "column",
    flex: 2,
    justifyContent: 'flex-end'
  },
  elementsContainer: {
    flexDirection: "row",
    flex: 15
  },
  bottomContainer: {
    flex: .5,
    flexDirection: "row",
  },
  barraBottom: {
    width: '100%',
    //backgroundColor: "green"
  },
  charaContainer: {
    flexDirection: "column",
    flex: 5,
    justifyContent: 'flex-end'
  },
  menuContainer: {
    flexDirection: "column",
    flex: 5,
    justifyContent: 'flex-start'   
  },
  containBtn: {
    width: '100%',
    height: '65%',
    //backgroundColor: "gray",
  },
  character: {
    height: '60%',
    alignItems: "center",
    //backgroundColor: "#FFF"
  },
  coins: {
    flexDirection: "row",
    width: normalize(120, "width"),
    height: normalize(50, "height"),
    left: normalize(5, "width"),
    borderRadius: normalize(20),
    backgroundColor: "#FFC158",
  },
  coin: {
    width: normalize(50, "width"),
    height: normalize(50, "height"),
    resizeMode: "contain",
  },
  txtMoneda: {
    marginLeft: "10%",
    marginTop: 10,
    fontSize: normalize(20),
    fontWeight: "bold",
  },
  Buttons: {
    width: normalize(50, 'width'),
    height: '100%',
    left: normalize(135, "width"),
    justifyContent: "center",
    alignItems: "center",
    borderRadius: normalize(25),
    //backgroundColor: "#58B1C2",
  },
  text: {
    alignItems: "center",
    justifyContent: "center",
    fontWeight: "bold",
    fontSize: normalize(40),
    paddingTop: 2,
  },
  list: {
    width: normalize(45),
    height: normalize(50),
    resizeMode: "contain",
  },
  img: {
    height: "100%",
    resizeMode: "contain"
  },
});