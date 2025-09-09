import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Layout from './Layout'
import HomePage from './componentPages/HomePage'
import Movies from './componentPages/Movies'
import Sports from './componentPages/Sports'
import Booking from './componentPages/Booking'
import BookingList from './componentPages/BookingList'
import Details from './componentPages/Details'
import ErrorPage from './componentPages/ErrorPage'

const App = () => {
  let router = createBrowserRouter([
    {
      path: '/',
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <HomePage />
        },
        {
          path: "/movies",
          element: <Movies />
        }
        ,
        {
          path: "/sports",
          element: <Sports />
        },
        {
          path: "/booking/:type/:id",
          element: <Booking />
        },
        {
          path: "/bookinglist",
          element: <BookingList />
        },
        {
          path: `/details/:type/:id`,
          element: <Details />
        }, {
          path: "*",
          element: <ErrorPage />
        }
      ]
    }
  ])
  return (
    <div>

      <RouterProvider router={router}></RouterProvider>
    </div>
  )
}

export default App
