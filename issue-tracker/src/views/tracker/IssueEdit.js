import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import issueService from '../../service/IssueService';

// TODO duplicate code
function formatDate(date) {
    var d = new Date(date),
        month = '' + (d.getMonth() + 1),
        day = '' + d.getDate(),
        year = d.getFullYear();

    if (month.length < 2) month = '0' + month;
    if (day.length < 2) day = '0' + day;

    return [year, month, day].join('-');
}

class IssueEdit extends Component {

  constructor() {
    super();
    this.state = {
      issue: {
        _id: '', title: '', status: '', owner: '', effort: '', completionDate: '', created: ''
      }
    };
    this.onChange = this.onChange.bind(this);
  }

  componentDidMount() {
    this._loadIssue();
  }

  _loadIssue() {
      const id = this.props.match.params.id;
      let issue = issueService.findBydId(id);

      issue.created = formatDate(issue.created);
      issue.completionDate = issue.completionDate != null ? formatDate(issue.completionDate) : '';
      issue.effort = issue.effort != null ? issue.effort.toString() : '';
      this.setState({ issue });
  }

  onChange(event) {
    console.log();
  }

  render() {
    const issue = this.state.issue;
    return (
      <div>
        <form>
          ID: {issue._id}
          <br />
          Created: {issue.created}
          <br />
          Status: <select name="status" value={issue.status} onChange={this.onChange}>
            <option value="New">New</option>
            <option value="Open">Open</option>
            <option value="Assigned">Assigned</option>
            <option value="Fixed">Fixed</option>
            <option value="Verified">Verified</option>
            <option value="Closed">Closed</option>
          </select>
          <br />
          Owner: <input name="owner" value={issue.owner} onChange={this.onChange} />
          <br />
          Effort: <input size={5} name="effort" value={issue.effort} onChange={this.onChange} />
          <br />
          Completion Date: <input name="completionDate" value={issue.completionDate} onChange={this.onChange} />
          <br />
          Title: <input name="title" size={50} value={issue.title} onChange={this.onChange} />
          <br />
          <button type="submit">Update</button>
          <Link to="/issues">Back</Link>
        </form>
      </div>
    )
  }
}

export default IssueEdit
