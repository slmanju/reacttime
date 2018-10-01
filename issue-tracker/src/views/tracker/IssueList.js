import React, { Component } from 'react';

import IssueTable from './IssueTable';

class IssueList extends Component {

  constructor() {
    super();
    this.state = {
      issues: []
    };
  }

  componentDidMount() {
    // simulate ajax call
    setTimeout(() => {
      this.setState({
        issues: [
          { id: 1, company: 'company1', contact: 'contact1', country: 'country1' },
          { id: 2, company: 'company2', contact: 'contact2', country: 'country2' },
          { id: 2, company: 'company2', contact: 'contact2', country: 'country2' }
        ]
      });
    }, 1000);
  }

  render() {
    return (
      <div>
        <h1>Issue List</h1>
        <hr/>
        <h4>Issue filter</h4>
        <hr/>
        <IssueTable issues={ this.state.issues }/>
        <hr/>
        <h4>Issue add</h4>
      </div>
    )
  }
}

export default IssueList
