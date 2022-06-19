import React from "react";
import './MovieList.css';

const MovieList = (props) => {
  return (
    <>
      <table className="movie-list">
        {props.movies.map((movie) =>{
          return (
            <tr
              key={movie.episode_id}
              onClick={() => props.onMovieSelectHandler(movie)}
             
            >
              <td>EPISODE {movie.episode_id}</td>
              <td>
                Episode {movie.episode_id} - {movie.title}
              </td>
              <td>{movie.release_date}</td>
            </tr>
          );
        })}
      </table>
    </>
  );
};
export default MovieList;
