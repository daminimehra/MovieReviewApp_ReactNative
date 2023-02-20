import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import AboutScreen from '../screens/about';
import Header from '../shared/header';

const SettingsStack = createNativeStackNavigator();

export default function SettingsStackScreen() {
  return (
    <SettingsStack.Navigator>
     
      <SettingsStack.Screen name="About" component={AboutScreen}
       options={{ headerTitle: (title) => <Header title="MovR" /> }} />
    </SettingsStack.Navigator>
  );
}

