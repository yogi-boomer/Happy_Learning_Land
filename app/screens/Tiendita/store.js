import React, { Component } from "react";
import {
  StyleSheet,
  View,
  Image,
  ImageBackground,
  Text,
  Button,
  Modal,
  Alert,
  TouchableHighlight,
} from "react-native";
import normalize from "react-native-normalize";
import { TouchableOpacity } from "react-native-gesture-handler";

export default class Store extends Component {
  constructor(props) {
    super(props);

    this.state = {
      modalVisible: false,
    };
  }

  modalType = 1;

  setModalVisible = (visible, modalType) => {
    this.setState({ modalVisible: visible });
    this.modalType = modalType;
  };

  renderModal = (modalType) => {
    switch (modalType) {
      case 1:
        return (
          <View style={styles.modalContainer}>
            <View style={styles.viewModal}>
              <View style={styles.elementsModal}>
                <Text style={styles.txtModal}>
                  Estas a punto de comprar pan integral
                </Text>
                <Image
                  style={styles.imgModals}
                  source={require("../../../assets/sources/Img-Tiendita/pan.png")}
                ></Image>
                <Text>Cuesta $10 monedas, ¿la quieres comprar?</Text>
              </View>
              <View style={styles.bottomModal}>
                <TouchableHighlight
                  style={{ ...styles.btnOpen, backgroundColor: "#e71414" }}
                >
                  <Text>✖</Text>
                </TouchableHighlight>
                <TouchableHighlight
                  style={{ ...styles.btnOpen, backgroundColor: "#12947f" }}
                >
                  <Text>✔</Text>
                </TouchableHighlight>
              </View>
            </View>
          </View>
        );
      case 2:
        return (
          <View style={styles.modalContainer}>
            <View style={styles.viewModal}>
              <View style={styles.elementsModal}>
                <Text style={styles.txtModal}>
                  Estas a punto de comprar un paquete de galletas
                </Text>
                <Image
                  style={styles.imgModals}
                  source={require("../../../assets/sources/Img-Tiendita/galleta.png")}
                ></Image>
                <Text>Cuesta $2 monedas, ¿la quieres comprar?</Text>
              </View>
              <View style={styles.bottomModal}>
                <TouchableHighlight
                  style={{ ...styles.btnOpen, backgroundColor: "#e71414" }}
                >
                  <Text>✖</Text>
                </TouchableHighlight>
                <TouchableHighlight
                  style={{ ...styles.btnOpen, backgroundColor: "#12947f" }}
                >
                  <Text>✔</Text>
                </TouchableHighlight>
              </View>
            </View>
          </View>
        );
      case 3:
        return (
          <View style={styles.modalContainer}>
            <View style={styles.viewModal}>
              <View style={styles.elementsModal}>
                <Text style={styles.txtModal}>
                  Estas a punto de comprar unas sabritas
                </Text>
                <Image
                  style={styles.imgModals}
                  source={require("../../../assets/sources/Img-Tiendita/sabritas.png")}
                ></Image>
                <Text>Cuesta $2 monedas, ¿la quieres comprar?</Text>
              </View>
              <View style={styles.bottomModal}>
                <TouchableHighlight
                  style={{ ...styles.btnOpen, backgroundColor: "#e71414" }}
                >
                  <Text>✖</Text>
                </TouchableHighlight>
                <TouchableHighlight
                  style={{ ...styles.btnOpen, backgroundColor: "#12947f" }}
                >
                  <Text>✔</Text>
                </TouchableHighlight>
              </View>
            </View>
          </View>
        );
      case 4:
        return (
          <View style={styles.modalContainer}>
            <View style={styles.viewModal}>
              <View style={styles.elementsModal}>
                <Text style={styles.txtModal}>
                  Estas a punto de comprar una caja de leche
                </Text>
                <Image
                  style={styles.imgModals}
                  source={require("../../../assets/sources/Img-Tiendita/leche.png")}
                ></Image>
                <Text>Cuesta $9 monedas, ¿la quieres comprar?</Text>
              </View>
              <View style={styles.bottomModal}>
                <TouchableHighlight
                  style={{ ...styles.btnOpen, backgroundColor: "#e71414" }}
                >
                  <Text>✖</Text>
                </TouchableHighlight>
                <TouchableHighlight
                  style={{ ...styles.btnOpen, backgroundColor: "#12947f" }}
                >
                  <Text>✔</Text>
                </TouchableHighlight>
              </View>
            </View>
          </View>
        );
      case 5:
        return (
          <View style={styles.modalContainer}>
            <View style={styles.viewModal}>
              <View style={styles.elementsModal}>
                <Text style={styles.txtModal}>
                  Estas a punto de comprar un cono de huevos
                </Text>
                <Image
                  style={styles.imgModals}
                  source={require("../../../assets/sources/Img-Tiendita/huevos.png")}
                ></Image>
                <Text>Cuesta $7 monedas, ¿la quieres comprar?</Text>
              </View>
              <View style={styles.bottomModal}>
                <TouchableHighlight
                  style={{ ...styles.btnOpen, backgroundColor: "#e71414" }}
                >
                  <Text>✖</Text>
                </TouchableHighlight>
                <TouchableHighlight
                  style={{ ...styles.btnOpen, backgroundColor: "#12947f" }}
                >
                  <Text>✔</Text>
                </TouchableHighlight>
              </View>
            </View>
          </View>
        );
      case 6:
        return (
          <View style={styles.modalContainer}>
            <View style={styles.viewModal}>
              <View style={styles.elementsModal}>
                <Text style={styles.txtModal}>
                  Estas a punto de comprar una paquete de arroz
                </Text>
                <Image
                  style={styles.imgModals}
                  source={require("../../../assets/sources/Img-Tiendita/arroz.png")}
                ></Image>
                <Text>Cuesta $10 monedas, ¿la quieres comprar?</Text>
              </View>
              <View style={styles.bottomModal}>
                <TouchableHighlight
                  style={{ ...styles.btnOpen, backgroundColor: "#e71414" }}
                >
                  <Text>✖</Text>
                </TouchableHighlight>
                <TouchableHighlight
                  style={{ ...styles.btnOpen, backgroundColor: "#12947f" }}
                >
                  <Text>✔</Text>
                </TouchableHighlight>
              </View>
            </View>
          </View>
        );
      case 7:
        return (
          <View style={styles.modalContainer}>
            <View style={styles.viewModal}>
              <View style={styles.elementsModal}>
                <Text style={styles.txtModal}>
                  Estas a punto de comprar una botella de agua
                </Text>
                <Image
                  style={styles.imgModals}
                  source={require("../../../assets/sources/Img-Tiendita/agua.png")}
                ></Image>
                <Text>Cuesta $7 monedas, ¿la quieres comprar?</Text>
              </View>
              <View style={styles.bottomModal}>
                <TouchableHighlight
                  style={{ ...styles.btnOpen, backgroundColor: "#e71414" }}
                >
                  <Text>✖</Text>
                </TouchableHighlight>
                <TouchableHighlight
                  style={{ ...styles.btnOpen, backgroundColor: "#12947f" }}
                >
                  <Text>✔</Text>
                </TouchableHighlight>
              </View>
            </View>
          </View>
        );
      case 8:
        return (
          <View style={styles.modalContainer}>
            <View style={styles.viewModal}>
              <View style={styles.elementsModal}>
                <Text style={styles.txtModal}>
                  Estas a punto de comprar una canasta de frutas
                </Text>
                <Image
                  style={styles.imgModals}
                  source={require("../../../assets/sources/Img-Tiendita/fruta.png")}
                ></Image>
                <Text>Cuesta $10 monedas, ¿la quieres comprar?</Text>
              </View>
              <View style={styles.bottomModal}>
                <TouchableHighlight
                  style={{ ...styles.btnOpen, backgroundColor: "#e71414" }}
                >
                  <Text>✖</Text>
                </TouchableHighlight>
                <TouchableHighlight
                  style={{ ...styles.btnOpen, backgroundColor: "#12947f" }}
                >
                  <Text>✔</Text>
                </TouchableHighlight>
              </View>
            </View>
          </View>
        );
      case 9:
        return (
          <View style={styles.modalContainer}>
            <View style={styles.viewModal}>
              <View style={styles.elementsModal}>
                <Text style={styles.txtModal}>
                  Estas a punto de comprar una canasta de verduras
                </Text>
                <Image
                  style={styles.imgModals}
                  source={require("../../../assets/sources/Img-Tiendita/verdura.png")}
                ></Image>
                <Text>Cuesta $8 monedas, ¿la quieres comprar?</Text>
              </View>
              <View style={styles.bottomModal}>
                <TouchableHighlight
                  style={{ ...styles.btnOpen, backgroundColor: "#e71414" }}
                >
                  <Text>✖</Text>
                </TouchableHighlight>
                <TouchableHighlight
                  style={{ ...styles.btnOpen, backgroundColor: "#12947f" }}
                >
                  <Text>✔</Text>
                </TouchableHighlight>
              </View>
            </View>
          </View>
        );
    }
  };
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.topContainer}></View>
        <View style={styles.elementsContainer}>
          <Modal
            animationType="slide"
            transparent={true}
            visible={this.state.modalVisible}
            onRequestClose={() => {
              this.setModalVisible(!this.state.modalVisible, this.modalType);
            }}
          >
            {this.renderModal(this.modalType)}
          </Modal>
          <View style={styles.imageBackground}>
            <ImageBackground
              style={styles.imgBack}
              source={require("../../../assets/sources/Img-Tiendita/estante.png")}
            >
              <View style={styles.first}>
                <View style={styles.one}>
                  <TouchableOpacity
                    onPress={() => this.setModalVisible(true, 1)}
                  >
                    <Image
                      style={styles.img}
                      source={require("../../../assets/sources/Img-Tiendita/pan.png")}
                    ></Image>
                  </TouchableOpacity>
                </View>
                <View style={styles.two}>
                  <TouchableOpacity
                    onPress={() => this.setModalVisible(true, 2)}
                  >
                    <Image
                      style={styles.img}
                      source={require("../../../assets/sources/Img-Tiendita/galleta.png")}
                    ></Image>
                  </TouchableOpacity>
                </View>
                <View style={styles.three}>
                  <TouchableOpacity
                    onPress={() => this.setModalVisible(true, 3)}
                  >
                    <Image
                      style={styles.img}
                      source={require("../../../assets/sources/Img-Tiendita/sabritas.png")}
                    ></Image>
                  </TouchableOpacity>
                </View>
              </View>
              <View style={styles.second}>
                <View style={{ ...styles.four, marginTop: 40 }}>
                  <TouchableOpacity
                    onPress={() => this.setModalVisible(true, 4)}
                  >
                    <Image
                      style={styles.img}
                      source={require("../../../assets/sources/Img-Tiendita/leche.png")}
                    ></Image>
                  </TouchableOpacity>
                </View>
                <View style={{ ...styles.five, marginTop: 40 }}>
                  <TouchableOpacity
                    onPress={() => this.setModalVisible(true, 5)}
                  >
                    <Image
                      style={styles.img}
                      source={require("../../../assets/sources/Img-Tiendita/huevos.png")}
                    ></Image>
                  </TouchableOpacity>
                </View>
                <View style={{ ...styles.six, marginTop: 40 }}>
                  <TouchableOpacity
                    onPress={() => this.setModalVisible(true, 6)}
                  >
                    <Image
                      style={styles.img}
                      source={require("../../../assets/sources/Img-Tiendita/arroz.png")}
                    ></Image>
                  </TouchableOpacity>
                </View>
              </View>
              <View style={styles.third}>
                <View style={{ ...styles.seven, marginTop: 30 }}>
                  <TouchableOpacity
                    onPress={() => this.setModalVisible(true, 7)}
                  >
                    <Image
                      style={styles.img}
                      source={require("../../../assets/sources/Img-Tiendita/agua.png")}
                    ></Image>
                  </TouchableOpacity>
                </View>
                <View style={{ ...styles.eight, marginTop: 40 }}>
                  <TouchableOpacity
                    onPress={() => this.setModalVisible(true, 8)}
                  >
                    <Image
                      style={styles.img}
                      source={require("../../../assets/sources/Img-Tiendita/fruta.png")}
                    ></Image>
                  </TouchableOpacity>
                </View>
                <View style={{ ...styles.nine, marginTop: 40 }}>
                  <TouchableOpacity
                    onPress={() => this.setModalVisible(true, 9)}
                  >
                    <Image
                      style={styles.img}
                      source={require("../../../assets/sources/Img-Tiendita/verdura.png")}
                    ></Image>
                  </TouchableOpacity>
                </View>
              </View>
              <View style={styles.fourth}></View>
            </ImageBackground>
          </View>
          <View style={styles.bottomElement}>
            <View style={styles.coinContainer}>
              <View style={styles.coins}>
                <Image
                  style={styles.coin}
                  source={require("../../../assets/sources/Img-Tiendita/moneda.png")}
                ></Image>
                <Text style={styles.txtCoin}>x</Text>
              </View>
            </View>
            <View style={styles.btnCompra}>
              <TouchableOpacity>
                <Button title="Comprar Lista"></Button>
              </TouchableOpacity>
            </View>
          </View>
        </View>
        <View style={styles.bottomContainer}></View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    backgroundColor: "#f8f5f2",
  },
  topContainer: {
    flex: 0.35, //cambiar
  },
  elementsContainer: {
    flex: 10,
    flexDirection: "column",
  },
  imageBackground: {
    flex: 10,
    resizeMode: "cover",
    justifyContent: "center",
    backgroundColor: "#f5ca99",
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
    justifyContent: "center",
    alignItems: "center",
  },
  btnCompra: {
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
  modalContainer: {
    height: "100%",
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
  },
  txtModal: {
    textAlign: "center",
    fontSize: normalize(15),
    fontWeight: "bold",
  },
  imgModals: {
    width: normalize(100, "width"),
    height: normalize(100, "height"),
    resizeMode: "contain",
  },
  viewModal: {
    backgroundColor: "white",
    borderRadius: 25,
    padding: 30,
    alignItems: "center",
    shadowColor: "black",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 10,
  },
  elementsModal: {
    alignItems: "center",
  },
  bottomModal: {
    flexDirection: "row",
  },
  btnOpen: {
    borderRadius: 25,
    padding: 12,
    margin: 10,
  },
});