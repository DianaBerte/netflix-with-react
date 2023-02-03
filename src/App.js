import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import MyNetflixNavbar from "./Components/MyNetflixNavbar";
import TrendingNow from "./Components/TrendingNow";
import fetchMovies from "./Movies/FetchMovies";

function App() {
  return (
    <div className="App">
      <MyNetflixNavbar />
      <TrendingNow />
      <fetchMovies />
    </div>
  );
}

export default App;
