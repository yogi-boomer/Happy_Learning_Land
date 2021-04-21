import React, { Component } from 'react';
import { View, Text, StyleSheet, ImageBackground, CheckBox, Image, Button, StatusBar, AsyncStorage, Alert } from 'react-native';
import normalize from "react-native-normalize";
import { TouchableOpacity } from 'react-native-gesture-handler';
import { TouchableWithoutFeedbackBase } from 'react-native';
import { constant } from 'lodash';

export default class ListActivity extends Component {
    constructor(props) {
        super(props);
        this.state = {
            monedax: 0,
            tareas: 5,
            suma: 0,
            res: 0,
            isSelected1: false,
            isSelected2: false,
            isSelected3: false,
            isSelected4: false,
            isSelected5: false,
            completeTask: 0,
            diaF: ''
        };
    }

    async componentDidMount() {
        var date = new Date().getDate();
        var month = new Date().getMonth() + 1;
        var year = new Date().getFullYear();
        var dia = date + '-' + month + '-' + year;
        this.setState({diaF: String(dia)})
        _storeData = async () => {
            try {
                await AsyncStorage.setItem(
                    'fecha',
                    dia
                );
                await AsyncStorage.setItem('task', String(this.state.completeTask));
                console.log("exito guardando", this.state.diaF);
            } catch (error) {
                // Error
            }
        };
        /*const remove = async () =>{
            try {
                await AsyncStorage.removeItem('task');
                return true;
            } catch (error) {
                return false;
            }
        }
        remove();*/
        const storage = async () => {
            const value = await AsyncStorage.getItem('coins');
            const value2 = await AsyncStorage.getItem('fecha');
            const value3 = await AsyncStorage.getItem('task');
            const monedax = parseInt(value);
            const task = parseInt(value3);
            const complete = 0;
            if (value != null) {
                if (monedax >= 1) {
                    this.setState({ monedax: monedax });
                }
                console.log(value);
            }
            if (value2 != null) {
                console.log(this.state.diaF);
                console.log(value2);
                if (this.state.diaF != value2) {
                    this.setState ({completeTask : complete});
                    this.carga(complete);
                    console.log('jala mamona :,v');
                    try {
                        await AsyncStorage.setItem(
                            'fecha',
                            dia
                        );
                        await AsyncStorage.setItem(
                            'task',
                            String(complete)
                        );
                        console.log("exito guardando nueva fecha ", dia);
                    } catch (error) {
                        // Error
                    }
                }else{
                    console.log('jala mamona x2 :,v');
                    this.carga(task);
                }
                console.log(value);
            }
            if(value3 != null){
                this.setState({completeTask: task});
                console.log(value3);
            }
        }
        storage();
        
    }

    carga = (value) =>{
        if (value >= 5) {
            this.setState({isSelected1 : true});
            this.setState({isSelected2 : true});
            this.setState({isSelected3 : true});
            this.setState({isSelected4 : true});
            this.setState({isSelected5 : true});
            console.log('jala mamona :,v');
            
        }else{
            this.setState({isSelected1 : false});
            this.setState({isSelected2 : false});
            this.setState({isSelected3 : false});
            this.setState({isSelected4 : false});
            this.setState({isSelected5 : false});
        }
    }

    load = async (value) => {
        await AsyncStorage.setItem('coins', value);
        console.log(value);
    }

    CheckBoxpress = (value) => {
        let monedax = this.state.monedax;
        let suma = this.state.suma;
        let res = this.state.res;
        let realizada = this.state.tareas;
        let task = this.state.completeTask;
        suma = monedax + 1;
        res = realizada - 1;
        this.setState({ monedax: suma });
        this.setState({ tareas: res });
        console.log(suma)
        if (value === 1) {
            this.setState({ isSelected1: true });
            task = task + 1;
            this.setState({ completeTask: task });
            console.log('tienes ',task);
        }
        if (value === 2) {
            this.setState({ isSelected2: true });
            task = task + 1;
            this.setState({ completeTask: task });
            console.log('tienes ',task);
        }
        if (value === 3) {
            this.setState({ isSelected3: true });
            task = task + 1;
            this.setState({ completeTask: task });
            console.log('tienes ',task);
        }
        if (value === 4) {
            this.setState({ isSelected4: true });
            task = task + 1;
            this.setState({ completeTask: task });
            console.log('tienes ',task);
        }
        if (value === 5) {
            this.setState({ isSelected5: true });
            task = task + 1;
            this.setState({ completeTask: task });
            console.log('tienes ',task);
        }
        Alert.alert('¡Bien hecho! ten una moneda como recompensa 😁');
        if (task === 5) {
            this.setState({ completeTask: 5 });
            _storeData();
        }
    }

    render() {
        const monedax = this.state.monedax;
        console.log(monedax);
        return (
            <View style={styles.container}>
                <StatusBar barStyle="dark-content" />
                <View>
                    <StatusBar hidden={true} />
                </View>
                <View style={styles.elementsContainer}>
                    <ImageBackground source={require('../../../assets/sources/Img-Tiendita/checklist.png')} style={styles.backgroundContainer}>
                        <View style={styles.elementsTop}>
                            <View style={styles.btnBack}>
                                <TouchableOpacity onPress={() => this.props.navigation.goBack()}>
                                    <Image style={styles.imgBack} source={require('../../../assets/sources/Img-Tiendita/flecha_atras.png')}>

                                    </Image>
                                </TouchableOpacity>
                            </View>
                        </View>
                        <View style={styles.topList}>
                            <Text style={styles.txtTitle}>¡Sé un niño responsable!</Text>
                        </View>
                        <View style={styles.homework}>
                            <View style={{ marginTop: 20 }}>
                                <View style={styles.listHw}>
                                    <Text style={styles.textHW}>1.- Limpia tu cuarto</Text>
                                    <CheckBox value={this.state.isSelected1} disabled={this.state.isSelected1} onValueChange={() => this.CheckBoxpress(1)}></CheckBox>
                                </View>
                                <View style={styles.listHw}>
                                    <Text style={styles.textHW}>2.- Lávate los dientes</Text>
                                    <CheckBox value={this.state.isSelected2} disabled={this.state.isSelected2} onValueChange={() => this.CheckBoxpress(2)}></CheckBox>
                                </View>
                                <View style={styles.listHw}>
                                    <Text style={styles.textHW}>3.- Ayuda a limpiar una habitación</Text>
                                    <CheckBox value={this.state.isSelected3} disabled={this.state.isSelected3} onValueChange={() => this.CheckBoxpress(3)}></CheckBox>
                                </View>
                                <View style={styles.listHw}>
                                    <Text style={styles.textHW}>4.- Realiza tu tarea</Text>
                                    <CheckBox value={this.state.isSelected4} disabled={this.state.isSelected4} onValueChange={() => this.CheckBoxpress(4)}></CheckBox>
                                </View>
                                <View style={styles.listHw}>
                                    <Text style={styles.textHW}>5.- Saca la basura</Text>
                                    <CheckBox value={this.state.isSelected5} disabled={this.state.isSelected5} onValueChange={() => this.CheckBoxpress(5)}></CheckBox>
                                </View>
                            </View>
                        </View>
                        <View style={styles.bottomList}>
                            <View style={styles.listHw}>
                                <Text style={styles.txtReward} > Has obtenido: {monedax}</Text>
                                <Image style={styles.coin} source={require('../../../assets/sources/Img-Tiendita/moneda.png')}></Image>
                                <Button title='✔' color='green' onPress={() => this.props.navigation.push('mainCharacter', this.load(String(monedax)))}></Button>
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
    elementsContainer: {
        flex: 10,
        alignItems: "center"
    },
    bottomContainer: {
        flex: 0.2
    },
    backgroundContainer: {
        height: '100%',
        width: '100%',
        resizeMode: 'contain'
    },
    elementsTop: {
        flex: 3,
        alignItems: 'flex-end'
    },
    btnBack: {
        width: "15%",
        height: "100%",
        justifyContent: "center",
        alignItems: "center",
    },
    imgBack: {
        width: normalize(40, "width"),
        height: normalize(40, "height"),
        resizeMode: "contain",
    },
    topList: {
        flex: 4,
        justifyContent: 'flex-end',
        alignItems: "center",
    },
    txtTitle: {
        fontSize: normalize(30),
        fontWeight: "bold",
    },
    homework: {
        flex: 10,
        flexDirection: "column"
    },
    bottomList: {
        flex: 4,
        alignItems: "center",
        alignContent: 'center'
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
        height: '100%',
        width: '100%',
        resizeMode: 'contain'
    }
});