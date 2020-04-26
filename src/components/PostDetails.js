import React, { Component } from 'react';
import Comments from './Comments';

class PostDetails extends Component {
  state = {
    isLoading: false,
    isError: false,
    postDetails: {}
  };

  componentDidMount() {
    this.setState({isLoading: true});
    fetch('https://jsonplaceholder.typicode.com/posts/1')
      .then(response => response.json())
      .then(data => {
        setTimeout(() =>
          this.setState({
            postDetails: data,
            isLoading: false,
          }),
          3000);
      })
      .catch(err => {
        this.setState({
          isLoading: false,
          isError: true,
        })
      });
  }

  render() {
    const { isLoading, isError, postDetails } = this.state;

    return (
      <div>
        {isLoading ? <div>Loader</div> : null}
        {isError ? <div>Błąd ładowania danych</div> : null}
        {!isLoading && !isError ? `Post: ${postDetails.title}` : null}
        <hr/>
        <Comments />
        <hr/>
      </div>
    )
  }
}

export default PostDetails;