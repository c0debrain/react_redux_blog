const blogs = ( state = [], action) => {
  switch(action.type) {
    case 'BLOGS':
      return action.blogs
    case 'ADD_BLOG':
      return [action.blog, ...state];
    case 'EDIT_BLOG':
        return state.filter( blog => {
          if (blog.id !== action.id)
            return blog
          return action.blog
        })
    case 'TOGGLE_EDIT':
      return state.map( blog => {
        if (blog.id === action.id)
          return {...blog, showEdit: !blog.showEdit}
        return blog
      })
    case 'DELETE_BLOG':
      return state.filter( blog => {
        if (blog.id !== action.id)
          return blog
      })
    default:
      return state
  }
}

export default blogs;