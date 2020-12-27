import React, { Component } from 'react';
import {View, Text, StyleSheet, ImageBackground, CheckBox, Image, Button} from 'react-native';
import normalize from "react-native-normalize";
import {TouchableOpacity} from 'react-native-gesture-handler';

export default class ListActivity extends Component {
    //const [isSelected, setSelection] = useState(false);
    //const [isDisabled, setDiseable] = useState(true);
    
    render() {
        return (
            <View style={ styles.container }>
                <View style={ styles.topContainer }>

                </View>
                <View style={ styles.elementsContainer }> 
                    <ImageBackground source={require('../../../assets/sources/Img-Tiendita/lista_navidad.png')} style={ styles.img }>
                        <View style={ styles.topList }>
                            <Text style={ styles.txtTitle }>¡Sé un niño responsable!</Text>
                        </View>
                        <View style={ styles.homework }>
                            <View style={{ marginTop: 20 }}>
                                <View style={styles.listHw}>
                                    <Text style={ styles.textHW }>1.- Limpia tu cuarto</Text>
                                    {/* <CheckBox value={isSelected} onChange={() => CheckBoxpress()} ></CheckBox> */}
                                    <CheckBox></CheckBox>
                                </View>
                                <View style={styles.listHw}>
                                    <Text style={ styles.textHW }>2.- Lávate los dientes</Text>
                                    <CheckBox></CheckBox>
                                </View>
                                <View style={styles.listHw}>
                                    <Text style={ styles.textHW }>3.- Ayuda a limpiar una habitación</Text>
                                    <CheckBox></CheckBox>
                                </View>
                                <View style={styles.listHw}>
                                    <Text style={ styles.textHW }>4.- Realiza tu tarea</Text>
                                    <CheckBox></CheckBox>
                                </View>
                                <View style={styles.listHw}>
                                    <Text style={ styles.textHW }>5.- Saca la basura</Text>
                                    <CheckBox></CheckBox>
                                </View>                        
                            </View>
                        </View>
                        <View style={ styles.bottomList }>
                            <View style={ styles.listHw}>
                                <Text style={styles.txtReward} > Haz obtenido: </Text>
                                <Image style={styles.coin} source={require('../../../assets/sources/Img-Tiendita/moneda.png')}></Image>
                                <Button title = '✔' color = 'green'></Button>
                            </View>
                        </View>
                    </ImageBackground>
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
        flexDirection: 'column',
        backgroundColor: "#b2f7ef",
    },
    topContainer: {
        flex: 0.35,
        //backgroundColor: "gray"
    },
    elementsContainer: {
        flex: 10,
        //backgroundColor: "white",
    },
    bottomContainer: {
        flex: 0.2,
        //backgroundColor: "green"
    },
    topList: {
        flex: 7,
        justifyContent: 'flex-end',
        alignItems: "center",
        //backgroundColor: "orange"
    },
    txtTitle: {
        fontSize: normalize(30),
        fontWeight: "bold",
    },
    homework: {
        flex: 10,
        flexDirection: "column",
        //backgroundColor: "red"
    },
    bottomList: {
        flex: 4,
        alignItems: "center",
        alignContent: 'center',
        //backgroundColor: "purple"
    },
    txtReward: {
        fontWeight: 'bold',
        fontSize: normalize(20)
    },
    coin: {
        width: normalize(50, 'width'),
        height: normalize(50, 'height'),
        marginTop: -10
    },
    listHw: {
        flexDirection: 'row',
        marginTop: 20,
        marginLeft: '15%'
    },
    textHw: {
        fontWeight: 'bold',
        fontSize: normalize(20)
    },
    img: {
        //flex: 10,
        height: '100%',
        resizeMode: 'stretch'
    }
});