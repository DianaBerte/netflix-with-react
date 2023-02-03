import { Component } from "react";
import { Carousel } from "react-bootstrap"; 
import SingleMovie from "./SingleMovie";
// import { Component } from "react";

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
                const dataMovie = data.Search;

                this.setState({
                    ...this.state,
                    movie: dataMovie,
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
                {this.state.movie.map((objectOfMovies) => {
                    return (
                        <Carousel.Item key={objectOfMovies.imdbID}>
                            <SingleMovie objectOfMovies={objectOfMovies} />
                        </Carousel.Item>
                    );
                })}
{/*             
                    <img
                    className="d-block w-100"
                    src="holder.js/800x400?text=Third slide&bg=20232a"
                    alt="First slide"
                    />
                    <Carousel.Caption>
                    <h3>First slide label</h3>
                    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </Carousel.Caption>
                
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src="holder.js/800x400?text=Second slide&bg=282c34"
                    alt="Second slide"
                    />

                    <Carousel.Caption>
                    <h3>Second slide label</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src="holder.js/800x400?text=Third slide&bg=20232a"
                    alt="Third slide"
                    />

                    <Carousel.Caption>
                    <h3>Third slide label</h3>
                    <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                    </Carousel.Caption>
                </Carousel.Item> */}
            </Carousel>
            </>
        )
    }
}

export default TrendingNow