import {
  Alert,
  KeyboardAvoidingView,
  ScrollView,
  StyleSheet,
  TextInput,
  useWindowDimensions,
} from "react-native";
import { View } from "react-native";
import PrimaryButton from "../components/ui/PrimaryButton";
import { useState } from "react";
import Colors from "../constants/colors";
import Title from "../components/ui/Title";
import Card from "../components/ui/Card";
import InstructionText from "../components/ui/InstructionText";
import ButtonContainer from "../components/ui/ButtonContainer";
const StartGameScreen = ({ onPickNumber }) => {
  const [enterNumber, setEnterNumber] = useState("");
  const height = useWindowDimensions().height;
  function numberInputHandler(enterText) {
    setEnterNumber(enterText);
  }
  function resetInputHandler() {
    setEnterNumber("");
  }
  function confirmInputHandler() {
    const chosenNumber = parseInt(enterNumber);
    if (isNaN(chosenNumber) || chosenNumber <= 0 || chosenNumber > 99) {
      //show alert....
      Alert.alert(
        "Invalid Number",
        "Number has to be a number between 1 and 99",
        [{ text: "okey", style: "default", onPress: setEnterNumber }]
      );
    }
    onPickNumber(chosenNumber);
  }
  const marginTopDistance = height < 380 ? 30 : 100;
  const PaddingDistance = height < 380 ? 30 : 0;
  return (
    <ScrollView style={styles.screen}>
      <KeyboardAvoidingView style={styles.screen} behavior="position">
        <View
          style={[
            styles.rootContainer,
            {
              marginTop: marginTopDistance,
              paddingHorizontal: PaddingDistance,
            },
          ]}>
          <Title>Guess My Number</Title>
          <Card>
            <InstructionText>Enter A Number</InstructionText>
            <TextInput
              style={styles.numberInput}
              maxLength={2}
              autoCapitalize="none"
              autoCorrect={false}
              keyboardType="number-pad"
              // defaultValue="22"
              onChangeText={numberInputHandler}
              value={enterNumber}
            />
            <ButtonContainer>
              <View style={styles.buttonContainer}>
                <PrimaryButton>Reset</PrimaryButton>
              </View>
              <View style={styles.buttonContainer}>
                <PrimaryButton onPress={confirmInputHandler}>
                  Confirm
                </PrimaryButton>
              </View>
            </ButtonContainer>
          </Card>
        </View>
      </KeyboardAvoidingView>
    </ScrollView>
  );
};

export default StartGameScreen;
// const deviceHeight=Dimensions.get('window').height
const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
  rootContainer: {
    flex: 1,
    // marginTop: marginTop,
    // paddingHorizontal:deviceHeight<380?30:100,
    alignItems: "center",
  },

  numberInput: {
    height: 64,
    fontSize: 32,
    width: 50,
    textAlign: "center",
    borderBottomColor: Colors.secondary500,
    borderBottomWidth: 2,
    color: Colors.secondary500,
    marginVertical: 8,
    fontWeight: "bold",
  },

  buttonContainer: {
    flex: 1,
  },
});
