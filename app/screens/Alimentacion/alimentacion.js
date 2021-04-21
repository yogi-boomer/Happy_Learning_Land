import React, { Component } from 'react';
import { Alert } from 'react-native';
import { StyleSheet, View, Image, Text, StatusBar, TouchableHighlight, Modal } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import normalize from 'react-native-normalize';
import Animated from 'react-native-reanimated';

export default class alimentacion extends Component {
  constructor(props) {
    super(props);

    this.state = {
      modalVisible: false,
      conteo: 0,
      barra: 0,
      image: ''
    };
   
  }

  async componentDidMount(){
    const getImage = async () =>{
      const userid = (firebase.auth().currentUser || {}).uid;
      const path = "characters/"+userid+"/character.png";
      const url = await firebase.storage().ref(path).getDownloadURL();
      this.setState({image: url});
      console.log(url);
      console.log(userid);
    };

    getImage();
  }

  modalType = 1;
  item = [{ key: '', src: '' }];
  daysTranscurred = 0;
  stateOfDay = 0;
  text_color = 'black';
  modalType = 0;
  foodTurn = 1;
  beverageTurn = 0;
  healthIndicator = 100;
  lastPoint = this.healthIndicator;
  pointAmount = 0;
  reward = 0;
  character = 0;
  initialPoints = this.healthIndicator;

  setModalVisible = (visible, modalType, listItem) => {
    this.setState({ modalVisible: visible });
    this.modalType = modalType;
    this.item = listItem;
  };
  healthIndicatorOperations = (value) => {
    let points = value;
    console.log(points);
    let conteo = this.state.conteo;
    conteo = points + conteo;
    this.setState({ conteo: conteo });
    console.log(conteo);
    let barra = this.state.barra
    barra = (conteo * -1)-150;
    this.setState({ barra: barra });
    if(conteo > 40){
      Alert.alert("Felicidades")
    }
    if(conteo < -63){
      Alert.alert("Cuidado")
    }
  }
  //render para las imagenes de estados de comida
  renderHealthIndicator = (item) => {
    switch (item) {
      case 1:
        return (
          <Image
            style={{ width: 30, height: 30, alignSelf: "center" }}
            source={require("../../../assets/sources/Img-Alimentacion/happy.png")}
          />
        );
      case 2:
        return (
          <Image
            style={{ width: 30, height: 30, alignSelf: "center" }}
            source={require("../../../assets/sources/Img-Alimentacion/neutral.png")}
          />
        );
      case 3:
        return (
          <Image
            style={{ width: 30, height: 30, alignSelf: 'center' }}
            source={require('../../../assets/sources/Img-Alimentacion/sad.png')}
          />
        )
    }
  }

  renderModal = (modalType) => {
    switch (modalType) {
      case 1:
        return (
          <View style={styles.modalContainer}>
            <View style={styles.viewModal}>
              <View style={styles.elementsModal}>
                <Text style={styles.txtModal}>
                  Estas a punto de consumir verduras
                </Text>
                <Image
                  style={{ ...styles.imgModals, marginTop: 20 }}
                  source={require("../../../assets/sources/Img-Alimentacion/foods/Verduras.png")}
                ></Image>
                <View style={{ flexDirection: "row" }}>
                  <Text style={{ ...styles.txtIndicador, marginTop: 5 }}>Indicador de Salud:</Text>
                  {this.renderHealthIndicator(1)}
                </View>
                <TouchableOpacity>
                  <Image
                    style={{ ...styles.imgSound, marginTop: 10 }}
                    source={require("../../../assets/sources/Img-Alimentacion/sound.png")}
                  ></Image>
                </TouchableOpacity>
              </View>
              <View style={styles.bottomModal}>
                <TouchableHighlight
                  style={{ ...styles.btnOpen, backgroundColor: "#e71414" }}
                  onPress={() => this.setModalVisible(false)}
                >
                  <Text>Cancelar</Text>
                </TouchableHighlight>
                <TouchableHighlight
                  style={{ ...styles.btnOpen, backgroundColor: "#12947f" }}
                  onPress={() => this.healthIndicatorOperations(5, this.setModalVisible(false))}
                >
                  <Text>Comer</Text>
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
                  Estas a punto de consumir una ensalada
                </Text>
                <Image
                  style={{ ...styles.imgModals, marginTop: 20 }}
                  source={require("../../../assets/sources/Img-Alimentacion/foods/Ensalada.png")}
                ></Image>
                <Text style={{ ...styles.txtIndicador, marginTop: 20 }}>Indicador de Salud:</Text>
                {this.renderHealthIndicator(1)}
                <TouchableOpacity>
                  <Image
                    style={{ ...styles.imgSound, marginTop: 10 }}
                    source={require("../../../assets/sources/Img-Alimentacion/sound.png")}
                  ></Image>
                </TouchableOpacity>
              </View>
              <View style={styles.bottomModal}>
                <TouchableHighlight
                  style={{ ...styles.btnOpen, backgroundColor: "#e71414" }}
                  onPress={() => this.setModalVisible(false)}
                >
                  <Text>Cancelar</Text>
                </TouchableHighlight>
                <TouchableHighlight
                  style={{ ...styles.btnOpen, backgroundColor: "#12947f" }}
                  onPress={() => this.healthIndicatorOperations(4, this.setModalVisible(false))}
                >
                  <Text>Comer</Text>
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
                  Estas a punto de consumir frutas
                </Text>
                <Image
                  style={{ ...styles.imgModals, marginTop: 20 }}
                  source={require("../../../assets/sources/Img-Alimentacion/foods/Frutas.png")}
                ></Image>
                <Text style={{ ...styles.txtIndicador, marginTop: 20 }}>Indicador de Salud:</Text>
                {this.renderHealthIndicator(1)}
                <TouchableOpacity>
                  <Image
                    style={{ ...styles.imgSound, marginTop: 10 }}
                    source={require("../../../assets/sources/Img-Alimentacion/sound.png")}
                  ></Image>
                </TouchableOpacity>
              </View>
              <View style={styles.bottomModal}>
                <TouchableHighlight
                  style={{ ...styles.btnOpen, backgroundColor: "#e71414" }}
                  onPress={() => this.setModalVisible(false)}
                >
                  <Text>Cancelar</Text>
                </TouchableHighlight>
                <TouchableHighlight
                  style={{ ...styles.btnOpen, backgroundColor: "#12947f" }}
                  onPress={() => this.healthIndicatorOperations(5, this.setModalVisible(false))}
                >
                  <Text>Comer</Text>
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
                  Estas a punto de consumir pollo
                </Text>
                <Image
                  style={{ ...styles.imgModals, marginTop: 20 }}
                  source={require("../../../assets/sources/Img-Alimentacion/foods/Pollo.png")}
                ></Image>
                <Text style={{ ...styles.txtIndicador, marginTop: 20 }}>Indicador de Salud:</Text>
                {this.renderHealthIndicator(2)}
                <TouchableOpacity>
                  <Image
                    style={{ ...styles.imgSound, marginTop: 10 }}
                    source={require("../../../assets/sources/Img-Alimentacion/sound.png")}
                  ></Image>
                </TouchableOpacity>
              </View>
              <View style={styles.bottomModal}>
                <TouchableHighlight
                  style={{ ...styles.btnOpen, backgroundColor: "#e71414" }}
                  onPress={() => this.setModalVisible(false)}
                >
                  <Text>Cancelar</Text>
                </TouchableHighlight>
                <TouchableHighlight
                  style={{ ...styles.btnOpen, backgroundColor: "#12947f" }}
                  onPress={() => this.healthIndicatorOperations(3, this.setModalVisible(false))}
                >
                  <Text>Comer</Text>
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
                  Estas a punto de consumir pescado
                </Text>
                <Image
                  style={{ ...styles.imgModals, marginTop: 20 }}
                  source={require("../../../assets/sources/Img-Alimentacion/foods/Pescado.png")}
                ></Image>
                <Text style={{ ...styles.txtIndicador, marginTop: 20 }}>Indicador de Salud:</Text>
                {this.renderHealthIndicator(1)}
                <TouchableOpacity>
                  <Image
                    style={{ ...styles.imgSound, marginTop: 10 }}
                    source={require("../../../assets/sources/Img-Alimentacion/sound.png")}
                  ></Image>
                </TouchableOpacity>
              </View>
              <View style={styles.bottomModal}>
                <TouchableHighlight
                  style={{ ...styles.btnOpen, backgroundColor: "#e71414" }}
                  onPress={() => this.setModalVisible(false)}
                >
                  <Text>Cancelar</Text>
                </TouchableHighlight>
                <TouchableHighlight
                  style={{ ...styles.btnOpen, backgroundColor: "#12947f" }}
                  onPress={() => this.healthIndicatorOperations(4, this.setModalVisible(false))}
                >
                  <Text>Comer</Text>
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
                  Estas a punto de consumir huevos
                </Text>
                <Image
                  style={{ ...styles.imgModals, marginTop: 20 }}
                  source={require("../../../assets/sources/Img-Alimentacion/foods/Huevos.png")}
                ></Image>
                <Text style={{ ...styles.txtIndicador, marginTop: 20 }}>Indicador de Salud:</Text>
                {this.renderHealthIndicator(2)}
                <TouchableOpacity>
                  <Image
                    style={{ ...styles.imgSound, marginTop: 10 }}
                    source={require("../../../assets/sources/Img-Alimentacion/sound.png")}
                  ></Image>
                </TouchableOpacity>
              </View>
              <View style={styles.bottomModal}>
                <TouchableHighlight
                  style={{ ...styles.btnOpen, backgroundColor: "#e71414" }}
                  onPress={() => this.setModalVisible(false)}
                >
                  <Text>Cancelar</Text>
                </TouchableHighlight>
                <TouchableHighlight
                  style={{ ...styles.btnOpen, backgroundColor: "#12947f" }}
                  onPress={() => this.healthIndicatorOperations(2, this.setModalVisible(false))}
                >
                  <Text>Comer</Text>
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
                  Estas a punto de consumir queso
                </Text>
                <Image
                  style={{ ...styles.imgModals, marginTop: 20 }}
                  source={require("../../../assets/sources/Img-Alimentacion/foods/Queso.png")}
                ></Image>
                <Text style={{ ...styles.txtIndicador, marginTop: 20 }}>Indicador de Salud:</Text>
                {this.renderHealthIndicator(1)}
                <TouchableOpacity>
                  <Image
                    style={{ ...styles.imgSound, marginTop: 10 }}
                    source={require("../../../assets/sources/Img-Alimentacion/sound.png")}
                  ></Image>
                </TouchableOpacity>
              </View>
              <View style={styles.bottomModal}>
                <TouchableHighlight
                  style={{ ...styles.btnOpen, backgroundColor: "#e71414" }}
                  onPress={() => this.setModalVisible(false)}
                >
                  <Text>Cancelar</Text>
                </TouchableHighlight>
                <TouchableHighlight
                  style={{ ...styles.btnOpen, backgroundColor: "#12947f" }}
                  onPress={() => this.healthIndicatorOperations(3, this.setModalVisible(false))}
                >
                  <Text>Comer</Text>
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
                  Estas a punto de consumir una almendra
                </Text>
                <Image
                  style={{ ...styles.imgModals, marginTop: 20 }}
                  source={require("../../../assets/sources/Img-Alimentacion/foods/Almendra.png")}
                ></Image>
                <Text style={{ ...styles.txtIndicador, marginTop: 20 }}>Indicador de Salud:</Text>
                {this.renderHealthIndicator(1)}
                <TouchableOpacity>
                  <Image
                    style={{ ...styles.imgSound, marginTop: 10 }}
                    source={require("../../../assets/sources/Img-Alimentacion/sound.png")}
                  ></Image>
                </TouchableOpacity>
              </View>
              <View style={styles.bottomModal}>
                <TouchableHighlight
                  style={{ ...styles.btnOpen, backgroundColor: "#e71414" }}
                  onPress={() => this.setModalVisible(false)}
                >
                  <Text>Cancelar</Text>
                </TouchableHighlight>
                <TouchableHighlight
                  style={{ ...styles.btnOpen, backgroundColor: "#12947f" }}
                  onPress={() => this.healthIndicatorOperations(3, this.setModalVisible(false))}
                >
                  <Text>Comer</Text>
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
                  Estas a punto de consumir un sandwich
                </Text>
                <Image
                  style={{ ...styles.imgModals, marginTop: 20 }}
                  source={require("../../../assets/sources/Img-Alimentacion/foods/Sandwich.png")}
                ></Image>
                <Text style={{ ...styles.txtIndicador, marginTop: 20 }}>Indicador de Salud:</Text>
                {this.renderHealthIndicator(2)}
                <TouchableOpacity>
                  <Image
                    style={{ ...styles.imgSound, marginTop: 10 }}
                    source={require("../../../assets/sources/Img-Alimentacion/sound.png")}
                  ></Image>
                </TouchableOpacity>
              </View>
              <View style={styles.bottomModal}>
                <TouchableHighlight
                  style={{ ...styles.btnOpen, backgroundColor: "#e71414" }}
                  onPress={() => this.setModalVisible(false)}
                >
                  <Text>Cancelar</Text>
                </TouchableHighlight>
                <TouchableHighlight
                  style={{ ...styles.btnOpen, backgroundColor: "#12947f" }}
                  onPress={() => this.healthIndicatorOperations(2, this.setModalVisible(false))}
                >
                  <Text>Comer</Text>
                </TouchableHighlight>
              </View>
            </View>
          </View>
        );
      case 10:
        return (
          <View style={styles.modalContainer}>
            <View style={styles.viewModal}>
              <View style={styles.elementsModal}>
                <Text style={styles.txtModal}>
                  Estas a punto de consumir una rebanada de pastel
                </Text>
                <Image
                  style={{ ...styles.imgModals, marginTop: 20 }}
                  source={require("../../../assets/sources/Img-Alimentacion/foods/Pastel.png")}
                ></Image>
                <Text style={{ ...styles.txtIndicador, marginTop: 20 }}>Indicador de Salud:</Text>
                {this.renderHealthIndicator(3)}
                <TouchableOpacity>
                  <Image
                    style={{ ...styles.imgSound, marginTop: 10 }}
                    source={require("../../../assets/sources/Img-Alimentacion/sound.png")}
                  ></Image>
                </TouchableOpacity>
              </View>
              <View style={styles.bottomModal}>
                <TouchableHighlight
                  style={{ ...styles.btnOpen, backgroundColor: "#e71414" }}
                  onPress={() => this.setModalVisible(false)}
                >
                  <Text>Cancelar</Text>
                </TouchableHighlight>
                <TouchableHighlight
                  style={{ ...styles.btnOpen, backgroundColor: "#12947f" }}
                  onPress={() => this.healthIndicatorOperations(-1, this.setModalVisible(false))}
                >
                  <Text>Comer</Text>
                </TouchableHighlight>
              </View>
            </View>
          </View>
        );
      case 11:
        return (
          <View style={styles.modalContainer}>
            <View style={styles.viewModal}>
              <View style={styles.elementsModal}>
                <Text style={styles.txtModal}>
                  Estas a punto de consumir una hamburguesa
                </Text>
                <Image
                  style={{ ...styles.imgModals, marginTop: 20 }}
                  source={require("../../../assets/sources/Img-Alimentacion/foods/Hamburguesa.png")}
                ></Image>
                <Text style={{ ...styles.txtIndicador, marginTop: 20 }}>Indicador de Salud:</Text>
                {this.renderHealthIndicator(3)}
                <TouchableOpacity>
                  <Image
                    style={{ ...styles.imgSound, marginTop: 10 }}
                    source={require("../../../assets/sources/Img-Alimentacion/sound.png")}
                  ></Image>
                </TouchableOpacity>
              </View>
              <View style={styles.bottomModal}>
                <TouchableHighlight
                  style={{ ...styles.btnOpen, backgroundColor: "#e71414" }}
                  onPress={() => this.setModalVisible(false)}
                >
                  <Text>Cancelar</Text>
                </TouchableHighlight>
                <TouchableHighlight
                  style={{ ...styles.btnOpen, backgroundColor: "#12947f" }}
                  onPress={() => this.healthIndicatorOperations(-4, this.setModalVisible(false))}
                >
                  <Text>Comer</Text>
                </TouchableHighlight>
              </View>
            </View>
          </View>
        );
      case 12:
        return (
          <View style={styles.modalContainer}>
            <View style={styles.viewModal}>
              <View style={styles.elementsModal}>
                <Text style={styles.txtModal}>
                  Estas a punto de consumir papas fritas
                </Text>
                <Image
                  style={{ ...styles.imgModals, marginTop: 20 }}
                  source={require("../../../assets/sources/Img-Alimentacion/foods/Papas.png")}
                ></Image>
                <Text style={{ ...styles.txtIndicador, marginTop: 20 }}>Indicador de Salud:</Text>
                {this.renderHealthIndicator(3)}
                <TouchableOpacity>
                  <Image
                    style={{ ...styles.imgSound, marginTop: 10 }}
                    source={require("../../../assets/sources/Img-Alimentacion/sound.png")}
                  ></Image>
                </TouchableOpacity>
              </View>
              <View style={styles.bottomModal}>
                <TouchableHighlight
                  style={{ ...styles.btnOpen, backgroundColor: "#e71414" }}
                  onPress={() => this.setModalVisible(false)}
                >
                  <Text>Cancelar</Text>
                </TouchableHighlight>
                <TouchableHighlight
                  style={{ ...styles.btnOpen, backgroundColor: "#12947f" }}
                  onPress={() => this.healthIndicatorOperations(-2, this.setModalVisible(false))}
                >
                  <Text>Comer</Text>
                </TouchableHighlight>
              </View>
            </View>
          </View>
        );
      case 13:
        return (
          <View style={styles.modalContainer}>
            <View style={styles.viewModal}>
              <View style={styles.elementsModal}>
                <Text style={styles.txtModal}>
                  Estas a punto de tomar agua simple
                </Text>
                <Image
                  style={{ ...styles.imgModals, marginTop: 20 }}
                  source={require("../../../assets/sources/Img-Alimentacion/foods/AguaSimple.png")}
                ></Image>
                <Text style={{ ...styles.txtIndicador, marginTop: 20 }}>Indicador de Salud:</Text>
                {this.renderHealthIndicator(1)}
                <TouchableOpacity>
                  <Image
                    style={{ ...styles.imgSound, marginTop: 10 }}
                    source={require("../../../assets/sources/Img-Alimentacion/sound.png")}
                  ></Image>
                </TouchableOpacity>
              </View>
              <View style={styles.bottomModal}>
                <TouchableHighlight
                  style={{ ...styles.btnOpen, backgroundColor: "#e71414" }}
                  onPress={() => this.setModalVisible(false)}
                >
                  <Text>Cancelar</Text>
                </TouchableHighlight>
                <TouchableHighlight
                  style={{ ...styles.btnOpen, backgroundColor: "#12947f" }}
                  onPress={() => this.healthIndicatorOperations(4, this.setModalVisible(false))}
                >
                  <Text>Comer</Text>
                </TouchableHighlight>
              </View>
            </View>
          </View>
        );
      case 14:
        return (
          <View style={styles.modalContainer}>
            <View style={styles.viewModal}>
              <View style={styles.elementsModal}>
                <Text style={styles.txtModal}>
                  Estas a punto de tomar agua de limón
                </Text>
                <Image
                  style={{ ...styles.imgModals, marginTop: 20 }}
                  source={require("../../../assets/sources/Img-Alimentacion/foods/AguaLimon.png")}
                ></Image>
                <Text style={{ ...styles.txtIndicador, marginTop: 20 }}>Indicador de Salud:</Text>
                {this.renderHealthIndicator(2)}
                <TouchableOpacity>
                  <Image
                    style={{ ...styles.imgSound, marginTop: 10 }}
                    source={require("../../../assets/sources/Img-Alimentacion/sound.png")}
                  ></Image>
                </TouchableOpacity>
              </View>
              <View style={styles.bottomModal}>
                <TouchableHighlight
                  style={{ ...styles.btnOpen, backgroundColor: "#e71414" }}
                  onPress={() => this.setModalVisible(false)}
                >
                  <Text>Cancelar</Text>
                </TouchableHighlight>
                <TouchableHighlight
                  style={{ ...styles.btnOpen, backgroundColor: "#12947f" }}
                  onPress={() => this.healthIndicatorOperations(2, this.setModalVisible(false))}
                >
                  <Text>Comer</Text>
                </TouchableHighlight>
              </View>
            </View>
          </View>
        );
      case 15:
        return (
          <View style={styles.modalContainer}>
            <View style={styles.viewModal}>
              <View style={styles.elementsModal}>
                <Text style={styles.txtModal}>
                  Estas a punto de tomar agua de naranja
                </Text>
                <Image
                  style={{ ...styles.imgModals, marginTop: 20 }}
                  source={require("../../../assets/sources/Img-Alimentacion/foods/AguaNaranja.png")}
                ></Image>
                <Text style={{ ...styles.txtIndicador, marginTop: 20 }}>Indicador de Salud:</Text>
                {this.renderHealthIndicator(1)}
                <TouchableOpacity>
                  <Image
                    style={{ ...styles.imgSound, marginTop: 10 }}
                    source={require("../../../assets/sources/Img-Alimentacion/sound.png")}
                  ></Image>
                </TouchableOpacity>
              </View>
              <View style={styles.bottomModal}>
                <TouchableHighlight
                  style={{ ...styles.btnOpen, backgroundColor: "#e71414" }}
                  onPress={() => this.setModalVisible(false)}
                >
                  <Text>Cancelar</Text>
                </TouchableHighlight>
                <TouchableHighlight
                  style={{ ...styles.btnOpen, backgroundColor: "#12947f" }}
                  onPress={() => this.healthIndicatorOperations(3, this.setModalVisible(false))}
                >
                  <Text>Comer</Text>
                </TouchableHighlight>
              </View>
            </View>
          </View>
        );
      case 16:
        return (
          <View style={styles.modalContainer}>
            <View style={styles.viewModal}>
              <View style={styles.elementsModal}>
                <Text style={styles.txtModal}>
                  Estas a punto de tomar un jugo de naranja
                </Text>
                <Image
                  style={{ ...styles.imgModals, marginTop: 20 }}
                  source={require("../../../assets/sources/Img-Alimentacion/foods/JugoNaranja.png")}
                ></Image>
                <Text style={{ ...styles.txtIndicador, marginTop: 20 }}>Indicador de Salud:</Text>
                {this.renderHealthIndicator(1)}
                <TouchableOpacity>
                  <Image
                    style={{ ...styles.imgSound, marginTop: 10 }}
                    source={require("../../../assets/sources/Img-Alimentacion/sound.png")}
                  ></Image>
                </TouchableOpacity>
              </View>
              <View style={styles.bottomModal}>
                <TouchableHighlight
                  style={{ ...styles.btnOpen, backgroundColor: "#e71414" }}
                  onPress={() => this.setModalVisible(false)}
                >
                  <Text>Cancelar</Text>
                </TouchableHighlight>
                <TouchableHighlight
                  style={{ ...styles.btnOpen, backgroundColor: "#12947f" }}
                  onPress={() => this.healthIndicatorOperations(4, this.setModalVisible(false))}
                >
                  <Text>Comer</Text>
                </TouchableHighlight>
              </View>
            </View>
          </View>
        );
      case 17:
        return (
          <View style={styles.modalContainer}>
            <View style={styles.viewModal}>
              <View style={styles.elementsModal}>
                <Text style={styles.txtModal}>
                  Estas a punto de tomar leche
                </Text>
                <Image
                  style={{ ...styles.imgModals, marginTop: 20 }}
                  source={require("../../../assets/sources/Img-Alimentacion/foods/Leche.png")}
                ></Image>
                <Text style={{ ...styles.txtIndicador, marginTop: 20 }}>Indicador de Salud:</Text>
                {this.renderHealthIndicator(1)}
                <TouchableOpacity>
                  <Image
                    style={{ ...styles.imgSound, marginTop: 10 }}
                    source={require("../../../assets/sources/Img-Alimentacion/sound.png")}
                  ></Image>
                </TouchableOpacity>
              </View>
              <View style={styles.bottomModal}>
                <TouchableHighlight
                  style={{ ...styles.btnOpen, backgroundColor: "#e71414" }}
                  onPress={() => this.setModalVisible(false)}
                >
                  <Text>Cancelar</Text>
                </TouchableHighlight>
                <TouchableHighlight
                  style={{ ...styles.btnOpen, backgroundColor: "#12947f" }}
                  onPress={() => this.healthIndicatorOperations(3, this.setModalVisible(false))}
                >
                  <Text>Comer</Text>
                </TouchableHighlight>
              </View>
            </View>
          </View>
        );
      case 18:
        return (
          <View style={styles.modalContainer}>
            <View style={styles.viewModal}>
              <View style={styles.elementsModal}>
                <Text style={styles.txtModal}>
                  Estas a punto de tomar leche con chocolate
                </Text>
                <Image
                  style={{ ...styles.imgModals, marginTop: 20 }}
                  source={require("../../../assets/sources/Img-Alimentacion/foods/LecheC.png")}
                ></Image>
                <Text style={{ ...styles.txtIndicador, marginTop: 20 }}>Indicador de Salud:</Text>
                {this.renderHealthIndicator(2)}
                <TouchableOpacity>
                  <Image
                    style={{ ...styles.imgSound, marginTop: 10 }}
                    source={require("../../../assets/sources/Img-Alimentacion/sound.png")}
                  ></Image>
                </TouchableOpacity>
              </View>
              <View style={styles.bottomModal}>
                <TouchableHighlight
                  style={{ ...styles.btnOpen, backgroundColor: "#e71414" }}
                  onPress={() => this.setModalVisible(false)}
                >
                  <Text>Cancelar</Text>
                </TouchableHighlight>
                <TouchableHighlight
                  style={{ ...styles.btnOpen, backgroundColor: "#12947f" }}
                  onPress={() => this.healthIndicatorOperations(2, this.setModalVisible(false))}
                >
                  <Text>Comer</Text>
                </TouchableHighlight>
              </View>
            </View>
          </View>
        );
      case 19:
        return (
          <View style={styles.modalContainer}>
            <View style={styles.viewModal}>
              <View style={styles.elementsModal}>
                <Text style={styles.txtModal}>
                  Estas a punto de tomar un refresco de cola
                </Text>
                <Image
                  style={{ ...styles.imgModals, marginTop: 20 }}
                  source={require("../../../assets/sources/Img-Alimentacion/foods/RefrescoCola.png")}
                ></Image>
                <Text style={{ ...styles.txtIndicador, marginTop: 20 }}>Indicador de Salud:</Text>
                {this.renderHealthIndicator(3)}
                <TouchableOpacity>
                  <Image
                    style={{ ...styles.imgSound, marginTop: 10 }}
                    source={require("../../../assets/sources/Img-Alimentacion/sound.png")}
                  ></Image>
                </TouchableOpacity>
              </View>
              <View style={styles.bottomModal}>
                <TouchableHighlight
                  style={{ ...styles.btnOpen, backgroundColor: "#e71414" }}
                  onPress={() => this.setModalVisible(false)}
                >
                  <Text>Cancelar</Text>
                </TouchableHighlight>
                <TouchableHighlight
                  style={{ ...styles.btnOpen, backgroundColor: "#12947f" }}
                  onPress={() => this.healthIndicatorOperations(-6, this.setModalVisible(false))}
                >
                  <Text>Comer</Text>
                </TouchableHighlight>
              </View>
            </View>
          </View>
        );
      case 20:
        return (
          <View style={styles.modalContainer}>
            <View style={styles.viewModal}>
              <View style={styles.elementsModal}>
                <Text style={styles.txtModal}>
                  Estas a punto de tomar un refresco
                </Text>
                <Image
                  style={{ ...styles.imgModals, marginTop: 20 }}
                  source={require("../../../assets/sources/Img-Alimentacion/foods/Refresco.png")}
                ></Image>
                <Text style={{ ...styles.txtIndicador, marginTop: 20 }}>Indicador de Salud:</Text>
                {this.renderHealthIndicator(3)}
                <TouchableOpacity>
                  <Image
                    style={{ ...styles.imgSound, marginTop: 10 }}
                    source={require("../../../assets/sources/Img-Alimentacion/sound.png")}
                  ></Image>
                </TouchableOpacity>
              </View>
              <View style={styles.bottomModal}>
                <TouchableHighlight
                  style={{ ...styles.btnOpen, backgroundColor: "#e71414" }}
                  onPress={() => this.setModalVisible(false)}
                >
                  <Text>Cancelar</Text>
                </TouchableHighlight>
                <TouchableHighlight
                  style={{ ...styles.btnOpen, backgroundColor: "#12947f" }}
                  onPress={() => this.healthIndicatorOperations(-3, this.setModalVisible(false))}
                >
                  <Text>Comer</Text>
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
        <StatusBar barStyle="dark-content" />
        <View>
          <StatusBar hidden={true} />
        </View>
        <View style={styles.topContainer}>

        </View>
        <View style={styles.elementsContainer}>
          <Modal
            animationType="slide"
            transparent={true}
            visible={this.state.modalVisible}
            onRequestClose={() => {
              this.setModalVisible(!this.state.modalVisible, this.item, this.modalType);
            }}
          >
            {this.renderModal(this.modalType)}
          </Modal>
          <View style={styles.topElements}>
            <View style={styles.coinContainer}>
              <View style={styles.coins}>
                <Image style={styles.coin} source={require("../../../assets/sources/Img-Tiendita/moneda.png")}></Image>
                <Text style={styles.txtCoin}>x</Text>
              </View>
            </View>
            <View style={{ width: '45%' }}>

            </View>
            <View style={styles.flecha_atras}>
              <TouchableOpacity onPress={() => this.props.navigation.goBack()}>
                <Image style={styles.imgBack} source={require('../../../assets/sources/Img-Tiendita/flecha_atras.png')}></Image>
              </TouchableOpacity>
            </View>
          </View>
          <View style={styles.centerElements}>
            <View style={styles.barraContainer}>
              <Image style={styles.img} source={require("../../../assets/sources/Img-Alimentacion/status_bar.png")}></Image>
              <Animated.View style={{...styles.cuadrito, marginTop: this.state.barra}}>
                 
              </Animated.View>
            </View>
            <View style={styles.characterContainer}>
              <Image style={styles.img} source={{ uri: this.state.image}}></Image>
            </View>
          </View>
          <View style={styles.bottomElements}>
            <View style={{ flex: 0.5 }}>

            </View>
            <View style={styles.foodContainer}>
              <View style={styles.txtContainer}>
                <Text style={styles.txtFood}>
                  Alimentos
                </Text>
              </View>
              <View style={styles.food}>
                <View style={styles.firstColumn}>
                  <View style={{ flex: 1 }}>
                    <TouchableOpacity onPress={() => this.setModalVisible(true, 1)}>
                      <Image style={styles.img} source={require("../../../assets/sources/Img-Alimentacion/foods/Verduras.png")}></Image>
                    </TouchableOpacity>
                  </View>
                  <View style={{ flex: 1 }}>
                    <TouchableOpacity onPress={() => this.setModalVisible(true, 2)}>
                      <Image style={styles.img} source={require("../../../assets/sources/Img-Alimentacion/foods/Ensalada.png")}></Image>
                    </TouchableOpacity>
                  </View>
                  <View style={{ flex: 1 }}>
                    <TouchableOpacity onPress={() => this.setModalVisible(true, 3)}>
                      <Image style={styles.img} source={require("../../../assets/sources/Img-Alimentacion/foods/Frutas.png")}></Image>
                    </TouchableOpacity>
                  </View>
                </View>
                <View style={styles.secondColumn}>
                  <View style={{ flex: 1 }}>
                    <TouchableOpacity onPress={() => this.setModalVisible(true, 4)}>
                      <Image style={styles.img} source={require("../../../assets/sources/Img-Alimentacion/foods/Pollo.png")}></Image>
                    </TouchableOpacity>
                  </View>
                  <View style={{ flex: 1 }}>
                    <TouchableOpacity onPress={() => this.setModalVisible(true, 5)}>
                      <Image style={styles.img} source={require("../../../assets/sources/Img-Alimentacion/foods/Pescado.png")}></Image>
                    </TouchableOpacity>
                  </View>
                  <View style={{ flex: 1 }}>
                    <TouchableOpacity onPress={() => this.setModalVisible(true, 6)}>
                      <Image style={styles.img} source={require("../../../assets/sources/Img-Alimentacion/foods/Huevos.png")}></Image>
                    </TouchableOpacity>
                  </View>
                </View>
                <View style={styles.thirdColumn}>
                  <View style={{ flex: 1 }}>
                    <TouchableOpacity onPress={() => this.setModalVisible(true, 7)}>
                      <Image style={styles.img} source={require("../../../assets/sources/Img-Alimentacion/foods/Queso.png")}></Image>
                    </TouchableOpacity>
                  </View>
                  <View style={{ flex: 1 }}>
                    <TouchableOpacity onPress={() => this.setModalVisible(true, 8)}>
                      <Image style={styles.img} source={require("../../../assets/sources/Img-Alimentacion/foods/Almendra.png")}></Image>
                    </TouchableOpacity>
                  </View>
                  <View style={{ flex: 1 }}>
                    <TouchableOpacity onPress={() => this.setModalVisible(true, 9)}>
                      <Image style={styles.img} source={require("../../../assets/sources/Img-Alimentacion/foods/Sandwich.png")}></Image>
                    </TouchableOpacity>
                  </View>
                </View>
                <View style={styles.fourthColumn}>
                  <View style={{ flex: 1 }}>
                    <TouchableOpacity onPress={() => this.setModalVisible(true, 10)}>
                      <Image style={styles.img} source={require("../../../assets/sources/Img-Alimentacion/foods/Pastel.png")}></Image>
                    </TouchableOpacity>
                  </View>
                  <View style={{ flex: 1 }}>
                    <TouchableOpacity onPress={() => this.setModalVisible(true, 11)}>
                      <Image style={styles.img} source={require("../../../assets/sources/Img-Alimentacion/foods/Hamburguesa.png")}></Image>
                    </TouchableOpacity>
                  </View>
                  <View style={{ flex: 1 }}>
                    <TouchableOpacity onPress={() => this.setModalVisible(true, 12)}>
                      <Image style={styles.img} source={require("../../../assets/sources/Img-Alimentacion/foods/Papas.png")}></Image>
                    </TouchableOpacity>
                  </View>
                </View>
              </View>
            </View>
            <View style={styles.beverageContainer}>
              <View style={styles.txtContainer}>
                <Text style={styles.txtFood}>
                  Bebidas
                </Text>
              </View>
              <View style={styles.beverage}>
                <View style={styles.firstColumn}>
                  <View style={{ flex: 1 }}>
                    <TouchableOpacity onPress={() => this.setModalVisible(true, 13)}>
                      <Image style={styles.img} source={require("../../../assets/sources/Img-Alimentacion/foods/AguaSimple.png")}></Image>
                    </TouchableOpacity>
                  </View>
                  <View style={{ flex: 1 }}>
                    <TouchableOpacity onPress={() => this.setModalVisible(true, 14)}>
                      <Image style={styles.img} source={require("../../../assets/sources/Img-Alimentacion/foods/AguaLimon.png")}></Image>
                    </TouchableOpacity>
                  </View>
                  <View style={{ flex: 1 }}>
                    <TouchableOpacity onPress={() => this.setModalVisible(true, 15)}>
                      <Image style={styles.img} source={require("../../../assets/sources/Img-Alimentacion/foods/AguaNaranja.png")}></Image>
                    </TouchableOpacity>
                  </View>
                </View>
                <View style={styles.secondColumn}>
                  <View style={{ flex: 1 }}>
                    <TouchableOpacity onPress={() => this.setModalVisible(true, 16)}>
                      <Image style={styles.img} source={require("../../../assets/sources/Img-Alimentacion/foods/JugoNaranja.png")}></Image>
                    </TouchableOpacity>
                  </View>
                  <View style={{ flex: 1 }}>
                    <TouchableOpacity onPress={() => this.setModalVisible(true, 17)}>
                      <Image style={styles.img} source={require("../../../assets/sources/Img-Alimentacion/foods/Leche.png")}></Image>
                    </TouchableOpacity>
                  </View>
                  <View style={{ flex: 1 }}>
                    <TouchableOpacity onPress={() => this.setModalVisible(true, 18)}>
                      <Image style={styles.img} source={require("../../../assets/sources/Img-Alimentacion/foods/LecheC.png")}></Image>
                    </TouchableOpacity>
                  </View>
                </View>
                <View style={styles.thirdColumn}>
                  <View style={{ flex: 0.5 }}>

                  </View>
                  <View style={{ flex: 1 }}>
                    <TouchableOpacity onPress={() => this.setModalVisible(true, 19)}>
                      <Image style={styles.img} source={require("../../../assets/sources/Img-Alimentacion/foods/RefrescoCola.png")}></Image>
                    </TouchableOpacity>
                  </View>
                  <View style={{ flex: 1 }}>
                    <TouchableOpacity onPress={() => this.setModalVisible(true, 20)}>
                      <Image style={styles.img} source={require("../../../assets/sources/Img-Alimentacion/foods/Refresco.png")}></Image>
                    </TouchableOpacity>
                  </View>
                  <View style={{ flex: 0.5 }}>

                  </View>
                </View>
                <View style={styles.fourthColumn}>

                </View>
              </View>
            </View>
            <View style={{ flex: 0.5 }}>

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
    flex: 0.35
  },
  elementsContainer: {
    flex: 10,
    flexDirection: "column"
  },
  topElements: {
    flex: 1,
    flexDirection: "row"
  },
  coinContainer: {
    width: "40%",
    justifyContent: "center",
    alignItems: "center",
  },
  coins: {
    flexDirection: "row",
    width: normalize(120, "width"),
    height: normalize(50, "height"),
    borderRadius: 20,
    borderWidth: 2,
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
  flecha_atras: {
    width: "15%",
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  imgBack: {
    width: normalize(40, "width"),
    height: normalize(40, "height"),
    resizeMode: "contain",
  },
  centerElements: {
    flex: 4,
    flexDirection: "row"
  },
  barraContainer: {
    flex: 4,
   
  },
  characterContainer: {
    flex: 6
  },
  img: {
    height: "100%",
    width: "100%",
    resizeMode: "contain",
  },
  bottomElements: {
    flex: 5,
    flexDirection: "row",
  },
  txtContainer: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: "#f0e2d0"
  },
  txtFood: {
    fontWeight: "bold",
    fontSize: normalize(20),
    textAlign: "center",
  },
  foodContainer: {
    flex: 5,
    flexDirection: "column"
  },
  food: {
    flex: 9,
    flexDirection: "column"
  },
  beverageContainer: {
    flex: 5,
    flexDirection: "column"
  },
  beverage: {
    flex: 9,
    flexDirection: "column"
  },
  firstColumn: {
    flex: 1,
    flexDirection: "row",
  },
  secondColumn: {
    flex: 1,
    flexDirection: "row",
  },
  thirdColumn: {
    flex: 1,
    flexDirection: "row",
  },
  fourthColumn: {
    flex: 1,
    flexDirection: "row",
  },
  bottomContainer: {
    flex: 0.2,
    flexDirection: "row"
  },
  modalContainer: {
    height: "100%",
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
  },
  txtModal: {
    textAlign: "center",
    fontSize: normalize(20),
    fontWeight: "bold",
  },
  txtIndicador: {
    textAlign: "center",
    fontSize: normalize(20)
  },
  imgModals: {
    width: normalize(100, "width"),
    height: normalize(100, "height"),
    resizeMode: "contain",
  },
  imgSound: {
    width: normalize(50, "width"),
    height: normalize(50, "height"),
    resizeMode: "contain"
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
    borderWidth: 2,
    padding: 12,
    margin: 10,
  },
  cuadrito: {
    width: 10,
    height: 10,
    backgroundColor: "black",
  marginStart: 20,
  marginTop: -55,
    marginLeft: 58,
  },
  
});