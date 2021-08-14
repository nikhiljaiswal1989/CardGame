import { all } from 'redux-saga/effects';
import { gameWatcher } from './gameSaga';

export default function* root() {
  yield all([gameWatcher()]);
}
