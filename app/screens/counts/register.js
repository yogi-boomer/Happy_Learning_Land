import React from "react";
import { View, StyleSheet, Alert } from "react-native";
import { Input, Icon, Button } from "react-native-elements";
import { useState } from "react";
import { validateEmail } from "../../utils/validations"
import { size, isEmpty, isArguments } from "lodash"
import * as firebase from "firebase"
import {useNavigation} from "@react-navigation/native"
import Loading from "../components/loading"

const RESPONSIVE_ALL = "100%"
const RESPONSIVE_TOP = "50%"
const RESPONSIVE_LEFT = "25%"

export default function Register() {
    const [data, setData] = useState(defaultFormatValue());
    const [showPassword, setShowPassword] = useState(false);
    const navigation = useNavigation();
    const [loading,setLoading] = useState(false)

    //funcion para saber que tipo de dato se esta enviando
    //Agregada funcion de validacion  de datos
    //falta de implementacion de algun toast
    const onSubmit = () => {
        if (isEmpty(data.email) || isEmpty(data.password)) {
            Alert.alert("Puede que algún campo se encuentre vacío")
        } else if (!validateEmail(data.email)) {
            Alert.alert("Ingresa correctamente el email");
        } else if (size(data.password) < 6) {
            Alert.alert("Tu contraseña debe tener al menos 6 caracteres");
        } else if(data.password !== data.repeatePassword){
            Alert.alert("No coinciden contraseñas");
        } else {
            setLoading(true);
            firebase.auth().createUserWithEmailAndPassword(data.email, data.password)
            .then(response => {
                setLoading(false); 
                navigation.navigate('selectGrade');
            }).catch(error => {
                setLoading(false); 
                Alert.alert("Este email ya se encuentra en uso");
            });
        }
        console.log(data);
        console.log(validateEmail(data.email))
    }
    const onChange = (e, type) => {
        //obteniendo valores ingresados con los input 
        setData({ ...data, [type]: e.nativeEvent.text });
    }
    return (
        <View style={styles.formContainer}>
            <Input
                placeholder="Correo electrónico"
                containerStyle={styles.inputForm}
                onChange={(e) => onChange(e, "email")}
                rightIcon={
                    <Icon
                        type="material-community"
                        name="at"
                        iconStyle={styles.iconRight}
                    />
                }
            />
            <Input
                placeholder="Contraseña"
                containerStyle={styles.inputForm}
                password={true}
                secureTextEntry={showPassword ? false : true}
                onChange={(e) => onChange(e, "password")}
                rightIcon={
                    <Icon
                        type="material-community"
                        name={showPassword ? "eye-off-outline" : "eye-outline"}
                        iconStyle={styles.iconRight}
                        onPress={() => setShowPassword(!showPassword)}
                    />
                }
            />
            <Input
                placeholder="Contraseña"
                containerStyle={styles.inputForm}
                password={true}
                secureTextEntry={showPassword ? false : true}
                onChange={(e) => onChange(e, "repeatePassword")}
                rightIcon={
                    <Icon
                        type="material-community"
                        name={showPassword ? "eye-off-outline" : "eye-outline"}
                        iconStyle={styles.iconRight}
                        onPress={() => setShowPassword(!showPassword)}
                    />
                }
            />
            <Button
                title="Unirse"
                containerStyle={styles.btnContainerRegister}
                buttonStyle={styles.btnRegister}
                onPress={onSubmit}
            />
            <Loading isVisible={loading} text="Creando tu cuenta... "/>
        </View>
    );
}

function defaultFormatValue() {
    return {
        email: "",
        password: "",
        repeatePassword: ""
    }
}
const styles = StyleSheet.create({
    formContainer: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        marginTop: 30,
    },
    inputForm: {
        width: "70%",
        marginTop: 20,
    },
    btnContainerRegister: {
        marginTop: 20,
        width: "50%",
    },
    btnRegister: {
        backgroundColor: "#00a680",
    },
    iconRight: {
        color: "#c1c1c1",
    },
});