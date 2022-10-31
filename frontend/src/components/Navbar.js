import React from "react"
import { Link, NavLink } from "react-router-dom"

const Navbar = () => {
  return (
    <div>
      <>
        {/* Navbar */}
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          {/* Container wrapper */}
          <div className="container">
            {/* Navbar brand */}
            <a className="navbar-brand me-2" href="https://mdbgo.com/">
              <img
                src="https://mdbcdn.b-cdn.net/img/logo/mdb-transaprent-noshadows.webp"
                height={16}
                alt="MDB Logo"
                loading="lazy"
                style={{ marginTop: "-1px" }}
              />
            </a>
            {/* Toggle button */}
            <button
              className="navbar-toggler"
              type="button"
              data-mdb-toggle="collapse"
              data-mdb-target="#navbarButtonsExample"
              aria-controls="navbarButtonsExample"
              aria-expanded="false"
              aria-label="Toggle navigation">
              <i className="fas fa-bars" />
            </button>
            {/* Collapsible wrapper */}
            <div className="collapse navbar-collapse" id="navbarButtonsExample">
              {/* Left links */}
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <NavLink className="nav-link" to="/home">
                    Home
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" to="/login">
                    Login
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" to="/contact">
                    Contact US
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" to="/event">
                    Events
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" to="/chat">
                    Chat App
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" to="/signup">
                    Signup
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" to="/usermanager">
                    Manage Users
                  </NavLink>
                </li>
              </ul>
              {/* Left links */}
              
            </div>
            {/* Collapsible wrapper */}
          </div>
          {/* Container wrapper */}
        </nav>
        {/* Navbar */}
      </>
    </div>
  )
}

export default Navbar
