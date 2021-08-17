import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { View, Text } from "react-native";

const Jobs = ({ navigation }) => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={{ justifyContent: "center", alignItems: "center", flex: 1 }}>
        <Text>Jobs</Text>
      </View>
    </SafeAreaView>
  );
};

export default Jobs;
