import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';

const Booking = () => {

  let [booking, setBooking] = useState();
  let navigate = useNavigate()
  let [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    seats: 1
  })



  let { name, email, phone, seats } = formData
  seats = Number(seats);
  let { id, type } = useParams()
  useEffect(() => {
    axios.get(`http://localhost:3000/${type}/${id}`)
      .then((res) => {
        console.log(res.data)
        setBooking(res.data)
      })
  }, [])

  let handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  // let handleSubmit = (e) => {
  //   e.preventDefault();
  //   axios.post(`http://localhost:3000/booking`,formData
  //   )
  //     .then((res) => {
  //       console.log(res)
  //       toast.success("Tickets booked successfully")

  //       setTimeout(() => {
  //         navigate('/')
  //       }, 3000)

  //     }).catch((err) => {
  //       console.log(err)
  //     })

  // }


  let handleSubmit = (e) => {
    e.preventDefault();
    if (booking && seats <= booking.seats) {
      axios.post("http://localhost:3000/booking", {
        name, email, phone, seats: Number(seats), refID: booking.id, title: booking.title, type
      }).then(() => {
        axios.patch(`http://localhost:3000/${type}/${id}`,
          { seats: booking.seats - seats }
        )
      }).then((res) => {
        toast.success("Booking successful")
        setTimeout(()=>{
          navigate('/bookinglist')
        },3000)
      })
    } else {
      toast.error("Not enough seats available")
    }

  }
  if (!booking) return <h1>Loading...</h1>;
  return (

    <div className="booking-container">
      <ToastContainer />
      <h1>Booking Tickets for: {booking.title}</h1>
      <p>Available Seats: {booking.seats}</p>
      <form onSubmit={handleSubmit} className="booking-form">
        <label htmlFor="name">Enter Your Name:</label>
        <input type="text" id='name' name='name' value={name} onChange={handleChange} placeholder='Enter Name' />
        <label htmlFor="email">Enter Your Email:</label>
        <input type="email" id='email' name='email' value={email} onChange={handleChange} placeholder='Enter Email' />
        <label htmlFor="phone">Enter Your Phone Number:</label>
        <input type="tel" id='phone' name='phone' value={phone} onChange={handleChange} placeholder='Enter Phone Number' />
        <label htmlFor="seats">Enter No of Seats:</label>
        <input type="number" id='seats' name='seats' value={seats} onChange={handleChange} placeholder='Enter No of Seats' />
        <button>Confirm Tickets</button>
      </form>
    </div>

  )
}

export default Booking
