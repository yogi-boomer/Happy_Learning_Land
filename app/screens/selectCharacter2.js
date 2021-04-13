import React, {useEffect, useState} from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity, StatusBar, AsyncStorage, Alert } from "react-native";
import normalize from "react-native-normalize";
import { Button } from "react-native-elements";
import Fire from "../utils/Fire";
import { useNavigation } from "@react-navigation/native"
import { Audio } from "expo-av";


export default function SelectCharacter2() {
    const navigation = useNavigation();

    const value1 = 'https://i.ibb.co/dL2ZzTf/character-11.png';
    const value2 = 'https://i.ibb.co/hX7DwMs/character-12.png';
    const value3 = 'https://i.ibb.co/fF3Xq56/character-21.png';
    const value4 = 'https://i.ibb.co/5kzLbRk/character-22.png';

    let character1 = require('../../assets/sources/Personajes/character_11.png');
    let character2 = require('../../assets/sources/Personajes/character_12.png');
    let character3 = require('../../assets/sources/Personajes/character_21.png');
    let character4 = require('../../assets/sources/Personajes/character_22.png');

    const handlePost = (character) => {
        Fire.shared.addPost({localUri:character}).then(ref => { }).catch(error => {});
    }

    return (
        <View style={styles.container}>
            <StatusBar barStyle="dark-content" />
            <View>
                <StatusBar hidden={true} />
            </View>
            <View style={styles.elementsContainer}>
                <View style={styles.elementsTop}>
                    <Text style={styles.txtTitle}>Escoge tu personaje:</Text>
                </View>
                <View style={styles.containerCharacter}>
                    <View style={styles.character}>
                        <View style={{ ...styles.kids }}>
                            <TouchableOpacity onPress={() => navigation.navigate('mainCharacter', { tareas: 5 },handlePost(value1))}>
                                <Image style={styles.imgCharacter} source={character1}></Image>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => navigation.navigate('mainCharacter', { tareas: 5 },handlePost(value2))}>
                                <Image style={styles.imgCharacter} source={character2}></Image>
                            </TouchableOpacity>
                        </View>
                        <View style={{ ...styles.teenagers }}>
                            <TouchableOpacity onPress={() => navigation.navigate('mainCharacter', { tareas: 5 },handlePost(value3))}>
                                <Image style={styles.imgCharacter} source={character3}></Image>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => navigation.navigate('mainCharacter', { tareas: 5 },handlePost(value4))}>
                                <Image style={styles.imgCharacter} source={character4}></Image>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
                <View style={styles.elementsBottom}>
                    <Text style={styles.txtCredits}>YIPI Studios®</Text>
                </View>
            </View>
            <View style={styles.bottomContainer}>

            </View>
        </View>
    );
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "salmon"
    },
    elementsContainer: {
        flex: 10,
        flexDirection: 'column'
    },
    bottomContainer: {
        flex: 0.2,
    },
    elementsTop: {
        flex: 2,
        justifyContent: 'center',
    },
    containerCharacter: {
        flex: 6,
        flexDirection: 'column',
    },
    elementsBottom: {
        flex: 2,
        justifyContent: 'flex-end',
    },
    character: {
        width: '100%',
        height: "100%",
        alignItems: "center"
    },
    kids: {
        flex: 3,
        flexDirection: 'row'
    },
    teenagers: {
        flex: 3,
        flexDirection: 'row'
    },
    txtTitle: {
        fontWeight: 'bold',
        fontSize: normalize(25),
        textAlign: 'center'
    },
    txtCredits: {
        fontWeight: 'bold',
        fontSize: normalize(15),
        textAlign: 'center'
    },
    imgCharacter: {
        width: normalize(180, 'width'),
        height: normalize(180, 'height'),
        resizeMode: "contain"
    }
});