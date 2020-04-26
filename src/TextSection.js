import React, { Component } from 'react';

const TEXT = "Sekcja tekstowa";

class TextSection extends Component {
  text2 = "Sekcja tekstowa 2";

  handleDisplay = () => {
    alert('Informacja dla użytkownika');
  };


  render() {
    return (
      <div>
        {TEXT}
        {this.text2}
        <button onClick={this.handleDisplay}>Informuj użytkownika</button>
      </div>
    )
  }
}

export default TextSection;