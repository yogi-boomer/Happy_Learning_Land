import React, { Component, useRef, useState } from 'react';
import { StyleSheet, View, Image, Text, Button, Animated, ToastAndroid, ScrollView } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import normalize from 'react-native-normalize';
import { useNavigation } from '@react-navigation/native';
import { createDndContext } from "react-native-easy-dnd";

const { Provider, Droppable, Draggable } = createDndContext();

export default class GameRobot extends Component {

    render() {
        return (
            <Provider>
                <View style={styles.container}>
                    <View style={styles.topContainer}>

                    </View>
                    <View style={styles.elementsContainer}>
                        <View style={styles.elementsTop}>
                            <View style={styles.coinContainer}>
                                <View style={styles.coins}>
                                    <Image style={styles.coin} source={require("../../../assets/sources/Img-Tiendita/moneda.png")}></Image>
                                    <Text style={styles.txtCoin}>x</Text>
                                </View>
                            </View>
                            <View style={styles.blankSpace}>

                            </View>
                            <View style={styles.refreshContainer}>
                                <TouchableOpacity>
                                    <Image style={styles.imgRefresh} source={require("../../../assets/sources/Img-Robot/refresh.png")}></Image>
                                </TouchableOpacity>
                            </View>
                        </View>
                        <View style={styles.robotContainer}>
                            <View style={styles.blankLeft}>

                            </View>
                            <View style={styles.robotSilhouette}>
                                <View style={styles.topPart}>
                                    <View style={styles.blankLeftHead}>

                                    </View>
                                    <View style={styles.headSilhouette}>
                                        <Droppable //CAMBIO CREACION DE DROPABLE
                                            onEnter={() => {
                                                console.log('Draggable entered');
                                            }}
                                            onLeave={() => {
                                                console.log('Draggable left');
                                            }}
                                            onDrop={({ payload }) => {
                                                console.log('Draggable with the following payload was dropped', payload);
                                            }}
                                        >
                                            {({ active, viewProps }) => {
                                                return (
                                                    <Animated.View
                                                        {...viewProps}
                                                        style={[
                                                            {
                                                                flex: 4,
                                                                backgroundColor: active
                                                                    ? "blue"
                                                                    : "green"
                                                            },
                                                            viewProps.style,
                                                        ]}
                                                    >
                                                        <Image style={styles.imgFlechas} source={require("../../../assets/sources/Img-Robot/prev12.png")}></Image>
                                                    </Animated.View>
                                                );
                                            }}
                                        </Droppable>
                                    </View>
                                    <View style={styles.blankRightHead}>

                                    </View>
                                </View>
                                <View style={styles.centerPart}>
                                    <View style={styles.armLeftSilhouette}>
                                    <Droppable //CAMBIO CREACION DE DROPABLE
                                            onEnter={() => {
                                                console.log('Draggable entered');
                                            }}
                                            onLeave={() => {
                                                console.log('Draggable left');
                                            }}
                                            onDrop={({ payload }) => {
                                                console.log('Draggable with the following payload was dropped', payload);
                                            }}
                                        >
                                            {({ active, viewProps }) => {
                                                return (
                                                    <Animated.View
                                                        {...viewProps}
                                                        style={[
                                                            {
                                                                flex: 4,
                                                                backgroundColor: active
                                                                    ? "blue"
                                                                    : "green"
                                                            },
                                                            viewProps.style,
                                                        ]}
                                                    >
                                                        <Image style={styles.imgFlechas} source={require("../../../assets/sources/Img-Robot/prev14.png")}></Image>
                                                    </Animated.View>
                                                );
                                            }}
                                        </Droppable>
                                    </View>
                                    <View style={styles.torsoSilhouette}>
                                    <Droppable  //CAMBIO CREACION DE DROPABLE
                                            onEnter={() => {
                                                console.log('Draggable entered');
                                            }}
                                            onLeave={() => {
                                                console.log('Draggable left');
                                            }}
                                            onDrop={({ payload }) => {
                                                console.log('Draggable with the following payload was dropped', payload);
                                            }}
                                        >
                                            {({ active, viewProps }) => {
                                                return (
                                                    <Animated.View
                                                        {...viewProps}
                                                        style={[
                                                            {
                                                                flex: 4,
                                                                backgroundColor: active
                                                                    ? "blue"
                                                                    : "green"
                                                            },
                                                            viewProps.style,
                                                        ]}
                                                    >
                                                        <Image style={styles.imgFlechas} source={require("../../../assets/sources/Img-Robot/prev15.png")}></Image>
                                                    </Animated.View>
                                                );
                                            }}
                                        </Droppable>
                                    </View>
                                    <View style={styles.armRightSilhouette}>
                                    <Droppable //CAMBIO CREACION DE DROPABLE
                                            onEnter={() => {
                                                console.log('Draggable entered');
                                            }}
                                            onLeave={() => {
                                                console.log('Draggable left');
                                            }}
                                            onDrop={({ payload }) => {
                                                console.log('Draggable with the following payload was dropped', payload);
                                            }}
                                        >
                                            {({ active, viewProps }) => {
                                                return (
                                                    <Animated.View
                                                        {...viewProps}
                                                        style={[
                                                            {
                                                                flex: 4,
                                                                backgroundColor: active
                                                                    ? "blue"
                                                                    : "green"
                                                            },
                                                            viewProps.style,
                                                        ]}
                                                    >
                                                        <Image style={styles.imgFlechas} source={require("../../../assets/sources/Img-Robot/prev11.png")}></Image>
                                                    </Animated.View>
                                                );
                                            }}
                                        </Droppable>
                                    </View>
                                </View>
                                <View style={styles.bottomPart}>
                                    <View style={styles.blankLeftLeg}>
                               
                                    </View>
                                    <View style={styles.leftLegSilhouette}>
                                    <Droppable //CAMBIO CREACION DE DROPABLE
                                            onEnter={() => {
                                                console.log('Draggable entered');
                                            }}
                                            onLeave={() => {
                                                console.log('Draggable left');
                                            }}
                                            onDrop={({ payload }) => {
                                                console.log('Draggable with the following payload was dropped', payload);
                                            }}
                                        >
                                            {({ active, viewProps }) => {
                                                return (
                                                    <Animated.View
                                                        {...viewProps}
                                                        style={[
                                                            {
                                                                flex: 4,
                                                                backgroundColor: active
                                                                    ? "blue"
                                                                    : "green"
                                                            },
                                                            viewProps.style,
                                                        ]}
                                                    >
                                                        <Image style={styles.imgFlechas} source={require("../../../assets/sources/Img-Robot/prev13.png")}></Image>
                                                    </Animated.View>
                                                );
                                            }}
                                        </Droppable>
                                    </View>
                                    <View style={styles.rightLegSilhouette}>
                                    <Droppable  //CAMBIO CREACION DE DROPABLE
                                            onEnter={() => {
                                                console.log('Draggable entered');
                                            }}
                                            onLeave={() => {
                                                console.log('Draggable left');
                                            }}
                                            onDrop={({ payload }) => {
                                                console.log('Draggable with the following payload was dropped', payload);
                                            }}
                                        >
                                            {({ active, viewProps }) => {
                                                return (
                                                    <Animated.View
                                                        {...viewProps}
                                                        style={[
                                                            {
                                                                flex: 4,
                                                                backgroundColor: active
                                                                    ? "blue"
                                                                    : "green"
                                                            },
                                                            viewProps.style,
                                                        ]}
                                                    >
                                                        <Image style={styles.imgFlechas} source={require("../../../assets/sources/Img-Robot/prev16.png")}></Image>
                                                    </Animated.View>
                                                );
                                            }}
                                        </Droppable>
                                    </View>
                                    <View style={styles.blankRightLeg}>

                                    </View>
                                </View>
                            </View>
                            <View style={styles.blankRight}>

                            </View>
                        </View>
                        <View style={styles.robotTxt}>
                            <Text style={styles.txtRobot}>Piezas del Robot</Text>
                        </View>
                        <View style={styles.robotParts}>
                            <View style={styles.prevContainer}>
                                <TouchableOpacity>
                                    {/* onPress={pagPrev}> */}
                                    <Image style={styles.imgFlechas} source={require("../../../assets/sources/Img-Robot/prev.png")}></Image>
                                </TouchableOpacity>
                            </View>
                            <View style={styles.parts}>
                                <View style={styles.upperBody}>
                                    <View style={styles.leftArm}>
                                        <Draggable //CAMBIO CREACION DE DRAGGABLE
                                            onDragStart={() => {
                                                console.log('Started draggging');
                                            }}
                                            onDragEnd={() => {
                                                console.log('Ended draggging');
                                            }}
                                            payload="my-draggable-item"
                                        >
                                            {({ viewProps }) => {
                                                return (
                                                    <Animated.View
                                                        {...viewProps}
                                                        style={[viewProps.style, { width: 90, height: 150}]}
                                                    >
                                                        <Image style={styles.imgParts} source={require("../../../assets/sources/Img-Robot/12.png")}></Image>
                                                    </Animated.View>
                                                );
                                            }}
                                        </Draggable>
                                    </View>
                                    <View style={styles.head}>
                                        <Draggable //CAMBIO CREACION DE DRAGGABLE
                                            onDragStart={() => {
                                                console.log('Started draggging');
                                            }}
                                            onDragEnd={() => {
                                                console.log('Ended draggging');
                                            }}
                                            payload="my-draggable-item"
                                        >
                                            {({ viewProps }) => {
                                                return (
                                                    <Animated.View
                                                        {...viewProps}
                                                        style={[viewProps.style, { width: 90, height: 150 }]}
                                                    >
                                                        <Image style={styles.imgParts} source={require("../../../assets/sources/Img-Robot/11.png")}></Image>
                                                    </Animated.View>
                                                );
                                            }}
                                        </Draggable>
                                        <Image style={styles.imgParts} source={require("../../../assets/sources/Img-Robot/11.png")}></Image>
                                    </View>
                                    <View style={styles.rightArm}>
                                        <Draggable //CAMBIO CREACION DE DRAGGABLE
                                            onDragStart={() => {
                                                console.log('Started draggging');
                                            }}
                                            onDragEnd={() => {
                                                console.log('Ended draggging');
                                            }}
                                            payload="my-draggable-item"
                                        >
                                            {({ viewProps }) => {
                                                return (
                                                    <Animated.View
                                                        {...viewProps}
                                                        style={[viewProps.style, { width: 90, height: 150}]}
                                                    >
                                                        <Image style={styles.imgParts} source={require("../../../assets/sources/Img-Robot/14.png")}></Image>
                                                    </Animated.View>
                                                );
                                            }}
                                        </Draggable>
                                        <Image style={styles.imgParts} source={require("../../../assets/sources/Img-Robot/14.png")}></Image>
                                    </View>
                                </View>
                                <View style={styles.loweBody}>
                                    <View style={styles.leftLeg}>
                                        <Draggable //CAMBIO CREACION DE DRAGGABLE
                                            onDragStart={() => {
                                                console.log('Started draggging');
                                            }}
                                            onDragEnd={() => {
                                                console.log('Ended draggging');
                                            }}
                                            payload="my-draggable-item"
                                        >
                                            {({ viewProps }) => {
                                                return (
                                                    <Animated.View
                                                        {...viewProps}
                                                        style={[viewProps.style, { width: 90, height: 150 }]}
                                                    >
                                                        <Image style={styles.imgParts} source={require("../../../assets/sources/Img-Robot/15.png")}></Image>
                                                    </Animated.View>
                                                );
                                            }}
                                        </Draggable>
                                        <Image style={styles.imgParts} source={require("../../../assets/sources/Img-Robot/15.png")}></Image>
                                    </View>
                                    <View style={styles.torso}>
                                        <Draggable //CAMBIO CREACION DE DRAGGABLE
                                            onDragStart={() => {
                                                console.log('Started draggging');
                                            }}
                                            onDragEnd={() => {
                                                console.log('Ended draggging');
                                            }}
                                            payload="my-draggable-item"
                                        >
                                            {({ viewProps }) => {
                                                return (
                                                    <Animated.View
                                                        {...viewProps}
                                                        style={[viewProps.style, { width: 90, height: 150}]}
                                                    >
                                                        <Image style={styles.imgParts} source={require("../../../assets/sources/Img-Robot/13.png")}></Image>
                                                    </Animated.View>
                                                );
                                            }}
                                        </Draggable>
                                    </View>
                                    <View style={styles.rightLeg}>
                                        <Draggable  //CAMBIO CREACION DE DRAGGABLE
                                            onDragStart={() => {
                                                console.log('Started draggging');
                                            }}
                                            onDragEnd={() => {
                                                console.log('Ended draggging');
                                            }}
                                            payload="my-draggable-item"
                                        >
                                            {({ viewProps }) => {
                                                return (
                                                    <Animated.View
                                                        {...viewProps}
                                                        style={[viewProps.style, { width: 90, height: 150 }]}
                                                    >
                                                        <Image style={styles.imgParts} source={require("../../../assets/sources/Img-Robot/16.png")}></Image>
                                                    </Animated.View>
                                                );
                                            }}
                                        </Draggable>
                                    </View>
                                </View>
                            </View>
                            <View style={styles.nextContainer}>
                                <TouchableOpacity>
                                    {/* onPress={pagSig}> */}
                                    <Image style={styles.imgFlechas} source={require("../../../assets/sources/Img-Robot/next.png")}></Image>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                    <View style={styles.bottomContainer}>
                    </View>
                </View>
            </Provider>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    topContainer: {
        flex: 0.35,
        backgroundColor: "gray",
    },
    elementsContainer: {
        flex: 10,
        flexDirection: "column",
        backgroundColor: "#f8f5f2",
    },
    bottomContainer: {
        flex: 0.2,
        backgroundColor: "white",
    },
    elementsTop: {
        flex: 1,
        flexDirection: "row",
        backgroundColor: "orange",
    },
    robotContainer: {
        flex: 4,
        flexDirection: "row",
        backgroundColor: "aqua",
    },
    robotTxt: {
        flex: 0.6,
        justifyContent: "center",
        backgroundColor: "red",
    },
    robotParts: {
        flex: 4,
        flexDirection: "row",
        backgroundColor: "salmon",
    },
    blankLeft: {
        flex: 1,
        backgroundColor: 'gray'
    },
    robotSilhouette: {
        flex: 5,
        flexDirection: "column",
        backgroundColor: 'white'
    },
    topPart: {
        flex: 3,
        flexDirection: "row",
        backgroundColor: "pink"
    },
    blankLeftHead: {
        flex: 2,
        backgroundColor: 'white'
    },
    headSilhouette: {
        flex: 4,
        backgroundColor: 'red'
    },
    blankRightHead: {
        flex: 2,
        backgroundColor: 'white'
    },
    centerPart: {
        flex: 3.5,
        flexDirection: "row",
        backgroundColor: 'gold'
    },
    armLeftSilhouette: {
        flex: 2,
        backgroundColor: 'pink'
    },
    torsoSilhouette: {
        flex: 4,
        backgroundColor: 'aqua'
    },
    armRightSilhouette: {
        flex: 2,
        backgroundColor: 'yellow'
    },
    bottomPart: {
        flex: 3.5,
        flexDirection: "row",
        backgroundColor: "aqua"
    },
    blankLeftLeg: {
        flex: 2,
        backgroundColor: 'white'
    },
    leftLegSilhouette: {
        flex: 2,
        backgroundColor: 'blue'
    },
    rightLegSilhouette: {
        flex: 2,
        backgroundColor: 'beige'
    },
    blankRightLeg: {
        flex: 2,
        backgroundColor: 'white'
    },
    blankRight: {
        flex: 1,
        backgroundColor: 'gray'
    },
    coinContainer: {
        width: "40%",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "white",
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
    blankSpace: {
        width: "20%",
    },
    refreshContainer: {
        width: "40%",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "yellow",
    },
    prevContainer: {
        flex: 0.5,
    },
    parts: {
        flex: 4,
        flexDirection: "column",
        backgroundColor: "yellow",
    },
    upperBody: {
        flex: 3,
        flexDirection: "row",
        backgroundColor: "white",
    },
    loweBody: {
        flex: 3,
        flexDirection: "row",
        backgroundColor: "aqua",
    },
    leftArm: {
        flex: 1,
        backgroundColor: "beige",
    },
    head: {
        flex: 1,
        backgroundColor: "gold",
    },
    rightArm: {
        flex: 1,
        backgroundColor: "silver",
    },
    leftLeg: {
        flex: 1,
        backgroundColor: "brown",
    },
    torso: {
        flex: 1,
        backgroundColor: "violet",
    },
    rightLeg: {
        flex: 1,
        backgroundColor: "cyan",
    },
    nextContainer: {
        flex: 0.5,
    },
    imgRefresh: {
        width: normalize(40, "width"),
        height: normalize(40, "height"),
        resizeMode: "contain",
    },
    txtRobot: {
        fontWeight: "bold",
        fontSize: normalize(20),
        textAlign: "center",
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
});