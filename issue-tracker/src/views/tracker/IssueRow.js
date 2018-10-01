import React, { Component } from 'react';

class IssueRow extends Component {
  render() {
    const issue = this.props.item;
    return (
      <tr>
        <td>{ issue.company }</td>
        <td>{ issue.contact }</td>
        <td>{ issue.country }</td>
      </tr>
    )
  }
}

export default IssueRow
