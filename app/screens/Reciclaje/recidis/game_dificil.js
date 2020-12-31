import React, { Component } from "react";
import {
  StyleSheet,
  View,
  StatusBar,
  Image,
  Text,
  Animated,
} from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import normalize from "react-native-normalize";
import { useNavigation } from "@react-navigation/native";
import "../recidis/menuReciclaje";
import { Alert } from "../components/Alert";

export default class Game_Dificil extends Component {
  constructor(props) {
    super(props);
    this.state = {
      timer: 7,
      correctCount: 0,
      totalCount: this.props.route.params.questions.length,
      suma: 0,
      activeQuestionIndex: 0,
      questions: this.props.route.params.questions,
      answered: false,
      answerCorrect: false,
      value: 0,
    };
  }

  _startAnimation = () => {
    this.setState({ value: this.state.value + 1 });
  };

  componentDidMount() {
    this.clockCall = setInterval(() => {
      this.decrementClock();
    }, 1000);
  }

  componentWillMount() {
    this.position = new Animated.ValueXY(0, 0);
    Animated.timing(this.position, {
      toValue: { x: 105, y: 450 },
    }).start();
  }

  componentWillUnmount() {
    clearInterval(this.clockCall);
  }

  decrementClock = () => {
    if (this.state.timer == 1) clearInterval(this.nextQuestion());
    this.setState((prevstate) => ({ timer: prevstate.timer - 1 }));
  };

  componentWillUnmount() {
    clearInterval(this.clockCall);
  }

  answer = (correct) => {
    this.setState(
      (state) => {
        const nextState = { answered: true };
        if (correct) {
          nextState.correctCount = state.correctCount + 1;
          //this.suma();
          nextState.answerCorrect = true;
          this._startAnimation();
        } else {
          nextState.answerCorrect = false;
        }
        return nextState;
      },
      () => {
        setTimeout(() => this.nextQuestion(), 700);
      }
    );
  };

  nextQuestion = () => {
    this.setState((state) => {
      this.setState({
        timer: 7,
      });
      const nextIndex = state.activeQuestionIndex + 1;
      if (nextIndex >= state.totalCount) {
        return this.props.navigation.navigate("menuReciclaje");
      }
      return {
        activeQuestionIndex: nextIndex,
        answered: false,
      };
    });
  };

    render() {
        const { timer } = this.state;
        const questions = this.props.route.params.questions;
        const question = questions[this.state.activeQuestionIndex];
        console.log(question.answers[0].text);
    
        return (
            <View style={styles.container}>
                <StatusBar barStyle="dark-content" />
                <View>
                    <StatusBar hidden={true} />
                </View>
                <View style={styles.topContainer}></View>
                <View style={styles.elementsContainer}>
                    <View style={styles.elementsTop}>
                        <View style={styles.coinContainer}>
                            <View style={styles.coins}>
                                <Image
                                    style={styles.coin}
                                    source={require("../../../../assets/sources/Img-Tiendita/moneda.png")}
                                ></Image>
                                <Text style={styles.txtCoin}>x</Text>
                            </View>
                        </View>
                        <View style={styles.blankSpace}></View>
                        <View style={styles.timeContainer}>
                            <Text style={styles.txtTimer}>Tiempo: {timer}</Text>
                        </View>
                    </View>
                    <View style={styles.elementsCenter}>
                        <View style={styles.topImg}>
                            <View style={styles.answerContainer}>
                                <Alert
                                    correct={this.state.answerCorrect}
                                    visible={this.state.answered}
                                />
                            </View>
                            <View style={styles.imgContainer}>
                                <Image source={question.question} style={styles.img} />
                            </View>
                        </View>
                        <View style={styles.questionContainer}>
                            <Text style={styles.txtQuestion}>{question.name}</Text>
                        </View>
                        <View style={styles.garbageContainer}>
                            <View style={styles.garbageTop}>
                                <View style={styles.trashOne}>
                                    <TouchableOpacity
                                        onPress={() => this.answer(question.answers[0].correct)}
                                    >
                                        <Image
                                            style={styles.img}
                                            source={question.answers[0].text}
                                        ></Image>
                                    </TouchableOpacity>
                                </View>
                                <View style={styles.trashTwo}>
                                    <TouchableOpacity
                                        onPress={() => this.answer(question.answers[1].correct)}
                                    >
                                        <Image
                                            style={styles.img}
                                            source={question.answers[1].text}
                                            ></Image>
                                    </TouchableOpacity>
                                </View>
                            </View>
                            <View style={styles.garbageBottom}>
                                <View style={styles.trashThree}>
                                    <TouchableOpacity
                                        onPress={() => this.answer(question.answers[2].correct)}
                                    >
                                        <Image
                                            style={styles.img}
                                            source={question.answers[2].text}
                                        ></Image>
                                    </TouchableOpacity>
                                </View>
                                <View style={styles.trashFour}>
                                    <TouchableOpacity
                                        onPress={() => this.answer(question.answers[3].correct)}
                                    >
                                        <Image
                                            style={styles.img}
                                            source={question.answers[3].text}
                                        ></Image>
                                    </TouchableOpacity>
                                </View>
                            </View>
                        </View>
                    </View>
                    <View style={styles.elementsBottom}>
                        <View style={styles.counterContainer}>
                            <Text style={styles.txtCounter}>
                                {`${this.state.correctCount}/${this.state.totalCount}`}
                            </Text>
                        </View>
                    </View>
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
    flex: 0.35,
  },
  elementsContainer: {
    flex: 10,
    flexDirection: "column",
  },
  bottomContainer: {
    flex: 0.2,
    flexDirection: "row",
  },
  elementsTop: {
    flex: 1,
    flexDirection: "row",
  },
  coinContainer: {
    width: "40%",
    justifyContent: "center",
    alignItems: "center",
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
  txtTimer: {
    fontWeight: "bold",
    fontSize: normalize(20),
    textAlign: "center",
  },
  blankSpace: {
    width: "20%",
  },
  timeContainer: {
    width: "40%",
    justifyContent: "center",
    alignItems: "center",
  },
  elementsCenter: {
    flex: 8,
    flexDirection: "column",
  },
  topImg: {
    flex: 3,
    backgroundColor: "salmon",
  },
  answerContainer: {
    flex: 3,
  },
  imgContainer: {
    flex: 7,
  },
  img: {
    width: "100%",
    height: "100%",
    resizeMode: "contain",
  },
  questionContainer: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: "pink",
  },
  txtQuestion: {
    fontWeight: "bold",
    fontSize: normalize(20),
    textAlign: "center",
  },
  garbageContainer: {
    flex: 5,
    flexDirection: "column",
  },
  garbageTop: {
    flex: 2.5,
    flexDirection: "row",
  },
  garbageBottom: {
    flex: 2.5,
    flexDirection: "row",
  },
  trashOne: {
    flex: 1,
  },
  trashTwo: {
    flex: 1,
  },
  trashThree: {
    flex: 1,
  },
  trashFour: {
    flex: 1,
  },
  elementsBottom: {
    flex: 1,
    flexDirection: "row",
  },
  counterContainer: {
    flex: 1,
    justifyContent: "center",
  },
  txtCounter: {
    fontWeight: "bold",
    fontSize: normalize(20),
    textAlign: "center",
  },
});
