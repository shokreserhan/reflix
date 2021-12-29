import React from "react";
import RentButton from "./RentButton";

export default function RentedMovies({ movies, onRent }) {
  const rentedMovies = movies.filter((movie) => movie.isRented);
  if (rentedMovies.length == 0) return null;

  return (
    <div className="rented-container">
      <div className="line"></div>
      <h1>Rented:</h1>
      <div className="rented">
        {movies.map((movie) => {
          if (movie.isRented)
            return (
              <div key={movie.id} className="movies">
                <RentButton className="icon" movie={movie} onRent={onRent} />
                <img className="movie-img" src={movie.img} alt=""/>
              </div>
            );
        })}
      </div>
    </div>
  );
}