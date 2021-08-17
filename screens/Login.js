import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import {
  ScrollView,
  KeyboardAvoidingView,
  View,
  Text,
  StyleSheet,
} from "react-native";
import { Input, Button } from "react-native-elements";
import { MaterialIcons, FontAwesome, Feather } from "@expo/vector-icons";

import { Formik } from "formik";

import { jobDetailValidationSchema, loginIntialValues } from "../schema";
import { COLORS, SIZES } from "../constants";

const Login = ({ navigation }) => {
  const [secureText, setSecureText] = useState(false);

  return (
    <SafeAreaView
      style={{
        justifyContent: "center",
        flex: 1,
        paddingLeft: 20,
      }}
    >
      <KeyboardAvoidingView>
        <ScrollView>
          <View style={{ alignItems: "center" }}>
            <Text style={styles.pageHeader}>Log In</Text>
            <Formik
              initialValues={loginIntialValues}
              onSubmit={(values) => {
                console.log(values);
              }}
              validationSchema={jobDetailValidationSchema}
            >
              {({ handleChange, errors, handleSubmit, values }) => {
                return (
                  <>
                    <Input
                      inputStyle={styles.inputStyle}
                      inputContainerStyle={{ width: 350 }}
                      errorMessage={errors.email}
                      errorStyle={{ color: "red", fontWeight: "bold" }}
                      leftIcon={
                        <MaterialIcons
                          name="email"
                          size={SIZES.icon}
                          color={COLORS.primary}
                        />
                      }
                      leftIconContainerStyle={{ marginRight: 5 }}
                      onChangeText={handleChange("email")}
                      placeholder="Email...."
                      value={values.email}
                    />
                    <Input
                      secureTextEntry={secureText}
                      inputStyle={styles.inputStyle}
                      inputContainerStyle={{ width: 350 }}
                      errorMessage={errors.password}
                      errorStyle={{ color: "red", fontWeight: "bold" }}
                      leftIcon={
                        <FontAwesome
                          name="lock"
                          size={SIZES.icon}
                          color={COLORS.primary}
                        />
                      }
                      leftIconContainerStyle={{ marginRight: 5 }}
                      rightIcon={
                        secureText ? (
                          <Feather
                            name="eye-off"
                            size={SIZES.icon}
                            color={COLORS.primary}
                            onPress={() => setSecureText(false)}
                          />
                        ) : (
                          <Feather
                            name="eye"
                            size={SIZES.icon}
                            color={COLORS.primary}
                            onPress={() => setSecureText(true)}
                          />
                        )
                      }
                      onChangeText={handleChange("password")}
                      placeholder="Password...."
                      value={values.password}
                    />
                    <Button
                      buttonStyle={{
                        width: 200,
                        backgroundColor: COLORS.primary,
                        borderRadius: 20,
                      }}
                      containerStyle={{ margin: 10 }}
                      onPress={handleSubmit}
                      title="Login"
                    />
                  </>
                );
              }}
            </Formik>

            <Text
              style={{
                color: COLORS.primary,
                textDecorationLine: "underline",
              }}
            >
              Forgot Password?
            </Text>
            <Text style={{ marginTop: 5 }}>
              <Text style={{ color: COLORS.black }}>
                Don't have an account?
              </Text>
              <Text
                style={{
                  color: COLORS.primary,
                  textDecorationLine: "underline",
                }}
                onPress={() => navigation.push("Register")}
              >
                {" "}
                Sign Up
              </Text>
            </Text>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  pageHeader: { fontSize: SIZES.h1, marginBottom: SIZES.padding2 },
  leftIconStyle: { marginRight: 5 },
  inputStyle: { fontSize: SIZES.body5 },
});

export default Login;
