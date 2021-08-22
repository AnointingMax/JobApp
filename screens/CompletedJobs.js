import React, { useContext } from "react";
import { FlatList, StyleSheet, TouchableOpacity, View } from "react-native";

import { SIZES, tasks, COLORS } from "../constants";

import { RecentStackContext } from "../context/RecentStackContext";

import TaskTile from "../components/TaskTile";

const CompletedJobs = ({ navigation }) => {
  const { setTask } = useContext(RecentStackContext);
  return (
    <View style={styles.safeArea}>
      <FlatList
        data={tasks}
        keyExtractor={(item) => `${item.id}`}
        showsVerticalScrollIndicator={false}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() => {
              setTask(item);
              navigation.push("TaskDetails", { previous: "Complete" });
            }}
          >
            <TaskTile item={item} />
          </TouchableOpacity>
        )}
        contentContainerStyle={{
          marginBottom: 100,
        }}
      />
    </View>
  );
};

export default CompletedJobs;

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    padding: SIZES.padding2,
    backgroundColor: COLORS.lightGray,
  },
});
