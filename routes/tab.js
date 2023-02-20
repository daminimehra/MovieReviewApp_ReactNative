import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
import SettingsStackScreen from './stackAbout';
import HomeStackScreen from './stackHome';

 {/* Possibly the most common style of navigation in mobile apps is tab-based navigation. This can be tabs on the
 bottom of the screen or on the top below the header (or even instead of a header). */}

 {/* A simple tab bar on the bottom of the screen that lets you switch between different routes. Routes are lazily
 initialized -- their screen components are not mounted until they are first focused. */}

 {/* screenOptions​
Default options to use for the screens in the navigator.




*/}

const Tab = createBottomTabNavigator();


export default function Tabs() {
  return (
    <NavigationContainer>
      <Tab.Navigator screenOptions={ ({ route }) => ({ headerShown: false,
          tabBarIcon: ({ color, size }) => {
            if (route.name === 'HomeTab') {
              return ( <Ionicons name={"home" } size={size} color={color}/> );
            } else if (route.name === 'AboutTab') {
              return (  <Ionicons name={"information-circle"} size={size} color={color}/> );
            }
        },
          tabBarInactiveTintColor: 'gray',
          tabBarActiveTintColor: 'tomato',
        })}>
        <Tab.Screen name="HomeTab"  component={HomeStackScreen}    />
        <Tab.Screen name="AboutTab" component={SettingsStackScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
