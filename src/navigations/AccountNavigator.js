import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { AccountScreen } from '../features/account/screens/account/AccountScreen';
import { RegisterScreen } from '../features/account/screens/register/RegisterScreen';
import { LoginScreen } from '../features/account/screens/login/LoginScreen';

const Stack = createStackNavigator();

export const AccountNavigator = () => (
  <Stack.Navigator headerMode="none">
    <Stack.Screen name="Main" component={AccountScreen} />
    <Stack.Screen name="Login" component={LoginScreen} />
    <Stack.Screen name="Register" component={RegisterScreen} />
  </Stack.Navigator>
);
