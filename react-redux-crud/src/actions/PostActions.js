export const addPost = (post) => {
  return {
    type: 'ADD_POST',
    data: post
  }
}

export const editPost = (id) => {
  return {
    type: 'EDIT_POST',
    id: id
  }
}

export const updatePost = (id, post) => {
  return {
    type: 'UPDATE_POST',
    id: id,
    data: post
  }
}

export const deletePost = (id) => {
  return {
    type: 'DELETE_POST',
    id: id
  }
}
