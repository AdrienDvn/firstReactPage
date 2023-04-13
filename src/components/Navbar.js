import { useState } from 'react';
import React from "react"

import logo from '/Users/adrien/code/BobZiroll/myfirstreactapp/src/logo192.png';

export default function Navbar(props) {

  return (
    <nav className={props.darkMode ? "dark" : "" }
    >

      <img
        src={logo}
        alt=""
        className="nav--icon"
      />
      <h3 className="nav--logo_text">ReactFacts</h3>
      <h4 className="nav--title">React Course - Project 1</h4>

      <div className='toggler'>
        <p className='toggler--light'>Light</p>
        <div
          className='toggler--slider'
          onClick={props.toggleDarkMode}
          >
        <div className='toggler--slider--circle'></div>
        </div>
        <p className='toggler--light'>Dark</p>


      <label className="switch" onClick={props.toggleDarkMode}>
        <input type="checkbox"  />
        <span className="slider round"></span>
      </label>
      </div>
    </nav>
  );
}
