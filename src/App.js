import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import MyNetflixNavbar from "./Components/MyNetflixNavbar";
import TrendingNow from "./Components/TrendingNow";
import WatchItAgain from "./Components/WatchItAgain";

function App() {
  return (
    <div className="App">
      <MyNetflixNavbar />
      <TrendingNow
        url="http://www.omdbapi.com/?apikey=921138b3&s="
        title="Trending Now"
        query="The Matrix"
      />
      <WatchItAgain
        url="http://www.omdbapi.com/?apikey=921138b3&s="
        title="Watch it Again"
        query="Harry Potter"
      />
    </div>
  );
}

export default App;
