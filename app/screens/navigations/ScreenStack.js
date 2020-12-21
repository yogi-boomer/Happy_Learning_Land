import React from "react"
import { View, Text } from "react-native"
import { NavigationContainer, StackActions } from "@react-navigation/native"
import { createStackNavigator } from "@react-navigation/stack"

//#region Screen para navegar
import LoginUser from "../loginUser"
import M from "../../utils/m"
import Register from "../counts/register"
import SelectCharacter from "../selectCharacter"
import Main from "../main"
import MainCharacter from '../Tiendita/mainCharacter'
import ListActivity from '../Tiendita/listActivity'
import Store from "../Tiendita/store"
//#endregion

export default function ScreenStack() {
  const Stack = createStackNavigator();
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="main"
        component={Main}
        options={{ title: '', headerLeft: false, headerTransparent: true }}
      />
      <Stack.Screen
        name="m"
        component={M}
        options={{ title: '', headerLeft: false, headerTransparent: true }}
      />
      <Stack.Screen
        name="loginUser"
        component={LoginUser}
        options={{ title: '', headerLeft: false, headerTransparent: true }}
      />
      <Stack.Screen
        name="register"
        component={Register}
        options={{ title: '', headerLeft: false, headerTransparent: true }}
      />
      <Stack.Screen
        name="selectCharacter"
        component={SelectCharacter}
        options={{ title: '', headerLeft: false, headerTransparent: true }}
      />
      <Stack.Screen
        name="mainCharacter"
        component={MainCharacter}
        options={{ title: '', headerLeft: false, headerTransparent: true }}
      />
      <Stack.Screen
        name="listActivity"
        component={ListActivity}
        options={{ title: '', headerLeft: false, headerTransparent: true }}
      />
      <Stack.Screen
        name="store"
        component={Store}
        options={{ title: '', headerLeft: false, headerTransparent: true }}
      />
    </Stack.Navigator>
  );
}