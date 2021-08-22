import React, { useContext, useState } from "react";
import { StyleSheet, Text, View, TextInput, ScrollView } from "react-native";
import { Button } from "react-native-elements";
import { Picker } from "@react-native-picker/picker";
import Modal from "react-native-modal";

import { Formik } from "formik";

import { MainStackContext } from "../context/MainStackContext";
import { jobDetailValidationSchema } from "../schema";

import { COLORS, SIZES, addressList } from "../constants";

import AddressForm from "../components/AddressForm";

const JobDetails = ({ navigation }) => {
  const { taskInfo, setTaskInfo } = useContext(MainStackContext);

  const [isModalVisible, setModalVisible] = useState(false);

  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };

  return (
    <ScrollView
      contentContainerStyle={{
        flexGrow: 1,
        paddingHorizontal: SIZES.padding2,
        backgroundColor: COLORS.lightGray,
      }}
    >
      <View style={{ flex: 1 }}>
        <Modal
          isVisible={isModalVisible}
          backdropColor="#B4B3DB"
          backdropOpacity={0.8}
          animationIn="zoomInDown"
          animationOut="zoomOutUp"
          animationInTiming={600}
          animationOutTiming={600}
          backdropTransitionInTiming={600}
          backdropTransitionOutTiming={600}
        >
          <AddressForm toggleModal={toggleModal} />
        </Modal>
        <Formik
          initialValues={taskInfo}
          onSubmit={(values) => {
            setTaskInfo(values);
            navigation.navigate("Recent");
          }}
          validationSchema={jobDetailValidationSchema}
        >
          {({ handleChange, errors, handleSubmit, values, setFieldValue }) => {
            const onPickerValueChange = (value) => {
              console.log(value);
              if (JSON.stringify(value) === '{"value":-1}') {
                toggleModal();
                setFieldValue("address", { value: 0 });
              }
              setFieldValue("address", value);
            };
            return (
              <View style={{ flex: 1 }}>
                {/* //Picker */}
                <Text style={styles.textStyle}>Describe your task</Text>
                <View style={styles.pickerView}>
                  <Picker
                    selectedValue={values.address}
                    onValueChange={(value) => onPickerValueChange(value)}
                    mode={"dropdown"}
                  >
                    <Picker.Item label="Select address" value={{ value: 0 }} />

                    {addressList.map((item) => (
                      <Picker.Item
                        key={item.id}
                        label={item.address + ", " + item.city}
                        value={item}
                      />
                    ))}

                    <Picker.Item
                      label="Add new address.."
                      value={{ value: -1 }}
                    />
                  </Picker>
                </View>
                {errors.address && (
                  <Text style={styles.errorText}>{errors.address.id}</Text>
                )}

                {/* Decription */}
                <Text style={styles.textStyle}>
                  Description (please insert the details of your task below)
                </Text>
                <TextInput
                  style={styles.textInput}
                  value={values.description}
                  onChangeText={handleChange("description")}
                  multiline
                  numberOfLines={12}
                />
                {errors.description && (
                  <Text style={styles.errorText}>{errors.description}</Text>
                )}

                {/* Button */}
                <View style={styles.bottom}>
                  <Button
                    buttonStyle={styles.buttonStyle}
                    containerStyle={{ margin: 10 }}
                    onPress={handleSubmit}
                    title="Create Task"
                  />
                </View>
              </View>
            );
          }}
        </Formik>
      </View>
    </ScrollView>
  );
};

export default JobDetails;

const styles = StyleSheet.create({
  textStyle: {
    paddingTop: SIZES.padding2 * 2,
    paddingBottom: SIZES.padding2,
  },
  pickerView: {
    borderWidth: 1,
    paddingVertical: SIZES.padding,
    borderRadius: SIZES.padding / 2,
    borderColor: COLORS.lightGreen,
  },
  textInput: {
    borderWidth: 1,
    borderRadius: SIZES.padding,
    padding: SIZES.padding,
    textAlignVertical: "top",
    borderColor: COLORS.lightGreen,
  },
  bottom: {
    flex: 1,
    justifyContent: "flex-end",
  },
  buttonStyle: {
    width: "100%",
    backgroundColor: COLORS.primary,
    borderRadius: SIZES.padding,
  },
  errorText: {
    color: "red",
  },
  content: {
    backgroundColor: "white",
    padding: 22,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 4,
    borderColor: "rgba(0, 0, 0, 0.1)",
  },
  contentTitle: {
    fontSize: 20,
    marginBottom: 12,
  },
});
