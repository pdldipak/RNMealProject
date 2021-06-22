import React, { useState } from 'react';
import { TouchableWithoutFeedback, Keyboard } from 'react-native';
import { Searchbar } from 'react-native-paper';
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
      
        </S.MainWrapper>
      </S.SafeAreaView>
    </TouchableWithoutFeedback>
  );
};

export default RestaurantsScreen;
