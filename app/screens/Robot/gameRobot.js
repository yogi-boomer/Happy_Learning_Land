import React, { Component } from 'react';
import { StyleSheet, View, StatusBar, Image, Text, Animated, Modal, TouchableHighlight, Button, AsyncStorage, Alert } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import normalize from 'react-native-normalize';
import { createDndContext } from "react-native-easy-dnd";

const { Provider, Droppable, Draggable } = createDndContext();

export default class GameRobot extends Component {
  constructor(props) {
    super(props);

    this.state = {
      modalVisible: false,
      monedax: 0,
      tareas: this.props.route.params.tareas,
      reco: 5,
      setPieza: false,
      setPayload: false,
      setPayload2: false,
      setPayload3: false,
      setPayload4: false,
      setpayload5: false,
      setpayload6: false,
      setCountPieza: false,
      press1: "auto",
      press2: "auto",
      press3: "auto",
      press4: "auto",
      press5: "auto",
      press6: "auto",
      count: 0,
      suma: 1,
      setOpacity: 0.9,
      setOpacity2: 0.9,
      setOpacity3: 0.9,
      setOpacity4: 0.9,
      setOpacity5: 0.9,
      setOpacity6: 0.9,
      cabeza: require("../../../assets/sources/Img-Robot/11.png"),
      cabezaSombra: require("../../../assets/sources/Img-Robot/prev12.png"),
      torzo: require("../../../assets/sources/Img-Robot/13.png"),
      torzoSombra: require("../../../assets/sources/Img-Robot/prev15.png"),
      brazoDer: require("../../../assets/sources/Img-Robot/14.png"),
      brazoDerSombra: require("../../../assets/sources/Img-Robot/prev11.png"),
      brazoIzq: require("../../../assets/sources/Img-Robot/12.png"),
      brazoIzqSombra: require("../../../assets/sources/Img-Robot/prev14.png"),
      piernaDer: require("../../../assets/sources/Img-Robot/16.png"),
      piernaDerSombra: require("../../../assets/sources/Img-Robot/prev13.png"),
      piernaIzq: require("../../../assets/sources/Img-Robot/15.png"),
      piernaIzqSombra: require("../../../assets/sources/Img-Robot/prev16.png"),
      page: 0,
      resta: 1,
    };
  }

  modalType = 1;

  async componentDidMount() {
    const storage = async () => {
      const value = await AsyncStorage.getItem('coins');
      const monedax = parseInt(value);
      if (value != null) {
        if (monedax >= 1) {
          this.setState({ monedax: monedax });
        }
        console.log(value);
      }
    }
    storage();
  }

  load = async (value) => {
    await AsyncStorage.setItem('coins', value);
    console.log(value);
  }

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
                <Image style={styles.imgModals} source={require("../../../assets/sources/Img-Robot/logo.png")}></Image>
                <Text style={styles.txtModal}>1.- Arrastrar la pieza al lugar correspondiente.</Text>
                <Text style={styles.txtModal}>2.- Para armar una pieza en específico deja presionada la pieza.</Text>
              </View>
              <TouchableHighlight style={{ ...styles.btnOpen, backgroundColor: "salmon" }} onPress={() => this.setModalVisible(false)}>
                <Text>Continuar</Text>
              </TouchableHighlight>
            </View>
          </View>
        );
    }
  };

  nextPage() {
    let page = this.state.page;
    let nextPage = this.state.suma;
    if (page === 0) {
      page = page + nextPage;
      this.setState({ page: page });
      this.setState({
        cabeza: require("../../../assets/sources/Img-Robot/41.png"),
      });
      this.setState({
        torzo: require("../../../assets/sources/Img-Robot/43.png"),
      });
      this.setState({
        brazoDer: require("../../../assets/sources/Img-Robot/44.png"),
      });
      this.setState({
        brazoIzq: require("../../../assets/sources/Img-Robot/42.png"),
      });
      this.setState({
        piernaDer: require("../../../assets/sources/Img-Robot/46.png"),
      });
      this.setState({
        piernaIzq: require("../../../assets/sources/Img-Robot/45.png"),
      });
    } else if (page === 1) {
      page = page + nextPage;
      this.setState({ page: page });
      this.setState({
        cabeza: require("../../../assets/sources/Img-Robot/21.png"),
      });
      this.setState({
        torzo: require("../../../assets/sources/Img-Robot/23.png"),
      });
      this.setState({
        brazoDer: require("../../../assets/sources/Img-Robot/24.png"),
      });
      this.setState({
        brazoIzq: require("../../../assets/sources/Img-Robot/22.png"),
      });
      this.setState({
        piernaDer: require("../../../assets/sources/Img-Robot/26.png"),
      });
      this.setState({
        piernaIzq: require("../../../assets/sources/Img-Robot/25.png"),
      });
    } else if (page === 2) {
      page = page + nextPage;
      this.setState({ page: page });
      this.setState({
        cabeza: require("../../../assets/sources/Img-Robot/31.png"),
      });
      this.setState({
        torzo: require("../../../assets/sources/Img-Robot/33.png"),
      });
      this.setState({
        brazoDer: require("../../../assets/sources/Img-Robot/34.png"),
      });
      this.setState({
        brazoIzq: require("../../../assets/sources/Img-Robot/32.png"),
      });
      this.setState({
        piernaDer: require("../../../assets/sources/Img-Robot/36.png"),
      });
      this.setState({
        piernaIzq: require("../../../assets/sources/Img-Robot/35.png"),
      });
    } else if (page === 3) {
      this.setState({ page: 0 });
      this.setState({
        cabeza: require("../../../assets/sources/Img-Robot/11.png"),
      });
      this.setState({
        torzo: require("../../../assets/sources/Img-Robot/13.png"),
      });
      this.setState({
        brazoDer: require("../../../assets/sources/Img-Robot/14.png"),
      });
      this.setState({
        brazoIzq: require("../../../assets/sources/Img-Robot/12.png"),
      });
      this.setState({
        piernaDer: require("../../../assets/sources/Img-Robot/16.png"),
      });
      this.setState({
        piernaIzq: require("../../../assets/sources/Img-Robot/15.png"),
      });
    }
  }

  previousPage() {
    let prevPage = this.state.page;
    let rest = this.state.resta;
    if (prevPage === 0) {
      this.setState({ page: 3 });
      this.setState({
        cabeza: require("../../../assets/sources/Img-Robot/31.png"),
      });
      this.setState({
        torzo: require("../../../assets/sources/Img-Robot/33.png"),
      });
      this.setState({
        brazoDer: require("../../../assets/sources/Img-Robot/34.png"),
      });
      this.setState({
        brazoIzq: require("../../../assets/sources/Img-Robot/32.png"),
      });
      this.setState({
        piernaDer: require("../../../assets/sources/Img-Robot/36.png"),
      });
      this.setState({
        piernaIzq: require("../../../assets/sources/Img-Robot/35.png"),
      });
    } else if (prevPage === 3) {
      prevPage = prevPage - rest;
      this.setState({ page: prevPage });
      this.setState({
        cabeza: require("../../../assets/sources/Img-Robot/21.png"),
      });
      this.setState({
        torzo: require("../../../assets/sources/Img-Robot/23.png"),
      });
      this.setState({
        brazoDer: require("../../../assets/sources/Img-Robot/24.png"),
      });
      this.setState({
        brazoIzq: require("../../../assets/sources/Img-Robot/22.png"),
      });
      this.setState({
        piernaDer: require("../../../assets/sources/Img-Robot/26.png"),
      });
      this.setState({
        piernaIzq: require("../../../assets/sources/Img-Robot/25.png"),
      });
    } else if (prevPage === 2) {
      prevPage = prevPage - rest;
      this.setState({ page: prevPage });
      this.setState({
        cabeza: require("../../../assets/sources/Img-Robot/41.png"),
      });
      this.setState({
        torzo: require("../../../assets/sources/Img-Robot/43.png"),
      });
      this.setState({
        brazoDer: require("../../../assets/sources/Img-Robot/44.png"),
      });
      this.setState({
        brazoIzq: require("../../../assets/sources/Img-Robot/42.png"),
      });
      this.setState({
        piernaDer: require("../../../assets/sources/Img-Robot/46.png"),
      });
      this.setState({
        piernaIzq: require("../../../assets/sources/Img-Robot/45.png"),
      });
    } else if (prevPage === 1) {
      prevPage = prevPage - rest;
      this.setState({ page: prevPage });
      this.setState({
        cabeza: require("../../../assets/sources/Img-Robot/11.png"),
      });
      this.setState({
        torzo: require("../../../assets/sources/Img-Robot/13.png"),
      });
      this.setState({
        brazoDer: require("../../../assets/sources/Img-Robot/14.png"),
      });
      this.setState({
        brazoIzq: require("../../../assets/sources/Img-Robot/12.png"),
      });
      this.setState({
        piernaDer: require("../../../assets/sources/Img-Robot/16.png"),
      });
      this.setState({
        piernaIzq: require("../../../assets/sources/Img-Robot/15.png"),
      });
    }
  }

  refresh() {
    this.setState({
      cabeza: require("../../../assets/sources/Img-Robot/11.png"),
    });
    this.setState({
      cabezaSombra: require("../../../assets/sources/Img-Robot/prev12.png"),
    });
    this.setState({
      torzo: require("../../../assets/sources/Img-Robot/13.png"),
    });
    this.setState({
      torzoSombra: require("../../../assets/sources/Img-Robot/prev15.png"),
    });
    this.setState({
      brazoDer: require("../../../assets/sources/Img-Robot/14.png"),
    });
    this.setState({
      brazoDerSombra: require("../../../assets/sources/Img-Robot/prev11.png"),
    });
    this.setState({
      brazoIzq: require("../../../assets/sources/Img-Robot/12.png"),
    });
    this.setState({
      brazoIzqSombra: require("../../../assets/sources/Img-Robot/prev14.png"),
    });
    this.setState({
      piernaDer: require("../../../assets/sources/Img-Robot/16.png"),
    });
    this.setState({
      piernaDerSombra: require("../../../assets/sources/Img-Robot/prev13.png"),
    });
    this.setState({
      piernaIzq: require("../../../assets/sources/Img-Robot/15.png"),
    });
    this.setState({
      piernaIzqSombra: require("../../../assets/sources/Img-Robot/prev16.png"),
    });
    this.setState({ page: 0 });
    this.setState({ press1: "auto" });
    this.setState({ setPayload: false });
    this.setState({ press2: "auto" });
    this.setState({ setPayload2: false });
    this.setState({ press3: "auto" });
    this.setState({ setPayload3: false });
    this.setState({ press4: "auto" });
    this.setState({ setPayload4: false });
    this.setState({ press5: "auto" });
    this.setState({ setPayload5: false });
    this.setState({ press6: "auto" });
    this.setState({ setPayload6: false });
    this.setState({ setOpacity: 0.6 });
    this.setState({ setOpacity2: 0.96 });
    this.setState({ setOpacity3: 0.9 });
    this.setState({ setOpacity4: 0.9 });
    this.setState({ setOpacity5: 0.9 });
    this.setState({ setOpacity6: 0.9 });
  }

  plusCount() {
    let count = this.state.count;
    let suma = this.state.suma;
    count = count + suma;
    this.setState({ count: count });
    console.log(count);
  }

  probar() {
    let count = this.state.count;
    if (count === 6) {
      Alert.alert("¡Tú Robot funciona!");
      let moneda = this.state.monedax;
      let reco = this.state.reco;
      let suma = 0;
      suma = moneda + reco;
      this.setState({ monedax: suma });
      this.load(String(suma));
      this.props.navigation.push('gameRobot', { tareas: this.state.tareas });
    } else {
      Alert.alert("Parece que te faltan piezas por colocar");
    }
  }

  fadeShake() {
    Animated.sequence([
      Animated.timing(fadeAnim, {
        toValue: 10,
        duration: 100,
        useNativeDriver: true,
      }),
      Animated.timing(fadeAnim, {
        toValue: -10,
        duration: 100,
        useNativeDriver: true,
      }),
      Animated.timing(fadeAnim, {
        toValue: 10,
        duration: 100,
        useNativeDriver: true,
      }),
      Animated.timing(fadeAnim, {
        toValue: 0,
        duration: 100,
        useNativeDriver: true,
      }),
    ]).start();
  }

  render() {
    return (
      <Provider>
        <View style={styles.container}>
          <StatusBar barStyle="dark-content" />
          <View>
            <StatusBar hidden={true} />
          </View>
          <View style={styles.topContainer}></View>
          <View style={styles.elementsContainer}>
            <Modal
              animationType="slide"
              transparent={true}
              visible={this.state.modalVisible}
              onRequestClose={() => {
                this.setModalVisible(
                  !this.state.modalVisible,
                  this.modalType
                );
              }}
            >
              {this.renderModal(this.modalType)}
            </Modal>
            <View style={styles.elementsTop}>
              <View style={styles.coinContainer}>
                <View style={styles.coins}>
                  <Image
                    style={styles.coin}
                    source={require("../../../assets/sources/Img-Tiendita/moneda.png")}
                  ></Image>
                  <Text style={styles.txtCoin}>x {this.state.monedax}</Text>
                </View>
              </View>
              <View style={styles.blankSpace}></View>
              <View style={styles.btnBack}>
                <TouchableOpacity
                  onPress={() => this.props.navigation.goBack()}
                >
                  <Image
                    style={styles.img}
                    source={require('../../../assets/sources/Img-Tiendita/flecha_atras.png')}
                  ></Image>
                </TouchableOpacity>
              </View>
            </View>
            <Animated.View style={styles.robotContainer}>
              <View style={styles.robotContainer}>
                <View style={styles.blankLeft}></View>
                <View style={styles.robotSilhouette}>
                  <View style={styles.topPart}>
                    <View style={styles.blankLeftHead}></View>
                    <View style={styles.headSilhouette}>
                      <Droppable //CAMBIO CREACION DE DROPABLE
                        onEnter={() => {
                          console.log("Draggable entered");
                        }}
                        onLeave={() => {
                          console.log("Draggable left");
                          this.state.setCountPieza;
                        }}
                        onDrop={({ payload }) => {
                          if (payload === "cabeza") {
                            this.setState({ setOpacity: 0.1 });
                            this.plusCount();
                            this.setState({
                              cabezaSombra: this.state.cabeza,
                            });
                            this.setState({ press1: "none" });
                          } else {
                            this.setState({ press2: "auto" });
                            this.setState({ setPayload2: false });
                            this.setState({ press3: "auto" });
                            this.setState({ setPayload3: false });
                            this.setState({ press4: "auto" });
                            this.setState({ setPayload4: false });
                            this.setState({ press5: "auto" });
                            this.setState({ setPayload5: false });
                            this.setState({ press6: "auto" });
                            this.setState({ setPayload6: false });
                          }
                        }}
                      >
                        {({ active, viewProps }) => {
                          return (
                            <Animated.View
                              {...viewProps}
                              style={[
                                {
                                  flex: 4,
                                  alignItems: "center",
                                  position: "relative"
                                },
                                viewProps.style,
                              ]}
                            >
                              <Image
                                style={{ ...styles.imgFlechas }}
                                source={this.state.cabezaSombra}
                              ></Image>
                            </Animated.View>
                          );
                        }}
                      </Droppable>
                    </View>
                    <View style={styles.blankRightHead}></View>
                  </View>
                  <View style={styles.centerPart}>
                    <View style={styles.armLeftSilhouette}>
                      <Droppable //CAMBIO CREACION DE DROPABLE
                        onEnter={() => {
                          console.log("Draggable entered");
                        }}
                        onLeave={() => {
                          console.log("Draggable left");
                          this.state.setCountPieza;
                        }}
                        onDrop={({ payload }) => {
                          if (payload === "leftArm") {
                            this.setState({ setOpacity2: 0.1 });
                            this.plusCount();
                            this.setState({
                              brazoIzqSombra: this.state.brazoIzq,
                            });
                            this.setState({ press2: "none" });
                          } else {
                            this.setState({ press1: "auto" });
                            this.setState({ setPayload: false });
                            this.setState({ press3: "auto" });
                            this.setState({ setPayload3: false });
                            this.setState({ press4: "auto" });
                            this.setState({ setPayload4: false });
                            this.setState({ press5: "auto" });
                            this.setState({ setPayload5: false });
                            this.setState({ press6: "auto" });
                            this.setState({ setPayload6: false });
                          }
                        }}
                      >
                        {({ active, viewProps }) => {
                          return (
                            <Animated.View
                              {...viewProps}
                              style={[
                                {
                                  flex: 4
                                },
                                viewProps.style,
                              ]}
                            >
                              <Image
                                style={styles.imgFlechas}
                                source={this.state.brazoIzqSombra}
                              ></Image>
                            </Animated.View>
                          );
                        }}
                      </Droppable>
                    </View>
                    <View style={styles.torsoSilhouette}>
                      <Droppable //CAMBIO CREACION DE DROPABLE
                        onEnter={() => {
                          console.log("Draggable entered");
                        }}
                        onLeave={() => {
                          console.log("Draggable left");
                          this.state.setCountPieza;
                        }}
                        onDrop={({ payload }) => {
                          if (payload === "torso") {
                            this.setState({ setOpacity3: 0.1 });
                            this.plusCount();
                            this.setState({
                              torzoSombra: this.state.torzo,
                            });
                            this.setState({ press5: "none" });
                          } else {
                            this.setState({ press1: "auto" });
                            this.setState({ setPayload: false });
                            this.setState({ press3: "auto" });
                            this.setState({ setPayload3: false });
                            this.setState({ press4: "auto" });
                            this.setState({ setPayload4: false });
                            this.setState({ press2: "auto" });
                            this.setState({ setPayload2: false });
                            this.setState({ press6: "auto" });
                            this.setState({ setPayload6: false });
                          }
                        }}
                      >
                        {({ active, viewProps }) => {
                          return (
                            <Animated.View
                              {...viewProps}
                              style={[
                                {
                                  flex: 4
                                },
                                viewProps.style,
                              ]}
                            >
                              <Image
                                style={styles.imgFlechas}
                                source={this.state.torzoSombra}
                              ></Image>
                            </Animated.View>
                          );
                        }}
                      </Droppable>
                    </View>
                    <View style={styles.armRightSilhouette}>
                      <Droppable //CAMBIO CREACION DE DROPABLE
                        onEnter={() => {
                          console.log("Draggable entered");
                        }}
                        onLeave={() => {
                          console.log("Draggable left");
                          this.state.setCountPieza;
                        }}
                        onDrop={({ payload }) => {
                          if (payload === "rightArm") {
                            this.setState({ setOpacity4: 0.1 });
                            this.plusCount();
                            this.setState({
                              brazoDerSombra: this.state.brazoDer,
                            });
                            this.setState({ press3: "none" });
                          } else {
                            this.setState({ press1: "auto" });
                            this.setState({ setPayload: false });
                            this.setState({ press2: "auto" });
                            this.setState({ setPayload2: false });
                            this.setState({ press4: "auto" });
                            this.setState({ setPayload4: false });
                            this.setState({ press5: "auto" });
                            this.setState({ setPayload5: false });
                            this.setState({ press6: "auto" });
                            this.setState({ setPayload6: false });
                          }
                        }}
                      >
                        {({ active, viewProps }) => {
                          return (
                            <Animated.View
                              {...viewProps}
                              style={[
                                {
                                  flex: 4
                                },
                                viewProps.style,
                              ]}
                            >
                              <Image
                                style={styles.imgFlechas}
                                source={this.state.brazoDerSombra}
                              ></Image>
                            </Animated.View>
                          );
                        }}
                      </Droppable>
                    </View>
                  </View>
                  <View style={styles.bottomPart}>
                    <View style={styles.blankLeftLeg}></View>
                    <View style={styles.leftLegSilhouette}>
                      <Droppable //CAMBIO CREACION DE DROPABLE
                        onEnter={() => {
                          console.log("Draggable entered");
                        }}
                        onLeave={() => {
                          console.log("Draggable left");
                          this.state.setCountPieza;
                        }}
                        onDrop={({ payload }) => {
                          if (payload === "leftLeg") {
                            this.setState({ setOpacity5: 0.1 });
                            this.plusCount();
                            this.setState({
                              piernaDerSombra: this.state.piernaIzq,
                            });
                            this.setState({ press4: "none" });
                          } else {
                            this.setState({ press1: "auto" });
                            this.setState({ setPayload: false });
                            this.setState({ press2: "auto" });
                            this.setState({ setPayload2: false });
                            this.setState({ press3: "auto" });
                            this.setState({ setPayload3: false });
                            this.setState({ press5: "auto" });
                            this.setState({ setPayload5: false });
                            this.setState({ press6: "auto" });
                            this.setState({ setPayload6: false });
                          }
                        }}
                      >
                        {({ active, viewProps }) => {
                          return (
                            <Animated.View
                              {...viewProps}
                              style={[
                                {
                                  flex: 4
                                },
                                viewProps.style,
                              ]}
                            >
                              <Image
                                style={styles.imgFlechas}
                                source={this.state.piernaDerSombra}
                              ></Image>
                            </Animated.View>
                          );
                        }}
                      </Droppable>
                    </View>
                    <View style={styles.rightLegSilhouette}>
                      <Droppable //CAMBIO CREACION DE DROPABLE
                        onEnter={() => {
                          console.log("Draggable entered");
                        }}
                        onLeave={() => {
                          console.log("Draggable left");
                          this.state.setCountPieza;
                        }}
                        onDrop={({ payload }) => {
                          if (payload === "rightLeg") {
                            this.setState({ setOpacity6: 0.1 });
                            this.plusCount();
                            this.setState({
                              piernaIzqSombra: this.state.piernaDer,
                            });
                            this.setState({ press6: "none" });
                          } else {
                            this.setState({ press1: "auto" });
                            this.setState({ setPayload: false });
                            this.setState({ press2: "auto" });
                            this.setState({ setPayload2: false });
                            this.setState({ press3: "auto" });
                            this.setState({ setPayload3: false });
                            this.setState({ press5: "auto" });
                            this.setState({ setPayload5: false });
                            this.setState({ press4: "auto" });
                            this.setState({ setPayload4: false });
                          }
                        }}
                      >
                        {({ active, viewProps }) => {
                          return (
                            <Animated.View
                              {...viewProps}
                              style={[
                                {
                                  flex: 4
                                },
                                viewProps.style,
                              ]}
                            >
                              <Image
                                style={styles.imgFlechas}
                                source={this.state.piernaIzqSombra}
                              ></Image>
                            </Animated.View>
                          );
                        }}
                      </Droppable>
                    </View>
                    <View style={styles.blankRightLeg}></View>
                  </View>
                </View>
                <View style={styles.blankRight}>
                  <View style={{ ...styles.itemsContainer}}>
                    <TouchableOpacity onPress={() => this.setModalVisible(true, 1)}>
                      <Image
                        style={styles.imgRefresh}
                        source={require("../../../assets/sources/Img-Robot/info.png")}
                      ></Image>
                    </TouchableOpacity>
                  </View>
                  <View style={{ ...styles.itemsContainer}}>
                    <TouchableOpacity onPress={() => this.refresh()}>
                      <Image
                        style={styles.imgRefresh}
                        source={require("../../../assets/sources/Img-Robot/refresh.png")}
                      ></Image>
                    </TouchableOpacity>
                  </View>
                </View>
              </View>
            </Animated.View>
            <View style={styles.robotTxt}>
              <View style={styles.txtPiezas}>
                <Text style={styles.txtRobot}>Piezas del Robot</Text>
              </View>
              <View style={styles.btnContainer}>
                <View style={styles.btnProbar}>
                  <TouchableOpacity onPress={() => this.probar()}>
                    <Button title="Probar" color="#939b62"></Button>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
            <View style={styles.robotParts}>
              <View style={styles.prevContainer}>
                <TouchableOpacity onPress={() => this.previousPage()}>
                  <Image
                    style={styles.imgFlechas}
                    source={require("../../../assets/sources/Img-Robot/prev.png")}
                  ></Image>
                </TouchableOpacity>
              </View>
              <View style={styles.parts}>
                <View style={styles.upperBody}>
                  <View
                    pointerEvents={this.state.press2}
                    style={styles.leftArm}
                  >
                    <Draggable //CAMBIO CREACION DE DRAGGABLE
                      payload="leftArm"
                      reset={this.state.setPieza}
                      onDragStart={() => {
                        console.log("Started draggging");
                      }}
                      onDragEnd={() => {
                        this.setState({ setPayload2: true });
                      }}
                    >
                      {({ viewProps }) => {
                        return (
                          <Animated.View
                            {...viewProps}
                            style={[viewProps.style, { flex: 1 }]}
                          >
                            <Image
                              style={{
                                ...styles.imgParts,
                                opacity: this.state.setOpacity2,
                              }}
                              source={this.state.brazoIzq}
                            ></Image>
                          </Animated.View>
                        );
                      }}
                    </Draggable>
                  </View>
                  <View
                    pointerEvents={this.state.press1}
                    style={styles.head}
                  >
                    <Draggable //CAMBIO CREACION DE DRAGGABLE
                      payload="cabeza"
                      reset={this.state.setPieza}
                      onDragStart={() => {
                        console.log("Started draggging");
                      }}
                      onDragEnd={() => {
                        console.log("Ended draggging");
                        this.setState({ setPayload: true });
                      }}
                    >
                      {({ viewProps }) => {
                        return (
                          <Animated.View
                            {...viewProps}
                            style={[viewProps.style, { flex: 1 }]}
                          >
                            <Image
                              style={{
                                ...styles.imgParts,
                                opacity: this.state.setOpacity,
                              }}
                              source={this.state.cabeza}
                            ></Image>
                          </Animated.View>
                        );
                      }}
                    </Draggable>
                  </View>
                  <View
                    pointerEvents={this.state.press3}
                    style={styles.rightArm}
                  >
                    <Draggable //CAMBIO CREACION DE DRAGGABLE
                      payload="rightArm"
                      reset={this.state.setPieza}
                      onDragStart={() => {
                        console.log("Started draggging");
                      }}
                      onDragEnd={() => {
                        console.log("Ended draggging");
                        this.setState({ setPayload3: true });
                      }}
                    >
                      {({ viewProps }) => {
                        return (
                          <Animated.View
                            {...viewProps}
                            style={[viewProps.style, { flex: 1 }]}
                          >
                            <Image
                              style={{
                                ...styles.imgParts,
                                opacity: this.state.setOpacity4,
                              }}
                              source={this.state.brazoDer}
                            ></Image>
                          </Animated.View>
                        );
                      }}
                    </Draggable>
                  </View>
                </View>
                <View
                  pointerEvents={this.state.press4}
                  style={styles.loweBody}
                >
                  <View style={styles.leftLeg}>
                    <Draggable //CAMBIO CREACION DE DRAGGABLE
                      payload="leftLeg"
                      reset={this.state.setPieza}
                      onDragStart={() => {
                        console.log("Started draggging");
                      }}
                      onDragEnd={() => {
                        console.log("Ended draggging");
                        this.setState({ setPayload4: true });
                      }}
                    >
                      {({ viewProps }) => {
                        return (
                          <Animated.View
                            {...viewProps}
                            style={[viewProps.style, { flex: 1 }]}
                          >
                            <Image
                              style={{
                                ...styles.imgParts,
                                opacity: this.state.setOpacity5,
                              }}
                              source={this.state.piernaIzq}
                            ></Image>
                          </Animated.View>
                        );
                      }}
                    </Draggable>
                  </View>
                  <View
                    pointerEvents={this.state.press5}
                    style={styles.torso}
                  >
                    <Draggable //CAMBIO CREACION DE DRAGGABLE
                      payload="torso"
                      reset={this.state.setPieza}
                      onDragStart={() => {
                        console.log("Started draggging");
                      }}
                      onDragEnd={() => {
                        console.log("Ended draggging");
                        this.setState({ setpayload5: true });
                      }}
                    >
                      {({ viewProps }) => {
                        return (
                          <Animated.View
                            {...viewProps}
                            style={[viewProps.style, { flex: 1 }]}
                          >
                            <Image
                              style={{
                                ...styles.imgParts,
                                opacity: this.state.setOpacity3,
                              }}
                              source={this.state.torzo}
                            ></Image>
                          </Animated.View>
                        );
                      }}
                    </Draggable>
                  </View>
                  <View
                    pointerEvents={this.state.press6}
                    style={styles.rightLeg}
                  >
                    <Draggable //CAMBIO CREACION DE DRAGGABLE
                      payload="rightLeg"
                      reset={this.state.setPieza}
                      onDragStart={() => {
                        console.log("Started draggging");
                      }}
                      onDragEnd={() => {
                        console.log("Ended draggging");
                        this.setState({ setpayload6: true });
                      }}
                    >
                      {({ viewProps }) => {
                        return (
                          <Animated.View
                            {...viewProps}
                            style={[viewProps.style, { flex: 1 }]}
                          >
                            <Image
                              style={{
                                ...styles.imgParts,
                                opacity: this.state.setOpacity6,
                              }}
                              source={this.state.piernaDer}
                            ></Image>
                          </Animated.View>
                        );
                      }}
                    </Draggable>
                  </View>
                </View>
              </View>
              <View style={styles.nextContainer}>
                <TouchableOpacity onPress={() => this.nextPage()}>
                  <Image
                    style={styles.imgFlechas}
                    source={require("../../../assets/sources/Img-Robot/next.png")}
                  ></Image>
                </TouchableOpacity>
              </View>
            </View>
          </View>
          <View style={styles.bottomContainer}></View>
        </View>
      </Provider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "salmon",
  },
  topContainer: {
    flex: 0.35,
  },
  elementsContainer: {
    flex: 10,
    flexDirection: "column",
  },
  bottomContainer: {
    flex: 0.2,
  },
  elementsTop: {
    flex: 1,
    flexDirection: "row",
  },
  robotContainer: {
    flex: 4,
    flexDirection: "row",
  },
  robotTxt: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: "#f0e2d0",
  },
  robotParts: {
    flex: 4,
    flexDirection: "row",
  },
  blankLeft: {
    flex: 1,
  },
  robotSilhouette: {
    flex: 5,
    flexDirection: "column",
  },
  topPart: {
    flex: 3,
    flexDirection: "row",
  },
  blankLeftHead: {
    flex: 2,
  },
  headSilhouette: {
    flex: 4,
  },
  blankRightHead: {
    flex: 2,
  },
  centerPart: {
    flex: 3.5,
    flexDirection: "row",
  },
  armLeftSilhouette: {
    flex: 2,
  },
  torsoSilhouette: {
    flex: 4,
  },
  armRightSilhouette: {
    flex: 2,
  },
  bottomPart: {
    flex: 3.5,
    flexDirection: "row",
  },
  blankLeftLeg: {
    flex: 2,
  },
  leftLegSilhouette: {
    flex: 2,
  },
  rightLegSilhouette: {
    flex: 2,
  },
  blankRightLeg: {
    flex: 2,
  },
  blankRight: {
    flex: 1,
    flexDirection: "column"
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
    borderRadius: normalize(20),
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
  blankSpace: {
    width: "45%",
  },
  itemsContainer: {
    width: "100%",
    height: "20%",
    justifyContent: "center",
    alignItems: "center",
  },
  prevContainer: {
    flex: 0.5,
  },
  parts: {
    flex: 4,
    flexDirection: "column",
  },
  upperBody: {
    flex: 3,
    flexDirection: "row",
  },
  loweBody: {
    flex: 3,
    flexDirection: "row",
  },
  leftArm: {
    flex: 1,
  },
  head: {
    flex: 1,
  },
  rightArm: {
    flex: 1,
  },
  leftLeg: {
    flex: 1,
  },
  torso: {
    flex: 1,
  },
  rightLeg: {
    flex: 1,
  },
  nextContainer: {
    flex: 0.5,
  },
  imgRefresh: {
    width: normalize(40, "width"),
    height: normalize(40, "height"),
    resizeMode: "contain",
  },
  txtPiezas: {
    flex: 2,
    justifyContent: "center",
    alignItems: "center",
  },
  txtRobot: {
    fontWeight: "bold",
    fontSize: normalize(20),
    textAlign: "center",
  },
  btnContainer: {
    flex: 3,
  },
  btnProbar: {
    alignItems: "center",
  },
  imgFlechas: {
    width: "100%",
    height: "100%",
    resizeMode: "contain",
  },
  imgParts: {
    width: "100%",
    height: "100%",
    resizeMode: "contain",
  },
  modalContainer: {
    height: "100%",
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
  },
  btnBack: {
    width: "15%",
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  img: {
    width: normalize(40, "width"),
    height: normalize(40, "height"),
    resizeMode: "contain",
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
  btnOpen: {
    borderRadius: 25,
    padding: 12,
    margin: 10,
  },
});