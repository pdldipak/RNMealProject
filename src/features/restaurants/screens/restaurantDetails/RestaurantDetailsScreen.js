import React from 'react';
import { useRoute } from '@react-navigation/native';
import { View } from 'react-native';
import RestaurantInfoCard from './../../components/restaurantsInfocard/RestaurantInfoCard';

const RestaurantDetailsScreen = () => {
  const route = useRoute();
  const { restaurant } = route.params;
  return (
    <View>
      <RestaurantInfoCard restaurant={restaurant} />
    </View>
  );
};

export default RestaurantDetailsScreen;
