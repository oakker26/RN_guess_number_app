import { StyleSheet, Text, View } from "react-native";

const ButtonContainer = ({children}) => {
  return (
    <View style={styles.buttonsContainer}>
      <Text>{children}</Text>
    </View>
  );
};

export default ButtonContainer;

const styles = StyleSheet.create({
  buttonsContainer: {
    flex:1,
    flexDirection: "row",
    alignItems:"center",
    justifyContent:"space-between"
  },
});