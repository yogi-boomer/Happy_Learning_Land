import React from "react";
import { NavigationContainer, StackActions } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

//#region Screen para navegar
import LoginUser from "../loginUser";
import M from "../../utils/m";
import Register from "../counts/register";
import SelectGrade from "../selectGrade";
import SelectCharacter from "../selectCharacter";
import Main from "../main";
import MainCharacter1 from "../Principal/mainCharacter1";
import MainCharacter from "../Tiendita/mainCharacter";
import MenuPalabras from "../Palabras/menuPalabras";
import Facil from "../Palabras/facil";
import ListActivity from "../Tiendita/listActivity";
import Store from "../Tiendita/store";
import OutsideStore from "../Tiendita/outsideStore";
import GameRobot from "../Robot/gameRobot";
import MenuReciclaje from "../Reciclaje/recidis/menuReciclaje";
import MenuReciclaje1 from "../Reciclaje/recidis/menuReciclaje1";
import Game_Tutorial from "../Reciclaje/recidis/game_tutorial";
import Game_Facil from "../Reciclaje/recidis/game_facil";
import Game_Intermedio from "../Reciclaje/recidis/game_intermedio";
import Game_Dificil from "../Reciclaje/recidis/game_dificil";
import Alimentacion from "../Alimentacion/alimentacion";
//#endregion

export default function ScreenStack() {
  const Stack = createStackNavigator();
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="main"
        component={Main}
        options={{ title: "", headerLeft: false, headerTransparent: true }}
      />
      <Stack.Screen
        name="m"
        component={M}
        options={{ title: "", headerLeft: false, headerTransparent: true }}
      />
      <Stack.Screen
        name="loginUser"
        component={LoginUser}
        options={{ title: "", headerLeft: false, headerTransparent: true }}
      />
      <Stack.Screen
        name="register"
        component={Register}
        options={{ title: "", headerLeft: false, headerTransparent: true }}
      />
      <Stack.Screen
        name= "selectGrade"
        component={SelectGrade}
        options={{ title: "", headerLeft: false, headerTransparent: true }}
      />
      <Stack.Screen
        name="selectCharacter"
        component={SelectCharacter}
        options={{ title: "", headerLeft: false, headerTransparent: true }}
      />
      <Stack.Screen
        name="mainCharacter1"
        component={MainCharacter1}
        options={{ title: "", headerLeft: false, headerTransparent: true }}
      />
      <Stack.Screen
        name="mainCharacter"
        component={MainCharacter}
        options={{ title: "", headerLeft: false, headerTransparent: true }}
      />
      <Stack.Screen
        name="listActivity"
        component={ListActivity}
        options={{ title: "", headerLeft: false, headerTransparent: true }}
      />
      <Stack.Screen
        name="menuPalabras"
        component={MenuPalabras}
        options={{ title: "", headerLeft: false, headerTransparent: true }}
      />
      <Stack.Screen
        name="facil"
        component={Facil}
        options={{ title: "", headerLeft: false, headerTransparent: true }}
      />
      <Stack.Screen
        name="store"
        component={Store}
        options={{ title: "", headerLeft: false, headerTransparent: true }}
      />
      <Stack.Screen
        name="outsideStore"
        component={OutsideStore}
        options={{ title: "", headerLeft: false, headerTransparent: true }}
      />
      <Stack.Screen
        name="gameRobot"
        component={GameRobot}
        options={{ title: "", headerLeft: false, headerTransparent: true }}
      />
      <Stack.Screen
        name="menuReciclaje"
        component={MenuReciclaje}
        options={{ title: "", headerLeft: false, headerTransparent: true }}
      />
      <Stack.Screen
        name="menuReciclaje1"
        component={MenuReciclaje1}
        options={{ title: "", headerLeft: false, headerTransparent: true }}
      />
      <Stack.Screen
        name="game_tutorial"
        component={Game_Tutorial}
        options={{ title: "", headerLeft: false, headerTransparent: true }}
      />
      <Stack.Screen
        name="game_facil"
        component={Game_Facil}
        options={{ title: "", headerLeft: false, headerTransparent: true }}
      />
      <Stack.Screen
        name="game_intermedio"
        component={Game_Intermedio}
        options={{ title: "", headerLeft: false, headerTransparent: true }}
      />
      <Stack.Screen
        name="game_dificil"
        component={Game_Dificil}
        options={{ title: "", headerLeft: false, headerTransparent: true }}
      />
      <Stack.Screen
        name="alimentacion"
        component={Alimentacion}
        options={{ title: "", headerLeft: false, headerTransparent: true }}
      />
    </Stack.Navigator>
  );
}