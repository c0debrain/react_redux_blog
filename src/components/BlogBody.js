import React from 'react';
import Body from './Body';

const BlogBody = ({ id, title, body, showBlog, dispatch }) => {
  if (showBlog) {
    return <Body id={id} title={title} body={body} showBlog={showBlog} dispatch={dispatch} />
  } else {
    return "Click to see Blog Post"
  }
}

export default BlogBody;