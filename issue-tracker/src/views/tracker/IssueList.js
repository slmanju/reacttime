import React, { Component } from 'react';
import queryString from 'query-string';
import { withRouter } from 'react-router-dom';

import IssueTable from './IssueTable';
import IssueAdd from './IssueAdd';
import IssueFilter from './IssueFilter';

import issueService from '../../service/IssueService';

class IssueList extends Component {

  constructor() {
    super();
    this.state = {
      issues: []
    };
    this.setFilter = this.setFilter.bind(this);
  }

  componentDidMount() {
    this._loadData();
  }

  _loadData() {
    // simulate ajax call
    setTimeout(() => {
      this.setState({
        issues: issueService.findAll()
      });
    }, 60);
  }

  addIssue(issue) {
    issueService.save(issue);
    this._loadData();
  }

  setFilter(filters) {
    this.props.history.push({
      pathname: '/issues',
      search: queryString.stringify(filters)
    });

    setTimeout(() => {
      const filtered = issueService.search(filters);
      this.setState({
        issues: filtered
      });
    }, 60);
  }

  render() {
    return (
      <div>
        <IssueFilter filterParams={ queryString.parse(this.props.location.search) }
                      setFilter={ this.setFilter } />
        <hr/>
        <IssueTable issues={ this.state.issues } />
        <hr/>
        <IssueAdd handleAddIssue={ this.addIssue.bind(this) } />
      </div>
    )
  }
}

export default withRouter(IssueList);
