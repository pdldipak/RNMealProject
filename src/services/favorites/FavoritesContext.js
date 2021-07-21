import React, { createContext, useState, useEffect, useContext } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { AuthenticationContext } from '../authentication/AuthenticationContext';

export const FavoritesContext = createContext();

export const FavoritesContextProvider = ({ children }) => {
  const { user } = useContext(AuthenticationContext);
  const [favorites, setFavorites] = useState([]);

  const savedFavorites = async (value, uid) => {
    try {
      const jsonValue = JSON.stringify(value);
      await AsyncStorage.setItem(`@favorites_Key-${uid}`, jsonValue);
    } catch (e) {
      console.log('unable to save favorites', e);
    }
  };

  const loadFavorites = async (uid) => {
    try {
      const jsonValue = await AsyncStorage.getItem(`@favorites_Key-${uid}`);
      return jsonValue != null ? setFavorites(JSON.parse(jsonValue)) : null;
    } catch (e) {
      console.log('unable to load favorites', e);
    }
  };
  const add = (restaurant) => {
    setFavorites([...favorites, restaurant]);
  };

  const remove = (restaurant) => {
    const newFavorites = favorites.filter(
      (favorite) => favorite.placeId !== restaurant.placeId,
    );
    setFavorites(newFavorites);
  };

  useEffect(() => {
    if (user && user.uid) {
      loadFavorites(user.uid);
    }
  }, [user]);

  useEffect(() => {
    if (user && user.uid && favorites) {
      savedFavorites(favorites, user.uid);
    }
  }, [favorites, user]);
  return (
    <FavoritesContext.Provider
      value={{
        favorites,
        addToFavorites: add,
        removeFromFavorites: remove,
      }}
    >
      {children}
    </FavoritesContext.Provider>
  );
};
