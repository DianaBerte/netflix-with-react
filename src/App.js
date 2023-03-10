import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import MyNetflixNavbar from "./Components/MyNetflixNavbar";
import TrendingNow from "./Components/TrendingNow";
import WatchItAgain from "./Components/WatchItAgain";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import TVShows from "./Components/TVShows";
import MovieDetails from "./Components/MovieDetails";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <MyNetflixNavbar subtitle="Type..." />
        <MyNetflixNavbar subtitle="Type..." />
        <WatchItAgain query="Harry Potter" />
        <Routes>
          <Route
            element={
              <>
                <TrendingNow title="Trending Now" query="The Matrix" />{" "}
                <WatchItAgain
                  title="Watch it Again"
                  query="The Lord of the Rings"
                />{" "}
              </>
            }
            path="/"
          />
        </Routes>
        <Routes>
          <Route
            element={<TVShows movieName={"Harry Potter"} />}
            path="/tv-shows"
          />
        </Routes>
        <Routes>
          <Route element={<MovieDetails />} path="/movie-details/:movieId" />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
