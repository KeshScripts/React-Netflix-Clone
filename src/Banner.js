import React, { useState, useEffect } from "react"
import request from "./request";
import "./Banner.css";

const url = `https://api.themoviedb.org/3${request.fetchTrending}`;
const base_url = "https://image.tmdb.org/t/p/original";

const truncate = (str, n) => {
  return str.length >  n ? `${str.slice(0,n)}...` : str 
  
};

const Banner = () => {
  const [movie, setMovie] = useState({});

  useEffect(() => {
    async function fetchMovie() {
      const req = await fetch(url);
      const data = await req.json();
      const rand = Math.floor(Math.random() * data.results.length);
      setMovie(data.results[rand]);
      console.log(movie);
    }
    fetchMovie();
  }, []);

  const styles = {
    backgroundImage: `linear-gradient(to bottom, rgba(37,37,37,0.62), #111)
    , url(${base_url}/${movie.backdrop_path})`,
    backgroundSize: "cover",
    backgroundPosition: "center center",
  };

  return (
    <header style={styles} className="banner">
    <br/>
      <div className="inner">
        <h2 className="title">
          {" "}
          {movie?.name || movie?.title || movie?.original_name}{" "}
        </h2>
        <div className="banner_buttons">
          <button className="banner_button">play</button>
          <button className="banner_button">preview</button>
        </div>
        <p className="description"> {truncate(`${movie?.overview}`, 300)} </p>
      </div>
      
    </header>
  );
};

export default Banner;
