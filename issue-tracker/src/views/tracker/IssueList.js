import React, { Component } from 'react';
import queryString from 'query-string';
import { withRouter } from 'react-router-dom';

import IssueTable from './IssueTable';
import IssueAdd from './IssueAdd';
import IssueFilter from './IssueFilter';

class IssueList extends Component {

  constructor() {
    super();
    this.state = {
      issues: []
    };
    this.setQuery = this.setQuery.bind(this);
  }

  setQuery() {
    console.log(this.props);
    // this.props.router.push({ pathname: this.props.location.pathname, query });
    // this.props.history.push('/');
    const filter = {};
    filter.status = 'New';
    filter.effort_gte = '2';
    filter.effort_lte = '8';
    // this.props.history.push({ pathname: this.props.location.pathname, query: filter });
    // this.props.history.push('/issues?color=blue');
    this.props.history.push({
      pathname: '/issues',
      search: queryString.stringify(filter)
    });
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
    const filterParams = queryString.parse(this.props.location.search);
    return (
      <div>
        <h3>Issue List</h3>
        <button onClick={ this.setQuery }>Query</button>
        <hr/>
        <IssueFilter filterParams={ filterParams } />
        <hr/>
        <IssueTable issues={ this.state.issues } />
        <hr/>
        <IssueAdd handleAddIssue={ this.addIssue.bind(this) } />
      </div>
    )
  }
}

export default withRouter(IssueList);
