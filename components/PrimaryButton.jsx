import React from "react";
import { View, Text, StyleSheet, Pressable } from "react-native";

function pressHandler(event) {
  console.log(`Button pressed`);
}

const PrimaryButton = ({ children }) => {
  return (
    <View style={styles.outerContainer}>
      <Pressable
        style={styles.innerContainer}
        onPress={pressHandler}
        android_ripple={{ color: "#415c20" }}
      >
        <Text style={{ color: "white", textAlign: "center", fontSize: 20 }}>
          {children}
        </Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  outerContainer: {
    overflow: "hidden",
    borderRadius: 30,
    marginHorizontal: 5,
  },
  innerContainer: {
    borderRadius: 30,
    backgroundColor: "#516b32",
    marginVertical: 6,
    paddingVertical: 8,
    paddingHorizontal: 16,
  },
});

export default PrimaryButton;
