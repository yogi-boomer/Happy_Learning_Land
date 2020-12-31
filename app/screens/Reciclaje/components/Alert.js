import React, { Component } from "react";
import {
  StyleSheet,
  View,
  Image
} from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import normalize from "react-native-normalize";
import { useNavigation } from "@react-navigation/native";

export const Alert = ({ correct, visible }) => {
  if (!visible) return null;

  const icon = correct
    ? require("../../../../assets/sources/Img-Reciclaje/check.png")
    : require("../../../../assets/sources/Img-Reciclaje/close.png");

  const circleStyles = [styles.circle];

  if (correct) {
    circleStyles.push(styles.circleCorrect);
  }

  return (
    <View style={styles.container}>
      <View style={styles.containerAnswer}>
        <View style={circleStyles}>
          <Image source={icon} style={styles.imgIcon} />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
  },
  containerAnswer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  circle: {
    backgroundColor: "#ff4136",
    width: "80%",
    height: "100%",
    borderRadius: 25,
    alignItems: "center",
    justifyContent: "center",
  },
  circleCorrect: {
    backgroundColor: "#28A125",
  },
  imgIcon: {
    width: "80%",
    height: "80%",
    resizeMode: "contain",
  },
});