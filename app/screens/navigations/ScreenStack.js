import React from "react"
import {View,Text} from "react-native"
import {NavigationContainer, StackActions} from "@react-navigation/native"
import {createStackNavigator} from "@react-navigation/stack"
import LoginUser from "../loginUser"
import M from "../../utils/m"
import Register from "../counts/register"
import CharacterMain from "../characterMain"
import Main from "../main"

const Stack = createStackNavigator();

export default function ScreenStack(){
    return(

      <Stack.Navigator>
            <Stack.Screen
          name= "main"
          component = {Main}
          options={{ title: '' , headerLeft:false, headerTransparent:true}}
          />
            <Stack.Screen
          name= "m"
          component = {M}
          options={{ title: '' , headerLeft:false, headerTransparent:true}}
          />
          <Stack.Screen
          name= "loginUser"
          component = {LoginUser}
          options={{ title: '' , headerLeft:false, headerTransparent:true}}
          />
           <Stack.Screen
          name= "register"
          component = {Register}
          options={{ title: '' , headerLeft:false, headerTransparent:true}}
          />
           <Stack.Screen
          name= "characterMain"
          component = {CharacterMain}
          options={{ title: '' , headerLeft:false, headerTransparent:true}}
          />
      </Stack.Navigator>
    );
}