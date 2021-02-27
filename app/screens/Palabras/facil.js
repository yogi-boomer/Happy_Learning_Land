import React, { Component } from "react";
import { StyleSheet, View, Image, StatusBar, Text, Button, Animated, Alert } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import normalize from "react-native-normalize";
import { createDndContext } from "react-native-easy-dnd";
import * as Speech from 'expo-speech';

const { Provider, Droppable, Draggable } = createDndContext();
const tutorial = ["uva", "ave", "sol"];
const imagenes = [require('../../../assets/sources/Img-Alimentacion/foods/Arroz.png'), require('../../../assets/sources/Img-Alimentacion/foods/Carne.png'), require('../../../assets/sources/Img-Alimentacion/foods/Pizza.png')]//cambiar por objetos relacionados 

export default class Facil extends Component {
    constructor(props) {
        super(props);
        this.state = {
            imagenPrin: require('../../../assets/sources/Img-Alimentacion/foods/Arroz.png'),
            letraP1: "a",
            letraP2: "e",
            letraP3: "i",
            letra1: "d",
            letra2: "c",
            letra3: "k",
            letra4: "m",
            letra5: "v",
            letra6: "p",
            letra7: "g",
            letra8: "r",
            aciertos: 0,
            setPayload: false,
            setPayload1: false,
            setPayload2: false,
            press1: "auto",
            press2: "auto",
            press3: "auto",
            index: 0,
            intentos: 0,
            error: "red",
            correcto: "green",
            normal: "white",
            error2: "red",
            correcto2: "green",
            normal2: "white",
            error3: "red",
            correcto3: "green",
            normal3: "white",
        }
    }
    //primera palabra aleatoria
    speak = (thingToSay) => {
        Speech.speak(thingToSay);
    }
    //segunda y tercera palabra aleatorea 
    speak2 = (thingToSay2) => {
        Speech.speak(thingToSay2);
    }
    //caso ganado
    speakWin() {
        const thingToSay3 = "¡Felicidades eres demasiado inteligente!"
        Speech.speak(thingToSay3);
    }
    //funcion dropeado correcto de la letra 
    speakLetra() {
        const thingToSay5 = "Muy bien"
        Speech.speak(thingToSay5);
    }
    //Caso erroneo
    speakLetraM() {
        const thingToSay4 = "¡Oh no!, parece que esa no es la letra"
        Speech.speak(thingToSay4);
    }
    //revusar implementacion 
    animacion() {
        Animated.timing(this.state.animatedValue, {
            toValue: 1,
            duration: 500,
            useNativeDriver: true, // <-- Add this
        }).start();
    }

    componentDidMount() {
        const palabraRandom2 = Math.round(Math.random() * 2);
        const palabra2 = tutorial[palabraRandom2];
        const imagen = imagenes[palabraRandom2];
        const thingToSay = tutorial[palabraRandom2];
        console.log(palabraRandom2);
        console.log(palabra2);
        this.setState({ letraP1: palabra2.charAt(0) });
        this.setState({ letraP2: palabra2.charAt(1) });
        this.setState({ letraP3: palabra2.charAt(2) });
        this.setState({ index: palabraRandom2 });
        this.setState({ imagenPrin: imagen });
        this.speak(thingToSay);
    }
    //función para puntaje y renderizado de nueva palabra, imagen y sonido
    pointsGet(index) {
        let aciertos = this.state.aciertos;
        console.log("Tienes aciertos: " + aciertos);
        let points = 1;
        aciertos = aciertos + points;
        this.setState({ aciertos: aciertos });
        console.log("Ahora tus aciertos son: " + aciertos);
        index;
        console.log("Tu palabra es:");
        console.log(index);
        try {
            //recursividad hasta que el index sea distinto del index actual para cambio de palabra 
            if (aciertos === 3 || aciertos === 6 || aciertos === 9) {
                const palabraRandom = Math.round(Math.random() * 2);
                console.log("Tu siguiente palabra es:");
                console.log(palabraRandom);
                if (palabraRandom === index) {
                    return this.pointsGet(this.state.index);
                } else {
                    const palabra = tutorial[palabraRandom];
                    const thingToSay2 = tutorial[palabraRandom];//asignación del string para reproducir
                    this.speak2(thingToSay2);//reproducción del sonido
                    console.log("Tu palabra es: " + palabra);
                    const imagen2 = imagenes[palabraRandom];
                    this.setState({ letraP1: palabra.charAt(0) });
                    this.setState({ letraP2: palabra.charAt(1) });
                    this.setState({ letraP3: palabra.charAt(2) });
                    this.setState({ imagenPrin: imagen2 });
                    let intentos = this.state.intentos;
                    let nuevoIntento = 1;
                    intentos = intentos + nuevoIntento;
                    console.log("Tus intentos son: ", intentos);
                    this.setState({ intentos: intentos });
                    if (intentos === 3) {
                        Alert.alert("Felicidades");
                        this.speakWin();
                    }
                }
            }
        } catch (e) {
            console.log(e);
        }
    }

    render() {
        return (
            <Provider>
                <View style={styles.container}>
                    <StatusBar barStyle="dark-content" />
                    <View>
                        <StatusBar hidden={true} />
                    </View>
                    <View style={styles.topContainer}>

                    </View>
                    <View style={styles.elementsContainer}>
                        <View style={styles.topElements}>
                            <View style={styles.coins}>
                                <Image style={styles.coin} source={require("../../../assets/sources/Img-Tiendita/moneda.png")}></Image>
                                <Text style={styles.txtCoin}>x </Text>
                            </View>
                            <View style={{width: '50%'}}>
                            
                            </View>
                            <View style={styles.refreshContainer}>
                                <TouchableOpacity onPress={() => this.refresh()}>
                                    <Image style={styles.imgRefresh} source={require("../../../assets/sources/Img-Robot/refresh.png")}></Image>
                                </TouchableOpacity>
                            </View>
                        </View>
                        <View style={styles.elements}>
                            <View style={styles.imgContainer}>
                                <View style={{flex: 0.5}}>

                                </View>
                                <View style={{flex: 2, borderWidth: 3, backgroundColor: 'beige'}}>
                                    <Image style={styles.img} source={this.state.imagenPrin}></Image>
                                </View>
                                <View style={{flex: 0.5}}>

                                </View>
                            </View>
                            <View style={{flex: 1, justifyContent: "center"}}>
                                <Text style={styles.txtQuestion}>¿Qué es?</Text>
                            </View>
                            <Animated.View style={styles.lettersContainer}>
                                <View style={{flex: 0.8}}>

                                </View>
                                <View style={{flex: 1 }}>
                                    <Droppable
                                        onEnter={() => {
                                            console.log("DRAGGABLE ENTERED")
                                        }}
                                        onDrop={({ payload }) => {
                                            if (payload === "letraP1") {
                                                this.setState({ letraP1: this.state.letraP1 });
                                                this.setState({ normal: this.state.correcto });
                                                this.pointsGet(this.state.index);
                                                    this.speakLetra();
                                            } else {
                                                this.speakLetraM();
                                                this.setState({ normal: this.state.error });
                                            }
                                        }}
                                    >
                                        {({ active, viewProps }) => {
                                            return (
                                                <Animated.View
                                                    {...viewProps}
                                                    style={[
                                                        {
                                                            flex: 1, 
                                                            justifyContent: 'center',
                                                            borderWidth: 3,
                                                            borderRadius: 20,
                                                            position: "relative",
                                                            backgroundColor: this.state.normal,
                                                        },
                                                        viewProps.style,
                                                    ]}
                                                >
                                                    <Text style={{ ...styles.txtLetters }}>{this.state.letraP1}</Text>
                                                </Animated.View>
                                            );
                                        }}
                                    </Droppable>
                                </View>
                                <View style={{flex: 0.2}}>
                                
                                </View>
                                <View style={{flex: 1}}>
                                    <Droppable
                                        onEnter={() => {
                                            console.log("DRAGGABLE ENTERED")
                                        }}
                                        onDrop={({ payload }) => {
                                            if (payload === "letraP2") {
                                                this.setState({ letraP2: this.state.letraP2 });
                                                this.pointsGet(this.state.index);
                                                this.setState({ normal: this.state.correcto2 });
                                                this.speakLetra();
                                            } else {
                                                this.speakLetraM();
                                                this.setState({ normal: this.state.error2 });
                                            }
                                        }}
                                    >
                                        {({ active, viewProps }) => {
                                            return (
                                                <Animated.View
                                                    {...viewProps}
                                                    style={[
                                                        {
                                                            flex: 1, 
                                                            justifyContent: 'center',
                                                            borderWidth: 3,
                                                            borderRadius: 20,
                                                            position: "relative",
                                                            backgroundColor: this.state.normal2,
                                                        },
                                                        viewProps.style,
                                                    ]}
                                                >
                                                    <Text style={{ ...styles.txtLetters }}>{this.state.letraP2}</Text>
                                                </Animated.View>
                                            );
                                        }}
                                    </Droppable>
                                </View>
                                <View style={{flex: 0.2}}>

                                </View>
                                <View style={{flex: 1}}>
                                    <Droppable
                                        onEnter={() => {
                                            console.log("DRAGGABLE ENTERED")
                                        }}
                                        onDrop={({ payload }) => {
                                            if (payload === "letraP3") {
                                                this.setState({ letraP3: this.state.letraP3 });
                                                this.pointsGet(this.state.index);
                                                this.setState({ normal: this.state.correcto3 });
                                                this.speakLetra();
                                            } else {
                                                this.speakLetraM();
                                                this.setState({ normal: this.state.error3 });
                                            }
                                        }}
                                    >
                                        {({ active, viewProps }) => {
                                            return (
                                                <Animated.View
                                                    {...viewProps}
                                                    style={[
                                                        {
                                                            flex: 1, 
                                                            justifyContent: 'center',
                                                            borderWidth: 3,
                                                            borderRadius: 20,
                                                            position: "relative",
                                                            backgroundColor: this.state.normal3,
                                                        },
                                                        viewProps.style,
                                                    ]}
                                                >
                                                    <Text style={{ ...styles.txtLetters }}>{this.state.letraP3}</Text>
                                                </Animated.View>
                                            );
                                        }}
                                    </Droppable>
                                </View>
                                <View style={{flex: 0.8}}>
                                
                                </View>
                            </Animated.View>
                            <View style={{flex: 0.75, justifyContent: "center"}}>
                                <View style={{alignItems: 'center'}}>
                                    <TouchableOpacity>
                                        <Button title="Check" color="#939b62"></Button>
                                    </TouchableOpacity>
                                </View>
                            </View>
                        </View>
                        <View style={styles.bottomElements}>
                            <View style={{flex: 1.5, flexDirection: 'row'}}>
                                <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
                                    <Draggable //CAMBIO CREACION DE DRAGGABLE
                                        payload="letraP1"
                                        reset={this.state.letraP1}
                                        onDragStart={() => {
                                            console.log("Started draggging");
                                        }}
                                        onDragEnd={() => {
                                            this.setState({ setPayload2: true });
                                        }}
                                    >
                                        {({ viewProps }) => {
                                            return (
                                                <Animated.View
                                                    {...viewProps}
                                                    style={[viewProps.style, {
                                                        height: '80%',
                                                        width: '80%', 
                                                        justifyContent: 'center',
                                                        borderWidth: 3,
                                                        borderRadius: 20,
                                                        backgroundColor: 'pink',
                                                        position: "relative"
                                                    }]}
                                                >
                                                    <Text style={{ ...styles.txtLetters }}>{this.state.letraP1}</Text>
                                                </Animated.View>
                                            );
                                        }}
                                    </Draggable>
                                </View>
                                <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
                                    <Draggable //CAMBIO CREACION DE DRAGGABLE
                                        payload="letra6"
                                        reset={this.state.letra6}
                                        onDragStart={() => {
                                            console.log("Started draggging");
                                        }}
                                        onDragEnd={() => {
                                            this.setState({ setPayload2: true });
                                        }}
                                    >
                                        {({ viewProps }) => {
                                            return (
                                                <Animated.View
                                                    {...viewProps}
                                                    style={[viewProps.style, {
                                                        height: '80%',
                                                        width: '80%', 
                                                        justifyContent: 'center',
                                                        borderWidth: 3,
                                                        borderRadius: 20,
                                                        backgroundColor: 'pink',
                                                        position: "relative"
                                                    }]}
                                                >
                                                    <Text style={{ ...styles.txtLetters }}>{this.state.letra6}</Text>
                                                </Animated.View>
                                            );
                                        }}
                                    </Draggable>
                                </View>
                                <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
                                    <Draggable //CAMBIO CREACION DE DRAGGABLE
                                        payload="letraP2"
                                        reset={this.state.letraP2}
                                        onDragStart={() => {
                                            console.log("Started draggging");
                                        }}
                                        onDragEnd={() => {
                                            this.setState({ setPayload2: true });
                                        }}
                                    >
                                        {({ viewProps }) => {
                                            return (
                                                <Animated.View
                                                    {...viewProps}
                                                    style={[viewProps.style, {
                                                        height: '80%',
                                                        width: '80%', 
                                                        justifyContent: 'center',
                                                        borderWidth: 3,
                                                        borderRadius: 20,
                                                        backgroundColor: 'pink',
                                                        position: "relative"
                                                    }]}
                                                >
                                                    <Text style={{ ...styles.txtLetters }}>{this.state.letraP2}</Text>
                                                </Animated.View>
                                            );
                                        }}
                                    </Draggable>
                                </View>
                                <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
                                    <Draggable //CAMBIO CREACION DE DRAGGABLE
                                        payload="letraP3"
                                        reset={this.state.letraP3}
                                        onDragStart={() => {
                                            console.log("Started draggging");
                                        }}
                                        onDragEnd={() => {
                                            this.setState({ setPayload2: true });
                                        }}
                                    >
                                        {({ viewProps }) => {
                                            return (
                                                <Animated.View
                                                    {...viewProps}
                                                    style={[viewProps.style, {
                                                        height: '80%',
                                                        width: '80%', 
                                                        justifyContent: 'center',
                                                        borderWidth: 3,
                                                        borderRadius: 20,
                                                        backgroundColor: 'pink',
                                                        position: "relative"
                                                    }]}
                                                >
                                                    <Text style={{ ...styles.txtLetters }}>{this.state.letraP3}</Text>
                                                </Animated.View>
                                            );
                                        }}
                                    </Draggable> 
                                </View>
                            </View>
                            <View style={{flex: 1.5, flexDirection: 'row'}}>
                                <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
                                    <Draggable //CAMBIO CREACION DE DRAGGABLE
                                        payload="letra2"
                                        reset={this.state.setPieza}
                                        onDragStart={() => {
                                            console.log("Started draggging");
                                        }}
                                        onDragEnd={() => {
                                            this.setState({ setPayload2: true });
                                        }}
                                    >
                                        {({ viewProps }) => {
                                            return (
                                                <Animated.View
                                                    {...viewProps}
                                                    style={[viewProps.style, {
                                                        height: '80%',
                                                        width: '80%', 
                                                        justifyContent: 'center',
                                                        borderWidth: 3,
                                                        borderRadius: 20,
                                                        backgroundColor: 'pink',
                                                        position: "relative"
                                                    }]}
                                                >
                                                    <Text style={{ ...styles.txtLetters }}>{this.state.letra2}</Text>
                                                </Animated.View>
                                            );
                                        }}
                                    </Draggable>
                                </View>
                                <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
                                    <Draggable //CAMBIO CREACION DE DRAGGABLE
                                        payload="letra7"
                                        reset={this.state.setPieza}
                                        onDragStart={() => {
                                            console.log("Started draggging");
                                        }}
                                        onDragEnd={() => {
                                            this.setState({ setPayload2: true });
                                        }}
                                    >
                                        {({ viewProps }) => {
                                            return (
                                                <Animated.View
                                                    {...viewProps}
                                                    style={[viewProps.style, {
                                                        height: '80%',
                                                        width: '80%', 
                                                        justifyContent: 'center',
                                                        borderWidth: 3,
                                                        borderRadius: 20,
                                                        backgroundColor: 'pink',
                                                        position: "relative"
                                                    }]}
                                                >
                                                    <Text style={{ ...styles.txtLetters }}>{this.state.letra7}</Text>
                                                </Animated.View>
                                            );
                                        }}
                                    </Draggable>   
                                </View>
                                <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
                                    <Draggable //CAMBIO CREACION DE DRAGGABLE
                                        payload="letra1"
                                        reset={this.state.setPieza}
                                        onDragStart={() => {
                                            console.log("Started draggging");
                                        }}
                                        onDragEnd={() => {
                                            this.setState({ setPayload2: true });
                                        }}
                                    >
                                        {({ viewProps }) => {
                                            return (
                                                <Animated.View
                                                    {...viewProps}
                                                    style={[viewProps.style, {
                                                        height: '80%',
                                                        width: '80%', 
                                                        justifyContent: 'center',
                                                        borderWidth: 3,
                                                        borderRadius: 20,
                                                        backgroundColor: 'pink',
                                                        position: "relative"
                                                    }]}
                                                >
                                                    <Text style={{ ...styles.txtLetters }}>{this.state.letra1}</Text>
                                                </Animated.View>
                                            );
                                        }}
                                    </Draggable>
                                </View>
                                <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
                                    <Draggable //CAMBIO CREACION DE DRAGGABLE
                                        payload="letra8"
                                        reset={this.state.setPieza}
                                        onDragStart={() => {
                                            console.log("Started draggging");
                                        }}
                                        onDragEnd={() => {
                                            this.setState({ setPayload2: true });
                                        }}
                                    >
                                        {({ viewProps }) => {
                                            return (
                                                <Animated.View
                                                    {...viewProps}
                                                    style={[viewProps.style, {
                                                        height: '80%',
                                                        width: '80%', 
                                                        justifyContent: 'center',
                                                        borderWidth: 3,
                                                        borderRadius: 20,
                                                        backgroundColor: 'pink',
                                                        position: "relative"
                                                    }]}
                                                >
                                                    <Text style={{ ...styles.txtLetters }}>{this.state.letra8}</Text>
                                                </Animated.View>
                                            );
                                        }}
                                    </Draggable>
                                </View>
                            </View>
                        </View>
                    </View>
                    <View style={styles.bottomContainer}>

                    </View>
                </View>
            </Provider>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: "#b2f7ef",
    },
    topContainer: {
        flex: 0.35
    },
    elementsContainer: {
        flex: 10,
        flexDirection: "column"
    },
    topElements: {
        flex: 1,
        flexDirection: 'row'
    },
    coinContainer: {
        width: "40%",
        justifyContent: "center",
        alignItems: "center"
    },
    coins: {
        flexDirection: "row",
        width: normalize(120, "width"),
        height: normalize(50, "height"),
        marginLeft: normalize(10),
        borderRadius: 20,
        borderWidth: 2,
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
    refreshContainer: {
        width: "20%",
        height: "100%",
        justifyContent: "center",
        alignItems: "center",
    },
    imgRefresh: {
        width: normalize(40, "width"),
        height: normalize(40, "height"),
        resizeMode: "contain",
    },
    elements: {
        flex: 6
    },
    imgContainer: {
        flex: 3,
        flexDirection: 'row'
    },
    img: {
        width: "100%",
        height: "100%",
        resizeMode: "contain"
    },
    txtQuestion: {
        fontWeight: "bold",
        fontSize: normalize(30),
        textAlign: "center",
    },
    txtLetters: {
        fontWeight: "bold",
        fontSize: normalize(25),
        textAlign: "center",
    },
    lettersContainer: {
        flex: 1.25,
        flexDirection: 'row'   
    },
    bottomElements: {
        flex: 3,
        flexDirection: 'column',
    },
    bottomContainer: {
        flex: 0.2
    }
});