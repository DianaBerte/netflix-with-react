import { Component } from "react";

class TVShows extends Component {

    fetchMovies = async () => {
        try {
        let response = await fetch('http://www.omdbapi.com/?apikey=921138b3&s=' + this.props.movieName)
        if(response.ok){
            let data = await response.json();
            console.log(data);
        }
        
    else {
    }

    } catch(error){
        console.log(error)
    }
}

componentDidMount(){this.fetchMovies()}

    render() {
        return(
            <div>

            </div>
        )
    }
}

export default TVShows