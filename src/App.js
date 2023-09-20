import "./App.css";
import { useEffect, useState } from "react";
import { getMovieList, searchMovie } from "./api";

const App = () => {
  const [movieList, setMovieList] = useState([]);

  const search = async (e) => {
    if (e.length > 3) {
      const response = await searchMovie(e);
      setMovieList(response.results);
      console.log({ search: response });
    }
  };

  useEffect(() => {
    getMovieList().then((results) => {
      setMovieList(results);
    });
  }, []);

  const MoviePopular = () => {
    return movieList.map((film, i) => {
      return (
        <div className="movie-wrapper" key={i}>
          <div className="movie-title">
            <h5>{film.title}</h5>
          </div>
          <img
            src={`${process.env.REACT_APP_IMG_URL}/${film.poster_path}`}
            alt="poster"
            className="movie-image"
          />
          <div className="movie-date-rate">
            <h5>Release: {film.release_date}</h5>
            <h5 className="movie-rate">{film.vote_average}</h5>
          </div>
        </div>
      );
    });
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1 style={{marginTop:"1rem"}}>MOVIE MANIA</h1>
        <input
          placeholder="cari  film disini..."
          className="movie-search"
          onChange={({ target }) => search(target.value)}
        />
        <div className="movie-container">
          <MoviePopular />
        </div>
      </header>
    </div>
  );
};

export default App;
