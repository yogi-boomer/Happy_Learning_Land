import React, { Component} from 'react';
import { StyleSheet, View, Image, Text, Button, Animated, ToastAndroid } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import normalize from 'react-native-normalize';
import {useNavigation} from '@react-navigation/native';
import { createDndContext } from "react-native-easy-dnd";

const { Provider, Droppable, Draggable } = createDndContext();

export default class GameRobot extends Component {
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.topContainer}>

                </View>
                <View style={styles.elementsContainer}>
                    <View style={styles.elementsTop}>
                        <View style={styles.coinContainer}>
                            <View style={styles.coins}>
                                <Image style={ styles.coin} source={require("../../../assets/sources/Img-Tiendita/moneda.png")}></Image>
                                <Text style={styles.txtCoin}>x</Text>
                            </View>
                        </View>
                    </View>
                    <View style={styles.robotContainer}>

                    </View>
                    <View style={styles.robotTxt}>
                        <Text style={styles.txtRobot}>Piezas del Robot</Text>
                    </View>
                    <View style={styles.robotParts}>

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
        flex: 1
    },
    topContainer: {
        flex: 0.35,
        backgroundColor: 'gray'
    },
    elementsContainer: {
        flex: 10,
        flexDirection: "column",
        backgroundColor: "#f8f5f2"
    },
    bottomContainer: {
        flex: 0.2,
        backgroundColor: 'white'
    },
    elementsTop: {
        flex: 1,
        flexDirection: 'row',
        backgroundColor: 'orange'
    },
    robotContainer: {
        flex: 4,
        backgroundColor: 'aqua'
    },
    robotTxt: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: 'pink'
    },
    robotParts: {
        flex: 3.5,
        backgroundColor: 'salmon'
    },
    coinContainer: {
        width: "40%",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "white"
    },
    coins: {
        flexDirection: "row",
        width: normalize(120, "width"),
        height: normalize(50, "height"),
        borderRadius: normalize(20),
        backgroundColor: "#FFC158"
    },
    coin: {
        width: normalize(50, "width"),
        height: normalize(50, "height"),
        resizeMode: "contain"
    },
    txtCoin: {
        marginTop: 6,
        fontSize: normalize(25)
    },
    txtRobot: {
        fontWeight: 'bold',
        fontSize: normalize(20),
        textAlign: 'center'
    },
});