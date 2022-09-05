import React, { useEffect, useState } from "react";
import "../Banner/Banner.css";
import axios from "../axios";
import requests from "../requests";

function Banner() {
  const [movie, setMovie] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(requests.fetchNetflixOriginals);
      // console.log(request.data.results);
      setMovie(
        request.data.results[
          Math.floor(Math.random() * request.data.results.length)
        ]
      );
      return request;
    }
    fetchData();
  }, []);

  // console.log(movie);

  function truncate(str, n) {
    return str?.length > n ? str.substr(0, n - 1) + "..." : str;
  }

  return (
    <header
      className="banner"
      style={{
        backgroundSize: "cover",
        backgroundImage: `url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`,
        backgroundPosition: "center center",
      }}
    >
      <div className="banner__contents">
        <h1 className="banner__title">
          {movie?.title || movie?.name || movie.original_name}
        </h1>
        <h1 className="banner__description">
          {truncate(movie?.overview, 150)}
        </h1>
        <div className="banner__buttons">
          <button className="banner__button">
            <a href="https://www.netflix.com/watch/81270837?trackId=254015180tctx=0%2C0%2Ca7823087-f6eb-439f-b571-79d51dcf9c60-11388985%2CGPS_29AEAF5A44672C06950046E142CA61-696A1AB49AD018-B82629C693_p_1660595950176%2CGPS_29AEAF5A44672C06950046E142CA61_p_1660595950176%2C%2C%2C%2C">
              Play
            </a>
          </button>
          <button className="banner__button">
            <a href="https://www.netflix.com/browse?jbv=80117809">More Info</a>
          </button>
        </div>
      </div>
      <div className="banner__fadeBottom" />
    </header>
  );
}

export default Banner;
