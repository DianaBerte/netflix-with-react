import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import MyNetflixNavbar from "./Components/MyNetflixNavbar";
import TrendingNow from "./Components/TrendingNow";
import WatchItAgain from "./Components/WatchItAgain";

function App() {
  return (
    <div className="App">
      <MyNetflixNavbar />
      <TrendingNow />
      <WatchItAgain />
    </div>
  );
}

export default App;
