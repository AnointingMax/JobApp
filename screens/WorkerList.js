import React, { useContext, useState } from "react";
import { StyleSheet, View, FlatList, TouchableOpacity } from "react-native";

import { COLORS, SIZES, workers } from "../constants";

import { MainStackContext } from "../context/MainStackContext";

import WorkerTile from "../components/WorkerTile";
import WorkerListHeader from "../components/WorkerListHeader";

const WorkerList = ({ navigation }) => {
  const { setTasker } = useContext(MainStackContext);

  const [input, setInput] = useState("");
  const [tempWorkers, setTempWorkers] = useState(workers);

  const handleWorkerSearch = (input) => {
    if (input === "") {
      setTempWorkers(workers);
    }
    let temp = workers.filter(
      (worker) =>
        worker.fname.includes(input) ||
        worker.lname.includes(input) ||
        worker.fname.concat(" ", worker.lname).includes(input) ||
        worker.lname.concat(" ", worker.fname).includes(input)
    );
    setTempWorkers(temp);
  };

  return (
    <View style={styles.safeArea}>
      <WorkerListHeader
        input={input}
        setInput={setInput}
        handleWorkerSearch={handleWorkerSearch}
      />
      <FlatList
        data={tempWorkers}
        keyExtractor={(item) => `${item.id}`}
        showsVerticalScrollIndicator={false}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={styles.container}
            onPress={() => {
              setTasker(item);
              navigation.push("Calendar");
            }}
          >
            <WorkerTile
              item={item}
              navigation={navigation}
              setTasker={setTasker}
            />
          </TouchableOpacity>
        )}
        contentContainerStyle={{
          marginBottom: 100,
        }}
      />
    </View>
  );
};

export default WorkerList;

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    paddingHorizontal: SIZES.padding2,
    backgroundColor: COLORS.lightGray,
  },
  container: {
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 1,
    borderRadius: 2,
    elevation: 2,
    width: "100%",
    marginBottom: 10,
  },
});
