import React, { Component } from 'react';

class PostList extends Component {
  state = {
    isLoading: false,
    isError: false,
    postList: [],
  };

  componentDidMount() {
    this.setState({isLoading: true});
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(response => response.json())
      .then(data => {
        setTimeout(() =>
          this.setState({
            postList: data,
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

  renderPosts = () => this.state.postList.map((postItem) => <div key={postItem.id}><h3>{postItem.title}</h3><p>{postItem.body}</p></div>);

  render() {
    const { isLoading, isError } = this.state;

    return (
      <div>
        <h1>Lista innych postów:</h1>
        {isLoading ? <div>Loader</div> : null}
        {isError ? <div>Błąd ładowania danych</div> : null}
        {!isLoading && !isError ? this.renderPosts() : null}
      </div>
    )
  }
}

export default PostList;