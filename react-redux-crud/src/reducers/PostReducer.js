const postReducer = (state = {
  posts: [],
  post: null
}, action) => {
  //console.log('in post reducer', state, action);
  switch (action.type) {
    case 'ADD_POST':
      return {
        ...state,
        posts: state.posts.concat([action.data])
      };

    case 'DELETE_POST':
      return {
        ...state,
        posts: state.posts.filter((post) => post.id !== action.id)
      };

    case 'EDIT_POST':
      return {
        ...state,
        posts: state.posts.map((post) => post.id === action.id ? {...post, editing:!post.editing } : post)
      }

    case 'UPDATE_POST':
        return {
          ...state,
          posts: state.posts.map((post) => {
            if (post.id === action.id) {
              return {
                 ...post,
                 title:action.data.title,
                 description:action.data.description,
                 editing: !post.editing
              }
            } else return post;
          })
        }

    default:
      return state;
  }
}
export default postReducer;
