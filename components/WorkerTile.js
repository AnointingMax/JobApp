import React from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";

import { COLORS, SIZES } from "../constants";
import { MaterialIcons } from "@expo/vector-icons";

const WorkerTile = ({ item, navigation, setTasker }) => {
  return (
    <View
      style={{ backgroundColor: COLORS.white, borderRadius: SIZES.base / 2 }}
    >
      <View style={styles.dataView}>
        <Image
          source={require("../assets/images/plumbing.jpg")}
          resizeMode="cover"
          style={styles.profileImage}
        />
        <View style={styles.textData}>
          <Text style={styles.nameText}>
            {item.fname} {item.lname}
          </Text>
          <Text style={styles.experience}>{item.rating} /5 stars</Text>
          <Text style={styles.experience}>
            {item.comp_tasks} completed tasks
          </Text>
        </View>
        <TouchableOpacity
          style={styles.iconView}
          onPress={() => {
            setTasker(item);
            navigation.push("WorkerDetail");
          }}
        >
          <MaterialIcons
            name="navigate-next"
            size={28}
            color={COLORS.primary}
          />
        </TouchableOpacity>
      </View>
      <View style={styles.descriptionArea}>
        <Text numberOfLines={4} style={styles.workerDescription}>
          {item.description}
        </Text>
      </View>
      <View style={styles.buttonStyle}>
        <Text style={{ color: COLORS.white, fontSize: SIZES.body3 }}>
          Select for N {item.rate} /hr
        </Text>
      </View>
    </View>
  );
};

export default WorkerTile;

const styles = StyleSheet.create({
  dataView: {
    flexDirection: "row",
    paddingHorizontal: SIZES.padding,
    paddingVertical: SIZES.padding,
  },
  textData: {
    paddingLeft: SIZES.padding,
    paddingTop: SIZES.padding2,
  },
  descriptionArea: {
    paddingHorizontal: SIZES.padding,
    paddingBottom: SIZES.padding2,
  },
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
  },
  nameText: {
    color: COLORS.primary,
    fontWeight: "bold",
    fontSize: SIZES.body3,
  },
  experience: { color: COLORS.secondary, fontWeight: "bold" },
  workerDescription: {
    fontSize: SIZES.body5 + 1,
    marginTop: SIZES.padding / 2,
    color: COLORS.gray,
    textAlign: "justify",
  },
  buttonStyle: {
    width: "100%",
    height: 50,
    backgroundColor: COLORS.primary,
    borderBottomLeftRadius: SIZES.base / 2,
    borderBottomRightRadius: SIZES.base / 2,
    justifyContent: "center",
    alignItems: "center",
  },
  iconView: {
    flexDirection: "row",
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
  },
});
