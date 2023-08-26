import { StyleSheet, Text, View, Alert, Platform, Modal } from "react-native";
import React, { useEffect, useState } from "react";
import ContactRow from "../components/ContactRow";
import { useNavigation } from "@react-navigation/native";
import useAuth from "../utils/useAuth";
import { addDoc, collection, onSnapshot, query, where } from "firebase/firestore";
import { db } from "../config/firebase";
import { TouchableOpacity } from "react-native";
import PromptAndroid from "react-native-prompt-android";
import { TextInput } from "react-native";

export default function HomeScreen() {
  const { navigate } = useNavigation();
  const [isPromptVisible, setIsPromptVisible] = useState(false);
  const { user } = useAuth();
  const [email, setEmail] = useState("");
  const [chats, setChats] = useState([]);
  
  // const chats = [
  //   {
  //     users: ["sadikerdemir@gmail.com","merveerdemir@gmail.com"],
  //     messages: ["olur gel"],
  //   },
  //   {
  //     users: ["sadikerdemir123@gmail.com","merveerdemir@gmail.com"],
  //     messages: ["hayır ya"],
  //   },
  //   {
  //     users:["sadikerdemir56+@gmail.com","merveerdemir@gmail.com"],
  //     messages: ["nerdesin"],
  //   },
  //   {
  //     users: ["sadikerdemir19@gmail.com","merveerdemir@gmail.com"],
  //     messages: ["haber ver"],
  //   },
  // ];
  const handleFabPress = () => {
    const dataToAdd = {
      users: [user?.email, email],
      messages: [],
    };
    const chatsCollection = collection(db, "chats");
    addDoc(chatsCollection, dataToAdd)
      .then((docRef) => {
        console.log("Veri başarıyla eklendi. Doküman ID:", docRef.id);
        setIsPromptVisible(!isPromptVisible)
        navigate("Chat", {id:docRef.id})
        setEmail("")
      })
      .catch((error) => {
        console.error("Veri eklenirken bir hata oluştu:", error);
        setIsPromptVisible(!isPromptVisible)
        setEmail("")
      });
  };
  useEffect(() => {
    const chatsCollection = collection(db, "chats");
    if (user?.email) {
      const q = query(chatsCollection, where("users", "array-contains", user.email));
      onSnapshot(q, (snapshot) => {
        const docs = snapshot.docs;
        setChats(docs);
        console.log("GOKCE:", chats[0]?.data());
      });
    } else {
      console.log("Kullanıcı e-postası tanımlı değil.");
    }
  }, []);
  return (
    <View style={{ position: "relative", flex: 1 }}>
      {chats.map((chat, index) => (
        <ContactRow
          name={chat?.data().users.find((x) => x !== user?.email)}
          subTitle={chat?.data().messages[0]}
          onPress={() => navigate("Chat", chat?.data().messages)}
          key={index}
        />
      ))}
      <TouchableOpacity
        style={{
          width: 50,
          height: 50,
          borderRadius: 50,
          backgroundColor: "red",
          justifyContent: "center",
          alignItems: "center",
          position: "absolute",
          bottom: 8,
          right: 4,
        }}
        onPress={() => setIsPromptVisible(!isPromptVisible)}
      >
        <Text style={{ color: "white", fontSize: 36 }}>+</Text>
      </TouchableOpacity>
      <Modal
        visible={isPromptVisible}
        animationType="fade"
        transparent={true}
        onRequestClose={() => setIsPromptVisible(false)}
      >
        <TouchableOpacity
          onPress={() => setIsPromptVisible(false)}
          style={styles.modalContainer}
        ></TouchableOpacity>
        <View style={styles.modalContent}>
          <Text style={{ textAlign: "center", fontSize: 16 }}>
            Enter user email
          </Text>
          <View style={styles.horizontalLine} />
          <TextInput
            placeholder="Email"
            style={styles.input}
            value={email}
            onChangeText={(text) => setEmail(text)}
          />
          <TouchableOpacity onPress={handleFabPress}>
            <Text
              style={{
                textAlign: "center",
                fontSize: 16,
                marginTop: 4,
                backgroundColor: "#5887C2",
                marginTop: 15,
                color: "white",
                paddingTop: 8,
              }}
            >
              Submit
            </Text>
          </TouchableOpacity>
        </View>
      </Modal>
    </View>
  );
}
const styles = StyleSheet.create({
  modalContainer: {
    width: "100%",
    height: "100%",
    backgroundColor: "gray",
    position: "relative",
    opacity: 0.6,
  },
  modalContent: {
    width: 200,
    height: 100,
    backgroundColor: "white",
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: [
      { translateX: -100 }, // Half of the width
      { translateY: -50 }, // Half of the height
    ],
    borderRadius: 5,
  },
  horizontalLine: {
    borderBottomWidth: 1,
    borderBottomColor: "#5887C2",
    marginVertical: 10,
  },
  input: {
    borderWidth: 0.5,
    marginHorizontal: 4,
    paddingVertical: 4,
  },
});
