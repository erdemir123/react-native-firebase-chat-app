import { StyleSheet, Text, View } from "react-native";
import React from "react";
import ContactRow from "../components/ContactRow";
import Cell from "../components/Cell";

export default function SettingScreen() {
  return (
    <View style={{flex:1}}>
      <ContactRow
        name="Sadık ERDERMİR"
        subTitle="erdermirsadik123@gmail.com"
        onPress={() => alert("Çıkış yapılıyor...")}
      />

      <Cell
        title="LogOut"
        icon="log-out-outline"
        tintColor="red"
        onPress={() => alert("Çıkış yapılıyor...")}
      />
      <Cell
        title="Help"
        icon="information-outline"
        tintColor="green"
        onPress={() => alert("Yardım...")}
      />
      <Cell
        title="Tell a Friend"
        icon="call-outline"
        tintColor="pink"
        onPress={() => alert("arama yapılıyor...")}
      />
    </View>
  );
}

