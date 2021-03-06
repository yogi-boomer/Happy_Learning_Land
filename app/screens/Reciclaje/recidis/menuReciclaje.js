import React, { Component } from "react";
import { StyleSheet, View, Image, StatusBar, Text } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import normalize from "react-native-normalize";

import facil from "../data/facil";
import intermedio from "../data/intermedio";
import dificil from "../data/dificil";
import tutorial from "../data/tutorial";

export default class MenuReciclaje extends Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }
  
  render() {
    return (
      <View style={styles.container}>
        <StatusBar barStyle="dark-content" />
        <View>
          <StatusBar hidden={true} />
        </View>
        <View style={{flex: 1}}>

        </View>
        <View style={styles.elementsContainer}>
          <View style={{flex: 0.75}}>

          </View>
          <View style={styles.elements}>
            <View style={{flex: 2.5}}>
              <Image style={styles.img} source={require("../../../../assets/sources/Img-Reciclaje/logo.png")}>

              </Image>
            </View>
            <View style={styles.menuContainer}>
              <View style={{flex: 1, justifyContent: 'center'}}>
                <View style={{...styles.buttons, backgroundColor: 'beige'}}>
                  <TouchableOpacity onPress={() => this.props.navigation.navigate("game_tutorial", { questions: tutorial })}>
                    <Text style={styles.txtMenu}>Tutorial</Text>
                  </TouchableOpacity>
                </View>
              </View>
              <View style={{flex: 1, justifyContent: 'center'}}>
                <View style={{...styles.buttons, backgroundColor: 'pink'}}>
                    <TouchableOpacity onPress={() => this.props.navigation.navigate("game_facil", { questions: facil})}>
                      <Text style={styles.txtMenu}>Fácil</Text>
                    </TouchableOpacity>
                </View>
              </View>
              <View style={{flex: 1, justifyContent: 'center'}}>
                <View style={{...styles.buttons, backgroundColor: 'salmon'}}>
                  <TouchableOpacity onPress={() => this.props.navigation.navigate("game_intermedio", { questions: intermedio})}>
                    <Text style={styles.txtMenu}>Intermedio</Text>
                  </TouchableOpacity>
                </View>
              </View>
              <View style={{flex: 1, justifyContent: 'center'}}>
                <View style={{...styles.buttons, backgroundColor: 'violet'}}>
                  <TouchableOpacity onPress={() => this.props.navigation.navigate("game_dificil", { questions: dificil})}>
                    <Text style={styles.txtMenu}>Difícil</Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          </View>
          <View style={{flex: 0.75}}>

          </View>
        </View>
        <View style={{flex: 2}}>
          <View style={styles.btnBack}>
            <TouchableOpacity onPress={() => this.props.navigation.push("mainCharacter")}>
              <Image style={styles.imgBack} source={require('../../../../assets/sources/Img-Tiendita/flecha_atras.png')}>

              </Image>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: "#b2f7ef",
  },
  elementsContainer: {
    flex: 7,
    flexDirection: "row"
  },
  elements: {
    flex: 5.5,
    flexDirection: "column"
  },
  img: {
    width: "100%",
    height: "100%",
    resizeMode: "contain"
  },
  menuContainer: {
    flex: 3,
    flexDirection: "column"
  },
  buttons: {
    width: "100%",
    height: "80%",
    justifyContent: "center",
    borderRadius: 30,
    borderWidth: 2, 
  },
  txtMenu: {
    textAlign: "center",
    fontSize: normalize(25),
    fontWeight: "bold",
  },
  btnBack: {
    width: "15%",
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  imgBack: {
    width: normalize(40, "width"),
    height: normalize(40, "height"),
    resizeMode: "contain",
  }
});