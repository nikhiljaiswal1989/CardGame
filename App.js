import React from 'react';
import { Provider } from 'react-redux';
import createStore from './src/store/createStore';
import { GameBoard } from './src/screens';
const { store } = createStore();

const App = () => {
  return (
    <Provider store={store}>
      <GameBoard />
    </Provider>
  );
};

export default App;
