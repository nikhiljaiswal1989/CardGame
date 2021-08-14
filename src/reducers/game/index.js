import { INITIAL_STATE } from './initialState';
import {
  RESTART_GAME,
  INCREMENT_COUNTER,
  OPEN_CARD,
  UPDATE_CARDS,
} from '../../actions/gameActions';
export default (gameState = INITIAL_STATE, action) => {
  switch (action.type) {
    case RESTART_GAME:
      return {
        ...gameState,
        cardObjectArray: action.cardObjectArray,
        counter: action.counter,
        clickedIndexArray: [],
        isFinished: false,
      };
    case INCREMENT_COUNTER:
      return {
        ...gameState,
        counter: action.payload,
      };
    case OPEN_CARD:
      return {
        ...gameState,
        cardObjectArray: action.cardObjectArray,
        clickedIndexArray: action.clickedIndexArray,
      };
    case UPDATE_CARDS:
      return {
        ...gameState,
        cardObjectArray: action.cardObjectArray,
        clickedIndexArray: action.clickedIndexArray,
        isFinished: action.isFinished,
      };
    default:
      return gameState;
  }
};
