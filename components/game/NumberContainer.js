import { Dimensions, StyleSheet, Text, View } from "react-native";
import Colors from "../../constants/colors";

const NumberContainer = ({ children }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.numberText}>{children}</Text>
    </View>
  );
};

export default NumberContainer;
const deviceWidth = Dimensions.get("window").width;
const styles = StyleSheet.create({
  container: {
    borderWidth: 3,
    borderColor: Colors.secondary500,
    padding: deviceWidth < 380 ? 12 : 24,
    borderRadius: 10,
    margin: deviceWidth < 380 ? 12 : 24,
    alignItems: "center",
    justifyContent: "center",
  },
  numberText: {
    color: Colors.secondary500,
    fontSize: deviceWidth < 380 ? 40 : 50,
    fontFamily: "open-sans-bold",
  },
});
