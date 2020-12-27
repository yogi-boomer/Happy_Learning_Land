import React, { Component} from 'react'
import { StyleSheet, View, Image, ImageBackground, Text } from 'react-native'
import normalize from "react-native-normalize";
import { TouchableOpacity } from 'react-native-gesture-handler'

export default class outsideStore extends Component {
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.topContainer}>

                </View>
                <View style={styles.elementsContainer}>
                    <View style={styles.imageBackground}>
                        <ImageBackground style={styles.imageBackground} source={require('../../../assets/sources/Img-Tiendita/tienda.png')}>

                        </ImageBackground>
                    </View>
                    <View style={styles.buttonsContainer}>
                        <View style={styles.btnStyle }>
                            <TouchableOpacity style={{borderRadius: 35, backgroundColor: "#0d7377"}} onPress={()=>this.props.navigation.goBack()}>
                                <Image style={ styles.arrows } source={require('../../../assets/sources/Img-Tiendita/flecha_atras.png')}></Image>
                            </TouchableOpacity>    
                            <TouchableOpacity style={{borderRadius: 35, backgroundColor: "#0d7377"}} onPress={()=>this.props.navigation.navigate('store')}>
                                <Image style={ styles.arrows } source={require('../../../assets/sources/Img-Tiendita/flecha_arriba.png')}></Image>
                            </TouchableOpacity>        
                        </View>
                    </View>
                </View>
                <View style={styles.bottomContainer}>

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
    flex: 0.35,
    //backgroundColor: "gray",
  },
  elementsContainer: {
    flex: 10,
    flexDirection: "column",
    //backgroundColor: "blue",
  },
  imageBackground: {
    flex: 10,
    resizeMode: "cover",
    justifyContent: "center"
  },
  buttonsContainer: {
    flex: 1.5,
    flexDirection: "row",
    justifyContent: "flex-start",
    //backgroundColor: "orange",
  },
  bottomContainer: {
    flex: 0.2,
    //backgroundColor: "green",
  },
  btnStyle: {
    flexDirection: "row",
    width: "100%",
    height: "100%",
    justifyContent: "space-around",
    alignItems: "center",
  },
  arrows: {
    width: normalize(140),
    height: "90%",
    //height: normalize(60),
    resizeMode: "contain",
  },
});