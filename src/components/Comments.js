import React, { Component } from 'react';

class Comments extends Component {
  state = {
    currentValue: '',
    commentsList: [],
  };

  handleChange = (event) => {
    this.setState({
      currentValue: event.target.value,
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    this.setState({
      currentValue: '',
      commentsList: [...this.state.commentsList, this.state.currentValue],
    });
  };

  renderComments = () => this.state.commentsList.map((comment, index) => <div key={index}>{comment}</div>);

  render() {
    return(
      <div>
        <div>
          <h2>Dodaj komentarz</h2>
          <form onSubmit={this.handleSubmit}>
            <label>
              <input onChange={this.handleChange} value={this.state.currentValue} type="text"/> Treść komentarza
              <button type="submit">Dodaj komentarz</button>
            </label>
          </form>
          <h2>Lista komentarzy:</h2>
          {this.renderComments()}
        </div>
      </div>
    )
  }
}

export default Comments;