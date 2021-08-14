import React, { useState } from 'react';
import { View, Text, TouchableWithoutFeedback, Animated } from 'react-native';
import styles from './styles';
const Card = ({ item, onClick, testID }) => {
  const isOpen = item.isOpen;
  const [animatedValue] = useState(new Animated.Value(0));

  isOpen
    ? Animated.spring(animatedValue, {
        toValue: 0,
        friction: 8,
        tension: 10,
        useNativeDriver: true,
      }).start()
    : Animated.spring(animatedValue, {
        toValue: 180,
        friction: 8,
        tension: 10,
        useNativeDriver: true,
      }).start();
  let frontInterpolate = animatedValue.interpolate({
    inputRange: [0, 180],
    outputRange: ['0deg', '180deg'],
  });
  let backInterpolate = animatedValue.interpolate({
    inputRange: [0, 180],
    outputRange: ['180deg', '360deg'],
  });
  const frontAnimatedStyle = {
    transform: [{ rotateY: frontInterpolate }],
  };
  const backAnimatedStyle = {
    transform: [{ rotateY: backInterpolate }],
  };

  return (
    <TouchableWithoutFeedback
      testID={testID}
      onPress={() => {
        !isOpen && onClick();
      }}>
      <View>
        <Animated.View style={[styles.flipCard, frontAnimatedStyle]}>
          <View style={styles.cardContainer}>
            <View style={styles.cardOpen}>
              <Text style={styles.openNumber}>{isOpen && item.text}</Text>
            </View>
          </View>
        </Animated.View>
        <Animated.View
          style={[styles.flipCard, styles.flipCardBack, backAnimatedStyle]}>
          <View style={styles.cardContainer}>
            <View style={styles.cardNotOpen}>
              <Text style={styles.closeNumber}>?</Text>
            </View>
          </View>
        </Animated.View>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default React.memo(Card);
