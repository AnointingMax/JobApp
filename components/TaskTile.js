import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";

import { COLORS, SIZES } from "../constants";

const TaskTile = ({ item }) => {
  return (
    <View style={styles.tileWrapper}>
      <Image
        source={require("../assets/images/plumbing.jpg")}
        resizeMode="cover"
        style={styles.profileImage}
      />
      <View>
        <Text style={styles.nameText}>
          {item.tasker.fname} {item.tasker.lname}
        </Text>
        <Text style={styles.experience}>{item.tasker.job}</Text>
        <Text style={styles.experience}>
          {new Date(item.date).toDateString()}
        </Text>
      </View>
    </View>
  );
};

export default TaskTile;

const styles = StyleSheet.create({
  tileWrapper: {
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 1,
    elevation: 1,
    borderRadius: 2,
    width: "100%",
    marginBottom: SIZES.padding,
    padding: SIZES.padding,
    flexDirection: "row",
    alignItems: "center",
  },
  profileImage: {
    width: 80,
    height: 80,
    borderRadius: 50,
    marginRight: SIZES.padding,
  },
  nameText: {
    color: COLORS.primary,
    fontWeight: "bold",
    fontSize: SIZES.body3,
  },
  experience: { color: COLORS.gray, marginBottom: -3 },
});
