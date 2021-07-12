import { mocks, mockImages } from './mocks';
import camelize from 'camelize';

export const restaurantsRequest = (location = '41.878113,-87.629799') => {
  return new Promise((resolve, reject) => {
    const mock = mocks[location];
    if (mock) {
      resolve(mock);
    } else {
      reject('Data not found');
    }
  });
};
export const restaurantsTransform = ({ results = [] }) => {
  const mappedResults = results.map((restaurant) => {
    return {
      ...restaurant,
      address: restaurant.vicinity,
      isOpenNow: restaurant.opening_hours && restaurant.opening_hours.open_now,
      isClosedTemporarily: restaurant.business_status === 'CLOSED_TEMPORARILY',
      photos: restaurant.photos.map((photo) => {
        return mockImages[Math.floor(Math.random() * (mockImages.length - 1))];
      }),
    };
  });
  return camelize(mappedResults);
};
