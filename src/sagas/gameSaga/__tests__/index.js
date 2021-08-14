import { takeLatest } from 'redux-saga/effects';
import { expectSaga } from 'redux-saga-test-plan';
import { gameWatcher, onClickFunction, gameSelector } from '../index';
import { ON_CLICK_CARD } from '../../../actions/gameActions';
import gameReducer from '../../../reducers/game';

describe('Game Saga', () => {
  const mock1 = {
    cardObjectArray: [
      { isOpen: false, text: 60 },
      { isOpen: false, text: 60 },
      { isOpen: false, text: 74 },
      { isOpen: false, text: 56 },
      { isOpen: false, text: 56 },
      { isOpen: false, text: 74 },
    ],
    clickedIndexArray: [],
    counter: 0,
  };

  it('should trigger on ON_CLICK_CARD action', () => {
    expect(gameWatcher().next().value).toEqual(
      takeLatest(ON_CLICK_CARD, onClickFunction),
    );
  });

  test('gameSelectorFunction', () => {
    expect(gameSelector({ game: true })).toBeTruthy();
  });

  it('onCard click first time', () => {
    return expectSaga(onClickFunction, {
      index: 0,
    })
      .provide({
        select() {
          return mock1;
        },
      })
      .withReducer(gameReducer, mock1)
      .hasFinalState({
        ...mock1,
        counter: 1,
      })
      .run();
  });

  const mock2 = {
    cardObjectArray: [
      { isOpen: false, text: 60 },
      { isOpen: false, text: 60 },
      { isOpen: false, text: 74 },
      { isOpen: false, text: 56 },
      { isOpen: false, text: 56 },
      { isOpen: false, text: 74 },
    ],
    clickedIndexArray: [1],
    counter: 2,
  };
  it('onCard click  ', () => {
    return expectSaga(onClickFunction, {
      index: 0,
    })
      .provide({
        select() {
          return mock2;
        },
      })
      .withReducer(gameReducer, mock2)
      .hasFinalState({
        ...mock2,
        clickedIndexArray: [],
        counter: 3,
        isFinished: false,
      })
      .run();
  });
});
