import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Page1 from "./Page1";
import Page2 from "./Page2";
import Connecter from "./Connecter";
import Inscrire from "./Inscrire";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Page1">
        <Stack.Screen name="Page1" component={Page1} />
        <Stack.Screen name="Page2" component={Page2} />
        <Stack.Screen name="Connecter" component={Connecter} />
        <Stack.Screen name="Inscrire" component={Inscrire} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
