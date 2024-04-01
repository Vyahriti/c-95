import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import HomeScreen from '../screens/Home';
//import NutritionScreen from '../screens/Nutrition';
import ExerciseScreen from '../screens/Exercise';
import { Ionicons } from '@expo/vector-icons';

const Tab = createMaterialBottomTabNavigator();


function MyTabs() {
  return (
    <Tab.Navigator
      activeColor="black"
      inactiveColor="#288484"
      barStyle={{ backgroundColor: '#ade6e6' }}
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused }) => {
          let iconName;
          if (route.name === 'Home') {
            iconName = focused ? 'home' : 'home-outline';}
          // } else if (route.name === 'Nutrition') {
          //   iconName = focused ? 'nutrition' : 'nutrition-outline';
          // }
          else if (route.name === 'Exercise') {
            iconName = focused ? 'barbell' : 'barbell-outline'
          }

          return (
            <Ionicons name={iconName} size={24} color="black" />
          )
        },
        activeTintColor: '#ee8249',
        inactiveTintColor: 'black',
      })}>

      <Tab.Screen name="Home" component={HomeScreen} />
      {/* <Tab.Screen name="Nutrition" component={NutritionScreen} /> */}
      <Tab.Screen name="Exercise" component={ExerciseScreen} />
    </Tab.Navigator>
  );
}

export default MyTabs