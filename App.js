import Login from './src/pages/login'
import {Hint, View} from "react-native-ui-lib";
import {PaperProvider} from "react-native-paper";

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Dashboard from "./src/pages/dashboard";

export default function App() {
  const Stack = createStackNavigator();
  return (
      <PaperProvider>
          <NavigationContainer>
              <Stack.Navigator>
                  <Stack.Screen name="login" component={Login} />
                  <Stack.Screen name="Dashboard" component={Dashboard} />
              </Stack.Navigator>
          </NavigationContainer>
      </PaperProvider>
  );
}