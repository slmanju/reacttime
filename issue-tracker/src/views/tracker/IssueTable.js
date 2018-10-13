import React, { Component } from 'react';

import IssueRow from './IssueRow';

class IssueTable extends Component {

  _renderRows() {
    const issues = this.props.issues;
    return issues.map(issue => <IssueRow item={ issue } key={ issue.id} onDelete={ this.props.deleteIssue } />)
  }

  render() {
    return (
      <div>
        <table border="1">
          <tbody>
            <tr>
              <th>Id</th>
              <th>Status</th>
              <th>Owner</th>
              <th>Created</th>
              <th>Effort</th>
              <th>Completion Date</th>
              <th>Title</th>
              <th>Action</th>
            </tr>
            { this._renderRows() }
          </tbody>
        </table>
      </div>
    )
  }
}

export default IssueTable
