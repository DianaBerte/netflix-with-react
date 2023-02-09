import { Component } from "react";
import { Link } from "react-router-dom";

class SingleMovie extends Component {
  render() {
    return (
      <>
      <br />
      <Link to={'/movie-details/' + this.props.movieObject.imdbId}>
        <h6>{this.props.movieObject.Title}</h6>
        <img
          key={this.props.movieObject.imdbId}
          src={this.props.movieObject.Poster}
          alt="movie title"
          className="h-20 w-20"
        />
        </Link>
      </>
    );
  }
}

export default SingleMovie;

// http://localhost:3001/movie-details/tt0241527