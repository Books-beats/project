import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import "../App.css";

export default function Navbar(props) {
   let myStyle ={
     fontFamily: 'Georgia',
     textShadow: '4px 3px 3px grey',
     fontSize: '46px'
   }
   //Reload the page when close button is clicked
   let close = () => {
    window.location.reload(false);
   }
    return (
    <div>
   <nav className="navbar navbar-expand-lg navbar-dark bg-dark " >
    <div className="container-fluid">
    {/*The title of the page is linked to home page */}
    <Link to="/" className="navbar-brand"><b>{props.title}</b></Link>
    <button className="navbar-toggler" type="button" 
    data-bs-toggle="collapse" 
    data-bs-target="#navbarSupportedContent" 
    aria-controls="navbarSupportedContent" 
    aria-expanded="false" 
    aria-label="Toggle navigation">
      
      <style jsx>
        {`
         button[aria-expanded="false"] > .close{
          display: none;
         }
         button[aria-expanded="true"] > .navbar-toggler-icon{
          display: none;
         }
        `}
      </style>
      
      <span className="navbar-toggler-icon"></span>
      <i onClick={close} className="fa-duotone fa-x fw-bold close"></i>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          {/*NavLink for Characters page */}
          <NavLink activeClassName="active" to="/" className="nav-link">Characters</NavLink>
        </li>
        <li className="nav-item">
          {/*NavLink for Episodes page */}
          <NavLink activeClassName="active" to="/episodes" className="nav-link">Episodes</NavLink>
        </li>
        <li className="nav-item">
          {/*NavLink for Location page */}
          <NavLink activeClassName="active" to="/location" className="nav-link">Location</NavLink>
        </li>
      </ul>
    </div>
  </div>
   </nav> 
   {/* Heading of the page*/}
    <h1 className="text-center my-2 fx-1 " style={myStyle}><b>Rick <span className="text-danger">& </span>Morty</b></h1>
    </div>
  )
}
