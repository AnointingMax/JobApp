import React, { useMemo, useState } from "react";
import { SafeAreaProvider } from "react-native-safe-area-context";

import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";

import { MainStackContext } from "../context/MainStackContext";

import MainTab from "./MainTab";
import JobDetails from "../screens/JobDetails";
import WorkerList from "../screens/WorkerList";
import WorkerDetail from "../screens/WorkerDetail";
import Calendar from "../screens/Calendar";

const Stack = createStackNavigator();

const MainStack = () => {
  const [taskInfo, setTaskInfo] = useState({});
  const [tasker, setTasker] = useState({});
  const [task, setTask] = useState("");

  const providerValue = useMemo(
    () => ({ taskInfo, setTaskInfo, tasker, setTasker, task, setTask }),
    [taskInfo, setTaskInfo, tasker, setTasker, task, setTask]
  );
  return (
    <NavigationContainer>
      <SafeAreaProvider>
        <MainStackContext.Provider value={providerValue}>
          <Stack.Navigator screenOptions={{ headerShown: true }}>
            <Stack.Screen
              name="MainTab"
              component={MainTab}
              options={{
                headerShown: false,
                title: null,
              }}
            />
            <Stack.Screen
              name="JobDetails"
              component={JobDetails}
              options={{
                title: "Job Details",
              }}
            />
            <Stack.Screen
              name="WorkerList"
              component={WorkerList}
              options={{
                title: "Select Worker",
              }}
            />
            <Stack.Screen
              name="WorkerDetail"
              component={WorkerDetail}
              options={{
                title: null,
              }}
            />
            <Stack.Screen
              name="Calendar"
              component={Calendar}
              options={{
                title: null,
              }}
            />
          </Stack.Navigator>
        </MainStackContext.Provider>
      </SafeAreaProvider>
    </NavigationContainer>
  );
};

export default MainStack;
