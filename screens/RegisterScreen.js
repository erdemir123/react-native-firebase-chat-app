import { View, Text, TouchableOpacity, TextInput, Image } from "react-native";
import React from "react";
import { themeColors } from "../theme";
import { SafeAreaView } from "react-native-safe-area-context";
import Ionicons from "react-native-vector-icons/Ionicons";
import {
  Box,
  FormControl,
  Input,
  WarningOutlineIcon,
  Button,
} from "native-base";
import { useFormik } from "formik";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { useNavigation } from "@react-navigation/native";
import validation from "../utils/validation";
import { auth } from "../config/firebase";

export default function SignUpScreen({navigation}) {
  const {navigate} = useNavigation()
  const {
    values,
    handleBlur,
    handleChange,
    errors,
    touched,
    handleSubmit,
    isSubmitting,
  } = useFormik({
    initialValues: {
      fullName: "",
      email: "",
      password: "",
    },
    onSubmit: async (values) => {
      await new Promise((r) => setTimeout(r, 2000));
      try {
        await createUserWithEmailAndPassword(
          auth,
          values.email,
          values.password
        );
        navigate("Home")
      } catch (err) {
        console.log("err", err);
      }
    },
    validationSchema: validation,
  });
  return (
    <View className="flex-1" style={{ backgroundColor: "#5887C2" }}>
      <SafeAreaView className="flex mt-6">
        <View className="flex-row justify-start">
          <TouchableOpacity
            onPress={() => navigation.goBack()}
            className="bg-yellow-400 p-2 rounded-tr-2xl rounded-bl-2xl ml-4"
          >
            <Ionicons name="arrow-back-outline" size={20} color="green" />
          </TouchableOpacity>
        </View>
        <View className="flex-row justify-center">
          <Image
            source={require("../assets/images/signup.png")}
            style={{ width: 165, height: 105 }}
          />
        </View>
      </SafeAreaView>
      <View
        className="flex-1 bg-white px-8 pt-8"
        style={{ borderTopLeftRadius: 50, borderTopRightRadius: 50 }}
      >
        <View className="form space-y-2">
          <Box alignItems="center">
            <FormControl
              isInvalid={errors.fullName && touched.fullName}
              w="100%"
              maxW="300px"
            >
              <FormControl.Label>Full Name</FormControl.Label>
              <Input
                placeholder="Enter email"
                py="4"
                variant="filled"
                rounded="xl"
                type="text"
                value={values.fullName}
                onChangeText={handleChange("fullName")}
                onBlur={handleBlur("fullName")}
              />
              <FormControl.ErrorMessage
                leftIcon={<WarningOutlineIcon size="2" />}
              >
                {errors.fullname}
              </FormControl.ErrorMessage>
            </FormControl>
          </Box>
          <Box alignItems="center">
            <FormControl
              isInvalid={errors.email && touched.email}
              w="100%"
              maxW="300px"
            >
              <FormControl.Label>E-mail Adress</FormControl.Label>
              <Input
                placeholder="Enter email"
                py="4"
                variant="filled"
                rounded="xl"
                type="text"
                value={values.email}
                onChangeText={handleChange("email")}
                onBlur={handleBlur("email")}
              />
              <FormControl.ErrorMessage
                leftIcon={<WarningOutlineIcon size="2" />}
              >
                {errors.email}
              </FormControl.ErrorMessage>
            </FormControl>
          </Box>
          <Box alignItems="center">
            <FormControl
              isInvalid={errors.password && touched.password}
              w="100%"
              maxW="300px"
            >
              <FormControl.Label>Password</FormControl.Label>
              <Input
                placeholder="Enter password"
                py="4"
                variant="filled"
                type="password"
                rounded="xl"
                value={values.password}
                onChangeText={handleChange("password")}
                onBlur={handleBlur("password")}
              />
              <FormControl.ErrorMessage
                leftIcon={<WarningOutlineIcon size="2" />}
              >
                {errors.password}
              </FormControl.ErrorMessage>
            </FormControl>
          </Box>

          <Button
            size="sm"
            bg="amber.400:alpha.70"
            isDisabled={isSubmitting}
            className="text-slate-500"
            onPress={handleSubmit}
            isLoading={isSubmitting}
            colorScheme="yellow"
            _loading={{
              bg: "amber.400:alpha.70",
              _text: {
                color: "coolGray.700",
              },
            }}
            _spinner={{
              color: "black",
            }}
          >
            <Text style={{ color: "purple" }}>Sing Up</Text>
          </Button>
        </View>
        <Text className="text-xl text-gray-700 font-bold text-center py-5">
          Or
        </Text>
        <View className="flex-row justify-center space-x-12">
          <TouchableOpacity className="p-2 bg-gray-100 rounded-2xl">
            <Image
              source={require("../assets/icons/google.png")}
              className="w-10 h-10"
            />
          </TouchableOpacity>
          <TouchableOpacity className="p-2 bg-gray-100 rounded-2xl">
            <Image
              source={require("../assets/icons/apple.png")}
              className="w-10 h-10"
            />
          </TouchableOpacity>
          <TouchableOpacity className="p-2 bg-gray-100 rounded-2xl">
            <Image
              source={require("../assets/icons/facebook.png")}
              className="w-10 h-10"
            />
          </TouchableOpacity>
        </View>
        <View className="flex-row justify-center mt-7">
          <Text className="text-gray-500 font-semibold">
            Already have an account?
          </Text>
          <TouchableOpacity onPress={() => navigation.navigate("Login")}>
            <Text className="font-semibold text-yellow-500"> Login</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}