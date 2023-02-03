import { Component } from "react";
import { Carousel } from "react-bootstrap"; 
import SingleMovie from "./SingleMovie";

//http://www.omdbapi.com/?apikey=921138b3&s=harry%20potter

class TrendingNow extends Component {
    state = {
        movie: [],
        url: "http://www.omdbapi.com/?apikey=921138b3&s=",
    }

   

    fetchMovies = async () => {
        try {
            let response = await fetch(this.state.url + 
                'harry%20potter'
            );
            if (response.ok) {
                let data = await response.json();
                console.log(data);
                const movieData = data.Search;

                this.setState({
                    ...this.state,
                    movie: movieData,
                })
            } else {
                console.log("error");
            }
        } catch (error) {
            console.log(error);
        }
    };

     componentDidMount() {
        this.fetchMovies();
    }

    
    render() {
        return(
            <>
            <Carousel>
                {this.state.movie.map((movieObject) => {
                    return (
                        <Carousel.Item key={movieObject.imdbID}>
                            <SingleMovie movieObject={movieObject} />
                        </Carousel.Item>
                    );
                })}
            </Carousel>
            </>
        )
    }
}

export default TrendingNow