import React, { useState, useContext, useEffect } from 'react';
import MapView from 'react-native-maps';
import { useNavigation } from '@react-navigation/native';
import { Wrapper } from '../../../components/utility/GlobalStyles';
import Search from '../components/search/Search';
import * as S from './styled';
import { LocationContext } from './../../../services/location/LocationContext';
import { RestaurantsContext } from '../../../services/restaurants/RestaurantsContext';
import MapCallout from '../components/MapCallout';

const MapScreen = () => {
  const navigation = useNavigation();
  const { location } = useContext(LocationContext);
  const { restaurantsData = [] } = useContext(RestaurantsContext);
  const [latDelta, setLatDelta] = useState(0);

  const { lat, lng, viewport } = location;
  useEffect(() => {
    const northeastLat = viewport.northeast.lat;
    const southwestLat = viewport.southwest.lat;
    setLatDelta(northeastLat - southwestLat);
  }, [location, viewport]);

  return (
    <Wrapper>
      <Search />
      <S.Map
        region={{
          longitude: lng,
          latitude: lat,
          latitudeDelta: latDelta,
          longitudeDelta: 0.02,
        }}
      >
        {restaurantsData.map((restaurant) => {
          return (
            <MapView.Marker
              key={restaurant.name}
              title={restaurant.name}
              coordinate={{
                latitude: restaurant.geometry.location.lat,
                longitude: restaurant.geometry.location.lng,
              }}
            >
              <MapView.Callout
                onPress={() =>
                  navigation.navigate('RestaurantsDetails', {
                    restaurant: restaurant,
                  })
                }
              >
                <MapCallout restaurant={restaurant} />
              </MapView.Callout>
            </MapView.Marker>
          );
        })}
      </S.Map>
    </Wrapper>
  );
};

export default MapScreen;
