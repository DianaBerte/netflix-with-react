import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";

const MovieDetails = () => {

    
    const params = useParams();
    console.log("Params are: ", params)

    console.log("the id of the chosen movie is: ", params.movieId)

    const [movie, setMovie] = useState(null);

    const fetchMovie = async () => {
      try {
        let response = await fetch(
          `http://www.omdbapi.com/?apikey=921138b3&i=${params.movieId}`
        );
        if (response.ok) {
          const data = await response.json();
          setMovie(data);
          console.log("Movie object:", movie);
        } else {
          alert("error");
        }
      } catch (error) {
        console.log(error);
      }
    };

    useEffect(() => {
      fetchMovie();
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [params.movieId]);

    return(
        <div>
            <h1>Movie Details</h1>
            {movie && 
            <>           <h2>{movie.Title}</h2>
            <img src={movie.Poster} alt="movie"/> </> }

            <Link to={'/movie-details/' + params.movieId }>
            </Link>
        </div>
    )
}

export default MovieDetails