import React, { Component } from 'react';

import IssueRow from './IssueRow';

class IssueTable extends Component {

  _renderRows() {
    const issues = this.props.issues;
    return issues.map(issue => <IssueRow item={ issue } key={ issue.id} />)
  }

  render() {
    return (
      <div>
        <table>
          <tbody>
            <tr>
              <th>Company</th>
              <th>Contact</th>
              <th>Country</th>
            </tr>
            { this._renderRows() }
          </tbody>
        </table>
      </div>
    )
  }
}

export default IssueTable
