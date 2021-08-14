import { StyleSheet } from 'react-native';
import { color, dimen } from '../../constants';
export const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: color.screenBackground,
    paddingTop: 30,
  },
  board: {
    flexWrap: 'wrap',
    flexDirection: 'row',
  },
  restart: {
    color: color.primaryColor,
    fontSize: 18,
  },
  steps: {
    color: color.closeNumberColor,
    fontSize: dimen.numberFontSize,
  },
  counterNumber: {
    color: color.primaryColor,
    fontSize: dimen.counterFontSize,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 24,
  },
});
