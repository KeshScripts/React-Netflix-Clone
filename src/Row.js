import React, { useState, useEffect } from "react";
import movieTrailer from 'movie-trailer'
import Youtube from "react-youtube"
import "./Row.css";
//import instance from "./axios";

const base_url = "https://image.tmdb.org/t/p/original";

function Row({ title, fetchUrl, isLargeRow }) {
  const [movies, setMovies] = useState([]);
  const [trailerUrl, setTrailerUrl] = useState("")
  
  useEffect(() => {
    async function fetchData() {
      const requests = await fetch(`https://api.themoviedb.org/3${fetchUrl}`);
      const data = await requests.json();
      setMovies(data.results);
      return data;
      
    }
    fetchData();
  }, [fetchUrl, movies]);
  
  let opts = {
    height : '390',
    width : "100%",
    playerVars : {
      autoplay : 1
    }
  }
  const handleClick = (movie) => {
    if (trailerUrl){
      setTrailerUrl("")
    }else{
      movieTrailer(movie?.nane || movie?.title || movie?.original_name )
      .then(url => {
        const urlParams = new URLSearchParams(new URL(url).search)
        setTrailerUrl(urlParams.get("v"))
      })
    }
  }

  return (
    <div className="row">
      <h1>{title}</h1>
      <div className="row_posters">
        {movies.map((movie, index) => {
          return (
            <img
            className = {`row_poster ${isLargeRow && "row_postersLarge" }`}
              onClick = { () => handleClick(movie)}
              key={movie?.id}
              alt={movie.name}
              src={`${base_url}/${isLargeRow ? movie.poster_path : movie.backdrop_path
              }`}
            />
          );
        })}
      </div>
      { trailerUrl && <Youtube id={trailerUrl} opts={opts} /> }
    </div>
  );
}

export default Row;
