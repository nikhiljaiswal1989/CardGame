import { Dimensions } from 'react-native';
const { height, width } = Dimensions.get('window');

export const dimen = {
  cardHeight: (height - 150) / 4,
  cardWidth: width / 3,
  cardContainerBorderWidth: 4,
  cardContainerPadding: 4,
  cardPadding: 8,
  cardBorderRadius: 8,
  cardBorderWidth: 4,
  numberFontSize: 24,
  counterFontSize: 32,
};
