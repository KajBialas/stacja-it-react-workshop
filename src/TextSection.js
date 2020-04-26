import React, { Component } from 'react';

const TEXT = "Sekcja tekstowa";

class TextSection extends Component {
  text2 = "Sekcja tekstowa 2";

  render() {
    return (
      <div>
        {TEXT}
        {this.text2}
      </div>
    )
  }
}

export default TextSection;