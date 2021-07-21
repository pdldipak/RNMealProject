import React, { useContext } from 'react';
import { Text, Button } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
import RestaurantsNavigator from './RestaurantsNavigator';
import MapScreen from '../features/map/screens/MapScreen';
import { SafeArea } from '../components/utility/GlobalStyles';
import { AuthenticationContext } from '../services/authentication/AuthenticationContext';
import { FavoritesContextProvider } from '../services/favorites/FavoritesContext';
import { LocationContextProvider } from '../services/location/LocationContext';
import { RestaurantsContextProvider } from '../services/restaurants/RestaurantsContext';

const Tab = createBottomTabNavigator();

const Settings = () => {
  const { onLogout } = useContext(AuthenticationContext);
  return (
    <SafeArea>
      <Text>Settings</Text>
      <Button title="logout" onPress={() => onLogout()} />
    </SafeArea>
  );
};

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
    <FavoritesContextProvider>
      <LocationContextProvider>
        <RestaurantsContextProvider>
          <Tab.Navigator
            screenOptions={ScreenOptions}
            tabBarOptions={{
              activeTintColor: 'tomato',
              inactiveTintColor: 'gray',
            }}
          >
            <Tab.Screen name="Restaurants" component={RestaurantsNavigator} />
            <Tab.Screen name="Map" component={MapScreen} />
            <Tab.Screen name="Settings" component={Settings} />
          </Tab.Navigator>
        </RestaurantsContextProvider>
      </LocationContextProvider>
    </FavoritesContextProvider>
  );
};

export default TabNavigation;
