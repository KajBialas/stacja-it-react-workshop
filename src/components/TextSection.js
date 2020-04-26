import React, { Component } from 'react';


class TextSection extends Component {
  handleDisplay = () => {
    alert('Informacja dla użytkownika');
  };


  render() {
    return (
      <div>
        <p>
          {this.props.text1}
        </p>
        <button onClick={this.handleDisplay}>Informuj użytkownika</button>
      </div>
    )
  }
}

export default TextSection;