import React, { Component } from 'react';

import { connect } from 'react-redux';

class PostForm extends Component {

  constructor() {
    super();
    this.submitForm = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();
    const form = document.forms.postForm;
    const post = {
      id: Date.now(),
      title: form.title.value,
      description: form.description.value,
      editing: false
    }

    this.props.dispatch({
      type: 'ADD_POST',
      data: post
    });
    form.title.value = '';
    form.description.value = '';
  }

  render() {
    return (
      <div>
        <h3>Create Post</h3>
        <form onSubmit={ this.submitForm } name="postForm">
          <input name="title" type="text" placeholder="Enter Post Title" />
          <br />
          <textarea name="description" rows="5" cols="28" placeholder="Enter Post" />
          <br />
          <button>Post</button>
        </form>
      </div>
      );
    }
}

function mapStateToProps(state) {
  return {
    posts: state
  }
}

export default connect(mapStateToProps)(PostForm)
