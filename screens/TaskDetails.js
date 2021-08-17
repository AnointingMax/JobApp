import React, { useContext } from "react";
import {
  Image,
  StyleSheet,
  Text,
  TextInput,
  View,
  TouchableOpacity,
} from "react-native";
import { Button } from "react-native-elements";

import { RecentStackContext } from "../context/RecentStackContext";

import { SIZES, COLORS } from "../constants";
import { MaterialIcons } from "@expo/vector-icons";

const TaskDetails = ({ navigation, route }) => {
  const { task, setTasker } = useContext(RecentStackContext);

  return (
    <View style={{ flex: 1, padding: SIZES.padding2 }}>
      <View style={{ marginVertical: 10 }}>
        <Text style={styles.sectionText}>Task Details</Text>
        <Text>
          <Text style={styles.propertyHeader}>Date:</Text>{" "}
          <Text style={styles.propertyText}>
            {new Date(task.date).toDateString()}
          </Text>
        </Text>
        <Text>
          <Text style={styles.propertyHeader}>Address:</Text>{" "}
          <Text style={styles.propertyText}>
            {task.location.address}, {task.location.city}
          </Text>
        </Text>
        <Text style={styles.propertyHeader}>Description:</Text>
        <TextInput
          style={styles.textInput}
          value={task.description}
          multiline
          editable={false}
          numberOfLines={9}
        />
      </View>
      <Text style={styles.sectionText}>Tasker:</Text>
      <TouchableOpacity
        style={styles.taskerView}
        onPress={() => {
          setTasker(task.tasker);
          navigation.push("TaskerDetails");
        }}
      >
        <Image
          source={require("../assets/images/plumbing.jpg")}
          resizeMode="cover"
          style={styles.profileImage}
        />
        <View style={{ marginLeft: SIZES.padding }}>
          <Text style={styles.nameText}>
            {task.tasker.fname} {task.tasker.lname}
          </Text>
          <Text style={styles.experience}>{task.tasker.job}</Text>
          <Text style={styles.experience}>{task.tasker.rating}/5</Text>
        </View>
        <View style={styles.iconView}>
          <MaterialIcons
            name="navigate-next"
            size={28}
            color={COLORS.primary}
          />
        </View>
      </TouchableOpacity>
      {route.params.previous == "Ongoing" ? (
        <View style={styles.bottom}>
          <Button
            buttonStyle={styles.buttonStyle}
            title="Cancel Task"
            onPress={() => navigation.pop()}
          />
        </View>
      ) : null}
    </View>
  );
};

export default TaskDetails;

const styles = StyleSheet.create({
  bottom: {
    flex: 1,
    justifyContent: "flex-end",
  },
  buttonStyle: {
    width: "100%",
    backgroundColor: COLORS.secondary,
    borderRadius: SIZES.padding,
  },
  textInput: {
    borderWidth: 1,
    borderRadius: SIZES.padding,
    padding: SIZES.padding,
    textAlignVertical: "top",
    borderColor: COLORS.lightGreen,
    marginBottom: SIZES.padding * 3.5,
  },
  profileImage: {
    width: 80,
    height: 80,
    borderRadius: 50,
  },
  nameText: {
    color: COLORS.primary,
    fontWeight: "bold",
    fontSize: SIZES.body3,
  },
  experience: { color: COLORS.gray, marginBottom: -3 },
  taskerView: {
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 1,
    elevation: 1,
    borderRadius: 2,
    marginTop: 10,
    flexDirection: "row",
    alignItems: "center",
    padding: SIZES.padding,
  },
  sectionText: {
    fontSize: SIZES.body5,
    color: COLORS.gray,
    marginBottom: SIZES.padding,
  },
  propertyHeader: {
    fontWeight: "bold",
    color: COLORS.primary,
    fontSize: SIZES.body3,
  },
  propertyText: {
    fontSize: SIZES.body4,
  },
  iconView: {
    flexDirection: "row",
    flex: 1,
    justifyContent: "flex-end",
  },
});
