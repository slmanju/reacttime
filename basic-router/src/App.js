import React, { Component } from 'react';

import Main from './components/main';
import Header from './components/header';

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Main />
      </div>
    );
  }
}

export default App;
