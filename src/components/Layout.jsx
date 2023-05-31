import React from 'react'
import "./Layout.css"
import { Link, Outlet } from 'react-router-dom'
import { CDBModalFooter, CDBBox, CDBBtn, CDBIcon } from 'cdbreact';


export const Layout = () => {
  return (
    <div >
      <nav className='navbar'>
      <Link to='/' className="link"><img className="logo" src="../../logo-with-background.png" alt="MindGames Logo" /></Link>
        <Link to='/' className="link">Home</Link>
        <Link to='/Events' className="link">Events</Link>
        <Link to='/Events1' className="link">Eventsid</Link>
        <Link to='/Myevents' className="link">My Events </Link>
        <Link to='/Contactus' className="link">Contact us </Link>
        <Link to="/Login" className="link">Login</Link>
      </nav>
      <Outlet />
      <CDBModalFooter className="shadow" style={{backgroundColor: '#E0E1DD'}}>
        <CDBBox display="flex" flex="column" className="mx-auto py-5" style={{ width: '90%' }}>
          <CDBBox display="flex" justifyContent="between" className="flex-wrap">
            <CDBBox>
              <a href="/" className="d-flex align-items-center p-0 text-dark">
              <img className="logo" src="../../logo-with-background.png" alt="MindGames Logo" />
              </a>
              <p className="my-3" style={{ width: '250px' }}>
                MindGames: Unleashing the power of knowledge through captivating lectures and seamless ticketing.
              </p>
              <CDBBox display="flex" className="mt-4">
                <CDBBtn flat color="dark">
                  <CDBIcon fab icon="facebook-f" />
                </CDBBtn>
                <CDBBtn flat color="dark" className="mx-3">
                  <CDBIcon fab icon="twitter" />
                </CDBBtn>
                <CDBBtn flat color="dark" className="p-2">
                  <CDBIcon fab icon="linkedin-in" />
                </CDBBtn>

              </CDBBox>
            </CDBBox>
            <CDBBox>
              <p className="h5 mb-4" style={{ fontWeight: '600' }}>
                MindGames
              </p>
              <CDBBox flex="column" style={{ cursor: 'pointer', padding: '0', display: 'flex' }}>
                <Link>Resources</Link>
                <Link> About Us</Link>
                <Link to='/Contactus'> Contact</Link>
                <Link> Blog</Link>
              </CDBBox>
            </CDBBox>
            <CDBBox>
              <p className="h5 mb-4" style={{ fontWeight: '600' }}>
                Help
              </p>
              <CDBBox flex="column" style={{ cursor: 'pointer', padding: '0', display: 'flex' }}>
                <Link>Support</Link>
                <Link>Sign Up</Link>
                <Link>Sign In</Link>
              </CDBBox>
            </CDBBox>
            <CDBBox>
              <p className="h5 mb-4" style={{ fontWeight: '600' }}>
                Products
              </p>
              <CDBBox flex="column" style={{ cursor: 'pointer', padding: '0', display: 'flex' }}>
                <Link>Windframe</Link>
                <Link>Loop</Link>
                <Link>Contrast</Link>
              </CDBBox>
            </CDBBox>
          </CDBBox>
          <small className="text-center mt-5">&copy; Chen Eylon.</small>
        </CDBBox>
      </CDBModalFooter>

    </div>
  )
}
