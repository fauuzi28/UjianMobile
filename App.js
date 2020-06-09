import React from 'react';
import MainNavigation from './src/navigation/Navigation';
import { Provider } from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import { reducer } from './src/redux/reducers';
import thunk from 'redux-thunk';

const store = createStore(reducer, {}, applyMiddleware(thunk))

const App = () => {
  console.disableYellowBox=true
  return (
    <Provider store={store}>
      <MainNavigation />
    </Provider>
  );
};

export default App;