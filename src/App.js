import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import MyNetflixNavbar from "./Components/MyNetflixNavbar";
import TrendingNow from "./Components/TrendingNow";

function App() {
  return (
    <div className="App">
      <MyNetflixNavbar />
      <TrendingNow />
    </div>
  );
}

export default App;
