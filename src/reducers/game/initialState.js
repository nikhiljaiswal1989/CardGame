import { getCardObjectArray } from '../../utils/utilFunctions';
export const INITIAL_STATE = {
  cardObjectArray: getCardObjectArray(),
  clickedIndexArray: [],
  counter: 0,
  isFinished: false,
};
