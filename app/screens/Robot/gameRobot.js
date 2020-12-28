import React, { Component, useRef, useState } from 'react';
import { StyleSheet, View, Image, Text, Button, Animated, ToastAndroid, ScrollView } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import normalize from 'react-native-normalize';
import {useNavigation} from '@react-navigation/native';
import { createDndContext } from "react-native-easy-dnd";

const { Provider, Droppable, Draggable } = createDndContext();

export default class GameRobot extends Component {    
    render() {
        /* const fadeAnim = useRef(new Animated.Value(1)).current;
        const fadeAnim2 = useRef(new Animated.Value(1)).current;

        const fadeShake = () => {
            Animated.sequence([
                Animated.timing(fadeAnim, {
                    toValue: 10,
                    duration: 100,
                    useNativeDriver: true
                }),
                Animated.timing(fadeAnim, {
                    toValue: -10,
                    duration: 100,
                    useNativeDriver: true
                }),
                Animated.timing(fadeAnim, {
                    toValue: 10,
                    duration: 100,
                    useNativeDriver: true
                }),
                Animated.timing(fadeAnim, {
                    toValue: 0,
                    duration: 100,
                    useNativeDriver: true
                }),
            ]).start();
        };

        const fadeIn = () => {
            Animated.timing(fadeAnim, {
                toValue: 4,
                duration: 2000
            }).start();
        };
        
        const fadeOut = () => {
            fadeAnim.setValue(0);
            Animated.timing(fadeAnim, {
                duration: 1200,
                toValue: 5
            }).start();
        };
        
        const interpolated = fadeAnim.interpolate({
            inputRange: [0, 0.5, 1, 1.5, 2, 2.5, 3, 3.5, 4, 4.5, 5],
            outputRange: [0, -15, 0, 15, 0, -15, 0, 15, 0, -15, 0]
        });

        const style1 = {
            transform: [
                {
                    translateY: interpolated,
                },
            ],
        };
        
        const fadeOut2 = () => {
            fadeAnim2.setValue(0);
            Animated.timing(fadeAnim2, {
                duration: 1200,
                toValue: 5
            }).start();
        };
        
        const interpolated2 = fadeAnim2.interpolate({
            inputRange: [0, 0.5, 1, 1.5, 2, 2.5, 3, 3.5, 4, 4.5, 5],
            outputRange: [0, -15, 0, 15, 0, -15, 0, 15, 0, -15, 0]
        });
        
        const style2 = {
            transform: [
                {
                    translateY: interpolated2,
                },
            ],
        };
        
        var sd = 5;
        var pag = 0;
        
        const showToast = () => {
            ToastAndroid.show("Has ganado una moneda !", ToastAndroid.SHORT);
        };
        
        const showToast1 = () => {
            ToastAndroid.show(
                "Faltan piezas/Piezas Mal Colocadas !",
            ToastAndroid.SHORT);
        };
        
        const showToast2 = () => {
            ToastAndroid.show("Ya acabaste uwu !", ToastAndroid.SHORT);
        };
        
        const showToast3 = () => {
            ToastAndroid.show("Muy bien :) !", ToastAndroid.SHORT);
        };
        
        const [acti, setActi] = useState(false);
        const [contador, setCounta] = useState(0);
        const [press1, setPress1] = useState("auto");
        const [press2, setPress2] = useState("auto");
        const [press3, setPress3] = useState("auto");
        const [press4, setPress4] = useState("auto");
        const [press5, setPress5] = useState("auto");
        const [press6, setPress6] = useState("auto");
        
        const [pressOjoI, setPressOjoI] = useState("auto");
        const [pressOjoD, setPressOjoD] = useState("auto");
        const [pressBoca, setPressBoca] = useState("auto");
        
        const [img1, setImg1] = useState(require("../../../assets/sources/Img-Robot/11.png"));
        const [img2, setImg2] = useState(require("../../../assets/sources/Img-Robot/12.png"));
        const [img3, setImg3] = useState(require("../../../assets/sources/Img-Robot/13.png"));
        const [img4, setImg4] = useState(require("../../../assets/sources/Img-Robot/14.png"));
        const [img5, setImg5] = useState(require("../../../assets/sources/Img-Robot/15.png"));
        const [img6, setImg6] = useState(require("../../../assets/sources/Img-Robot/16.png"));
        const [pages, setPages] = useState(0);
        
        var a = false;
        
        const [cabezaPz, setPayload] = useState(false);
        const [torsoPz, setPayload1] = useState(false);
        const [brazoIPz, setPayload2] = useState(false);
        const [monedas, setMonedas] = useState(0);
        const [brazoDPZ, setPayload3] = useState(false);
        const [piernaIPZ, setPayload4] = useState(false);
        const [piernaDPZ, setPayload5] = useState(false);
        const [boca, setPayload6] = useState(false);
        const [OjoD, setPayload7] = useState(false);
        const [OjoI, setPayload8] = useState(false);
        const [count2, setCount2] = useState(false);
        const [count3, setCount3] = useState(false);
        
        const getData = async () => {
            try {
                const value = await AsyncStorage.getItem("@storage_Key1");
                if (value !== null && acti == false) {
                    setMonedas(parseInt(value));
                    setActi(false);
                }
            } catch (e) {}
        };
        getData();
        
        const resetData = () => {
            storeData("0");
        };
        
        const [contador2, setCounta2] = useState(0);
        
        const [opac1, setOpac1] = useState(0.9);
        const [opac2, setOpac2] = useState(0.9);
        const [opac3, setOpac3] = useState(0.9);
        const [opac4, setOpac4] = useState(0.9);
        const [opac5, setOpac5] = useState(0.9);
        const [opac6, setOpac6] = useState(0.9);
        
        const [visible, setVisible] = useState(false);
        
        const toggleOverlay = () => {
            refreshCabeza();
            setVisible(!visible);
            setCount3(false);
        };
        
        const storeData = async (value) => {
            try {
                await AsyncStorage.setItem("@storage_Key1", value);
            } catch (e) {// saving error
            }
        };
        
        if (contador2 == 3) {
            showToast3();
            setCounta2(0);
            sd = 3;
            setMonedas(monedas + sd);
            storeData(String(monedas + sd));
            fadeOut2();
        }
        
        function sad() {
            if (contador == 6) {
                asd();
                setCounta(0);
                fadeOut();
                setMonedas(monedas + sd);
                storeData(String(monedas + sd));
                a = true;
            } else {
                if (a == true) {
                    showToast2();
                } else {
                    showToast1();
                }
            }
        }
        
        function refresh() {
            setCount2(true);
            setPress1("auto");
            setPress2("auto");
            setPress3("auto");
            setPress4("auto");
            setPress5("auto");
            setPress6("auto");
            setCounta(0);
            pagReset();
            setOpacities();
            playBack.stopAsync();
            playBack.stopAsync();
        }
        
        function pagSig() {
            if (pages == 0) {
                setPages(pages + 1);
                if (!cabezaPz) {
                    setImg1(require("../../../assets/sources/Img-Robot/21.png"));
                }
                if (!torsoPz) {
                    setImg3(require("../../../assets/sources/Img-Robot/23.png"));
                }
                if (!brazoIPz) {
                    setImg2(require("../../../assets/sources/Img-Robot/22.png"));
                }
                if (!brazoDPZ) {
                    setImg4(require("../../../assets/sources/Img-Robot/24.png"));
                }
                if (!piernaIPZ) {
                    setImg5(require("../../../assets/sources/Img-Robot/25.png"));
                }
                if (!piernaDPZ) {
                    setImg6(require("../../../assets/sources/Img-Robot/26.png"));
                }
            } else if (pages == 1) {
                if (!cabezaPz) {
                    setImg1(require("../../../assets/sources/Img-Robot/31.png"));
                }
                if (!torsoPz) {
                    setImg3(require("../../../assets/sources/Img-Robot/33.png"));
                }
                if (!brazoIPz) {
                    setImg2(require("../../../assets/sources/Img-Robot/32.png"));
                }
                if (!brazoDPZ) {
                    setImg4(require("../../../assets/sources/Img-Robot/34.png"));
                }
                if (!piernaIPZ) {
                    setImg5(require("../../../assets/sources/Img-Robot/35.png"));
                }
                if (!piernaDPZ) {
                    setImg6(require("../../../assets/sources/Img-Robot/36.png"));
                }
                setPages(pages + 1);
            } else if (pages == 2) {
                setPages(pages + 1);
                if (!cabezaPz) {
                    setImg1(require("../../../assets/sources/Img-Robot/41.png"));
                }
                if (!torsoPz) {
                    setImg3(require("../../../assets/sources/Img-Robot/43.png"));
                }
                if (!brazoIPz) {
                    setImg2(require("../../../assets/sources/Img-Robot/42.png"));
                }
                if (!brazoDPZ) {
                    setImg4(require("../../../assets/sources/Img-Robot/44.png"));
                }
                if (!piernaIPZ) {
                    setImg5(require("../../../assets/sources/Img-Robot/45.png"));
                }
                if (!piernaDPZ) {
                    setImg6(require("../../../assets/sources/Img-Robot/46.png"));
                }
            }
        }
        
        function setOpacities() {
            setOpac1(0.9);
            setOpac2(0.9);
            setOpac3(0.9);
            setOpac4(0.9);
            setOpac5(0.9);
            setOpac6(0.9);
        }
        
        function pagPrev() {
            if (pages == 1) {
                if (!cabezaPz) {
                    setImg1(require("../../../assets/sources/Img-Robot/11.png"));
                }
                if (!torsoPz) {
                    setImg3(require("../../../assets/sources/Img-Robot/13.png"));
                }
                if (!brazoIPz) {
                    setImg2(require("../../../assets/sources/Img-Robot/12.png"));
                }
                if (!brazoDPZ) {
                    setImg4(require("../../../assets/sources/Img-Robot/14.png"));
                }
                if (!piernaIPZ) {
                    setImg5(require("../../../assets/sources/Img-Robot/15.png"));
                }
                if (!piernaDPZ) {
                    setImg6(require("../../../assets/sources/Img-Robot/16.png"));
                }
                setPages(pages - 1);
            } else if (pages == 2) {
                setPages(pages - 1);
                if (!cabezaPz) {
                    setImg1(require("../../../assets/sources/Img-Robot/21.png"));
                }
                if (!torsoPz) {
                    setImg3(require("../../../assets/sources/Img-Robot/23.png"));
                }
                if (!brazoIPz) {
                    setImg2(require("../../../assets/sources/Img-Robot/22.png"));
                }
                if (!brazoDPZ) {
                    setImg4(require("../../../assets/sources/Img-Robot/24.png"));
                }
                if (!piernaIPZ) {
                    setImg5(require("../../../assets/sources/Img-Robot/25.png"));
                }
                if (!piernaDPZ) {
                    setImg6(require("../../../assets/sources/Img-Robot/26.png"));
                }
            } else if (pages == 3) {
                if (!cabezaPz) {
                    setImg1(require("../../../assets/sources/Img-Robot/31.png"));
                }
                if (!torsoPz) {
                    setImg3(require("../../../assets/sources/Img-Robot/33.png"));
                }
                if (!brazoIPz) {
                    setImg2(require("../../../assets/sources/Img-Robot/32.png"));
                }
                if (!brazoDPZ) {
                    setImg4(require("../../../assets/sources/Img-Robot/34.png"));
                }
                if (!piernaIPZ) {
                    setImg5(require("../../../assets/sources/Img-Robot/35.png"));
                }
                if (!piernaDPZ) {
                    setImg6(require("../../../assets/sources/Img-Robot/36.png"));
                }
                setPages(pages - 1);
            }
        }
        
        function pagReset() {
            setImg1(require("../../../assets/sources/Img-Robot/11.png"));
            setImg3(require("../../../assets/sources/Img-Robot/13.png"));
            setImg2(require("../../../assets/sources/Img-Robot/12.png"));
            setImg4(require("../../../assets/sources/Img-Robot/14.png"));
            setImg5(require("../../../assets/sources/Img-Robot/15.png"));
            setImg6(require("../../../assets/sources/Img-Robot/16.png"));
            setPages(0);
            setPayload(false);
            setPayload1(false);
            setPayload2(false);
            setPayload3(false);
            setPayload4(false);
            setPayload5(false);
        }
        //
        
        function asd() {
            playBack.playAsync();
        }
        
        function pro() {
            pagSig();
        }
        if (contador == 6) {
            sd = 5;
        } */

        return (
            <View style={styles.container}>
                <View style={styles.topContainer}>

                </View>
                <View style={styles.elementsContainer}>
                    <View style={styles.elementsTop}>
                        <View style={styles.coinContainer}>
                            <View style={styles.coins}>
                                <Image style={ styles.coin} source={require("../../../assets/sources/Img-Tiendita/moneda.png")}></Image>
                                <Text style={styles.txtCoin}>x</Text>
                            </View>
                        </View>
                        <View style={styles.blankSpace}>

                        </View>
                        <View style={styles.refreshContainer}>
                            <TouchableOpacity> 
                            {/* onPress={() => {refresh();}} onLongPress={resetData} */}
                                <Image style={styles.imgRefresh} source={require("../../../assets/sources/Img-Robot/refresh.png")}></Image>
                            </TouchableOpacity>
                        </View>
                    </View>
                    <View style={styles.robotContainer}>
                        <View style={styles.blankLeft}>

                        </View>
                        <View style={styles.robotSilhouette}>
                            <View style={styles.topPart}>
                                <View style={styles.blankLeftHead}>

                                </View>
                                <View style={styles.headSilhouette}>

                                </View>
                                <View style={styles.blankRightHead}>

                                </View>
                            </View>
                            <View style={styles.centerPart}>
                                <View style={styles.armLeftSilhouette}>

                                </View>
                                <View style={styles.torsoSilhouette}>

                                </View>
                                <View style={styles.armRightSilhouette}>

                                </View>
                            </View>
                            <View style={styles.bottomPart}>
                                <View style={styles.blankLeftLeg}>

                                </View>
                                <View style={styles.leftLegSilhouette}>

                                </View>
                                <View style={styles.rightLegSilhouette}>

                                </View>
                                <View style={styles.blankRightLeg}>

                                </View>
                            </View>
                        </View>
                        <View style={styles.blankRight}>

                        </View>
                    </View>
                    <View style={styles.robotTxt}>
                        <Text style={styles.txtRobot}>Piezas del Robot</Text>
                    </View>
                    <View style={styles.robotParts}>
                        <View style={styles.prevContainer}>
                            <TouchableOpacity>
                                 {/* onPress={pagPrev}> */}
                                <Image style={styles.imgFlechas} source={require("../../../assets/sources/Img-Robot/prev.png")}></Image>
                            </TouchableOpacity>
                        </View>
                        <View style={styles.parts}>
                            <View style={styles.upperBody}>
                                <View style={styles.leftArm}>
                                    <Image style={ styles.imgParts} source={require("../../../assets/sources/Img-Robot/12.png")}></Image>
                                </View>
                                <View style={styles.head}>
                                    <Image style={ styles.imgParts} source={require("../../../assets/sources/Img-Robot/11.png")}></Image>
                                </View>
                                <View style={styles.rightArm}>
                                    <Image style={ styles.imgParts} source={require("../../../assets/sources/Img-Robot/14.png")}></Image>
                                </View>
                            </View>
                            <View style={styles.loweBody}>
                                <View style={styles.leftLeg}>
                                    <Image style={ styles.imgParts} source={require("../../../assets/sources/Img-Robot/15.png")}></Image>
                                </View>
                                <View style={styles.torso}>
                                    <Image style={ styles.imgParts} source={require("../../../assets/sources/Img-Robot/13.png")}></Image>
                                </View>
                                <View style={styles.rightLeg}>
                                    <Image style={ styles.imgParts} source={require("../../../assets/sources/Img-Robot/16.png")}></Image>
                                </View>
                            </View>  
                        </View>
                        <View style={styles.nextContainer}>
                            <TouchableOpacity>
                                {/* onPress={pagSig}> */}
                                <Image style={styles.imgFlechas} source={require("../../../assets/sources/Img-Robot/next.png")}></Image>
                            </TouchableOpacity>
                        </View>
                    </View>
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
  },
  topContainer: {
    flex: 0.35,
    backgroundColor: "gray",
  },
  elementsContainer: {
    flex: 10,
    flexDirection: "column",
    backgroundColor: "#f8f5f2",
  },
  bottomContainer: {
    flex: 0.2,
    backgroundColor: "white",
  },
  elementsTop: {
    flex: 1,
    flexDirection: "row",
    backgroundColor: "orange",
  },
  robotContainer: {
    flex: 4,
    flexDirection: "row",
    backgroundColor: "aqua",
  },
  robotTxt: {
    flex: 0.6,
    justifyContent: "center",
    backgroundColor: "red",
  },
  robotParts: {
    flex: 4,
    flexDirection: "row",
    backgroundColor: "salmon",
  },
  blankLeft: {
    flex: 1,
    backgroundColor: 'gray'
  },
  robotSilhouette: {
    flex: 5,
    flexDirection: "column",
    backgroundColor: 'white'
  },
  topPart: {
    flex: 3,
    flexDirection: "row",
    backgroundColor: "pink"
  },
  blankLeftHead: {
    flex: 2,
    backgroundColor: 'white'
  },
  headSilhouette: {
    flex: 4,
    backgroundColor: 'red'
  },
  blankRightHead: {
    flex: 2,
    backgroundColor: 'white'
  },
  centerPart: {
    flex: 3.5,
    flexDirection: "row",
    backgroundColor: 'gold'
  },
  armLeftSilhouette: {
    flex: 2,
    backgroundColor: 'pink'
  },
  torsoSilhouette: {
    flex: 4,
    backgroundColor: 'aqua'
  },
  armRightSilhouette: {
    flex: 2,
    backgroundColor: 'yellow'
  },
  bottomPart: {
    flex: 3.5,
    flexDirection: "row",
    backgroundColor: "aqua"
  },
  blankLeftLeg: {
    flex: 2,
    backgroundColor: 'white'
  },
  leftLegSilhouette: {
    flex: 2,
    backgroundColor: 'blue'
  },
  rightLegSilhouette: {
    flex: 2,
    backgroundColor: 'beige'
  },
  blankRightLeg: {
    flex: 2,
    backgroundColor: 'white'
  },
  blankRight: {
    flex: 1,
    backgroundColor: 'gray'
  },
  coinContainer: {
    width: "40%",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white",
  },
  coins: {
    flexDirection: "row",
    width: normalize(120, "width"),
    height: normalize(50, "height"),
    borderRadius: normalize(20),
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
  blankSpace: {
    width: "20%",
  },
  refreshContainer: {
    width: "40%",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "yellow",
  },
  prevContainer: {
    flex: 0.5,
  },
  parts: {
    flex: 4,
    flexDirection: "column",
    backgroundColor: "yellow",
  },
  upperBody: {
    flex: 3,
    flexDirection: "row",
    backgroundColor: "white",
  },
  loweBody: {
    flex: 3,
    flexDirection: "row",
    backgroundColor: "aqua",
  },
  leftArm: {
    flex: 1,
    backgroundColor: "beige",
  },
  head: {
    flex: 1,
    backgroundColor: "gold",
  },
  rightArm: {
    flex: 1,
    backgroundColor: "silver",
  },
  leftLeg: {
    flex: 1,
    backgroundColor: "brown",
  },
  torso: {
    flex: 1,
    backgroundColor: "violet",
  },
  rightLeg: {
    flex: 1,
    backgroundColor: "cyan",
  },
  nextContainer: {
    flex: 0.5,
  },
  imgRefresh: {
    width: normalize(40, "width"),
    height: normalize(40, "height"),
    resizeMode: "contain",
  },
  txtRobot: {
    fontWeight: "bold",
    fontSize: normalize(20),
    textAlign: "center",
  },
  imgFlechas: {
    width: "100%",
    height: "100%",
    resizeMode: "contain",
  },
  imgParts: {
    width: "100%",
    height: "100%",
    resizeMode: "contain",
  },
});