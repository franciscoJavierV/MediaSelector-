import React from "react";
import "./styles/header.css";
import logo from '../assets/logo.jpg';
import { Link } from 'react-router-dom';

function header() {
  return (
    <div className="header">
      <img
      className="header-logo"
      src={logo}
      alt='logo'
      width='30px'  
      />
      <div className="header-options">
          <Link className='header__options-btn' to="/">hi</Link>
          <Link className='header__options-btn' to="/">hi2</Link>
          <Link className='header__options-btn' to="/">hi3</Link>
      </div>
    
    </div>
  );
}

export default header;
