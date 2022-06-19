import './CommentBox.scss';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../CommentsActions/CommentsActions';

class CommentBox extends Component {
  constructor(props) {
    super(props);
    this.state = {
      comment: '',
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({
      comment: event.target.value,
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    this.props.saveComment(this.state.comment);
    this.setState({
      comment: '',
    });
  }

  render() {
    return (
      <form className="comment-box" onSubmit={this.handleSubmit}>
        <h4>Añade tu comentario</h4>
        <textarea value={this.state.comment} onChange={this.handleChange} />
        <div className="submit">
          <button type="submit">Enviar</button>
        </div>
      </form>
    );
  }
}

export default connect(null, actions)(CommentBox);