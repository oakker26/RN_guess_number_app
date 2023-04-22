import { Dimensions, Image, StyleSheet, Text,ScrollView, View, useWindowDimensions } from "react-native";
import Colors from "../constants/colors";
import Title from "../components/ui/Title";
import PrimaryButton from "../components/ui/PrimaryButton";

const GameOverScreen = ({ roundsNumber, userNumber, startAgain }) => {
  const {width,height}=useWindowDimensions();
  let imageSize=300;
  if (width<400){
    imageSize=150;
  }
  if (height<400){
    imageSize=80
  }
  const imageStyle={
    width:imageSize,
    height:imageSize,
    borderRadius:imageSize/2
  }
  return (
    <ScrollView style={styles.screen}>
      <View style={styles.rootContainer}>
        <Title>This is GameOver</Title>

        <View style={[styles.imageContainer, imageStyle]}>
          <Image
            style={styles.image}
            source={require("../assets/images/success.png")}
          />
        </View>
        <View>
          <Text style={styles.summaryText}>
            Your Phone neeed{" "}
            <Text style={styles.highlight}>{roundsNumber}</Text> rounds to guess
            the number <Text style={styles.highlight}>{userNumber}</Text> .
          </Text>
        </View>
        <PrimaryButton onPress={startAgain}>Start New Game</PrimaryButton>
      </View>
    </ScrollView>
  );
};

export default GameOverScreen;
// const deviceWidth = Dimensions.get("window").width;
const styles = StyleSheet.create({
  screen:{
    flex:1
  },
  rootContainer: {
    flex: 1,
    padding: 24,
    justifyContent: "center",
    alignItems: "center",
  },
  imageContainer: {
    // width: deviceWidth < 380 ? 200 : 300,
    // height: deviceWidth < 380 ? 200 : 300,
    // borderRadius: deviceWidth < 380 ? 100 : 150,
    borderWidth: 4,
    borderColor: Colors.primary700,
    overflow: "hidden",
    margin: 36,
  },
  image: {
    width: "100%",
    height: "100%",
  },
  summaryText: {
    fontFamily: "open-sans",
    fontSize: 24,
    fontWeight: 600,
    textAlign: "center",
    color: "white",
    marginVertical: 20,
  },
  highlight: {
    fontFamily: "open-sans-bold",
    color: "black",
  },
});
