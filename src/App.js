import { useState, useEffect } from "react";
import requests from "./requests";
import "./App.css";
import Row from "./Row/Row";
import Banner from "./Banner/Banner";
import Nav from "./Navigation/Nav";
import Footer from "./Footer/Footer";
import RingLoader from "react-spinners/RingLoader";
// import Socail from "./Footer/Socail";
function App() {
  let [loading, setLoading] = useState(false);
  let [color, setColor] = useState("red");
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 15000);
  }, []);

  return (
    <div className="bg-black App">
      {loading ? (
        <div className=" loading text-center d-flex justify-content-center align-item-center w-100 vh-100">
          <RingLoader color={color} loading={loading} size={30} />
        </div>
      ) : (
        <div className="text-white bg-black">
          <Nav />
          <Banner />
          <Row
            title="Popular on Netflix"
            fetchUrl={requests.fetchNetflixOriginals}
            isLargeRow
          />
          <Row title="Trending Now" fetchUrl={requests.fetchTrending} />
          <Row title="Top Rated" fetchUrl={requests.fetchTopRatedMovies} />
          <Row title="Action Movies" fetchUrl={requests.fetchActionMovies} />
          <Row title="Animation" fetchUrl={requests.fetchAnimation} />
          <Row title="Romance Movies" fetchUrl={requests.fetchRomanceMovies} />
          <Row title="Horror Movies" fetchUrl={requests.fetchHorrorMovies} />
          <Row title="Comedy Movies" fetchUrl={requests.fetchComedyMovies} />
          <Row
            title="Documentaries Movies"
            fetchUrl={requests.fetchDocumentaries}
          />
          <Row title="Science Fiction" fetchUrl={requests.fetchScifi} />
          <Row title="Western" fetchUrl={requests.fetchWestern} />
          {/* <Socail /> */}
          <Footer />
        </div>
      )}
    </div>
  );
}

export default App;
// Deploy complete!

// Project Console: https://console.firebase.google.com/project/netflix-clone-111d6/overview
// Hosting URL: https://netflix-clone-111d6.web.app
