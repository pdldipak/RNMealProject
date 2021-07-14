import React from 'react';
import { ScrollView, TouchableOpacity } from 'react-native';
import styled from 'styled-components/native';
import CompactRestaurantInfo from '../../features/restaurants/components/compactRestaurantInfo/CompactRestaurantInfo';
import { useNavigation } from '@react-navigation/native';
import { Spacer } from '../spacer/Spacer';
import { Text } from '../typography/Text';

const FavoritesBar = ({ favorites, onNavigate }) => {
  const navigation = useNavigation();
  if (!favorites.length) {
    return null;
  }
  return (
    <FavoritesWrapper>
      <Spacer variant="left.large">
        <Text variant="caption">Favorites</Text>
      </Spacer>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {favorites.map((restaurant) => {
          return (
            <Spacer key={restaurant.name} position="left" size="medium">
              <TouchableOpacity
                onPress={() =>
                  navigation.navigate('RestaurantsDetails', {
                    restaurant,
                  })
                }
              >
                <CompactRestaurantInfo restaurant={restaurant} />
              </TouchableOpacity>
            </Spacer>
          );
        })}
      </ScrollView>
    </FavoritesWrapper>
  );
};

export default FavoritesBar;

const FavoritesWrapper = styled.View`
  padding: 10px;
`;
