import React from 'react';
import BlogBody from './BlogBody'
import { connect, } from 'react-redux';


const Blog = ({ id, title, body, showBlog, dispatch }) => (
  <li onClick={() => dispatch({ type: 'TOGGLE_BLOG', id })}
  >
  { title }
  <br />
  <BlogBody body={body} showBlog={showBlog} />
  </li>
)

export default connect()(Blog);