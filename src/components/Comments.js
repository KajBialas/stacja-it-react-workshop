import React, { Component } from 'react';

class Comments extends Component {
  state = {
    currentValue: '',
  };

  handleChange = (event) => {
    this.setState({
      currentValue: event.target.value,
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    console.log('FORMULARZ WYSŁANY', this.state.currentValue);
    this.setState({currentValue: ''});
  };

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
        </div>
      </div>
    )
  }
}

export default Comments;