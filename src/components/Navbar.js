import { useState } from 'react';
import React from "react"

import logo from '/Users/adrien/code/BobZiroll/myfirstreactapp/src/logo192.png';

export default function Navbar() {

  const [isDarkMode, setIsDarkMode] = useState(false);

  function toggleDarkMode() {
    setIsDarkMode(!isDarkMode);
  }

  return (
    <nav>
      <img src={logo} alt="" className="nav--icon"/>
      <h3 className="nav--logo_text">ReactFacts</h3>
      <h4 className="nav--title">React Course - Project 1</h4>
      <label className="switch">
        <input type="checkbox" onChange={toggleDarkMode} />
        <span className="slider round"></span>
      </label>
    </nav>
  );
}
