import React, { Component } from 'react'
import { StyleSheet, View, Image, ImageBackground, StatusBar } from 'react-native'
import normalize from "react-native-normalize";
import { TouchableOpacity } from 'react-native-gesture-handler'

export default class outsideStore extends Component {
  constructor(props) {
    super(props);
    this.state = {
      
    };
  }
  render() {
    console.log(this.state.tareas);
    return (
      <View style={styles.container}>
        <StatusBar barStyle="dark-content" />
        <View>
          <StatusBar hidden={true} />
        </View>
        <View style={styles.elementsContainer}>
          <View style={styles.imageBackground}>
            <ImageBackground style={styles.imageBackground} source={require('../../../assets/sources/Img-Tiendita/tienda.png')}></ImageBackground>
          </View>
          <View style={styles.buttonsContainer}>
            <View style={styles.btnStyle}>
              <TouchableOpacity style={{ borderTopLeftRadius: 35, borderBottomRightRadius: 35, borderWidth: 2, backgroundColor: "#0d7377" }} onPress={() => this.props.navigation.goBack()}>
                <Image style={styles.arrows} source={require('../../../assets/sources/Img-Tiendita/flecha_atras.png')}></Image>
              </TouchableOpacity>
              <TouchableOpacity style={{ borderBottomLeftRadius: 35, borderTopRightRadius: 35, borderWidth: 2, backgroundColor: "#0d7377" }} onPress={() => this.props.navigation.navigate('store')}>
                <Image style={styles.arrows} source={require('../../../assets/sources/Img-Tiendita/flecha_arriba.png')}></Image>
              </TouchableOpacity>
            </View>
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
  elementsContainer: {
    flex: 10,
    flexDirection: "column"
  },
  imageBackground: {
    flex: 10,
    resizeMode: "cover",
    justifyContent: "center"
  },
  buttonsContainer: {
    flex: 1.5,
    flexDirection: "row",
    justifyContent: "flex-start"
  },
  bottomContainer: {
    flex: 0.2
  },
  btnStyle: {
    flexDirection: "row",
    width: "100%",
    height: "100%",
    justifyContent: "space-around",
    alignItems: "center"
  },
  arrows: {
    width: normalize(140),
    height: "90%",
    resizeMode: "contain"
  },
});