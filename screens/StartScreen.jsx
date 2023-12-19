import React from "react";
import { TextInput, View, StyleSheet } from "react-native";
import PrimaryButton from "../components/PrimaryButton";

const StartScreen = () => {
  return (
    <View style={styles.mainContainer}>
      <TextInput
        style={styles.userInput}
        maxLength={2}
        keyboardType="number-pad"
      />
      <View style={{ flexDirection: "row" }}>
        <View style={{ flex: 1 }}>
          <PrimaryButton>Reset</PrimaryButton>
        </View>
        <View style={{ flex: 1 }}>
          <PrimaryButton>Confirm</PrimaryButton>
        </View>
      </View>
    </View>
  );
};

export default StartScreen;

const styles = StyleSheet.create({
  mainContainer: {
    marginTop: 100,
    marginHorizontal: 20,
    paddingHorizontal: 10,
    backgroundColor: "#283618",
    borderRadius: 6,
    elevation: 20,
    paddingVertical: 15,
    justifyContent: "center",
    alignItems: "center",
  },

  userInput: {
    borderColor: "#c4dd73",
    padding: 10,
    color: "#c4dd73",
    fontSize: 35,
    width: 70,
    fontWeight: "bold",
    borderBottomWidth: 4,
    textAlign: "center",
    marginVertical: 10,
    borderRadius: 4,
  },
});
