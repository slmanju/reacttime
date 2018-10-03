import React, { Component } from 'react';

import { connect } from 'react-redux';

class PostEdit extends Component {

  constructor() {
    super();
    this.handleEdit = this.handleEdit.bind(this);
  }

  componentDidMount() {
    const form = document.forms.editForm;

    form.title.value = this.props.post.title;
    form.description.value = this.props.post.description;
  }

  handleEdit(event) {
    event.preventDefault();
    const form = document.forms.editForm;
    const post = {
      id: Date.now(),
      title: form.title.value,
      description: form.description.value,
      editing: false
    }

    this.props.dispatch({
      type: 'UPDATE_POST',
      id: this.props.post.id,
      data: post
    });
  }

  render() {
    const placement = {
      float: 'left',
      margin: '10px',
      padding: '10px',
      border: '1px solid black'
    }
    return (
      <div style={ placement }>
        <form onSubmit={ this.handleEdit } name="editForm">
          <input name="title" type="text" placeholder="Enter Post Title" />
          <br />
          <textarea name="description" rows="5" cols="28" placeholder="Enter Post" />
          <br />
          <button>Update</button>
        </form>
      </div>
      );
    }
}

export default connect()(PostEdit)
