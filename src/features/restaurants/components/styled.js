import styled from 'styled-components/native';
import { Card } from 'react-native-paper';

export const RestaurantCard = styled(Card)`
  background-color: ${(props) => props.theme.colors.bg.primary};
`;
export const RestaurantCardCover = styled(Card.Cover)`
  padding: ${(props) => props.theme.space[3]};
  background-color: ${(props) => props.theme.colors.bg.primary};
`;

export const Title = styled.Text`
  font-family: ${(props) => props.theme.fonts.heading};
  color: ${(props) => props.theme.colors.ui.primary};
  font-size: ${(props) => props.theme.fontSizes.body};
`;

export const Info = styled.View`
  padding: ${(props) => props.theme.space[3]};
`;
export const Rating = styled.View`
  flex-direction: row;
  padding-top: ${(props) => props.theme.space[2]};
  padding-bottom: ${(props) => props.theme.space[2]};
`;

export const Address = styled.Text`
  font-family: ${(props) => props.theme.fonts.body};
  font-size: ${(props) => props.theme.fontSizes.caption};
`;

export const Section = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;
export const SectionEnd = styled.View`
  justify-content: flex-end;
  padding-right: ${(props) => props.theme.space[1]};
`;

export const Img = styled.Image`
  width: ${(props) => props.theme.sizes[3]};
  height: ${(props) => props.theme.sizes[3]};
`;
