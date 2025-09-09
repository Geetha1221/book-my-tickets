import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';

const Movies = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:3000/movies')
      .then(res => setMovies(res.data));
  }, []);

  return (
    <div className="container">
      {movies.map(movie => (
        <div className="card" key={movie.id}>
          <img src={movie.img} alt={movie.title} />
          <div className="card-content">
            <h2>{movie.title}</h2>
            <p>Genre: {movie.genre}</p>
            <NavLink to={`/details/movies/${movie.id}`}>View Details</NavLink>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Movies;
