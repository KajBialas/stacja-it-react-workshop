import React, { Component } from 'react';

class Counter extends Component {
  state = {
    count: 10,
  };

  incrementCounter = () => {
    this.setState({
      count: this.state.count + 1,
    });
  };

  decrementCounter = () => {
    this.setState({
      count: this.state.count - 1,
    });
  };

  resetCounter = () => {
    this.setState({
      count: 0,
    });
  };

  render() {
    return (
      <div>
        Counter: {this.state.count}
        <div>
          <button onClick={this.incrementCounter}>+</button>
          <button onClick={this.decrementCounter}>-</button>
          <button onClick={this.resetCounter}>RESET</button>
        </div>
      </div>
    )
  }
}

export default Counter;