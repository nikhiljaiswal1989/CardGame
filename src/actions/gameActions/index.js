import { getCardObjectArray } from '../../utils/utilFunctions';
export const RESTART_GAME = 'RESTART_GAME';
export const INCREMENT_COUNTER = 'INCREMENT_COUNTER';
export const UPDATE_CARDS = 'UPDATE_CARDS';
export const ON_CLICK_CARD = 'ON_CLICK_CARD';
export const OPEN_CARD = 'OPEN_CARD';

export const onClickCard = (index) => ({
  type: ON_CLICK_CARD,
  index,
});

export const openCard = (index, cardObjectArray, clickedIndexArray) => {
  cardObjectArray[index].isOpen = true;
  clickedIndexArray.push(index);
  return {
    type: OPEN_CARD,
    cardObjectArray,
    clickedIndexArray,
  };
};

export const incrementCounter = (counter) => {
  return { type: INCREMENT_COUNTER, payload: counter };
};

export const updateCards = (cardObjectArray, clickedIndexArray) => {
  var isFinished = true;
  for (let i = 0; i < cardObjectArray.length; i++) {
    if (!cardObjectArray[i].isOpen) {
      isFinished = false;
    }
  }
  return {
    type: UPDATE_CARDS,
    cardObjectArray,
    clickedIndexArray,
    isFinished,
  };
};

export const restartGame = () => ({
  type: RESTART_GAME,
  cardObjectArray: getCardObjectArray(),
  counter: 0,
});
