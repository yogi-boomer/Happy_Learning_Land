import React, { Component } from "react";
import {
  StyleSheet,
  View,
  StatusBar,
  Image,
  Text,
  Animated,
} from "react-native";
import { Shake } from "react-native-motion";
import { TouchableOpacity } from "react-native-gesture-handler";
import normalize from "react-native-normalize";
import { useNavigation } from "@react-navigation/native";
import "../recidis/menuReciclaje";

export default class Game_Tutorial extends Component {
  constructor(props) {
    super(props);
    this.state = {
      totalCount: this.props.route.params.questions.length,
      activeQuestionIndex: 0,
      value: 0,
      tareas: this.props.route.params.tareas
    };
  }

  _startAnimation = () => {
    this.setState({ value: this.state.value + 1 });
  };

  nextQuestion = () => {
    this.setState((state) => {
      const nextIndex = state.activeQuestionIndex + 1;
      if (nextIndex >= state.totalCount) {
        return this.props.navigation.goBack();
      } else {
        return {
          activeQuestionIndex: nextIndex,
          answered: false,
        };
      }
    });
  };

  functionTwo() {
    this.nextQuestion();
    this._startAnimation();
  }

  render() {
    const questions = this.props.route.params.questions;
    const question = questions[this.state.activeQuestionIndex];

    return (
      <View style={styles.container}>
        <StatusBar barStyle="dark-content" />
        <View>
          <StatusBar hidden={true} />
        </View>
        <View style={styles.topContainer}></View>
        <View style={styles.elementsContainer}>
          <View style={styles.blankSpaceLeft}></View>
          <View style={styles.elements}>
            <View style={styles.garbage}>
              <View style={styles.topGarbage}>
                <View style={styles.one}>
                  <TouchableOpacity onPress={() => this.nextQuestion()}>
                    <Image
                      style={styles.img}
                      source={question.answers[0].text}
                    ></Image>
                  </TouchableOpacity>
                </View>
                <View style={styles.two}>
                  <TouchableOpacity onPress={() => this.nextQuestion()}>
                    <Image
                      style={styles.img}
                      source={question.answers[1].text}
                    ></Image>
                  </TouchableOpacity>
                </View>
                <View style={styles.three}>
                  <TouchableOpacity onPress={() => this.nextQuestion()}>
                    <Image
                      style={styles.img}
                      source={question.answers[2].text}
                    ></Image>
                  </TouchableOpacity>
                </View>
              </View>
              <View style={styles.centerGarbage}>
                <View style={styles.four}>
                  <TouchableOpacity onPress={() => this.nextQuestion()}>
                    <Image
                      style={styles.img}
                      source={question.answers[3].text}
                    ></Image>
                  </TouchableOpacity>
                </View>
                <View style={styles.five}>
                  <TouchableOpacity onPress={() => this.nextQuestion()}>
                    <Image
                      style={styles.img}
                      source={question.answers[4].text}
                    ></Image>
                  </TouchableOpacity>
                </View>
                <View style={styles.six}>
                  <TouchableOpacity onPress={() => this.nextQuestion()}>
                    <Image
                      style={styles.img}
                      source={question.answers[5].text}
                    ></Image>
                  </TouchableOpacity>
                </View>
              </View>
              <View style={styles.bottomGarbage}>
                <View style={styles.blankSpaceLeftGarbage}></View>
                <View style={styles.seven}>
                  <TouchableOpacity onPress={() => this.nextQuestion()}>
                    <Image
                      style={styles.img}
                      source={question.answers[6].text}
                    ></Image>
                  </TouchableOpacity>
                </View>
                <View style={styles.eight}>
                  <TouchableOpacity onPress={() => this.nextQuestion()}>
                    <Image
                      style={styles.img}
                      source={question.answers[7].text}
                    ></Image>
                  </TouchableOpacity>
                </View>
                <View style={styles.blankSpaceRightGarbage}></View>
              </View>
            </View>
            <View style={styles.trashContainer}>
              <View style={styles.trash}>
                <TouchableOpacity onPress={() => this.functionTwo()}>
                  <Image source={question.question} style={styles.img} />
                </TouchableOpacity>
              </View>
            </View>
          </View>
          <View style={styles.blankSpaceRight}></View>
        </View>
        <View style={styles.bottomContainer}></View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    backgroundColor: "#b2f7ef",
  },
  topContainer: {
    flex: 0.4,
  },
  elementsContainer: {
    flex: 10,
    flexDirection: "row",
  },
  blankSpaceLeft: {
    flex: 1,
    flexDirection: "row",
  },
  elements: {
    flex: 8,
    flexDirection: "column",
  },
  garbage: {
    flex: 4,
    flexDirection: "column",
  },
  topGarbage: {
    flex: 3,
    flexDirection: "row",
  },
  centerGarbage: {
    flex: 3,
    flexDirection: "row",
  },
  bottomGarbage: {
    flex: 3,
    flexDirection: "row",
  },
  one: {
    flex: 1,
  },
  two: {
    flex: 1,
  },
  three: {
    flex: 1,
  },
  four: {
    flex: 1,
  },
  five: {
    flex: 1,
  },
  six: {
    flex: 1,
  },
  blankSpaceLeftGarbage: {
    flex: 0.5,
  },
  seven: {
    flex: 1,
  },
  eight: {
    flex: 1,
  },
  blankSpaceRightGarbage: {
    flex: 0.5,
  },
  trashContainer: {
    flex: 3,
    flexDirection: "row",
  },
  trash: {
    flex: 3,
  },
  blankSpaceRight: {
    flex: 1,
    flexDirection: "row",
  },
  bottomContainer: {
    flex: 1,
    flexDirection: "row",
  },
  img: {
    width: "100%",
    height: "100%",
    resizeMode: "contain",
  },
});