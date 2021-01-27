import React from 'react';
import { Provider } from 'react-redux';
import { AppRouter } from './AppRouter';
import { store } from './state/store/store';


export const App = () => {
  return (
    <Provider store={store}>
      <AppRouter />
    </Provider>
  );
}