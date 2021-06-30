import React from 'react';
import * as S from './styled';
import { SvgXml } from 'react-native-svg';
import star from '../../../../assets/svg/star';
import open from '../../../../assets/svg/open';
import closeImage from '../../../../assets/png/close-sign.png';
import { Spacer } from '../../../components/spacer/Spacer';
import { Text } from '../../../components/typography/Text';
const RestaurantInfoCard = ({ restaurant }) => {
  const {
    name = 'Awesome Restaurant',
    icon = 'https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/lodging-71.png',
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
          <Text variant="label">{name}</Text>
          <S.Rating>
            {ratingArray.map((_, i) => (
              <SvgXml
                key={`star-${address}-${i}`}
                xml={star}
                width={20}
                height={20}
              />
            ))}
          </S.Rating>
          <Text variant="address">{address}</Text>
        </S.Info>

        <S.SectionEnd>
          <Spacer position="left" size="large">
            {isClosedTemporarily && <S.Img source={closeImage} />}
            {isOpenNow && <SvgXml xml={open} width={32} height={32} />}
          </Spacer>
          <Spacer position="left" size="large">
            <S.Icon source={{ uri: icon }} />
          </Spacer>
        </S.SectionEnd>
      </S.Section>
    </S.RestaurantCard>
  );
};

export default RestaurantInfoCard;
