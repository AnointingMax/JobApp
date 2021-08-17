import React, { useState } from "react";
import {
  View,
  Text,
  KeyboardAvoidingView,
  ScrollView,
  StyleSheet,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Input, Button } from "react-native-elements";

import {
  MaterialIcons,
  FontAwesome,
  Feather,
  Octicons,
  Entypo,
} from "@expo/vector-icons";

import { Formik } from "formik";

import { COLORS, SIZES } from "../constants";
import { registerIntialValues, registerValidationSchema } from "../schema";

const Register = ({ navigation }) => {
  const [securePasswordText, setSecurePasswordText] = useState(true);
  const [secureConfirmPasswordText, setConfirmSecurePasswordText] =
    useState(true);

  return (
    <SafeAreaView
      style={{
        paddingTop: 35,
        flex: 1,
        paddingLeft: 20,
      }}
    >
      <KeyboardAvoidingView>
        <ScrollView>
          <View style={{ alignItems: "center" }}>
            <Text style={styles.pageHeader}>Sign Up</Text>
            <Formik
              initialValues={registerIntialValues}
              onSubmit={(values) => {
                console.log(values);
              }}
              validationSchema={registerValidationSchema}
            >
              {({ handleChange, errors, handleSubmit, values }) => {
                return (
                  <>
                    <Input
                      inputStyle={styles.inputStyle}
                      inputContainerStyle={{ width: 350 }}
                      errorMessage={errors.firstName}
                      errorStyle={{ color: "red", fontWeight: "bold" }}
                      leftIcon={
                        <Octicons
                          name="person"
                          size={SIZES.icon}
                          color={COLORS.primary}
                        />
                      }
                      leftIconContainerStyle={styles.leftIconStyle}
                      onChangeText={handleChange("firstName")}
                      placeholder="First Name...."
                      value={values.firstName}
                    />
                    <Input
                      inputStyle={styles.inputStyle}
                      inputContainerStyle={{ width: 350 }}
                      errorMessage={errors.lastName}
                      errorStyle={{ color: "red", fontWeight: "bold" }}
                      leftIcon={
                        <Octicons
                          name="person"
                          size={SIZES.icon}
                          color={COLORS.primary}
                        />
                      }
                      leftIconContainerStyle={styles.leftIconStyle}
                      onChangeText={handleChange("lastName")}
                      placeholder="Last Name...."
                      value={values.lastName}
                    />
                    <Input
                      inputStyle={styles.inputStyle}
                      inputContainerStyle={{ width: 350 }}
                      errorMessage={errors.phone}
                      errorStyle={{ color: "red", fontWeight: "bold" }}
                      leftIcon={
                        <Entypo
                          name="phone"
                          size={SIZES.icon}
                          color={COLORS.primary}
                        />
                      }
                      leftIconContainerStyle={styles.leftIconStyle}
                      onChangeText={handleChange("phone")}
                      placeholder="Phone Number...."
                      value={values.phone}
                    />
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
                      leftIconContainerStyle={styles.leftIconStyle}
                      onChangeText={handleChange("email")}
                      placeholder="Email...."
                      value={values.email}
                    />
                    <Input
                      secureTextEntry={securePasswordText}
                      inputStyle={{ fontSize: SIZES.body5 }}
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
                      leftIconContainerStyle={styles.leftIconStyle}
                      rightIcon={
                        securePasswordText ? (
                          <Feather
                            name="eye-off"
                            size={SIZES.icon}
                            color={COLORS.primary}
                            onPress={() => setSecurePasswordText(false)}
                          />
                        ) : (
                          <Feather
                            name="eye"
                            size={SIZES.icon}
                            color={COLORS.primary}
                            onPress={() => setSecurePasswordText(true)}
                          />
                        )
                      }
                      onChangeText={handleChange("password")}
                      placeholder="Password...."
                      value={values.password}
                    />
                    <Input
                      secureTextEntry={secureConfirmPasswordText}
                      inputStyle={styles.inputStyle}
                      inputContainerStyle={{ width: 350 }}
                      errorMessage={errors.confirmPassword}
                      errorStyle={{ color: "red", fontWeight: "bold" }}
                      leftIcon={
                        <FontAwesome
                          name="lock"
                          size={SIZES.icon}
                          color={COLORS.primary}
                        />
                      }
                      leftIconContainerStyle={styles.leftIconStyle}
                      rightIcon={
                        secureConfirmPasswordText ? (
                          <Feather
                            name="eye-off"
                            size={SIZES.icon}
                            color={COLORS.primary}
                            onPress={() => setConfirmSecurePasswordText(false)}
                          />
                        ) : (
                          <Feather
                            name="eye"
                            size={SIZES.icon}
                            color={COLORS.primary}
                            onPress={() => setConfirmSecurePasswordText(true)}
                          />
                        )
                      }
                      onChangeText={handleChange("confirmPassword")}
                      placeholder="Confirm Password...."
                      value={values.confirmPassword}
                    />
                    <Button
                      buttonStyle={{
                        width: 200,
                        backgroundColor: COLORS.primary,
                        borderRadius: 20,
                      }}
                      containerStyle={{ margin: 10 }}
                      onPress={handleSubmit}
                      title="Sign Up"
                    />
                  </>
                );
              }}
            </Formik>
            <Text>
              <Text style={{ color: COLORS.black }}>
                Already have an account?
              </Text>
              <Text
                style={{ color: COLORS.lightGreen }}
                onPress={() => navigation.pop()}
              >
                {" "}
                Login
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

export default Register;
