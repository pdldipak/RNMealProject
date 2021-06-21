import React from 'react';
import * as S from './styled';

const RestaurantInfoCard = ({ restaurant = {} }) => {
  const {
    name = 'Awesome Restaurant',
    icon,
    photos = [
      'https://d3aux7tjp119y2.cloudfront.net/images/Tak2-CMSTemplate_IrMZHla.width-1650.jpg',
    ],
    address = 'Stockholm 100, Sweden',
    isOpenNow = true,
    rating = 4,
    isClosedTemporarily = false,
  } = restaurant;
  return (
    <S.RestaurantCard elevation={5}>
      <S.RestaurantCardCover key={name} source={{ uri: photos[0] }} />
      <S.Title>{name}</S.Title>
    </S.RestaurantCard>
  );
};

export default RestaurantInfoCard;
