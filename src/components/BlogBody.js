import React from 'react';
import Body from './Body';

const BlogBody = ({ id, title, body, showBlog, dispatch, showEdit }) => {
  if (showBlog) {
    return <Body id={id} title={title} body={body} showBlog={showBlog} dispatch={dispatch} showEdit={showEdit} />
  } else {
    return "Click to see blog post"
  }
}

export default BlogBody;