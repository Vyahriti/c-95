import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
console.reportErrorsAsExceptions = false;
import { NavigationContainer} from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from './screens/Login';
import SignupScreen from './screens/Signup';
import db from './config'

import DrawerNavigator from './navigation/DrawerNavigator';

import MyTabs from './navigation/BottomTab';
import ExerciseScreen from './screens/Exercise';

const Stack = createStackNavigator();

export default class App extends React.Component {
  render() {
  return (
  //   <Stack.Navigator
  //   initialRouteName='Login'
  //   screenOptions={{
  //     headerShown: false,
  //     gestureEnabled: false,
  //   }}>
  //   <Stack.Screen name='Login' component={LoginScreen} />
  //   <Stack.Screen name='SignupScreen' component={SignupScreen} />
  //   <Stack.Screen name='Dashboard' component={DrawerNavigator} />
  // </Stack.Navigator>
  // <NavigationContainer>
  //   <MyTabs/>
  // </NavigationContainer>
  <ExerciseScreen/>
  );
}
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
