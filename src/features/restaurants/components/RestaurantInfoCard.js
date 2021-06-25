import React from 'react';
import * as S from './styled';
import { SvgXml } from 'react-native-svg';
import star from '../../../../assets/svg/star';
import open from '../../../../assets/svg/open';
import closeImage from '../../../../assets/png/close-sign.png';
import { Spacer } from '../../../components/spacer/Spacer';

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

  const ratingArray = Array.from(new Array(Math.round(rating)));
  return (
    <S.RestaurantCard elevation={5}>
      <S.RestaurantCardCover key={name} source={{ uri: photos[0] }} />
      <S.Section>
        <S.Info>
          <S.Title>{name}</S.Title>

          <S.Rating>
            {ratingArray.map(() => (
              <SvgXml xml={star} width={20} height={20} />
            ))}
          </S.Rating>

          <S.Address>{address}</S.Address>
        </S.Info>

        <S.SectionEnd>
          <Spacer position="left" size="large">
            {isClosedTemporarily && <S.Img source={closeImage} />}
            {isOpenNow && <SvgXml xml={open} width={60} height={60} />}
          </Spacer>
        </S.SectionEnd>
      </S.Section>
    </S.RestaurantCard>
  );
};

export default RestaurantInfoCard;
