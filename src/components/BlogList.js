import React from 'react';
import Blog from './Blog';
import { connect, } from 'react-redux';

const BlogList = ({ blogs }) => (
  <div>
    <ul>
      { 
        blogs.map( b => {
          return ( <Blog key={b.id} {...b} /> )
        })
      }
    </ul>
  </div>
)

const mapStateToProps = (state) => {
  return { blogs: state.blogs, };
}

export default connect(mapStateToProps)(BlogList);