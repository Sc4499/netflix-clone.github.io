import React, { useEffect, useState } from "react";
import "./row.css";
import axios from "./axios";
import YouTube from "react-youtube";
import movieTrailer from "movie-trailer";



const base_Url = "https://image.tmdb.org/t/p/original/";
function Row({ title, fetchUrl, isLargeRow }){
  const [movies, setMovies] = useState([]);
  const[trailerUrl, setTrailerUrl] = useState("");
  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(fetchUrl);
      setMovies(request.data.results);
      //console.log(request)
      return request;
    }
    fetchData();
  }, [fetchUrl]);
  console.log(movies);
  const opts = {
height:"390",
width:"100%",
playerVars:{
  autoplay:1,
}
 };
 const handleClick=(movie)=>{
   if(trailerUrl){
     setTrailerUrl("");
   } else {
movieTrailer(movie?.name || "")
.then((url) => {
const urlParams = new URLSearchParams(new URL(url).search);
setTrailerUrl(urlParams.get('v'));
})
.catch((error)=>console.log(error));
   }
 }
  return (
    <div className="row">
      <h2>{title}</h2>
      <div className="row_poster">
        {movies.map((movie) => {
          return (
            <img key={movie.id} onClick={()=>handleClick(movie)} className={`poster_image ${isLargeRow && "largr_image"}`}
              src={`${base_Url}${isLargeRow ? movie.poster_path : movie.backdrop_path}`}
              alt={movie.name}
            />
          );
        })}
      </div>
      {trailerUrl && <YouTube videoId={trailerUrl} opts={opts}/>}
    </div>
  );
};

export default Row;
