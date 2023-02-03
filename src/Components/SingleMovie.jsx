import { Component } from "react";

class SingleMovie extends Component {
  render() {
    return (
      <>
        <img
          key={this.props.objectOfMovies.imdbId}
          src={this.props.objectOfMovies.Poster}
          alt="movie title"
          className="h-50 w-50"
        />
      </>
    );
  }
}

export default SingleMovie;