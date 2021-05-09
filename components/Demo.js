import React from "react";
import { StyleSheet, View } from "react-native";
import { useFonts } from "expo-font";

export default function Demo({ children }) {
  
  return <View style={styles.demo}>{children}</View>;
}

const styles = StyleSheet.create({
  demo: {
    height: 250,
    borderBottomWidth: 1,
    borderColor: "#ddd",
    justifyContent: "center",
    alignItems: "center",
    fontFamily:"Montserrat-Regular"
  },
});
