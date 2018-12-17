import React from 'react';
import { connect, } from 'react-redux';

class EditForm extends React.Component {
  state = { id: "", title: "", body: "", };

  handleSubmit = (e) => {
    e.preventDefault();
    const { dispatch, } = this.props;
    const { title, body, id } = this.state;
    const blog = { id, title, body, };
    dispatch({ type: 'EDIT_BLOG', blog })
    this.setState({ id: "", title: "", body: "", })
  }

  handleChange = ({ target: { name, value }}) => {
    this.setState({ [name]: value, });
  }

  render() {
    const { title, body, } = this.state;
    return(
      <div style={{ width: "50%"}}>
        <h3>Edit Blog Post</h3>
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

const mapReduxToProps = (state) => {
  return { title: state.title, body: state.body, id: state.id, }
}

export default connect(mapReduxToProps)(EditForm);