import React from 'react';
import { useSelector } from 'react-redux';
import './MovieGrid.css';

const MovieGrid = () => {
  const movies = useSelector((state) => state.movies);

  return (
    <div className="grid-container">
      {movies.map((movie) => (
        <div key={movie.id} className="grid-item">
          <img src={movie.posterURL} alt={movie.title} />
          <h3>{movie.title}</h3>
        </div>
      ))}
    </div>
  );
};

export default MovieGrid;
