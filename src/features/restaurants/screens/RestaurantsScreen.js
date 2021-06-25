import React, { useState } from 'react';
import { TouchableWithoutFeedback, Keyboard, FlatList } from 'react-native';
import { Searchbar } from 'react-native-paper';
import RestaurantInfoCard from '../components/RestaurantInfoCard.js';
import * as S from './styled.js';

const RestaurantsScreen = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const onChangeSearch = (query) => setSearchQuery(query);
  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <S.SafeAreaView>
        <S.SearchContainer>
          <Searchbar
            placeholder="Search"
            onChangeText={onChangeSearch}
            value={searchQuery}
          />
        </S.SearchContainer>
        <S.MainWrapper>
          <S.RestaurantList
            keyExtractor={(item) => item.name}
            data={[
              { name: 1 },
              { name: 2 },
              { name: 3 },
              { name: 4 },
              { name: 5 },
              { name: 6 },
            ]}
            renderItem={() => <RestaurantInfoCard />}
          />
        </S.MainWrapper>
      </S.SafeAreaView>
    </TouchableWithoutFeedback>
  );
};

export default RestaurantsScreen;
