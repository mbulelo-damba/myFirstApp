import coffeeImage from "@/assets/images/take-a-break.png";
import { ImageBackground, StyleSheet, Text, View } from "react-native";

const app = () => {
  return (
    <View style={styles.container}>
      <ImageBackground source={coffeeImage} style={styles}>
        <Text style={styles.text}>Coffee Shop</Text>
      </ImageBackground>
    </View>
  );
};

export default app;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
  },
  image: {
    width: "100%",
    height: "100%",
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
  },
  text: {
    fontSize: 40,
    color: "white",
    textAlign: "center",
    fontWeight: "bold",
  },
});
