import React, { Component } from 'react';

import { Link } from 'react-router-dom';

function formatDate(date) {
    var d = new Date(date),
        month = '' + (d.getMonth() + 1),
        day = '' + d.getDate(),
        year = d.getFullYear();

    if (month.length < 2) month = '0' + month;
    if (day.length < 2) day = '0' + day;

    return [year, month, day].join('-');
}

class IssueRow extends Component {
  render() {
    const issue = this.props.item;
    const Separator = () => <span>|&nbsp;</span>;
    return (
      <tr>
        <td>{ issue.id }</td>
        <td>{ issue.status }</td>
        <td>{ issue.owner }</td>
        <td>{ formatDate(issue.created) }</td>
        <td>{ issue.effort }</td>
        <td>{ issue.completionDate ? formatDate(issue.completionDate) : '' }</td>
        <td>{ issue.title }</td>
        <td>
          <Link to={ `/issues/view/${issue.id}` }>View</Link> <Separator />
          <Link to={ `/issues/edit/${issue.id}` }>Edit</Link> <Separator />
          <Link to={ `/issues/delete/${issue.id}` }>Delete</Link>
        </td>
      </tr>
    )
  }
}

export default IssueRow;
