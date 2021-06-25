import styled from 'styled-components/native';
import { StatusBar, FlatList } from 'react-native';

export const SafeAreaView = styled.SafeAreaView`
  flex: 1;
  ${StatusBar.currentHeight && `margin-top: ${StatusBar.currentHeight}px`};
  /* on IOS StatusBar doesn't need so need this condition */
`;

export const SearchContainer = styled.View`
  padding: ${(props) => props.theme.space[3]};
`;
export const MainWrapper = styled.View`
  flex: 1;
  /* padding: ${(props) => props.theme.space[3]}; */
  background-color: ${(props) => props.theme.colors.bg.test};
`;

export const RestaurantList = styled(FlatList).attrs({
  contentContainerStyle: {
    padding: 16,
  },
})``;
