import React, { Component } from 'react';

import IssueRow from './IssueRow';

class IssueTable extends Component {

  _renderRows() {
    const issues = this.props.issues;
    return issues.map(issue => <IssueRow item={ issue } />)
  }

  render() {
    return (
      <div>
        <table>
          <tr>
            <th>Company</th>
            <th>Contact</th>
            <th>Country</th>
          </tr>
          { this._renderRows() }
        </table>
      </div>
    )
  }
}

export default IssueTable
