import React, { Component } from 'react';

class IssueAdd extends Component {

  constructor() {
    super();
    this.state = {
      company: '',
      contact: '',
      country: ''
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleInputChange(event) {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  }

  handleSubmit(event) {
    event.preventDefault();

    let state = this.state;
    this.props.handleAddIssue({
      company: state.company,
      contact: state.contact,
      country: state.country
    });
    this.setState({
      company: '',
      contact: '',
      country: ''
    });
  }

  render() {
    return (
      <div>
        <form onSubmit={ this.handleSubmit }>
          <label>
            Company:
            <input
                name="company"
                type="text"
                value={ this.state.company }
                onChange={ this.handleInputChange } />
          </label>
          <label>
            Contact:
            <input
                name="contact"
                type="text"
                value={ this.state.contact }
                onChange={ this.handleInputChange } />
          </label>
          <label>
            Country:
            <input
                name="country"
                type="text"
                value={ this.state.country }
                onChange={ this.handleInputChange } />
          </label>
          <input type="submit" value="Submit" />
        </form>
      </div>
    )
  }
}

export default IssueAdd
