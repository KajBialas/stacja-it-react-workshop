import React, { Component } from 'react';

class PostDetails extends Component {
  state = {
    postDetails: {}
  };

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/posts/1')
      .then(response => response.json())
      .then(data => this.setState({
        postDetails: data,
      }));
  }

  componentDidUpdate() {
    console.log(this.state);
  }

  render() {
    return (
      <div>
        Post:
      </div>
    )
  }
}

export default PostDetails;