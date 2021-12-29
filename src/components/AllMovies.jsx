import React from "react";
import { Link } from "react-router-dom";
import RentButton from "./RentButton";

export default function AllMovies({ movies, onRent }) {
  return (
    <div className="catalog-container">
      <div className="line"></div>
      <h1>Catalog:</h1>
      <div className="catalog">
        {movies.map((movie) => (
          <div key={movie.id} className="movies">
             <RentButton className="icon" movie={movie} onRent={onRent} />
            <Link to={`/catalog/${movie.id}`}>
              <img className="movie-img" src={movie.img} alt=""/>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}