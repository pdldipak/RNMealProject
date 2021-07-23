import React from 'react';
import { useNavigation } from '@react-navigation/native';
import LottieView from 'lottie-react-native';
import { Spacer } from '../../../../components/spacer/Spacer';
import {
  AccountBackground,
  AccountContainer,
  AccountCover,
  AnimationWrapper,
  AuthButton,
  Title,
} from '../../components/AccountStyled';

export const AccountScreen = () => {
  const navigation = useNavigation();
  return (
    <AccountBackground>
      <AccountCover />
      <AnimationWrapper>
        <LottieView
          key="animation"
          autoPlay
          loop
          resizeMode="cover"
          source={require('../../../../../assets/AnimationRest.json')}
        />
      </AnimationWrapper>
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
