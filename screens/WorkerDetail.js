import React, { useContext } from "react";
import { StyleSheet, Text, Image, ScrollView, View } from "react-native";
import { Button } from "react-native-elements";

import { MainStackContext } from "../context/MainStackContext";
import { COLORS, SIZES } from "../constants";

const WorkerDetail = ({ navigation }) => {
  const { tasker } = useContext(MainStackContext);

  return (
    <View style={{ flex: 1 }}>
      <ScrollView
        contentContainerStyle={styles.containerStyle}
        style={{ flexGrow: 1 }}
      >
        <View style={{ alignItems: "center" }}>
          <View>
            <Image
              source={require("../assets/images/plumbing.jpg")}
              resizeMode="cover"
              style={{ width: 150, height: 150, borderRadius: 50 }}
            />
          </View>
          <View style={{ alignItems: "center", paddingTop: SIZES.padding }}>
            <Text style={styles.nameText}>
              {tasker.fname} {tasker.lname}
            </Text>
            <Text style={styles.experience}>
              {tasker.comp_tasks} jobs completed
            </Text>
            <Text style={styles.experience}>Rating: {tasker.rating} /5</Text>
            <Text style={styles.experience}>
              Hourly Rate: N {tasker.rate} / hour
            </Text>
          </View>
        </View>
        <View style={{ paddingTop: 15 }}>
          <Text style={styles.section}>Description:</Text>
          <Text style={styles.workerDescription}>{tasker.description}</Text>
        </View>
        {/* ADD REVIEWS */}
        <View style={{ paddingTop: 15 }}>
          <Text style={styles.section}>Reviews (50)</Text>
        </View>
        <View style={styles.bottom}>
          <Button
            buttonStyle={styles.buttonStyle}
            containerStyle={{ margin: 10 }}
            title={"Choose " + tasker.fname}
            onPress={() => navigation.push("Calendar")}
          />
        </View>
      </ScrollView>
    </View>
  );
};

export default WorkerDetail;

const styles = StyleSheet.create({
  containerStyle: {
    flexGrow: 1,
    marginTop: SIZES.padding2,
    paddingHorizontal: SIZES.padding2,
  },
  nameText: {
    color: COLORS.primary,
    fontWeight: "bold",
    fontSize: SIZES.body2,
  },
  experience: { color: COLORS.secondary, fontWeight: "bold" },
  workerDescription: {
    fontSize: SIZES.body4,
    marginVertical: SIZES.padding,
    color: COLORS.gray,
    textAlign: "justify",
  },
  section: { color: "black", fontWeight: "bold" },
  bottom: {
    flex: 1,
    justifyContent: "flex-end",
  },
});
