import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';

const Sports = () => {
  const [sports, setSports] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:3000/sports')
      .then(res => setSports(res.data));
  }, []);

  return (
    <div className="container">
      {sports.map(sport => (
        <div className="card" key={sport.id}>
          <img src={sport.img} alt={sport.title} />
          <div className="card-content">
            <h2>{sport.title}</h2>
            <p>Teams: {sport.team}</p>
            <NavLink to={`/details/sports/${sport.id}`}>View Details</NavLink>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Sports;
