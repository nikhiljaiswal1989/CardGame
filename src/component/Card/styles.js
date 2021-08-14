import { StyleSheet } from 'react-native';
import { color, dimen } from '../../constants';
const styles = StyleSheet.create({
  cardContainer: {
    height: dimen.cardHeight,
    width: dimen.cardWidth,
    borderWidth: dimen.cardContainerBorderWidth,
    borderColor: 'transparent',
    padding: dimen.cardContainerPadding,
  },
  cardNotOpen: {
    flex: 1,
    backgroundColor: color.primaryColor,
    padding: dimen.cardPadding,
    borderRadius: dimen.cardBorderRadius,
    borderWidth: dimen.cardBorderWidth,
    borderColor: color.borderColor,
    justifyContent: 'center',
    alignItems: 'center',
  },
  cardOpen: {
    flex: 1,
    backgroundColor: color.secondaryColor,
    padding: dimen.cardPadding,
    borderRadius: dimen.cardBorderRadius,
    borderWidth: dimen.cardBorderWidth,
    borderColor: color.borderColor,
    justifyContent: 'center',
    alignItems: 'center',
  },
  openNumber: {
    fontSize: dimen.numberFontSize,
    color: color.openNumberColor,
  },
  closeNumber: {
    fontSize: dimen.numberFontSize,
    color: color.closeNumberColor,
    fontWeight: 'bold',
  },
  flipCard: {
    alignItems: 'center',
    justifyContent: 'center',
    backfaceVisibility: 'hidden',
  },
  flipCardBack: {
    position: 'absolute',
    top: 0,
  },
});

export default styles;
