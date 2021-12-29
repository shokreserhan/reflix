import React from "react";
import "../style/MovieDetail.css"

export default function MovieDetail(props) {
  const movie = props.movies[props.match.params.movieId];
  return (
    <div className="movie-detail">
      <h1>{movie.title} ({movie.year})</h1>
      <img src={movie.img} alt="" />
      <p>{movie.descrShort}</p>
    </div>
  );
}