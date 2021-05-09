import React from 'react'
import { View, Text, StyleSheet } from "react-native";
import { textPrimary, textSecondary, textTertiary } from "../styles/color";

export default function Game_name() {
  return (
    <View>
      <Text style={styles.title}>Game Name</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  title: {
    color: textPrimary,
    fontSize: 30,
  },
});