import React, { useState } from "react";

import { createStackNavigator } from "@react-navigation/stack";

import { COLORS } from "../constants";
import Profile from "../screens/Profile";

const Stack = createStackNavigator();

const ProfileStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Profile"
        component={Profile}
        options={{
          title: null,
          headerStyle: { height: 30, elevation: 0, borderBottomWidth: 0 },
        }}
      />
    </Stack.Navigator>
  );
};

export default ProfileStack;
