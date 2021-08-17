import React from "react";
import { Image } from "react-native";
import { StyleSheet, Text, View } from "react-native";

import { COLORS, SIZES } from "../constants";

const CatergoryItem = ({ item, navigation }) => {
  return (
    <View style={styles.container}>
      <View style={{ width: "100%" }}>
        <Image source={item.image} resizeMode="cover" style={styles.image} />
      </View>
      <View style={styles.textView}>
        <Text style={styles.categoryTitle}>{item.name}</Text>
        <Text style={styles.categoryDescription}>{item.description}</Text>
      </View>
    </View>
  );
};

export default CatergoryItem;

const styles = StyleSheet.create({
  image: {
    width: "100%",
    height: "100%",
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
  },
  container: {
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 5,
    width: (SIZES.width - 30) / 2,
    height: 240,
    marginBottom: 10,
  },
  textView: {
    position: "absolute",
    bottom: 0,
    height: 90,
    width: "100%",
    backgroundColor: "white",
    paddingHorizontal: SIZES.padding / 2,
    paddingTop: SIZES.padding / 2,
  },
  categoryTitle: { fontSize: SIZES.body3, fontWeight: "bold" },
  categoryDescription: {
    fontSize: SIZES.body5,
    marginTop: SIZES.padding / 2,
    color: COLORS.gray,
  },
});
