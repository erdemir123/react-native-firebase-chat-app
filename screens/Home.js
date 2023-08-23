import { StyleSheet, Text, View } from "react-native";
import React from "react";
import ContactRow from "../components/ContactRow";
import { useNavigation } from "@react-navigation/native";

export default function HomeScreen() {
    const { navigate } = useNavigation();
  return (
    <View>
      <ContactRow
        name="SAdık ERDEMİR"
        subTitle="mnasılsın"
        onPress={() =>navigate("Chat")}
      />
    </View>
  );
}

const styles = StyleSheet.create({});
