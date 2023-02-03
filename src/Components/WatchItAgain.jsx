import { Component } from "react";
import { Carousel } from "react-bootstrap"; 
import SingleMovie from "./SingleMovie";

class WatchItAgain extends Component {
    state = {
        movie: [],
        url: "http://www.omdbapi.com/?apikey=921138b3&s=",
    }


fetchMovies = async () => {
    try {
        let response = await fetch(this.state.url + 'the%20lord%20of%20the%20rings');
    if (response.ok) {
        let data = await response.json();
        console.log(data);
        const movieData = data.Search;

        this.setState({
            ...this.state,
            movie: movieData,
        })
    } else {
        alert("Oh no, an error occurred :(");
    } 
} catch (error) {
    console.log(error);
}
}
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
};

export default WatchItAgain

