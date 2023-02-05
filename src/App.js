import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import MyNetflixNavbar from "./Components/MyNetflixNavbar";
import TrendingNow from "./Components/TrendingNow";
import WatchItAgain from "./Components/WatchItAgain";

function App() {
  return (
    <div className="App">
      <MyNetflixNavbar />
      <TrendingNow title="Trending Now" query="The Matrix" />
      <WatchItAgain title="Watch it Again" query="The Lord of the Rings" />
    </div>
  );
}

export default App;
