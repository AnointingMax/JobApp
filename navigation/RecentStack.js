import React, { useMemo, useState } from "react";

import { createStackNavigator } from "@react-navigation/stack";

import { RecentStackContext } from "../context/RecentStackContext";

import { COLORS } from "../constants";

import RecentTopTabBar from "./RecentTopTabBar";
import TaskDetails from "../screens/TaskDetails";
import TaskerDetails from "../screens/TaskerDetails";

const Stack = createStackNavigator();

const RecentStack = () => {
  const [task, setTask] = useState({});
  const [tasker, setTasker] = useState({});

  const providerValue = useMemo(
    () => ({ task, setTask, tasker, setTasker }),
    [task, setTask, tasker, setTasker]
  );
  return (
    <RecentStackContext.Provider value={providerValue}>
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
    </RecentStackContext.Provider>
  );
};

export default RecentStack;
