import * as React from 'react';
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import HomeScreen from '../screens/home';
import ReviewScreen from '../screens/review';
import Header from '../shared/header';

{/* React Navigation's native stack navigator provides a way for your app to transition between screens and manage
 navigation history. If your app uses only one stack navigator then it is conceptually similar to how a web browser 
 handles navigation state - your app pushes and pops items from the navigation stack as users interact with it, and 
 this results in the user seeing different screens. A key difference between how this works in a web browser and in 
 React Navigation is that React Navigation's native stack navigator provides the gestures and animations that you would 
 expect on Android and iOS when navigating between routes in the stack.

Let's start by demonstrating the most common navigator, createNativeStackNavigator. 

createNativeStackNavigator is a function that returns an object containing 2 properties: Screen and Navigator. 
Both of them are React components used for configuring the navigator. The Navigator should contain Screen elements 
as its children to define the configuration for routes.

NavigationContainer is a component which manages our navigation tree and contains the navigation state. This component 
must wrap all navigators structure.
Options​
The following options can be used to configure the screens in the navigator. These can be specified under screenOptions 
prop of Tab.navigator or options prop of Tab.Screen.

title​
Generic title that can be used as a fallback for headerTitle and tabBarLabel.
*/}


const HomeStack = createNativeStackNavigator();

export default function HomeStackScreen() {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen name="Home" component={HomeScreen} options={{ headerTitle: (title) => <Header title="MovR" /> }} />
      <HomeStack.Screen name="Review" component={ReviewScreen} />
    </HomeStack.Navigator>
  );
}

