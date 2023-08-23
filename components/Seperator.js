import { StyleSheet, Text, View } from "react-native";
import React from "react";

export default function Seperator() {
  return <View style={styles.seperator}></View>;
}

const styles = StyleSheet.create({
  seperator: {
    borderBottomWidth: 2,
    borderBottomColor: "#999999",
    height: 1,
    marginLeft:72,
    marginRight:4,
    marginTop:-10
  },
});
