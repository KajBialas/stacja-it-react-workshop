import React, { Component } from 'react';
import Button from './Button';

const TEXTS = {
  BUTTON_INC: 'ZWIĘKSZ',
  BUTTON_DEC: 'ZMNIEJSZ',
  BUTTON_RES: 'RESET',
};

class Counter extends Component {
  state = {
    count: 10,
  };

  incrementCounter = () => {
    this.setState((prevState) => ({count: prevState.count + 1}));
  };

  decrementCounter = () => {
    this.setState((prevState) => ({count: prevState.count - 1}));
  };

  resetCounter = () => {
    this.setState({
      count: 0,
    });
  };

  render() {
    const { count } = this.state;

    return (
      <div>
        Counter: {count}
        <div>
          <Button text={TEXTS.BUTTON_INC} handleClick={this.incrementCounter} />
          <Button text={TEXTS.BUTTON_DEC} handleClick={this.decrementCounter} />
          <Button text={TEXTS.BUTTON_RES} handleClick={this.resetCounter} />
        </div>
      </div>
    )
  }
}

export default Counter;