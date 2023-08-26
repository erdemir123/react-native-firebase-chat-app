import { StyleSheet, Text, View } from "react-native";
import React from "react";
import ContactRow from "../components/ContactRow";
import Cell from "../components/Cell";

import { useNavigation } from "@react-navigation/native";
import { signOut } from "firebase/auth";
import { auth } from "../config/firebase";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function SettingScreen() {
  const { navigate } = useNavigation();
  return (
    <View style={{ flex: 1 }}>
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
        onPress={() => {
          AsyncStorage.removeItem("userObject");
          signOut(auth);
          navigate("Login");
        }}
      />
    </View>
  );
}



// function convertUnixTimestampToNormalDateTime(unixTimestamp) {
//   const normalDate = new Date(unixTimestamp);
//   const formattedDate = normalDate.toLocaleDateString("tr-TR", {
//     day: "2-digit",
//     month: "2-digit",
//     year: "numeric",
//     hour: "2-digit",
//     minute: "2-digit"
//   });
//   return formattedDate;
// }

// const unixTimestamp = 1692998240493; // Milisaniye cinsinden Unix zaman damgası
// const normalDateTime = convertUnixTimestampToNormalDateTime(unixTimestamp);

// console.log("Normal Date Time:", normalDateTime);