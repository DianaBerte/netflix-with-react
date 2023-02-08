import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";

const MovieDetails = () => {

    
    const params = useParams();
    console.log("Params are: ", params)

    console.log("the id of the chosen movie is: ", params.movieId)

    const [movieObj, setMovieObj] = useState(null);

    const fetchMovies = async () => {
      try {
        let response = await fetch(
          "http://www.omdbapi.com/?apikey=921138b3&i=tt0241527" + params.movieId,
          {
            method: "GET",
          }
        );
        if (response.ok) {
          const movieData = await response.json();
          setMovieObj(movieData.Search);
          console.log("Movie object:", movieObj);
        } else {
          alert("error");
        }
      } catch (error) {
        console.log(error);
      }
    };

    useEffect(
        () => {
            fetchMovies()
        // eslint-disable-next-line react-hooks/exhaustive-deps
        }, []
    )

    return(
        <div>
            <h1>Movie Details</h1>
            <Link to={'/movie-details/' + params.movieId }>
            </Link>
        </div>
    )
}

export default MovieDetails