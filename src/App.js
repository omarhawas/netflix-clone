import "./App.css";
import Row from "./Row";
import requests from "./requests";
import Banner from "./Banner";
import Nav from "./Nav";

function App() {
  return (
    <div className="app">
      <Nav />
      <Banner />
      <Row
        title="NETFLIX ORIGINALS"
        fetchUrl={requests.fetchNetflixOriginals}
        isLargeRow
      />
      <Row title="Trending Now" fetchUrl={requests.fetchTrending} delay={0} />
      <Row title="Top Rated" fetchUrl={requests.fetchTopRated} delay={1000} />
      <Row title="Action Movies" fetchUrl={requests.fetchActionMovies} delay={2000} />
      <Row title="Comedy Movies" fetchUrl={requests.fetchComedyMovies} delay={3000} />
      <Row title="Horror Movies" fetchUrl={requests.fetchHorrorMovies} delay={4000} />
      <Row title="Romance Movies" fetchUrl={requests.fetchRomanceMovies} delay={5000} />
      <Row title="Documentaries" fetchUrl={requests.fetchDocumentaries} delay={6000} />
    </div>
  );
}

export default App;

//https://api.themoviedb.org/3/movie/550?api_key=4c69347f6a092ce8712071911dbaa12b
