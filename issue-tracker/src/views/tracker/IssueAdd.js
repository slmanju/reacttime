import React, { Component } from 'react';

class IssueAdd extends Component {

  constructor() {
    super();
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();

    let form = document.forms.issueForm;
    this.props.handleAddIssue({
      id: Date.now(),
      created: new Date(),
      status: 'Open',
      owner: form.owner.value,
      title: form.title.value
    });
    form.owner.value = '';
    form.title.value = '';
  }

  render() {
    return (
      <div>
        <form onSubmit={ this.handleSubmit } name="issueForm">
          <input type="text" name="owner" placeholder="Owner" />
          <input type="text" name="title" placeholder="Title" />
          <button>Add</button>
        </form>
      </div>
    )
  }
}

export default IssueAdd
