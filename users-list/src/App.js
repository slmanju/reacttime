import React, { Component } from 'react';

import { Provider } from 'react-redux';
import { createStore } from 'redux';

import UserContainer from './components/user-container';

import allReducers from './reducers';

const store = createStore(
  allReducers
);

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <UserContainer />
      </Provider>
    );
  }
}

export default App;
