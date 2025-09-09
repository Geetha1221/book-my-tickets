import axios from "axios";
import React, { useEffect, useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const BookingList = () => {
  const [bookings, setBookings] = useState([]);
  const [selectedBooking, setSelectedBooking] = useState(null);

  // Fetch all bookings
  const fetchBookings = () => {
    axios
      .get("http://localhost:3000/booking")
      .then((res) => setBookings(res.data))
      .catch((err) => console.error(err));
  };

  useEffect(() => {
    fetchBookings();
  }, []);

  const handleCancelClick = (booking) => {
    setSelectedBooking(booking);
  };

  const confirmCancel = () => {
    if (!selectedBooking) return;

    const { id, refID, type, seats } = selectedBooking;

    axios
      .delete(`http://localhost:3000/booking/${id}`)
      .then(() => axios.get(`http://localhost:3000/${type}/${refID}`))
      .then((res) => {
        const updatedSeats = res.data.seats + seats;
        return axios.patch(`http://localhost:3000/${type}/${refID}`, {
          seats: updatedSeats,
        });
      })
      .then(() => {
        toast.success("Tickets canceled successfully");
        setSelectedBooking(null);
        fetchBookings();
      })
      .catch((err) => {
        console.error(err);
        toast.error("Failed to cancel tickets");
      });
  };

  return (
    <div className="booking-list-container">
      <ToastContainer />
      <h1 className="page-title">My Bookings</h1>
      {bookings.length === 0 ? (
        <p className="no-bookings">No bookings found.</p>
      ) : (
        bookings.map((b) => (
          <div key={b.id} className="booking-card">
            <h3>{b.title}</h3>
            <p>
              <strong>Name:</strong> {b.name}
            </p>
            <p>
              <strong>Email:</strong> {b.email}
            </p>
            <p>
              <strong>Seats:</strong> {b.seats}
            </p>
            <button
              className="cancel-btn"
              onClick={() => handleCancelClick(b)}
            >
              Cancel Ticket
            </button>
          </div>
        ))
      )}

      {/* Confirmation Popup */}
      {selectedBooking && (
        <div className="popup-overlay">
          <div className="popup-card">
            <h3>Are you sure you want to cancel your tickets?</h3>
            <div className="popup-buttons">
              <button className="yes-btn" onClick={confirmCancel}>
                Yes
              </button>
              <button
                className="no-btn"
                onClick={() => setSelectedBooking(null)}
              >
                No
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default BookingList;
