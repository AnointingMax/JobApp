import React from "react";

import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";

import OngoingJobs from "../screens/OngoingJobs";
import CompletedJobs from "../screens/CompletedJobs";

import { COLORS, SIZES } from "../constants";

const Tab = createMaterialTopTabNavigator();

const RecentTopTabBar = () => {
  return (
    <Tab.Navigator
      tabBarOptions={{
        headerShown: false,
        labelStyle: { fontWeight: "bold", fontSize: SIZES.body5 },
      }}
    >
      <Tab.Screen name="Ongoing" component={OngoingJobs} />
      <Tab.Screen name="Completed" component={CompletedJobs} />
    </Tab.Navigator>
  );
};

export default RecentTopTabBar;
