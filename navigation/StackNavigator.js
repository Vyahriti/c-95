import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import TabNavigator from './BottomTab';
import MyTabs from './BottomTab';

const Stack = createStackNavigator();

const StackNavigator = () => {
	return (
		<Stack.Navigator
			initialRouteName='Home'
			screenOptions={{
				headerShown: false,
			}}>
			<Stack.Screen name='Home' component={TabNavigator} />
		</Stack.Navigator>
	);
};

export default StackNavigator;