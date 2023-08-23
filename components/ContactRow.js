import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { FontAwesome5 } from "@expo/vector-icons";
import Seperator from "./Seperator";

export default function ContactRow({ name, subTitle, onPress }) {
  return (
    <View>
      <TouchableOpacity onPress={onPress}> 
        <View style={styles.row}>
          <View style={styles.avatar}>
            <Text style={{ color: "white", fontSize: 24 }}>
              {name
                .split(" ")
                .reduce((prev, current) => `${prev}${current[0]}`, "")}
            </Text>
          </View>
          <View style={styles.user}>
            <Text style={styles.name}>{name}</Text>
            <Text style={styles.name}>{subTitle}</Text>
          </View>
          <FontAwesome5
            name="greater-than"
            size={12}
            color="black"
            style={styles.icon}
          />
        </View>
        <Seperator />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  row: {
    height: 70,
    flexDirection:"row",
    justifyContent: "center",
    alignItems: "center",
    gap:8
  },
  avatar: {
    justifyContent: "center",
    alignItems: "center",
    height: 50,
    width: 50,
    borderRadius: "50%",
    backgroundColor: "#5887C2",
    marginLeft: 16,
  },
  user: {
    flex: 1,
    gap: 5,
  },
  icon: {
    marginRight: 12,
  },
});
