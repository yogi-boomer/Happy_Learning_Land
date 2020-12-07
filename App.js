import React from 'react';
import ScreenStack from './app/screens/navigations/ScreenStack'
import {NavigationContainer} from "@react-navigation/native"
import firebase from "firebase";
import {firebaseConfig} from "./app/utils/firebase";


firebase.initializeApp(firebaseConfig);
export default function App(){
  return(
    <NavigationContainer>
       <ScreenStack></ScreenStack>
    </NavigationContainer>
    );
}