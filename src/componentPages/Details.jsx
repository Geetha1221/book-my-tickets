import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { NavLink, useParams } from 'react-router-dom';

const Details = () => {
  const [details, setDetails] = useState(null);
  const { id, type } = useParams();

  useEffect(() => {
    axios.get(`http://localhost:3000/${type}/${id}`)
      .then(res => setDetails(res.data));
  }, [id, type]);



  if (!details) return <h1>Loading...</h1>;

  return (
    <div className="details-box">
      <h2>{details.title}</h2>
      <img src={details.img} alt={details.title} />
      <p>Available Seats: {details.seats}</p>
      <NavLink to={`/booking/${type}/${id}`}>Book Tickets</NavLink>
    </div>
  );


};

export default Details;
