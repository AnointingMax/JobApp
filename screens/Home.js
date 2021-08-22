import React, { useContext, useState } from "react";
import {
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Input } from "react-native-elements";

import { AntDesign, Feather, FontAwesome5 } from "@expo/vector-icons";
import { COLORS, SIZES, Categories } from "../constants";

import { MainStackContext } from "../context/MainStackContext";
import CatergoryItem from "../components/CategoryItem";

const Home = ({ navigation }) => {
  const { setTask } = useContext(MainStackContext);

  const [input, setInput] = useState("");
  const [tempCategories, setTempCategories] = useState(Categories);

  const handleCategoriesOnTextChange = (input) => {
    if (input === "") {
      setTempCategories(Categories);
    }
    let temp = Categories.filter((cat) => cat.name.includes(input));
    setTempCategories(temp);
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <Text style={styles.pageHeader}>I need help with</Text>
      <Input
        value={input}
        inputStyle={styles.inputStyle}
        inputContainerStyle={{ width: 380 }}
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
                handleCategoriesOnTextChange("");
              }}
            />
          )
        }
        onChangeText={(text) => {
          setInput(text);
          handleCategoriesOnTextChange(text);
        }}
        placeholder="Search...."
      />
      <FlatList
        data={tempCategories}
        keyExtractor={(item) => `${item.id}`}
        numColumns={2}
        showsVerticalScrollIndicator={false}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() => {
              setTask(item.name);
              navigation.push("WorkerList");
            }}
          >
            <CatergoryItem item={item} />
          </TouchableOpacity>
        )}
        columnWrapperStyle={{ justifyContent: "space-between" }}
        contentContainerStyle={{
          marginBottom: 100,
        }}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    paddingHorizontal: SIZES.padding2,
    backgroundColor: COLORS.lightGray,
  },
  pageHeader: { fontSize: SIZES.h1, marginTop: 60 },
  inputStyle: { fontSize: SIZES.font },
  profileIconView: {
    width: "100%",
    alignItems: "flex-end",
    marginTop: SIZES.padding,
  },
});

export default Home;
