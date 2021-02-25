import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet,TouchableOpacity } from "react-native";
import * as firebase from "firebase";
import LoginUser from "../screens/loginUser"
import SelectGrade from "../screens/selectGrade"
import SelectCharacter from "../screens/selectCharacter"
import Loagin from "../screens/components/loading"

const RESPONSIVE_ALL = "100%"
const RESPONSIVE_TOP = "60%"
const RESPONSIVE_LEFT = "25%"
export default function M() { 
    const [login, setLogin] = useState(null);
    useEffect(() => {
        firebase.auth().onAuthStateChanged((user) => {
            console.log(user);
            !user ? setLogin(false) : setLogin(true);
        });
    }, []);  
    // Estado preliminar deacuerdo si el estado login es null
    if (login === null)  return <Loagin isVisible={true} text= "Cargando..."></Loagin>
    //retornando pantallas en caso de estar logeado o no estar logeado
        return login ? <SelectGrade/> : <LoginUser/> 
   
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
    button:{
        borderRadius: 18,
        borderWidth:2,
        width: 150,
        height:50,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'orange',
       marginTop: RESPONSIVE_TOP,
     }
});