import React from "react";
import { BsBookmarkPlus } from 'react-icons/bs';
import { BsBookmarkDash } from 'react-icons/bs';


export default function RentButton({ movie, onRent }) {
  return (
    <button className="rent-button" onClick={() => onRent(movie.id, !movie.isRented)}>
      {movie.isRented ? <BsBookmarkDash className="icon" /> : <BsBookmarkPlus className="icon"/>}
    </button>
  );
}