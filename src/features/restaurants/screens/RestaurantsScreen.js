import React, { useState } from 'react';
import { TouchableWithoutFeedback, Keyboard, FlatList } from 'react-native';
import { Searchbar } from 'react-native-paper';
import RestaurantInfoCard from '../components/RestaurantInfoCard.js';
import { Wrapper } from '../../../utility/GlobalStyles';
import * as S from './styled.js';

const RestaurantsScreen = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const onChangeSearch = (query) => setSearchQuery(query);
  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <Wrapper>
        <S.SearchContainer>
          <Searchbar
            placeholder="Search"
            onChangeText={onChangeSearch}
            value={searchQuery}
          />
        </S.SearchContainer>
        <Wrapper>
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
        </Wrapper>
      </Wrapper>
    </TouchableWithoutFeedback>
  );
};

export default RestaurantsScreen;
