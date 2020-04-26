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

  render() {
    return (
      <div>
        Counter: {this.state.count}
        <div>
          <button onClick={this.incrementCounter}>+</button>
        </div>
      </div>
    )
  }
}

export default Counter;