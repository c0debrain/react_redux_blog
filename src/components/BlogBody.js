import React from 'react';

const BlogBody = ({ body, showBlog }) => {
  if (showBlog) {
    return body
  } else {
    return "Click to see Blog Post"
  }
}

export default BlogBody;