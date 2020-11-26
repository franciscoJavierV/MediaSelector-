import React from "react";
import "./styles/header.css";
import logo from '../assets/logo.jpg';
import { Link } from 'react-router-dom';
import { connect } from "react-redux";
import { logoutUser } from "../actions";

function header(props) {
  const handleLogout = () => {
    document.cookie = "likedvideos=";
    document.cookie = "name=";
    document.cookie = "id=";
    document.cookie = "selections=";
    props.logoutUser({});
  };
  return (
    <div className="header">
      <img
      className="header-logo"
      src={logo}
      alt='logo'
      width='30px'  
      />
      <div className="header-options">
      <button className="logout" onClick={handleLogout}>log out</button>
          <Link className='header__options-btn' to="/likes">selections</Link>
          <Link className='header__options-btn' to="/addmovie">Añadir pelicula</Link>
      </div>
    
    </div>
  );
}
const mapDispatchToProps = {
  logoutUser,
};

export default connect(null,mapDispatchToProps)(header);
