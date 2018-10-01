import React, { Component } from 'react';
import './App.css';

import IssueList from './views/tracker/IssueList';

class App extends Component {
  render() {
    return (
      <div className="App">
        <IssueList />
      </div>
    );
  }
}

export default App;
