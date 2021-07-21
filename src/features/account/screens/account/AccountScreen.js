import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { Spacer } from '../../../../components/spacer/Spacer';
import {
  AccountBackground,
  AccountContainer,
  AccountCover,
  AuthButton,
  Title,
} from '../../components/AccountStyled';

export const AccountScreen = () => {
  const navigation = useNavigation();
  return (
    <AccountBackground>
      <AccountCover />
      <Title>Restaurants Around</Title>
      <AccountContainer>
        <AuthButton
          icon="lock-open-outline"
          mode="contained"
          onPress={() => navigation.navigate('Login')}
        >
          Login
        </AuthButton>
        <Spacer size="large">
          <AuthButton
            icon="email"
            mode="contained"
            onPress={() => navigation.navigate('Register')}
          >
            Register
          </AuthButton>
        </Spacer>
      </AccountContainer>
    </AccountBackground>
  );
};
