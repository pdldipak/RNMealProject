import styled from 'styled-components';
import { SafeAreaView, StatusBar } from 'react-native';

export const Wrapper = styled.View`
  flex: 1;
`;


export const SafeArea = styled(SafeAreaView)`
  flex: 1;
  ${StatusBar.currentHeight && `margin-top: ${StatusBar.currentHeight}px`};
  /* on IOS StatusBar doesn't need so need this condition */
`;


