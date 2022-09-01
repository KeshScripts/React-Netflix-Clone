import React from "react";
import request from "./request";
import Row from "./Row.js";
import Banner from "./Banner.js";
import Navbar from "./Navbar"

const App = () => {
  return (
    <div className = "app">
      <Navbar />
      <Banner />
      <Row
        title="Nexflix Originals"
        fetchUrl={request.fetchNetflixOriginals}
        isLargeRow
      />
      <Row title="Trending" fetchUrl={request.fetchTrending} />
      <Row title="Top Rated" fetchUrl={request.fetchTopRated} />
      <Row
        title="Action Movies"
        fetchUrl={request.fetchActionMovies}
      />
      <Row title="Comedy Movies" fetchUrl={request.fetchComedyMovies} />
      <Row title="Romance Movies" fetchUrl={request.fetchRomanceMovies} />
      <Row title="Horror Movies" fetchUrl={request.fetchHorrorMovies} />
      <Row title="Documentaries" fetchUrl={request.fetchDocumentaries} />
    </div>
  );
};

export default App;
