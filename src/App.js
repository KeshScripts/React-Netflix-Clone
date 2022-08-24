import React from "react";
import Row from "./Row.js";
import request from "./request";
const App = () => {
  return (
    <div>
      <Row
        title="Nexflix Originals"
        fetchUrl={request.fetchNetflixOriginals}
        isLargeRow={true}
      />
      <Row title="Trending" fetchUrl={request.fetchTrending} />
      <Row title="Top Rated" fetchUrl={request.fetchTopRated} />
      <Row
        title="Action Movies"
        fetchUrl={request.fetchActionMovied}
        isLargeRow
      />
      <Row title="Comedy Movies" fetchUrl={request.fetchComedyMovies} />
      <Row title="Romance Movies" fetchUrl={request.fetchRomanceMovies} />
      <Row title="Horror Movies" fetchUrl={request.fetchHorrorMovies} />
      <Row title="Documentaries" fetchUrl={request.fetchDocumentaries} />
    </div>
  );
};

export default App;
