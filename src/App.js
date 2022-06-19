import "./App.css";
import React, { useState, useEffect } from "react";
import SearchBox from "./components/SearchBox/SearchBox";
import MovieList from "./components/MovieList/MovieList";
import SortBox from "./components/SortBox/SortBox";
import MovieDetails from "./components/MovieDetails/MovieDetails";

const App = () =>  {
  const [movies, setMovies] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [filterMovies, setFilterMovies] = useState([]);
  const [sortedMovies, setSortedMovies] = useState([]);
  const [displayData, setDisplayData] = useState([]);
  const [sortState, setSortState] = useState("DEFAULT");
  const [display,setDisplay]=useState(false);

  const fetchMovies = async () => {
    const url = "https://swapi.dev/api/films/?format=json";
    const response = await fetch(url);
    const responseJson = await response.json();
    if (responseJson.results) {
      setMovies(responseJson.results);
    }
  };
//Fetching data from Rest API
  useEffect(() => {
    fetchMovies();
  }, []);
//Searching Logic
  useEffect(() => {
    let filterMovies = [...movies];
    if (searchText.trim().length > 0) {
      const searchTextInLowercase = searchText.trim().toLowerCase();
      filterMovies = filterMovies.filter((movie) => {
        return movie.title.toLowerCase().includes(searchTextInLowercase);
      });
    }
    setFilterMovies(filterMovies);
  }, [movies, searchText]);
//Sorting Logic
  useEffect(() => {
    const sortMethods = {
      DEFAULT: { method: (a, b) => null },
      ByYear: { method: (a, b) => ( new Date(a.release_date).getTime() < new Date(b.release_date).getTime() ? -1 : 1) },
      ByEpisode: { method: (a, b) => ( +a.episode_id < +b.episode_id ? -1 : 1) },
    };

    const sortedMovies = [...filterMovies].sort(sortMethods[sortState].method);
    setSortedMovies(sortedMovies);
  }, [filterMovies, sortState]);
//Search Input Handler
  const onSearchInputChangeHandler = (e) => {
    setSearchText(e.target.value);
  };
//Sort Input Handler
  const onSortInputChangeHandler = (e) => {
    setSortState(e.target.value);
  };
//Select Input Handler
  const onMovieSelectHandler = (movie) => {
    setDisplayData(movie);
    setDisplay(true);
  };
  
  return (
    <div className="movie-body">
      <div
       className="movies-body"
      >
        <SortBox onSortInputChangeHandler={onSortInputChangeHandler}/>
        <SearchBox searchText={searchText} onSearchInputChangeHandler={onSearchInputChangeHandler} />

      </div>
      <div className="movie-div">
        <div className="movie-list-div">

          <MovieList
            movies={sortedMovies}
            onMovieSelectHandler={onMovieSelectHandler}
          />
        </div>
        <div className="movie-details-div">
          <MovieDetails displayData={displayData} display={display}/>
        </div>
      </div>
    </div>
  );
}

export default App;
