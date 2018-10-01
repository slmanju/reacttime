import React, { Component } from 'react';

import IssueTable from './IssueTable';
import IssueAdd from './IssueAdd';

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
          { id: 3, company: 'company2', contact: 'contact2', country: 'country2' }
        ]
      });
    }, 1000);
  }

  addIssue(issue) {
    const issues = this.state.issues.slice();
    issue.id = issues.length + 1;
    issues.push(issue);
    this.setState({
      issues
    });
  }

  render() {
    return (
      <div>
        <h1>Issue List</h1>
        <hr/>
        <h4>Issue filter</h4>
        <hr/>
        <IssueTable issues={ this.state.issues } />
        <hr/>
        <IssueAdd handleAddIssue={ this.addIssue.bind(this) } />
      </div>
    )
  }
}

export default IssueList
