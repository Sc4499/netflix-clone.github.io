import React from "react";
import "./App.css";
import Row from "./row";
import requests from "./request";
import Banner from "./banner";
import Navbar from "./navbar";
//lkdfhskdsnsdjclkadsgvkdsnvlaksnvlkbnvkanvn
function App() {
  return (
    <div className="App">
      <Navbar />
     <Banner/>

      <Row
        title="NETFLIX ORIGINALS"
        fetchUrl={requests.fetchNetflixOriginals}
        isLargeRow
      />
      <Row title="TRENDING NOW" fetchUrl={requests.fetchTrending} />
      <Row title="TOP RATED" fetchUrl={requests.fetchTopRated} />
      <Row title="COMEDY MOVIES" fetchUrl={requests.fetchComedyMovies} />
      <Row title="ROMENTIC MOVIES" fetchUrl={requests.fetcRomancerMovies} />
      <Row title="ACTION MOVIES" fetchUrl={requests.fetchActionMovies} />
      <Row title="DOCUMENTARIES" fetchUrl={requests.fetchDocumentaries} />
    </div>
  );
}

export default App;
