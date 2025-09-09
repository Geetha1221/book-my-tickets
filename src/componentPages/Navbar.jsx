import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav className="navbarContainer">
        <aside className="logoBlock">
            <h1>BookMyTickets</h1>
        </aside>
        <aside className="menuItems">
            <NavLink to="/">HomePage</NavLink>
            <NavLink to="/movies">Movies</NavLink>
            <NavLink to="/sports">Sports</NavLink>
            <NavLink to="/bookinglist">My Booking</NavLink>
        </aside>
    </nav>
  )
}

export default Navbar
