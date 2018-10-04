import React, { Component } from 'react';

import Post from './Post';
import PostEdit from './PostEdit';

class AllPosts extends Component {

  _renderPost(post) {
    return <Post key={ post.id }
                post={ post }
                deletePost={ this.props.deletePost }
                editPost={ this.props.editPost }/>
  }

  _renderEdit(post) {
    return <PostEdit key={ post.id }
                    post={ post }
                    updatePost={ this.props.updatePost }/>
  }

  _render() {
    let posts = this.props.posts;
    return posts.map(
      (post) => (
        post.editing ? this._renderEdit(post) : this._renderPost(post)
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

export default AllPosts
