import React, { Component } from "react";
import '../style/catalog.css';
import AllMovies from "./AllMovies";
import RentedMovies from "./RentedMovies";
import { BsSearch } from 'react-icons/bs';


export default class Catalog extends Component {
  constructor(props) {
    super();
    this.INITIAL_BUDGET = 10;
    this.state = {
      searchInput: "",
      movies: [...props.movies],
      budget: this.INITIAL_BUDGET,
    };
  }

  handleInput = (event) => {
    this.setState({ searchInput: event.target.value }, () => {
      let movies = [...this.props.movies];
      const { searchInput } = this.state;

      if (searchInput.replace(/ /g, "").length == 0) {
        this.setState({ movies: this.props.movies });
        return null;
      }

      movies = movies.filter((movie) => movie.title.toLowerCase().startsWith(searchInput));

      this.setState({ movies });
    });
  };

  handleRent = (movieId, isRented) => {
    let budget = this.state.budget;

    if (budget < 3 && isRented) {
      alert("No enough budget")
    return null;
    }

    this.props.onRent(movieId, isRented);

     isRented ? budget -= 3: budget += 3;

    this.setState({ budget });
  };

  render() {
    return (
        <div className="catalog-page">
          <div className="line"></div>
          <h1 className="budget">Budget: {this.state.budget}</h1>
          <BsSearch className="search-icon" />
          <input className="search" placeholder="Search..." type="text" onChange={(event) => this.handleInput(event)} value={this.state.searchInput} />
          <RentedMovies movies={this.state.movies} onRent={this.handleRent} />
          <AllMovies movies={this.state.movies} onRent={this.handleRent} />
        </div>
    );
  }
}