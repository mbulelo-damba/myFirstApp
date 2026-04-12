import { Link, Stack } from "expo-router";
import { StyleSheet, Text, View } from "react-native";

export default function NotFoundScreen() {
  return (
    <View style={styles.container}>
      <Stack.Screen options={{ headerTitle: "Oops! Not Found" }} />
      <Text style={styles.text}>404 not found🙄</Text>
      <Link href={"/"} style={styles.button}>
        Go to Home Screen
      </Link>
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
