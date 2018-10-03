import React, { Component } from 'react';

import PostForm from './PostForm';
import AllPosts from './AllPosts';

class PostContainer extends Component {
  render() {
    return (
      <div>
        <PostForm />
        <hr />
        <AllPosts />
      </div>
    );
   }
}

export default PostContainer;
