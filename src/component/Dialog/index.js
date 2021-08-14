import { Alert } from 'react-native';
export const CongratulationsAlert = (counter, onPress) => {
  Alert.alert('Congratulations!', `You win this game by ${counter} steps!`, [
    {
      testID: 'tryanother',
      text: 'Try another round',
      onPress: () => {
        onPress();
      },
    },
  ]);
};
