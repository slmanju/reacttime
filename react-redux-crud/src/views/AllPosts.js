import React, { Component } from 'react';

import { connect } from 'react-redux';

import Post from './Post';
import PostEdit from './PostEdit';

class AllPosts extends Component {

  _render() {
    return this.props.posts.map(
      (post) => (
        post.editing ? <PostEdit key={ post.id } post={ post } /> : <Post key={ post.id } post={ post } />
      )
    )
  }
  render() {
    const placement = {
      position: 'absolute',
      width: '100%'
    }
    return (
      <div style={ placement }>
        <h3>All Posts</h3>
        <div>
          { this._render() }
        </div>
      </div>
    );
   }
}

function mapStateToProps(state) {
  return {
    posts: state
  }
}

export default connect(mapStateToProps)(AllPosts)
