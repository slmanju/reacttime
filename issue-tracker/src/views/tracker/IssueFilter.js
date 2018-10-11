import React, { Component } from 'react';

class IssueEdit extends Component {

  constructor(props) {
    super(props);
    this.state = {
      status: props.filterParams.status || '',
      effort_gte: props.filterParams.effort_gte || '',
      effort_lte: props.filterParams.effort_lte || '',
      changed: false,
    };
    this.onChangeStatus = this.onChangeStatus.bind(this);
    this.onChangeEffortGte = this.onChangeEffortGte.bind(this);
    this.onChangeEffortLte = this.onChangeEffortLte.bind(this);
    this.handleFilterApply = this.handleFilterApply.bind(this);
    this.clearFilter = this.clearFilter.bind(this);
    this.resetFilter = this.resetFilter.bind(this);
  }

  componentWillReceiveProps(newProps) {
    this.setState({
      status: newProps.filterParams.status || '',
      effort_gte: newProps.filterParams.effort_gte || '',
      effort_lte: newProps.filterParams.effort_lte || '',
      changed: false,
    });
  }

  onChangeStatus(event) {
    this.setState({ status: event.target.value, changed: true });
  }

  onChangeEffortGte(event) {
    this.setState({ effort_gte: event.target.value, changed: true });
  }

  onChangeEffortLte(event) {
    this.setState({ effort_lte: event.target.value, changed: true });
  }

  handleFilterApply() {
    const newFilter = {};
    if (this.state.status) newFilter.status = this.state.status;
    if (this.state.effort_gte) newFilter.effort_gte = this.state.effort_gte;
    if (this.state.effort_lte) newFilter.effort_lte = this.state.effort_lte;
    this.props.setFilter(newFilter);
  }

  clearFilter() {
    this.props.setFilter({});
  }

  resetFilter() {
    this.setState({
      status: this.props.filterParams.status || '',
      effort_gte: this.props.filterParams.effort_gte || '',
      effort_lte: this.props.filterParams.effort_lte || '',
      changed: false,
    });
  }

  render() {
    return (
      <div>
        Status:
        <select value={ this.state.status } onChange={ this.onChangeStatus }>
          <option value="">(Any)</option>
          <option value="New">New</option>
          <option value="Open">Open</option>
          <option value="Assigned">Assigned</option>
          <option value="Fixed">Fixed</option>
          <option value="Verified">Verified</option>
          <option value="Closed">Closed</option>
        </select>
        &nbsp;Effort between:
        <input size={ 5 } value={ this.state.effort_gte } onChange={ this.onChangeEffortGte } /> &nbsp;-&nbsp;
        <input size={ 5 } value={ this.state.effort_lte } onChange={ this.onChangeEffortLte } />
        <button onClick={ this.handleFilterApply }>Apply</button>
        <button onClick={ this.resetFilter }>Reset</button>
        <button onClick={ this.clearFilter }>Clear</button>
      </div>
    )
  }
}

export default IssueEdit
