import React from "react";

import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";

import Login from "../screens/Login";
import Register from "../screens/Register";

const Stack = createStackNavigator();

const UnauthorizedStack = ({ navigation }) => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName={"Home"}>
        <Stack.Screen
          name="Login"
          component={Login}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Register"
          component={Register}
          options={{ headerTitle: null }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default UnauthorizedStack;
