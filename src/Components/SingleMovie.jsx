import { Component } from "react";

class SingleMovie extends Component {
  render() {
    return (
      <>
      <br />
        <h6>{this.props.movieObject.Title}</h6>
        <img
          key={this.props.movieObject.imdbId}
          src={this.props.movieObject.Poster}
          alt="movie title"
          className="h-20 w-20"
        />
      </>
    );
  }
}

export default SingleMovie;