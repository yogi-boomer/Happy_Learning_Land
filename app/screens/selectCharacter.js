import React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import { Button } from "react-native-elements";
import * as firebase from "firebase"
import {useNavigation} from "@react-navigation/native"


const RESPONSIVE_ALL = "100%"
const RESPONSIVE_TOP = "10%"
const RESPONSIVE_LEFT = "25%"
export default function SelectCharacter() {
    const navigation = useNavigation();
    let character1 = require('../../assets/sources/Personajes/character_11.png');
    let character2 = require('../../assets/sources/Personajes/character_12.png');
    let character3 = require('../../assets/sources/Personajes/character_21.png');
    let character4 = require('../../assets/sources/Personajes/character_22.png');
    const character11 = 'https://i.ibb.co/dL2ZzTf/character-11.png';
    const character22 = 'https://i.ibb.co/hX7DwMs/character-12.png';
    const character33 = 'https://i.ibb.co/fF3Xq56/character-21.png';
    const character44 = 'https://i.ibb.co/5kzLbRk/character-22.png';
    return (
        <View style={styles.container}>
            <View style={styles.titleContainer}>
                <Text style={styles.title}> Escoge tu personaje:</Text>
            </View>
            <View style={styles.elementsContainer}>
                <View style={styles.characerWoman}>
                    <View style={styles.containerCharacter}>
                        <TouchableOpacity onPress={()=> navigation.navigate('mainCharacter',load(character_11))}>
                            <Image style={styles.imgCharacter} source={character1}></Image>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.containerCharacter}>
                        <TouchableOpacity onPress={()=> navigation.navigate('mainCharacter')}>
                            <Image style={styles.imgCharacter} source={character2}></Image>
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={styles.characterMan}>
                    <View style={styles.containerCharacter}>
                        <TouchableOpacity onPress={()=> navigation.navigate('mainCharacter')}>
                            <Image style={styles.imgCharacter} source={character3}></Image>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.containerCharacter}>
                        <TouchableOpacity onPress={()=> navigation.navigate('mainCharacter')}>
                            <Image style={styles.imgCharacter} source={character4}></Image>
                        </TouchableOpacity>
                    </View>
                </View>    
            </View>
        </View>
    );
}
const styles = StyleSheet.create({
    container: {
        width: RESPONSIVE_ALL,
        height: RESPONSIVE_ALL,
        alignContent: 'center',
        alignItems: 'center',
        backgroundColor: "#9f5f80"
    },
    elementsContainer: {
        flexDirection: 'row',
        alignContent: "center",
        alignItems: "center",
        height: 460,
        width: "95%",
        marginLeft: 30,
        marginRight: 30,
        marginTop: RESPONSIVE_TOP,
     
    },
    titleContainer: {
        alignContent: "center",
        alignItems: "center",
        width: "69%",
        height: 25,
        marginTop: 60,
        marginLeft: 50,
        marginRight: 50,
      
    },
    title: {
        fontSize: 20,
        fontWeight: "bold"
    },
    characerWoman: {
        width: "50%",
        height: 435,
        marginTop: 25,
     
    },
    characterMan: {
        width: "50%",
        height: 435,
        marginTop: 25,
   
    },
    containerCharacter: {
        width: "88%",
        height: 160,
        marginLeft: 10,
        marginRight: 10,
        marginTop: 15,
     
    },
    imgCharacter: {
        width: 120,
        height: 160,
        resizeMode: "contain",   
    },
});