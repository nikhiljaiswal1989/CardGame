import React from 'react';
import { View, Text } from 'react-native';
import { styles } from './styles';
import { Card } from '../../component';
import { CongratulationsAlert } from '../../component';
import useGameBord from './../../hooks/gameBoard';
const GameBoard = () => {
  const {
    cardObjectArray,
    counter,
    isFinished,
    clickedIndexArray,
    dispatchOnClickCard,
    dispatchRestart,
  } = useGameBord();
  if (isFinished) {
    CongratulationsAlert(counter, dispatchRestart);
  }
  return (
    <View style={styles.mainContainer}>
      <View style={styles.header}>
        <Text
          testID="restart"
          style={styles.restart}
          onPress={() => dispatchRestart()}>
          Restart
        </Text>
        <Text style={styles.steps}>
          STEPS:<Text style={styles.counterNumber}>{counter}</Text>
        </Text>
      </View>
      <View style={styles.board}>
        {cardObjectArray.map((item, index) => {
          return (
            <Card
              testID={'card' + index}
              item={item}
              key={index}
              onClick={() =>
                clickedIndexArray.length < 2 && dispatchOnClickCard(index)
              }
            />
          );
        })}
      </View>
    </View>
  );
};
export default React.memo(GameBoard);
