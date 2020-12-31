import React, { Component } from "react";
import {
  StyleSheet,
  View,
  Image,
  Text,
  StatusBar,
  Animated,
} from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import normalize from "react-native-normalize";
import { useNavigation } from "@react-navigation/native";

import facil from "../data/facil";
import intermedio from "../data/intermedio";
import dificil from "../data/dificil";
import tutorial from "../data/tutorial";

export default class MenuReciclaje extends Component {
    render() {
        return (
            <View style={styles.container}>
                <StatusBar barStyle="dark-content" />
                <View>
                    <StatusBar hidden={true} />
                </View>
                <View style={styles.elementsContainer}>
                    <View style={styles.blankLeft}></View>
                    <View style={styles.elements}>
                        <View style={styles.centerMenu}>
                            <View style={styles.logotipo}>
                                <Image
                                    style={styles.imgLogo}
                                    source={require("../../../../assets/sources/Img-Reciclaje/logo.png")}
                                ></Image>
                            </View>
                            <View style={styles.btnContainer}>
                                <View style={styles.viewTutorial}>
                                    <View style={{ ...styles.buttons, backgroundColor: "beige" }}>
                                        <TouchableOpacity
                                            onPress={() =>
                                                this.props.navigation.navigate("game_tutorial", {
                                                    questions: tutorial,
                                                })
                                            }
                                        >
                                            <Text style={styles.txtMenu}>Tutorial</Text>
                                        </TouchableOpacity>
                                    </View>
                                </View>
                                <View style={styles.viewFacil}>
                                    <View style={{ ...styles.buttons, backgroundColor: "pink" }}>
                                        <TouchableOpacity
                                            onPress={() =>
                                                this.props.navigation.navigate("game_facil", {
                                                    questions: facil,
                                                })
                                            }
                                        >
                                            <Text style={styles.txtMenu}>Fácil</Text>
                                        </TouchableOpacity>
                                    </View>
                                </View>
                                <View style={styles.viewIntermedio}>
                                    <View style={{ ...styles.buttons, backgroundColor: "salmon" }}>
                                        <TouchableOpacity
                                            onPress={() =>
                                                this.props.navigation.navigate("game_intermedio", {
                                                    questions: intermedio,
                                                })
                                            }
                                        >
                                            <Text style={styles.txtMenu}>Intermedio</Text>
                                        </TouchableOpacity>
                                    </View>
                                </View>
                                <View style={styles.viewDificil}>
                                    <View style={{ ...styles.buttons, backgroundColor: "violet" }}>
                                        <TouchableOpacity
                                            onPress={() =>
                                                this.props.navigation.navigate("game_dificil", {
                                                    questions: dificil,
                                                })
                                            }
                                        >
                                            <Text style={styles.txtMenu}>Difícil</Text>
                                        </TouchableOpacity>
                                    </View>
                                </View>
                            </View>
                        </View>
                        <View style={styles.blankBottom}></View>
                    </View>
                    <View style={styles.blankRight}></View>
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
    backgroundColor: "#b2f7ef",
  },
  elementsContainer: {
    flex: 10,
    flexDirection: "row",
  },
  bottomContainer: {
    flex: 0.2,
    flexDirection: "row",
  },
  blankLeft: {
    flex: 1,
  },
  elements: {
    flex: 8,
    flexDirection: "column",
  },
  blankRight: {
    flex: 1,
  },
  centerMenu: {
    flex: 10,
  },
  blankBottom: {
    flex: 2,
  },
  logotipo: {
    flex: 5,
  },
  imgLogo: {
    width: "100%",
    height: "100%",
    resizeMode: "contain",
  },
  btnContainer: {
    flex: 5,
    flexDirection: "column",
  },
  viewTutorial: {
    flex: 1,
    justifyContent: "center",
  },
  viewFacil: {
    flex: 1,
    justifyContent: "center",
  },
  viewIntermedio: {
    flex: 1,
    justifyContent: "center",
  },
  viewDificil: {
    flex: 1,
    justifyContent: "center",
  },
  buttons: {
    width: "100%",
    height: "80%",
    justifyContent: "center",
    borderRadius: 30,
  },
  txtMenu: {
    textAlign: "center",
    fontSize: normalize(25),
    fontWeight: "bold",
  },
});