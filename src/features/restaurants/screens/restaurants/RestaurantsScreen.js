import React, { useContext } from 'react';
import {
  TouchableWithoutFeedback,
  Keyboard,
  ActivityIndicator,
  TouchableOpacity,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';

import { SafeArea, Wrapper } from '../../../../components/utility/GlobalStyles';
import { RestaurantsContext } from '../../../../services/restaurants/RestaurantsContext.js';
import * as S from './styled.js';
import Search from '../../components/search/Search.js';
import RestaurantInfoCard from './../../components/restaurantsInfocard/RestaurantInfoCard';

const RestaurantsScreen = () => {
  const navigation = useNavigation();
  const { restaurantsData, isLoading, error } = useContext(RestaurantsContext);

  return (
    <SafeArea>
      <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
        <Wrapper>
          <S.SearchContainer>
            <Search />
          </S.SearchContainer>
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
