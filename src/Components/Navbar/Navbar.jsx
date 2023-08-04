import React from 'react'
import "./Navbar.scss"
import { Link } from 'react-router-dom'
import { useState } from 'react'

export const Navbar = () => {
     let navStyle = {
          backgroundColor: "black"
     }
     const [searchbar, setSearchbar] = useState(false);
     const handleSubmit = (event) => {
          event.preventDefault(); 
          setSearchbar(true);
      };
     const handleSubmit2 = (event) => {
          event.preventDefault(); 
          setSearchbar(false);
      };
     return (
          <div>
               <nav className="navbar navbar-expand-lg navbar-dark" style={navStyle}>
                    <Link className="navbar-brand" to="#">TrendifyMart</Link>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                         <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                         <ul className="navbar-nav mr-auto">
                              <li className="nav-item active">
                                   <Link className="nav-link" to="/">Home <span className="sr-only">(current)</span></Link>
                              </li>
                              <li className="nav-item active">
                                   <Link className="nav-link" to="/categories">Categories <span className="sr-only">(current)</span></Link>
                              </li>
                              <li className="nav-item active">
                                   <Link className="nav-link" to="/about">About <span className="sr-only">(current)</span></Link>
                              </li>
                              <li className="nav-item active">
                                   <Link className="nav-link" to="/login">Contact <span className="sr-only">(current)</span></Link>
                              </li>
                         </ul>
                         <form className="form-inline my-2 my-lg-0">
                              {!searchbar ? "" : (<input className="input" type="search" placeholder="Search" aria-label="Search" />)}
                              <svg onMouseEnter={handleSubmit} onClick={handleSubmit2} xmlns="http://www.w3.org/2000/svg" height="1.5em" viewBox="0 0 512 512"><path d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z"/></svg>
                         </form>
                    </div>
               </nav>
          </div>
     )
}
