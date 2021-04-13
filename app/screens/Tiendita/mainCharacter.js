import React, { Component } from "react";
import { StyleSheet, View, Image, StatusBar, Modal, Text, TouchableHighlight, AsyncStorage, Alert } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import normalize from "react-native-normalize";
import { Audio } from "expo-av";
import firebase from "firebase";

export default class MainCharacter extends Component {
  constructor(props) {
    super(props);

    this.state = {
      modalVisible: false,
      charac: '',
      monedax: 0,
      image: '',
      tareas: this.props.route.params.tareas
    };
  }
  modalType = 1;

  setModalVisible = (visible, modalType) => {
    this.setState({ modalVisible: visible });
    this.modalType = modalType;
  };

  async componentDidMount() {

    this.sounds = [
      new Audio.Sound
    ]
    const status = {
      shouldPlay: true,
      isLooping: true
    }
    this.sounds[0].loadAsync(require('../../../assets/sources/Music/GameSample.mp3'), status, true);

    const getImage = async () =>{
      const userid = (firebase.auth().currentUser || {}).uid;
      const path = "characters/"+userid+"/character.png";
      const url = await firebase.storage().ref(path).getDownloadURL();
      this.setState({image: url});
      console.log(url);
      console.log(userid);
    };
    getImage();

    const storage = async () => {
      const value2 = await AsyncStorage.getItem('coins');
      const monedax = parseInt(value2);
      if (value != null && value2 != null) {
        if (monedax > 0) {
          this.setState({ monedax: monedax });
        }
        console.log(this.state.monedax);
        console.log(this.state.tareas);
      }
    };

    storage();

  }

  //#region MUSIC SETTINGS 
  playSound(index) {
    this.sounds[index].playAsync(0);
  }
  stop(index) {
    this.sounds[index].stopAsync(0);
  }
  pause(index) {
    this.sounds[index].pauseAsync(0);
  }
  //#endregion MUSIC SETTINGS

  renderModal = (modalType) => {
    switch (modalType) {
      case 1:
        return (
          <View style={styles.modalContainer}>
            <View style={styles.viewModal}>
              <View style={styles.elementsModal}>
                <Text style={styles.txtModal}>
                  Configuración de sonido
              </Text>
              </View>
              <View style={styles.bottomModal}>
                <TouchableHighlight
                  style={{ ...styles.btnOpen, backgroundColor: "#12947f" }} onPress={() => this.setModalVisible(false, this.playSound(0))}
                >
                  <Text>🔊</Text>
                </TouchableHighlight>
                <TouchableHighlight
                  style={{ ...styles.btnOpen, backgroundColor: "#e71414" }} onPress={() => this.setModalVisible(false, this.pause(0))}
                >
                  <Text>🔇</Text>
                </TouchableHighlight>
              </View>
            </View>
          </View>
        );
    }
  };

  render() {
    const imagen = this.state.charac;
    const monedax = this.state.monedax;
    console.log(imagen);
    return (
      <View style={styles.container}>
        <StatusBar barStyle="dark-content" />
        <View>
          <StatusBar hidden={true} />
        </View>
        <View style={styles.topContainer}>
          <View style={styles.coins}>
            <Image style={styles.coin} source={require('../../../assets/sources/Img-Tiendita/moneda.png')}></Image>
            <Text style={styles.txtMoneda}>x {monedax}</Text>
          </View>
        </View>
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
          <View style={styles.charaContainer}>
            <View style={styles.character}>
              <Image style={styles.img} source={{ uri: this.state.image}}></Image>
            </View>
          </View>
          <View style={styles.menuContainer}>
            <View style={styles.containBtn}>
              <View style={{ ...styles.Buttons }}>
                <TouchableOpacity style={{ marginTop: 10 }} onPress={() => this.props.navigation.navigate('listActivity', { tareas: this.state.tareas })}>
                  <Image style={styles.list} source={require('../../../assets/sources/Iconos/nota.png')}></Image>
                </TouchableOpacity>
                <TouchableOpacity style={{ marginTop: 10 }} onPress={() => this.props.navigation.navigate('gameRobot', { tareas: this.state.tareas })}>
                  <Image style={styles.list} source={require('../../../assets/sources/Iconos/robot.png')}></Image>
                </TouchableOpacity>
                <TouchableOpacity style={{ marginTop: 10 }} onPress={() => this.props.navigation.navigate('outsideStore', { tareas: this.state.tareas })}>
                  <Image style={styles.list} source={require('../../../assets/sources/Iconos/supermarket.png')}></Image>
                </TouchableOpacity>
                <TouchableOpacity style={{ marginTop: 10 }} onPress={() => this.props.navigation.navigate('alimentacion', { tareas: this.state.tareas })}>
                  <Image style={styles.list} source={require('../../../assets/sources/Iconos/comer.png')}></Image>
                </TouchableOpacity>
                <TouchableOpacity style={{ marginTop: 10 }} onPress={() => this.props.navigation.navigate('menuReciclaje', { tareas: this.state.tareas })}>
                  <Image style={styles.list} source={require('../../../assets/sources/Iconos/reciclaje.png')}></Image>
                </TouchableOpacity>
                <TouchableOpacity style={{ marginTop: 10 }} onPress={() => this.setModalVisible(true, 1)}>
                  <Image style={styles.list} source={require('../../../assets/sources/Iconos/ajustes.png')}></Image>
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
    flex: 0.5,
    flexDirection: "row",
  },
  barraBottom: {
    width: '100%'
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
    height: '65%'
  },
  character: {
    height: '60%',
    alignItems: "center"
  },
  coins: {
    flexDirection: "row",
    width: normalize(120, "width"),
    height: normalize(50, "height"),
    left: normalize(5, "width"),
    borderRadius: 20,
    borderWidth: 2,
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
    borderRadius: 25,
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
    width: "100%",
    resizeMode: "contain"
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
  }
});