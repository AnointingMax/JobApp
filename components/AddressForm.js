import React from "react";
import {
  StyleSheet,
  Dimensions,
  KeyboardAvoidingView,
  View,
} from "react-native";
import { Input, Button } from "react-native-elements";

import { Formik } from "formik";

import { FontAwesome5, AntDesign } from "@expo/vector-icons";
import { COLORS, SIZES } from "../constants";
import {
  addressFormIntialValues,
  addressFormValidationSchema,
} from "../schema";

let height = Dimensions.get("window").height;

const AddressForm = ({ toggleModal }) => {
  return (
    <KeyboardAvoidingView style={styles.container}>
      <Formik
        initialValues={addressFormIntialValues}
        onSubmit={(values) => {
          toggleModal();
          console.log(values);
        }}
        validationSchema={addressFormValidationSchema}
      >
        {({ handleChange, errors, handleSubmit, values }) => {
          return (
            <>
              <View style={styles.closeView}>
                <View>
                  <AntDesign
                    name="close"
                    size={SIZES.icon * 2}
                    color={COLORS.secondary}
                    onPress={toggleModal}
                  />
                </View>
              </View>
              <Input
                inputStyle={styles.inputStyle}
                inputContainerStyle={{ width: 350 }}
                errorMessage={errors.address}
                errorStyle={{ color: "red", fontWeight: "bold" }}
                leftIcon={
                  <FontAwesome5
                    name="address-book"
                    size={SIZES.icon}
                    color={COLORS.primary}
                  />
                }
                leftIconContainerStyle={styles.leftIconStyle}
                onChangeText={handleChange("address")}
                placeholder="Address...."
                value={values.address}
              />
              <Input
                inputStyle={styles.inputStyle}
                inputContainerStyle={{ width: 350 }}
                errorMessage={errors.landmark}
                errorStyle={{ color: "red", fontWeight: "bold" }}
                leftIcon={
                  <FontAwesome5
                    name="landmark"
                    size={SIZES.icon}
                    color={COLORS.primary}
                  />
                }
                leftIconContainerStyle={styles.leftIconStyle}
                onChangeText={handleChange("address")}
                placeholder="Landmarks...."
                value={values.landmark}
              />
              <Button
                buttonStyle={{
                  width: 200,
                  backgroundColor: COLORS.primary,
                  borderRadius: 20,
                }}
                containerStyle={{ margin: 10 }}
                onPress={handleSubmit}
                title="Create Address"
              />
            </>
          );
        }}
      </Formik>
    </KeyboardAvoidingView>
  );
};

export default AddressForm;

const styles = StyleSheet.create({
  inputStyle: { fontSize: SIZES.body5 },
  container: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "white",
    height: height / 3 + 15,
    borderRadius: SIZES.base,
  },
  closeView: {
    alignItems: "flex-end",
    marginRight: SIZES.padding2,
    width: "100%",
  },
  leftIconStyle: { marginRight: 5 },
});
