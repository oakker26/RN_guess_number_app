import { Dimensions, StyleSheet, View } from "react-native";

const Card = ({ children }) => {
  return <View style={styles.card}>{children}</View>;
};

export default Card;
const deviceWidth=Dimensions.get("window").width
const styles = StyleSheet.create({
  card: {
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
    marginTop: deviceWidth<380?30:40,
    marginHorizontal: 25,
    borderRadius: 10,
    backgroundColor: "black",
    elevation: 10,
    shadowColor: "gray",
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 6,
    shadowOpacity: 0.5,
  },
});
