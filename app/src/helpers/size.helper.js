import {Dimensions} from 'react-native';

const {width, height} = Dimensions.get('window');

const vh = height / 100;
const vw = width / 100;

export const sizeWidth = size => {
  return (size / 320) * 100 * vw;
};

export const sizeHeight = size => {
  return (size / 568) * 100 * vh;
};

export const sizeFont = size => {
  return (size / 320) * 100 * vw;
};
