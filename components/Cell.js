import { View, Text } from "react-native";
import React from "react";
import { TouchableOpacity, StyleSheet } from "react-native";
import { FontAwesome5, Ionicons } from "@expo/vector-icons";

export default function Cell({ title, icon, tintColor, onPress }) {
  return (
    <TouchableOpacity
      style={{
        height: 60,
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        paddingHorizontal: 20,
        backgroundColor:"white",
        marginBottom:4
      }}
      onPress={onPress}
    >
      <View style={{ backgroundColor:  tintColor, padding:4,borderRadius:4,marginRight:8}}>
        <Ionicons name={icon} size={24} color="white" />
      </View>
      <Text style={{ flex: 1 ,fontSize:16,fontWeight:"bold", }}>{title}</Text>
      <FontAwesome5
        name="greater-than"
        size={12}
        color="black"
        style={styles.icon}
      />
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  icon: {
    marginRight: 12,
  },
});
