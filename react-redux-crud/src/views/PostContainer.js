import React, { Component } from 'react';

import PostForm from './PostForm';
import AllPosts from './AllPosts';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { addPost, editPost, deletePost, updatePost } from '../actions/PostActions';

class PostContainer extends Component {

  render() {
    return (
      <div>
        <PostForm addPost={ this.props.addPost }/>
        <hr />
        <AllPosts posts={ this.props.posts }
                  deletePost={ this.props.deletePost }
                  editPost={ this.props.editPost }
                  updatePost={ this.props.updatePost }/>
      </div>
    );
   }
}

function mapStateToProps(state) {
  return {
    posts: state.posts,
    post: state.post // useless
  }
}

function matchDispatchToProps(dispatch) {
  return bindActionCreators({ addPost, editPost, deletePost, updatePost }, dispatch);
}

export default connect(mapStateToProps, matchDispatchToProps)(PostContainer);
