import React, { Component } from 'react';
import './App.css';

import PostContainer from './views/PostContainer';

class App extends Component {
  render() {
    return (
      <div className="App">
        <PostContainer />
      </div>
    );
  }
}

export default App;
