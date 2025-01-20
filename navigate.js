import MainActivity from "./components/MainActivity";
import SecondActivity from "./components/SecondActivity";

import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";

const Stack = createStackNavigator();

export default function Navigate() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="MainActivity"
          component={MainActivity}
          options={{ title: "Список контактів" }}
        />
        <Stack.Screen
          name="SecondActivity"
          component={SecondActivity}
          options={{ title: "Редагування контакту" }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
