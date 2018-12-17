import React from 'react';
import { Link } from 'react-router-dom';
import { connect, } from 'react-redux';


const Blog = ({ id, title, }) => (
  <li key={id}
  >
  { title }
  <br />
  <Link to={`/blog/${id}`}><button>View</button></Link>
  </li>
)

export default connect()(Blog);