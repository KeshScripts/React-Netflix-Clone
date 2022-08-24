import React, { useState, useEffect } from "react";
import "./Row.css";
//import instance from "./axios";

const base_url = "https://image.tmdb.org/t/p/original";

function Row({ title, fetchUrl, isLargeRow }) {
  const [movies, setMovies] = useState([]);
  

  useEffect(() => {
    async function fetchData() {
      const requests = await fetch(`https://api.themoviedb.org/3${fetchUrl}`);
      const data = await requests.json();
      setMovies(data.results);
      return movies;
      /*
      const requests = await instance.get(fetchUrl);
      setMovies(requests.data.results);
      console.log(movies)
      return requests;
    }*/
    }
    fetchData();
  }, [fetchUrl, movies]);

  return (
    <div className="row">
      <h1>{title}</h1>
      <div className="row_posters">
        {movies.map((movie, index) => {
          return (
            <img
            className = {`row_poster ${isLargeRow && "row_posterLarge" } `}
              key={index}
              alt={movie.name}
              src={`${base_url}/${movie.poster_path}`}
            />
          );
        })}
      </div>
    </div>
  );
}

export default Row;
