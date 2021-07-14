import React, { useState, useContext, useEffect } from 'react';
import { Searchbar } from 'react-native-paper';
import { LocationContext } from '../../../../services/location/LocationContext';

const Search = ({ isFavoriteToggled, onFavoriteToggled }) => {
  const { keyword, search } = useContext(LocationContext);
  const [searchQuery, setSearchQuery] = useState(keyword);
  useEffect(() => {
    setSearchQuery(keyword);
  }, [keyword]);

  return (
    <>
      <Searchbar
        icon={isFavoriteToggled ? 'heart' : 'heart-outline'}
        onIconPress={onFavoriteToggled}
        placeholder="Search for a location"
        value={searchQuery}
        onSubmitEditing={() => {
          search(searchQuery);
        }}
        onChangeText={(text) => {
          setSearchQuery(text);
        }}
      />
    </>
  );
};

export default Search;
