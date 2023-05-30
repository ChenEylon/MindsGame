import React from 'react'
import "./Layout.css"
import { Link, Outlet } from 'react-router-dom'

export const Layout = () => {
  return (
    <div>
      <nav className='navbar'>
          <Link to='/' className="link">Home</Link>
          <Link to='/Events' className="link">Events</Link>
          <Link to='/Myevents' className="link">My Events </Link>
          <Link to="/Login" className="link">Login</Link>
      </nav>
      <Outlet />
      {/* <footer>
        this is footer
      </footer> */}
    </div>
  )
}
