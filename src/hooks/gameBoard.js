import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { onClickCard, restartGame } from '../actions/gameActions';

const useGameBord = () => {
  const dispatch = useDispatch();

  const { cardObjectArray, counter, isFinished, clickedIndexArray } =
    useSelector((s) => s.game);

  const dispatchOnClickCard = React.useCallback(
    (index) => dispatch(onClickCard(index)),
    [dispatch],
  );

  const dispatchRestart = React.useCallback(
    () => dispatch(restartGame()),
    [dispatch],
  );

  return {
    cardObjectArray,
    counter,
    isFinished,
    clickedIndexArray,
    dispatchOnClickCard,
    dispatchRestart,
  };
};

export default useGameBord;
