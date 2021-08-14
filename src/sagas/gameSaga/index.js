import { put, takeLatest, select, delay } from 'redux-saga/effects';
import {
  ON_CLICK_CARD,
  incrementCounter,
  openCard,
  updateCards,
} from '../../actions/gameActions';
import { updateCardObjectArray } from '../../utils/utilFunctions';

export const gameSelector = (s) => s.game;

export function* onClickFunction(action) {
  const { cardObjectArray, clickedIndexArray, counter } = yield select(
    gameSelector,
  );
  yield put(incrementCounter(counter + 1));
  yield put(openCard(action.index, cardObjectArray, clickedIndexArray));
  const updatedIndexArray =
    clickedIndexArray.length === 2 ? [] : clickedIndexArray;
  clickedIndexArray.length === 2 &&
  cardObjectArray[clickedIndexArray[0]].text ===
    cardObjectArray[clickedIndexArray[1]].text
    ? null
    : yield delay(1000);
  yield put(
    updateCards(
      updateCardObjectArray(cardObjectArray, clickedIndexArray),
      updatedIndexArray,
    ),
  );
}

export function* gameWatcher() {
  yield takeLatest(ON_CLICK_CARD, onClickFunction);
}
