import React, { Component } from 'react';

import { connect } from 'react-redux';

class Post extends Component {

  constructor() {
    super();
    this.onDelete = this.handleDelete.bind(this);
    this.onEdit = this.handleEdit.bind(this);
  }

  handleDelete(event) {
    event.preventDefault();
    this.props.dispatch({
      type: 'DELETE_POST',
      id: this.props.post.id
    });
  }

  handleEdit(event) {
    event.preventDefault();
    this.props.dispatch({
      type: 'EDIT_POST',
      id: this.props.post.id
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
        <h4>{ this.props.post.title }</h4>
        <p>{ this.props.post.description }</p>
        <button onClick={ this.onEdit }>Edit</button>
        <button onClick={ this.onDelete }>Delete</button>
      </div>
    );
 }
}
export default connect()(Post);
