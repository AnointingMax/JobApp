import React, { useState } from "react";

import { createStackNavigator } from "@react-navigation/stack";

import { COLORS } from "../constants";

const Stack = createStackNavigator();

const ProfileStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="RecentTabs"
        component={RecentTopTabBar}
        options={{
          title: null,
          headerStyle: { height: 30, elevation: 0, borderBottomWidth: 0 },
        }}
      />
      <Stack.Screen name="TaskDetails" component={TaskDetails} />
      <Stack.Screen
        name="TaskerDetails"
        component={TaskerDetails}
        options={{
          title: null,
        }}
      />
    </Stack.Navigator>
  );
};

export default ProfileStack;
