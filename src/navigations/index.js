import React, { useContext } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import TabNavigation from './TabNavigation';
import { AccountNavigator } from './AccountNavigator';
import { AuthenticationContext } from '../services/authentication/AuthenticationContext';

const Navigation = () => {
  const { isAuthenticated } = useContext(AuthenticationContext);
  return (
    <NavigationContainer>
      {isAuthenticated ? <TabNavigation /> : <AccountNavigator />}
    </NavigationContainer>
  );
};

export default Navigation;
