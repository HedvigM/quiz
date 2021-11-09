import React from 'react';
import { Provider } from 'react-redux';
import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { quiz } from 'reducers/quiz';

import { CurrentQuestion } from 'components/CurrentQuestion';
import { LastPage } from 'components/LastPage';

/* preparing the app for the store */
const reducer = combineReducers({
  quiz: quiz.reducer,
});

const store = configureStore({ reducer });
console.log(store.getState().quiz);

/* provider is imported from the redux package. Serves the same purpose as browserRouter. We have to wrapp the whole app in this to be able to reach the store. */
export const App = () => {
  return (
    <Provider store={store}>
      <h1>hej: {store.getState().quiz.quizOver.toString()}</h1>
      {store.getState().quiz.quizOver === true && <LastPage />}
      <CurrentQue-stion />
    </Provider>
  );
};
