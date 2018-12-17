import React from 'react';
import { connect, } from 'react-redux';

const BlogList = ({ blogs }) => (
  <div>
    <h1>Blogs</h1>
    <ul>
      { blogs.map( b => {
        return (
          <li key={b.id}>
            Title: {b.title}
            <br />
            {b.body}
          </li>
        )
      })
    }
    </ul>
  </div>
)

const mapStateToProps = (state) => {
  return { blogs: state.blogs, };
}

export default connect(mapStateToProps)(BlogList);