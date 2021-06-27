import { mocks, mockImages } from './mocks';
import camelize from 'camelize';

export const RestaurantsRequest = (location = '41.878113,-87.629799') => {
  // console.log('mocks data', mocks[location]);
  return new Promise((resolve, reject) => {
    const mock = mocks[location];
    if (mock) {
      resolve(mock);
    } else {
      reject('Data not found');
    }
  });
};
export const RestaurantsTransform = ({ results = [] }) => {
  const mappedResults = results.map((restaurant) => {
    return {
      ...restaurant,
      isOpenNow: restaurant.opening_hours && restaurant.opening_hours.open_now,
      isClosedTemporarily: restaurant.business_status === 'CLOSED_TEMPORARILY',
      photos: restaurant.photos.map((photo) => {
        return mockImages[Math.floor(Math.random() * (mockImages.length - 1))];
      }),
    };
  });
  return camelize(mappedResults);
};
// RestaurantsRequest()
//   .then(restaurantsTransform)
//   .then((transformResponse) => {
//     console.log(transformResponse);
//   })
//   .catch((err) => {
//     console.log(err);
//   });
