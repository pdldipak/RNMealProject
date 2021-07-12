import React, { useState, useContext, useEffect } from 'react';
import { Searchbar } from 'react-native-paper';
import { LocationContext } from './../../../../services/location/LocationContext';
import * as S from './styled';
const Search = () => {
  const { keyword, search } = useContext(LocationContext);
  const [searchQuery, setSearchQuery] = useState(keyword);

  useEffect(() => {
    setSearchQuery(keyword);
  }, [keyword]);

  return (
    <S.SearchContainer>
      <Searchbar
        icon="map"
        placeholder="Search for a location"
        value={searchQuery}
        onSubmitEditing={() => {
          search(searchQuery);
        }}
        onChangeText={(text) => {
          setSearchQuery(text);
        }}
      />
    </S.SearchContainer>
  );
};

export default Search;
