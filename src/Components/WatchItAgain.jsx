import { Component } from "react";
import { Carousel } from "react-bootstrap"; 
import SingleMovie from "./SingleMovie";

class WatchItAgain extends Component {
    state = {
        movie: [],
        url: "",
        title: "",
    }


fetchMovies = async (props) => {
    try {
        let response = await fetch(this.props.url + this.props.query);
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
            <br />
            <h5>{this.props.title}</h5>
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

