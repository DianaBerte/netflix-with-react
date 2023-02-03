//http://www.omdbapi.com/?apikey=921138b3&s=harry%20potter

const fetchMovies = async () => {
    try {
        let response = await fetch(
            'http://www.omdbapi.com/?apikey=921138b3&s=harry%20potter' ,{
                headers: {
                "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2M2M5MzJiN2U3MzczODAwMTUzNzQzNzQiLCJpYXQiOjE2NzUzMzkyODEsImV4cCI6MTY3NjU0ODg4MX0.YkFj9nZ1BdbaigHRiklfnWBAA8uV0osFvcB1J0tNJOY"
        }
        } 
        )
        if (response.ok) {
            let data = await response.json();
            console.log(data);
            this.setState({
                comments: data,
            })
        } else {
            alert("error");
        }
    } catch (error) {
        console.log(error)
    }
}

export default fetchMovies()