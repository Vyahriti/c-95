import React, { Component } from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Logout from '../screens/Logout'
import CustomSidebarMenu from '../screens/CustomSidebarMenu';
import StackNavigator from './StackNavigator';

const Drawer= createDrawerNaigator()

export default class DrawerNavigator extends Component{

	componentDidMount() {
		const auth = getAuth();
		const userId = auth.currentUser.uid;}


    render(){
        let props= this.props
        return(
            <Drawer.Navigator
            drawerContent={(props) => <CustomSidebarMenu {...props} />}
            screenOptions={{
                headerShown: false,
                drawerActiveTintColor: '#e91e63',
                drawerInactiveTintColor: 'grey',
                itemStyle: { marginVertical: 5 },
            }}>
            <Drawer.Screen
            name='Profile'
            component={Profile}
            options={{ unmountOnBlur: true }}
        />
        <Drawer.Screen
            name='Logout'
            component={Logout}
            options={{ unmountOnBlur: true }}
        />
        				<Drawer.Screen
					name='Home'
					component={StackNavigator}
					options={{ unmountOnBlur: true }}
				/>
        </Drawer.Navigator>
        )
    }
}