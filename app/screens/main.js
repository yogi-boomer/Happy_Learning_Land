import React, { Component } from "react";
import { View, Text, StyleSheet, Image, StatusBar } from "react-native";
import normalize from "react-native-normalize";
import { TouchableOpacity } from "react-native-gesture-handler";
import * as firebase from 'firebase';

export default class Main extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <StatusBar barStyle="dark-content" />
                <View>
                    <StatusBar hidden={true} />
                </View>
                <View style={styles.elementsContainer}>
                    <View style={styles.iconContainer}>
                        <View style={styles.txtContainer}>
                            <Text style={styles.txt}>
                                Happy Learning Land
                            </Text>
                        </View>
                        <View style={styles.imgContainer}>
                            <View style={{flex: 1}}></View>
                            <View style={{flex: 2}}>
                                <Image style={styles.img} source={require('../../assets/sources/Iconos/icon_happy.png')}>

                                </Image>
                            </View>
                            <View style={{flex: 1}}></View>
                        </View>
                    </View>
                    <View style={styles.btnContainer}>
                        <TouchableOpacity style={styles.btn} onPress={()=> this.props.navigation.navigate('m')}>
                            <Text style={styles.txtBtn}>Jugar</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={styles.bottomContainer}>

                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f8dc81'
    },
    elementsContainer: {
        flex: 10,
        flexDirection: "column",
    },
    bottomContainer: {
        flex: 0.2
    },
    iconContainer: {
        flex: 7,
        justifyContent: 'center'
    },
    txtContainer: {
        flex: 3,
        justifyContent: 'flex-end'
    },
    imgContainer: {
        flex: 4,
        flexDirection: "row"
    },
    btnContainer: {
        flex: 3,
        justifyContent: 'center',
        alignItems: 'center'
    },
    txt: {
        fontWeight: 'bold',
        fontSize: normalize(30),
        textAlign: 'center'
    },
    img: {
        width: '100%',
        height: '100%',
        resizeMode: "contain"
    },
    btn: {
        width: normalize(120, 'width'),
        height: normalize(50, 'height'),
        justifyContent: 'center',
        borderRadius: 30,
        borderWidth: 2,
        backgroundColor: "#a2d0c1"
    },
    txtBtn: {
        textAlign: "center",
        fontSize: normalize(25),
        fontWeight: "bold"    
    }
});