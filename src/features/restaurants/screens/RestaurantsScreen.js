import React, { useContext } from 'react';
import {
  TouchableWithoutFeedback,
  Keyboard,
  ActivityIndicator,
} from 'react-native';
import RestaurantInfoCard from '../components/RestaurantInfoCard.js';
import { Wrapper } from '../../../components/utility/GlobalStyles';
import { RestaurantsContext } from '../../../services/restaurants/RestaurantsContext.js';
import * as S from './styled.js';
import Search from '../components/search/Search.js';

const RestaurantsScreen = () => {
  const { restaurantsData, isLoading, error } = useContext(RestaurantsContext);
  return (
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
              return <RestaurantInfoCard restaurant={item} />;
            }}
            keyExtractor={(item) => item.placeId}
          />
        </Wrapper>
      </Wrapper>
    </TouchableWithoutFeedback>
  );
};

export default RestaurantsScreen;
