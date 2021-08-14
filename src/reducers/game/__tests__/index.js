import gameReducer from '../index';
import { updateCards, restartGame } from '../../../actions/gameActions';
import mockData from '../../../mockData/initialState.json';
describe('Game Reducers', () => {
  let currentState = mockData;

  it('should set cardObjectArray when UPDATE_CARDS action is dispatched', () => {
    currentState = gameReducer(
      currentState,
      updateCards(mockData.cardObjectArray, mockData.clickedIndexArray),
    );
    expect(currentState.cardObjectArray).toEqual(mockData.cardObjectArray);
  });

  it('should reset everything  when RESTART_GAME action is dispatched', () => {
    currentState = gameReducer(
      currentState,
      restartGame(mockData.cardObjectArray, mockData.clickedIndexArray),
    );
    expect(currentState.counter).toEqual(0);
  });
});
