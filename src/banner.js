import React, { useEffect, useState } from "react";
import "./banner.css";
import axios from "./axios";
import requests from "./request";
const Banner = () => {
  const [movie, setMovie] = useState([]);

  useEffect(() => {
    async function fetchDta() {
      const request = await axios.get(requests.fetchNetflixOriginals);
      setMovie(
        request.data.results[
          Math.floor(Math.random() * request.data.results.length - 1)
        ]
      );
      return request;
    }
    fetchDta();
  }, []);
  console.log(movie);

  function truncate(str, n){
      return str?.length > n ? str.substr(0, n-1)+"..." : str;

  }
  return (
    <header
      className="banner"
      style={{
        backgroundSize: "cover",
        backgroundImage: `url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`,
        backgroundPosition: "center top",
      }}
    >
      <div className="banner_content">
        <h1 className="banner_title">{movie?.title || movie?.name || movie?.original_name}</h1>
        <div className="banner_button">
          <button className="banner_buttons">Play</button>
          <button className="banner_buttons">MyList</button>
        </div>
        <h1 className="banner_desc">{truncate(movie?.overview, 150)}</h1>
      </div>
      <div className="fade"/>
    </header>
  );
};

export default Banner;
