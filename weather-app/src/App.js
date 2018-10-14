import React, { Component } from 'react';

import AppHeader from './components/Header';
import WeatherContainer from './components/WeatherContainer';

class App extends Component {
  render() {
    return (
      <div className="App">
        <AppHeader />
        <WeatherContainer />
      </div>
    );
  }
}

export default App;
