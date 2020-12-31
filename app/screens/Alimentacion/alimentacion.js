import React, { Component} from 'react';
import { StyleSheet, View, Image, Text, StatusBar, Animated } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import normalize from 'react-native-normalize';
import {useNavigation} from '@react-navigation/native'

export default class alimentacion extends Component {
    render() {
        return (
            <View style={styles.container}>
                <StatusBar barStyle = "dark-content"/>
                <View>
                    <StatusBar hidden = {true}/>
                </View>
                <View style={styles.topContainer}>

                </View>
                <View style={styles.elementsContainer}>
                    
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
    flex: 0.35,
    backgroundColor: "gray"
  },
  elementsContainer: {
    flex: 10,
    flexDirection: "row",
    backgroundColor: 'pink'
  },
  bottomContainer: {
    flex: 0.2,
    flexDirection: "row",
    backgroundColor: 'green'
  }
});