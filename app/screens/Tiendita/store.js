import React, { Component } from "react";
import { StyleSheet, View, Image, ImageBackground, Text, Button, Modal, Alert, TouchableHighlight } from "react-native";
import normalize from "react-native-normalize";
import { TouchableOpacity } from "react-native-gesture-handler";

export default class Store extends Component {
/*     constructor(props) {
    super(props);

    this.state = {
      modalVisible: false,
      counters: this.props.route.params.counters,
      res: 0,
      progress: 0,
    };
  }

  modalType = 1;

  setModalVisible = (visible, modalType) => {
    this.setState({ modalVisible: visible });
    this.modalType = modalType;
  };
  resta = (value) => {
    let res = this.state.res;
    let counters = this.state.counters;
    if (counters < value) {
      Alert.alert("No te alcanza 😟");
    } else {
      res = counters - value;
      console.log(counters);
      console.log(res);
      this.setState({ res });
      this.setState({ counters: res });
    }
  };

  renderModal = (modalType) => {
    switch (modalType) {
      case 1:
        return (
          <View style={styles.viewModal}>
            <View style={styles.modals}>
              <Text style={styles.txtModal}>
                Estas a punto de comprar leche
              </Text>
              <Image style={styles.imageModals} source={require("../../../assets/sources/Img-Tiendita/leche.png")}></Image>
              <Text>Cuesta 9 monedas, ¿la quieres comprar?</Text>
              <TouchableHighlight style={{ ...styles.btnOpen, backgroundColor: "red", marginTop: 30 }} onPress={() => this.setModalVisible(false)}>
                <Text>✖</Text>
              </TouchableHighlight>
              <TouchableHighlight style={{ ...styles.btnOpen, backgroundColor: "green", marginTop: 30 }} onPress={() => this.resta(9, this.setModalVisible(false))}>
                <Text>✔</Text>
              </TouchableHighlight>
            </View>
          </View>
        );
    }
  }; */
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.topContainer}>

                </View>
                <View style={styles.elementsContainer}>
                    <View style={styles.imageBackground}>
                        <ImageBackground style={styles.imgBack} source={require('../../../assets/sources/Img-Tiendita/estante.png')}>
                            <View style={styles.first}>
                                <View style={styles.one}>
                                    <TouchableOpacity>
                                        <Image style ={ styles.img }source={require('../../../assets/sources/Img-Tiendita/pan.png')}></Image>
                                    </TouchableOpacity>  
                                </View>
                                <View style={styles.two}>
                                    <TouchableOpacity>
                                        <Image style ={ styles.img }source={require('../../../assets/sources/Img-Tiendita/galleta.png')}></Image>
                                    </TouchableOpacity>
                                </View>
                                <View style={styles.three}>
                                    <TouchableOpacity>
                                        <Image style ={ styles.img }source={require('../../../assets/sources/Img-Tiendita/sabritas.png')}></Image>
                                    </TouchableOpacity>
                                </View>
                            </View>
                            <View style={styles.second}>
                                <View style={{...styles.four, marginTop: 40}}>
                                    <TouchableOpacity>
                                        <Image style ={ styles.img }source={require('../../../assets/sources/Img-Tiendita/leche.png')}></Image>
                                    </TouchableOpacity>
                                </View>
                                <View style={{...styles.five, marginTop: 40}}>
                                    <TouchableOpacity>
                                        <Image style ={ styles.img }source={require('../../../assets/sources/Img-Tiendita/huevos.png')}></Image>
                                    </TouchableOpacity>
                                </View>
                                <View style={{...styles.six, marginTop: 40}}>
                                    <TouchableOpacity>
                                        <Image style ={ styles.img }source={require('../../../assets/sources/Img-Tiendita/arroz.png')}></Image>
                                    </TouchableOpacity>
                                </View>
                            </View>
                            <View style={styles.third}>
                                <View style={{...styles.seven, marginTop: 30}}>
                                    <TouchableOpacity>
                                        <Image style ={ styles.img }source={require('../../../assets/sources/Img-Tiendita/agua.png')}></Image>
                                    </TouchableOpacity>
                                </View>
                                <View style={{...styles.eight, marginTop: 40}}>
                                    <TouchableOpacity>
                                        <Image style ={ styles.img }source={require('../../../assets/sources/Img-Tiendita/fruta.png')}></Image>
                                    </TouchableOpacity>   
                                </View>
                                <View style={{...styles.nine, marginTop: 40}}>
                                    <TouchableOpacity>
                                        <Image style ={ styles.img }source={require('../../../assets/sources/Img-Tiendita/verdura.png')}></Image>
                                    </TouchableOpacity>
                                </View>
                            </View>
                            <View style={styles.fourth}>

                            </View>
                        </ImageBackground>
                    </View>
                    <View style={styles.bottomElement}>
                      <View style={styles.coinContainer}>
                        <View style={styles.coins}>
                          <Image style={styles.coin} source={require('../../../assets/sources/Img-Tiendita/moneda.png')}></Image>
                          <Text style={styles.txtCoin}>x</Text>
                        </View>
                      </View>
                      <View style={styles.btnCompra}>
                        <TouchableOpacity>
                          <Button title = 'Comprar Lista'></Button>
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
    backgroundColor: "#f8f5f2"
  },
  topContainer: {
    flex: 0.4,
    //backgroundColor: "white",
  },
  elementsContainer: {
    flex: 10,
    flexDirection: "column"
  },
  imageBackground: {
    flex: 10,
    resizeMode: "cover",
    justifyContent: "center",
    backgroundColor: "#f5ca99"
  },
  bottomElement: {
    flex: 1.5,
    flexDirection: "row",
    //backgroundColor: "orange",
  },
  bottomContainer: {
    flex: 0.2,
  },
  imgBack: {
    flex: 12,
    resizeMode: "cover",
    justifyContent: "center",
  },
  first: {
    flex: 2.5,
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
  },
  second: {
    flex: 3,
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
  },
  third: {
    flex: 3,
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
  },
  fourth: {
    flex: 2.7,
  },
  one: {
    width: "25%",
    height: normalize(100, "height"),
  },
  two: {
    width: "25%",
    height: normalize(100, "height"),
  },
  three: {
    width: "25%",
    height: normalize(100, "height"),
  },
  four: {
    width: "25%",
    height: normalize(100, "height"),
  },
  five: {
    width: "25%",
    height: normalize(120, "height"),
  },
  six: {
    width: "25%",
    height: normalize(120, "height"),
  },
  seven: {
    width: "25%",
    height: normalize(120, "height"),
  },
  eight: {
    width: "30%",
    height: normalize(120, "height"),
  },
  nine: {
    width: "28%",
    height: normalize(120, "height"),
  },
  img: {
    height: "100%",
    width: "100%",
    resizeMode: "contain",
  },
  coinContainer: {
    width: "40%",
    //backgroundColor: "white",
    justifyContent: "center",
    alignItems: "center",
  },
  btnCompra: {
    //backgroundColor: "black",
    justifyContent: "center",
  },
  coins: {
    flexDirection: "row",
    width: normalize(120, "width"),
    height: normalize(50, "height"),
    borderRadius: normalize(20),
    backgroundColor: "#FFC158",
  },
  coin: {
    width: normalize(50, "width"),
    height: normalize(50, "height"),
    resizeMode: "contain",
  },
  txtCoin: {
    marginTop: 6,
    fontSize: normalize(25),
  },
  modals: { //checar
    height: 250,
    width: 200,
    alignItems: 'center',
    justifyContent: 'center'
  },
  txtModal: { //Checar
    marginBottom: 15,
    textAlign: "center"
  },
  imageModals: { //Checar
    width: 100,
    height: 100
  },
  viewModal: { //Checar
    marginTop: 150,
      backgroundColor: "white",
      borderRadius: 20,
      padding: 35,
      alignItems: "center",
      shadowColor: "#000",
      shadowOffset: {
        width: 0,
        height: 2
      },
      shadowOpacity: 0.25,
      shadowRadius: 3.84,
      elevation: 5
  },
  btnOpen: { //Checar
    backgroundColor: "#F194FF",
    borderRadius: 20,
    padding: 10,
    elevation: 2
  }
});