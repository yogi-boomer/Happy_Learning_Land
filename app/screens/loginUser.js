import React, { Component } from "react";
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, Image } from "react-native";
import { TextInput } from "react-native-gesture-handler";
import { Button } from "react-native-elements"
import {useNavigation} from "@react-navigation/native"
import LogUs from "../screens/components/logUs"

const RESPONSIVE_ALL = "100%"
const RESPONSIVE_TOP = "20%"
const RESPONSIVE_LEFT = "11%"

export default class LoginUser extends React.Component {
    registerFunction = () => {
        const navigation = useNavigation();
        return (
            <View>
                <LogUs/>
                <Text style={{marginTop: 10}}>¿Aún sin cuenta? {"  "}
                    <Text style={styles.textRegister} onPress={()=>navigation.navigate('register')}>Registrate</Text>
                </Text>
            </View>
        )
    }
    render() {
        return (
            <ScrollView centerContent={true}>
                <View style={styles.containerTitles}>
                    <Text style={styles.text}>Happy Learning Land</Text>
                </View>
                <View style={styles.containerTitles}>
                    <Text style={styles.titleText}>Registrate</Text>
                    <View style={styles.container} >
                        <this.registerFunction />
                    </View>
                </View>
            </ScrollView>
        );
    }
}
const styles = StyleSheet.create({
    containerTitles: {
        alignContent: "center",
        alignItems: "center",
        alignSelf: "center"
    },
    titleText: {
        fontSize: 24,
        marginTop: "5%"
    },
    text: {
        fontSize: 24,
        marginTop: RESPONSIVE_TOP,
        alignItems: 'center',
        alignContent: 'center'
    },
    container: {
        borderRadius: 18,
        borderWidth: 2,
        width: 250,
        height: 300,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#ffa45b',
        marginLeft: 40,
        marginRight: 40,
        marginTop: RESPONSIVE_TOP,
    },
    textRegister:{
        fontSize: 15,
        fontWeight:'bold',
        color: "rgb( 37, 151, 151 )"
    }
});