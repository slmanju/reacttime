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
          {
            id: 1,
            status: 'Open',
            owner: 'Ravan',
            created: new Date('2016-08-15'),
            effort: 5,
            completionDate: new Date('2016-08-20'),
            title: 'Error in console when clicking Add'
          },
          {
            id: 2,
            status: 'Assigned', owner: 'Eddie',
            created: new Date('2016-08-16'),
            effort: 14,
            completionDate: new Date('2016-08-30'),
            title: 'Missing bottom border on panel'
          }
      ]
      });
    }, 200);
  }

  addIssue(issue) {
    const issues = this.state.issues.slice();
    issue.id = Date.now();
    issues.push(issue);
    this.setState({ issues });
  }

  render() {
    return (
      <div>
        <h3>Issue List</h3>
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
