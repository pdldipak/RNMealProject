import React from 'react';
import CompactRestaurantInfo from '../../restaurants/components/compactRestaurantInfo/CompactRestaurantInfo';

const MapCallout = ({ restaurant }) => {
  return <CompactRestaurantInfo restaurant={restaurant} isMap/>;
};

export default MapCallout;
