import { View, Text } from "react-native";
import React, { useEffect, useState } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../config/firebase";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function useAuth() {
  const [user, setUser] = useState(null);
  useEffect(() => {
    const unsub = onAuthStateChanged(auth, (user) => {
      if (user) {
        AsyncStorage.setItem("userObject", JSON.stringify(user));
      }
    });
    AsyncStorage.getItem("userObject").then((userString) => {
      if (userString) {
        const storedUser = JSON.parse(userString);
        setUser(storedUser);
      }
    });
    return unsub;
  }, [user]);
  return { user };
}
