import React from "react";
import { Text, View, StyleSheet, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import { EvilIcons, MaterialIcons } from "@expo/vector-icons";
import { COLORS, SIZES } from "../constants";

const Profile = () => {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.lightGray }}>
      <View
        style={{
          marginTop: 40,
          alignItems: "center",
        }}
      >
        <EvilIcons name="user" size={SIZES.icon * 8} color={COLORS.primary} />
        <Text style={{ marginTop: 15, fontSize: SIZES.body2 }}>John Doe</Text>
      </View>
      <View
        style={{
          backgroundColor: COLORS.white,
          marginTop: SIZES.padding2 * 3.5,
          borderTopWidth: 1,
          paddingHorizontal: SIZES.padding2,
        }}
      >
        <TouchableOpacity style={styles.button}>
          <Text>Account</Text>
          <MaterialIcons
            name="navigate-next"
            size={SIZES.radius}
            color={COLORS.primary}
          />
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <Text>Your Addresses</Text>
          <MaterialIcons
            name="navigate-next"
            size={SIZES.radius}
            color={COLORS.primary}
          />
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <Text>Favourite Taskers</Text>
          <MaterialIcons
            name="navigate-next"
            size={SIZES.radius}
            color={COLORS.primary}
          />
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <Text>Payment</Text>
          <MaterialIcons
            name="navigate-next"
            size={SIZES.radius}
            color={COLORS.primary}
          />
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <Text>Notifications</Text>
          <MaterialIcons
            name="navigate-next"
            size={SIZES.radius}
            color={COLORS.primary}
          />
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <Text>Support</Text>
          <MaterialIcons
            name="navigate-next"
            size={SIZES.radius}
            color={COLORS.primary}
          />
        </TouchableOpacity>
        <TouchableOpacity style={styles.specialButton}>
          <Text>Become a Tasker</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.specialButton}>
          <Text>Log Out</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default Profile;

const styles = StyleSheet.create({
  button: {
    height: 52,
    borderBottomWidth: 1,
    alignItems: "center",
    justifyContent: "space-between",
    flexDirection: "row",
  },
  specialButton: {
    height: 50,
    borderBottomWidth: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
