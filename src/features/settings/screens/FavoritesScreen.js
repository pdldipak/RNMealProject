import React, { useContext } from 'react';
import { useNavigation } from '@react-navigation/native';
import { TouchableOpacity } from 'react-native';
import { Spacer } from '../../../components/spacer/Spacer';
import { Text } from '../../../components/typography/Text';
import {
  SafeArea,
  WrapperCenter,
} from '../../../components/utility/GlobalStyles';
import { FavoritesContext } from '../../../services/favorites/FavoritesContext';
import RestaurantInfoCard from '../../restaurants/components/restaurantsInfocard/RestaurantInfoCard';
import { RestaurantList } from '../../restaurants/screens/restaurants/styled';

export default function FavoritesScreen() {
  const navigation = useNavigation();
  const { favorites } = useContext(FavoritesContext);

  return favorites.length ? (
    <SafeArea>
      <RestaurantList
        data={favorites}
        renderItem={({ item }) => {
          return (
            <TouchableOpacity
              onPress={() =>
                navigation.navigate('RestaurantsDetails', {
                  restaurant: item,
                })
              }
            >
              <Spacer position="bottom" size="large">
                <RestaurantInfoCard restaurant={item} />
              </Spacer>
            </TouchableOpacity>
          );
        }}
        keyExtractor={(item) => item.name}
      />
    </SafeArea>
  ) : (
    <SafeArea>
      <WrapperCenter>
        <Text center>No favorites yet</Text>
      </WrapperCenter>
    </SafeArea>
  );
}
