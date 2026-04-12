import { StyleSheet, Text, View } from "react-native";

export default function Index() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Eita Daar✌️</Text>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    backgroundColor: "#89b3d1",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontSize: 30,
    fontFamily: "consolas",
    color: "#2825dc",
  },
  button: {
    fontSize: 20,
    fontFamily: "consolas",
    textDecorationLine: "underline",
    color: "#2825dc",
  },
});
