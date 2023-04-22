import { StatusBar } from "expo-status-bar";
import {
  Alert,
  StyleSheet,
  Text,
  View,
  useWindowDimensions,
} from "react-native";
import Title from "../components/ui/Title";
import Colors from "../constants/colors";
import { useState, useEffect } from "react";
import NumberContainer from "../components/game/NumberContainer";
import PrimaryButton from "../components/ui/PrimaryButton";
import Card from "../components/ui/Card";
import InstructionText from "../components/ui/InstructionText";
import ButtonContainer from "../components/ui/ButtonContainer";
import { AntDesign } from "@expo/vector-icons";
import { FlatList } from "react-native";
import GuessLogItem from "../components/game/GuessLogItem";
function generateRandomBetween(min, max, exclude) {
  const rdmNum = Math.floor(Math.random() * (max - min)) + min;
  if (rdmNum === exclude) {
    return generateRandomBetween(min, max, exclude);
  } else {
    return rdmNum;
  }
}
let minBoundary = 1;
let maxBoundary = 100;
const GameScreen = ({ userNumber, onGameOver }) => {
  const initalGuess = generateRandomBetween(1, 100, userNumber);
  const [currentGuess, setCurrentGuess] = useState(initalGuess);
  const [guessRounds, setguessRounds] = useState([initalGuess]);
  const width = useWindowDimensions().width;
  useEffect(() => {
    if (currentGuess === userNumber) {
      onGameOver(guessRounds.length);
    }
  }, [currentGuess, userNumber, onGameOver]);
  useEffect(() => {
    minBoundary = 1;
    maxBoundary = 100;
  }, []);
  function nextGuessHandler(direction) {
    // direction=>'lower','greater'
    if (
      (direction === "lower" && currentGuess < userNumber) ||
      (direction === "greater" && currentGuess > userNumber)
    ) {
      Alert.alert("Don't Line!!!", "You know this is wrong...", [
        { text: "sorry", style: "cancel" },
      ]);
      return;
    }
    if (direction === "lower") {
      maxBoundary = currentGuess;
    } else {
      minBoundary = currentGuess + 1;
    }
    console.log(minBoundary, maxBoundary);
    const newRndNumber = generateRandomBetween(
      minBoundary,
      maxBoundary,
      currentGuess
    );
    setCurrentGuess(newRndNumber);
    setguessRounds((prevGuess) => [newRndNumber, ...prevGuess]);
  }
  const guessRoundsListLength = guessRounds.length;
  let content = (
    <>
      <NumberContainer>{currentGuess}</NumberContainer>
      <Card>
        <InstructionText style={styles.InstructionText}>
          height or low?
        </InstructionText>
        <ButtonContainer>
          <PrimaryButton onPress={nextGuessHandler.bind(this, "lower")}>
            <AntDesign name="minuscircle" size={24} color="white" />
          </PrimaryButton>
          <PrimaryButton onPress={nextGuessHandler.bind(this, "greater")}>
            <AntDesign name="pluscircle" size={24} color="white" />
          </PrimaryButton>
        </ButtonContainer>
      </Card>
    </>
  );
  if (width > 500) {
    content = (
      <>
        <InstructionText style={styles.InstructionText}>
          height or low?
        </InstructionText>
        <ButtonContainer>
          <PrimaryButton onPress={nextGuessHandler.bind(this, "lower")}>
            <AntDesign name="minuscircle" size={24} color="white" />
          </PrimaryButton>
          <NumberContainer>{currentGuess}</NumberContainer>;
          <PrimaryButton onPress={nextGuessHandler.bind(this, "greater")}>
            <AntDesign name="pluscircle" size={24} color="white" />
          </PrimaryButton>
        </ButtonContainer>
      </>
    );
  }
  return (
    <>
      <View style={styles.screen}>
        <Title>Opponent's Guess</Title>
        {content}
        <View style={styles.listContainer}>
          {/* {guessRounds.map((guessRound) => (
            <Text key={guessRound}>{guessRound}</Text>
          ))} */}
          <FlatList
            data={guessRounds}
            renderItem={(itemData) => (
              <GuessLogItem
                roundNumber={guessRoundsListLength - itemData.index}
                guess={itemData.item}
              />
            )}
            keyExtractor={(item) => item}
          />
        </View>
      </View>
      <StatusBar />
    </>
  );
};

export default GameScreen;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 25,
    alignItems: "center",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: Colors.secondary500,
    textAlign: "center",
    borderWidth: 2,
    borderColor: Colors.secondary500,
    padding: 12,
  },
  InstructionText: {
    marginBottom: 20,
  },
  listContainer: {
    flex: 1,
    padding: 16,
  },
});
