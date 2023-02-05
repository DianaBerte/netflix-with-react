import { Component } from "react";
import { Carousel } from "react-bootstrap"; 
import { Spinner, Alert } from "react-bootstrap";
import SingleMovie from "./SingleMovie";

const url = "http://www.omdbapi.com/?apikey=921138b3&s=";

class TrendingNow extends Component {
    state = {
        movie: [],
        title: "",
        isLoading: true,
        isError: false,
    }

   

    fetchMovies = async () => {
        try {
            let response = await fetch(url + this.props.query);
            if (response.ok) {
                let data = await response.json();
                console.log(data);
                const movieData = data.Search;

                this.setState({
                    ...this.state,
                    movie: movieData,
                    isLoading: false,
                })
            } else {
                this.setState({
                    isLoading: false,
                    isError: true,
                })
            }
        } catch (error) {
            console.log(error);
            this.setState({
                isLoading: false,
                isError: true,
            })
        }
    };

     componentDidMount() {
        this.fetchMovies();
    }

    
    render() {
        return(
            <>
            <h5>{this.props.title}</h5>
            {this.state.isLoading && (<Spinner animation="border" variant="success" /> )}
            {this.state.isError && ( <Alert variant="danger">Oh no, error occurred 😢</Alert>)}
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