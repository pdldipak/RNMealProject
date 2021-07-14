import React, { useContext, useState } from 'react';
import {
  TouchableWithoutFeedback,
  Keyboard,
  ActivityIndicator,
  TouchableOpacity,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';

import { SafeArea, Wrapper } from '../../../../components/utility/GlobalStyles';
import { RestaurantsContext } from '../../../../services/restaurants/RestaurantsContext.js';
import { FavoritesContext } from '../../../../services/favorites/FavoritesContext';
import * as S from './styled.js';
import Search from '../../components/search/Search.js';
import RestaurantInfoCard from './../../components/restaurantsInfocard/RestaurantInfoCard';
import FavoritesBar from '../../../../components/favorites/FavoritesBar';

const RestaurantsScreen = () => {
  const [isToggled, setIsToggled] = useState(false);
  const navigation = useNavigation();
  const { restaurantsData, isLoading } = useContext(RestaurantsContext);
  const { favorites } = useContext(FavoritesContext);

  return (
    <SafeArea>
      <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
        <Wrapper>
          <S.SearchContainer>
            <Search
              isFavoriteToggled={isToggled}
              onFavoriteToggled={() => setIsToggled(!isToggled)}
            />
          </S.SearchContainer>
          {isToggled && (
            <FavoritesBar
              favorites={favorites}
            />
          )}
          <Wrapper>
            {isLoading && <ActivityIndicator size="large" color="#009900" />}
            <S.RestaurantList
              data={restaurantsData}
              renderItem={({ item }) => {
                return (
                  <TouchableOpacity
                    onPress={() =>
                      navigation.navigate('RestaurantsDetails', {
                        restaurant: item,
                      })
                    }
                  >
                    <RestaurantInfoCard restaurant={item} />
                  </TouchableOpacity>
                );
              }}
              keyExtractor={(item) => item.placeId}
            />
          </Wrapper>
        </Wrapper>
      </TouchableWithoutFeedback>
    </SafeArea>
  );
};

export default RestaurantsScreen;
