import React from 'react';
import { connect, } from 'react-redux';

class BlogForm extends React.Component {
  state = { title: "", body: "", };

  handleSubmit = (e) => {
    e.preventDefault();
    const { dispatch } = this.props;
    const { title, body, } = this.state;
    const blog = { title, body };
    dispatch({ type: 'ADD_BLOG', blog })
    this.setState({ title: "", body: "", })
  }

  handleChange = ({ target: { name, value }}) => {
    this.setState({ [name]: value, });
  }

  render() {
    const { title, body, } = this.state;
    return(
      <div>
        <h3>Add a Blog</h3>
        <form onSubmit={this.handleSubmit}>
          Blog Title: <br />
          <input name="title" value={title} onChange={this.handleChange} />
          <br />
          Blog Body: <br />
          <textarea name="body" value={body} onChange={this.handleChange} />
          <br />
          <br />
          <input type="submit" value="submit" />
        </form>
      </div>
    )
  }
}

export default connect()(BlogForm);