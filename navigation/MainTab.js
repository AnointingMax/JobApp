import React from "react";

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import { FontAwesome5, AntDesign } from "@expo/vector-icons";
import { COLORS, SIZES } from "../constants";

import Home from "../screens/Home";
import Profile from "../screens/Profile";

import RecentStack from "./RecentStack";

Tab = createBottomTabNavigator();

const MainTab = () => {
  return (
    <Tab.Navigator
      tabBarOptions={{
        labelStyle: { fontWeight: "bold", fontSize: SIZES.body5 },
        activeTintColor: COLORS.primary,
        inActiveTintColor: COLORS.gray,
        style: { height: 55, borderTopWidth: 0, elevation: 0 },
      }}
    >
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarLabel: "Home",
          tabBarIcon: ({ focused }) => (
            <FontAwesome5
              name="home"
              size={24}
              color={focused ? COLORS.primary : COLORS.gray}
            />
          ),
        }}
      />

      <Tab.Screen
        name="Recent"
        component={RecentStack}
        options={{
          tabBarLabel: "Tasks",
          tabBarIcon: ({ focused }) => (
            <FontAwesome5
              name="inbox"
              size={24}
              color={focused ? COLORS.primary : COLORS.gray}
            />
          ),
        }}
      />

      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarLabel: "Profile",
          tabBarIcon: ({ focused }) => (
            <AntDesign
              name="profile"
              size={24}
              color={focused ? COLORS.primary : COLORS.gray}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default MainTab;
