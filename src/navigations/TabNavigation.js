import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import RestaurantsScreen from '../features/restaurants/screens/RestaurantsScreen';
import { Ionicons } from '@expo/vector-icons';
import { Text } from 'react-native';
const Tab = createBottomTabNavigator();

const Map = () => <Text>Map Screen</Text>;
const Settings = () => <Text>Setting Screen</Text>;

const TAB_ICON = {
  Restaurants: 'md-restaurant-sharp',
  Map: 'md-map-sharp',
  Settings: 'md-settings-sharp',
};

const ScreenOptions = ({ route }) => {
  const iconName = TAB_ICON[route.name];
  return {
    tabBarIcon: ({ size, color }) => (
      <Ionicons name={iconName} size={size} color={color} />
    ),
  };
};

const TabNavigation = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={ScreenOptions}
        tabBarOptions={{
          activeTintColor: 'tomato',
          inactiveTintColor: 'gray',
        }}
      >
        <Tab.Screen name="Restaurants" component={RestaurantsScreen} />
        <Tab.Screen name="Map" component={Map} />
        <Tab.Screen name="Settings" component={Settings} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default TabNavigation;