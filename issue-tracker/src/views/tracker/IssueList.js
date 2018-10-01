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

  addIssue(issue) {
    const issues = this.state.issues.slice();
    issue.id = issues.length + 1;
    issues.push(issue);
    this.setState({
      issues
    });
  }

  _addTestIssue() {
    let issue = {
      company: 'hello test',
      contact: 'hello',
      country: 'world'
    }
    this.addIssue(issue);
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
        <input type="text" placeholder="company" />
        <input type="text" placeholder="contact" />
        <input type="button" value="Add" onClick={ this._addTestIssue.bind(this) } />
      </div>
    )
  }
}

export default IssueList
