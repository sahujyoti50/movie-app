import React from "react";
import './MovieDetails.css';

const MovieDetails = (props) => {
  return (
    <div className="movie-details">
       {props.display ?(<div><p>
          <b>Episode {props.displayData.episode_id} - {props.displayData.title}</b>
        </p>
        <p>{props.displayData.opening_crawl}</p>
        <p>Directed By:{props.displayData.director}</p></div>):<p className="default-display">Please Select Movie to display here!!</p>}
    </div>
  );
};
export default MovieDetails;
