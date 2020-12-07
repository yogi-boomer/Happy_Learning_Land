import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import * as firebase from 'firebase';

const RESPONSIVE_ALL = "100%"
const RESPONSIVE_TOP = "60%"
const RESPONSIVE_LEFT = "25%"
export default class Main extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.text}>
                    Happy learning land
                </Text>
                <View style={styles.button}>
                    <TouchableOpacity onPress={()=> this.props.navigation.navigate('m')}>
                        <Text>Juega</Text>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        width: RESPONSIVE_ALL,
        height: RESPONSIVE_ALL,
        alignContent: 'center',
        alignItems: 'center'
    },
    text: {
        fontSize: 24,
        marginTop: RESPONSIVE_TOP,
        alignItems: 'center',
        alignContent: 'center'
    },
    button: {
        borderRadius: 18,
        borderWidth: 2,
        width: 150,
        height: 50,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'orange',
        marginTop: RESPONSIVE_TOP,
    }
});