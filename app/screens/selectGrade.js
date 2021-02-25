import React, { Component } from "react";
import { StyleSheet, View, Image, StatusBar, Animated, Text} from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import normalize from "react-native-normalize";
import { useNavigation } from "@react-navigation/native"

export default class SelectGrade extends Component {
    // const navigation = useNavigation();

    constructor(props) {
        super(props);
        this.animations = {
            translation: new Animated.Value(0),
            opacity: new Animated.Value(1),
        }
    }
    
    componentDidMount() {
        Animated.spring(this.animations.translation, {
            toValue: 85,
            speed: 1,
            bounciness: 65,
            useNativeDriver: true,
        }).start();
    }
    render (){
        return (
            <View style={styles.container}>
                <StatusBar barStyle="dark-content" />
                <View>
                    <StatusBar hidden={true}/>
                </View>
                <View style={{flex: 0.35}}>

                </View>
                <View style={styles.elementsContainer}>
                    <View style={{flex: 1}}>

                    </View>
                    <View style={styles.elements}>
                        <View style={styles.txtContainer}>
                            <Text style={styles.txtQuestion}>¿Cuál es tu grado?</Text>
                        </View>
                        <View style={styles.imgContainer}>
                            <Image style={styles.img} source={require('../../assets/sources/Iconos/icon_happy.png')}>

                            </Image>
                        </View>
                        <View style={styles.buttonsContainer}>
                            <View style={styles.buttons}>
                                <Animated.View style={[styles.grado, { transform: [{ translateX: this.animations.translation }] } ]}>
                                    <TouchableOpacity onPress={() => navigation.navigate('selectCharacter')}>
                                        <Image style={styles.img} source={require('../../assets/sources/Iconos/globo_1.png')}>

                                        </Image>
                                    </TouchableOpacity>
                                </Animated.View>
                            </View>
                            <View style={styles.buttons}>
                                <Animated.View style={[styles.grado, { transform: [{ translateX: this.animations.translation }] } ]}>
                                    <TouchableOpacity>
                                        <Image style={styles.img} source={require('../../assets/sources/Iconos/globo_2.png')}>

                                        </Image>
                                    </TouchableOpacity>
                                </Animated.View>
                            </View>
                            <View style={styles.buttons}>
                                <Animated.View style={[styles.grado, { transform: [{ translateX: this.animations.translation }] } ]}>
                                    <TouchableOpacity>
                                        <Image style={styles.img} source={require('../../assets/sources/Iconos/globo_3.png')}>

                                        </Image>
                                    </TouchableOpacity>
                                </Animated.View>
                            </View>
                        </View>
                    </View>
                    <View style={{flex: 1}}>

                    </View>
                </View>
                <View style={{flex: 0.2}}>

                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'pink'
    },
    elementsContainer: {
        flex: 10,
        flexDirection: 'row'
    },
    elements: {
        flex: 8,
        flexDirection: 'column'
    },
    txtContainer: {
        flex: 1,
        justifyContent: "center",
    },
    txtQuestion: {
        textAlign: "center",
        fontSize: normalize(25),
        fontWeight: "bold",
    },
    imgContainer: {
        flex: 2.5
    },
    img: {
        width: '100%',
        height: '100%',
        resizeMode: "contain"
    },
    buttonsContainer: {
        flex: 4.5,
        flexDirection: 'column'
    },
    buttons: {
        flex: 1,
        justifyContent: "center"
    },
    grado: {
        width: "50%",
        height: "90%"
    },
    txtMenu: {
        textAlign: "center",
        fontSize: normalize(20),
        fontWeight: "bold",
    },
});