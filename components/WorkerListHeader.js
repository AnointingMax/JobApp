import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { Input } from "react-native-elements";
import {
  useCollapsible,
  AnimatedSection,
} from "reanimated-collapsible-helpers";
import { interpolateNode, Extrapolate } from "react-native-reanimated";

import { AntDesign, Ionicons, Feather } from "@expo/vector-icons";
import { COLORS, SIZES } from "../constants";

const WorkerListHeader = ({ input, setInput, handleWorkerSearch }) => {
  const { animatedHeight, height, onPress, onLayout, state } = useCollapsible();

  return (
    <View>
      <View style={styles.headerView}>
        <View style={{ flex: 1 }}>
          <Input
            value={input}
            inputStyle={styles.inputStyle}
            inputContainerStyle={{ width: "100%", marginBottom: -20 }}
            rightIcon={
              input === "" ? (
                <AntDesign
                  name="search1"
                  size={SIZES.body2}
                  color={COLORS.primary}
                />
              ) : (
                <Feather
                  name="x"
                  size={SIZES.body2}
                  color={COLORS.primary}
                  onPress={() => {
                    setInput("");
                    handleWorkerSearch("");
                  }}
                />
              )
            }
            onChangeText={(text) => {
              setInput(text);
              handleWorkerSearch(text);
            }}
            placeholder="Search...."
          />
        </View>
        <TouchableOpacity style={styles.iconView}>
          <Ionicons
            name="options"
            size={28}
            color={COLORS.primary}
            onPress={onPress}
          />
        </TouchableOpacity>
      </View>
      <AnimatedSection
        animatedHeight={animatedHeight}
        onLayout={onLayout}
        state={state}
        style={{
          opacity: interpolateNode(animatedHeight, {
            inputRange: [0, height],
            outputRange: [0, 1],
            extrapolate: Extrapolate.CLAMP,
          }),
          transform: [
            {
              translateY: interpolateNode(animatedHeight, {
                inputRange: [0, height],
                outputRange: [-15, -5],
                extrapolate: Extrapolate.CLAMP,
              }),
            },
          ],
        }}
      >
        <View style={{ paddingHorizontal: SIZES.padding2 }}>
          <TouchableOpacity style={styles.button}>
            <Text>Sort By Rating</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button}>
            <Text>Sort By Rate (Low to High)</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button}>
            <Text>Sort By Rate (High to Low)</Text>
          </TouchableOpacity>
        </View>
      </AnimatedSection>
    </View>
  );
};

export default WorkerListHeader;

const styles = StyleSheet.create({
  inputStyle: { fontSize: SIZES.body5 },
  headerView: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: SIZES.padding2,
  },
  iconView: {
    // shadowColor: "#000",
    // shadowOffset: { width: 0, height: 2 },
    // shadowOpacity: 0.1,
    // shadowRadius: 1,
    // borderRadius: 2,
    // elevation: 1,
    padding: 8,
    marginBottom: 4,
  },
  textContainer: {
    paddingVertical: SIZES.padding,
  },
  button: {
    width: "100%",
    padding: 10,
    borderBottomWidth: 1,
  },
});
