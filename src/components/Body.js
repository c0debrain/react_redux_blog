import React from 'react';
import EditShow from './EditShow'
import {connect} from 'react-redux';

const Body = ({ id, title, body, showBlog, showEdit, dispatch}) => (
  <div>
    Click to hide blog post
    <h3>{body}</h3>
    <EditShow id={id} title={title} body={body} showBlog={showBlog} showEdit={showEdit} dispatch={dispatch} />
  </div>
)

export default connect()(Body);