import React from 'react';
import {connect} from 'react-redux';

const Body = ({ id, title, body, showBlog, dispatch}) => (
  <div>
    Click to hide blog post
    <h3>{body}</h3>
    <button>Edit</button> <button onClick={() => dispatch({ type: 'DELETE_BLOG', id })}>Delete</button>
  </div>
)

export default connect()(Body);