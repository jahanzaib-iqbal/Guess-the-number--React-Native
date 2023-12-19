import { StatusBar } from "expo-status-bar";
import { ImageBackground, StyleSheet, Text, View } from "react-native";
import StartScreen from "./screens/StartScreen";
import { LinearGradient } from "expo-linear-gradient";

export default function App() {
  return (
    <LinearGradient style={styles.rootScreen} colors={["#31572c", "#fcbf49"]}>
      <ImageBackground
        source={require("./assets/images/bg_3.jpg")}
        style={styles.rootScreen}
        resizeMode="cover"
        imageStyle={{ opacity: 0.15 }}
      >
        <StartScreen />
      </ImageBackground>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  rootScreen: {
    flex: 1,
  },
});
