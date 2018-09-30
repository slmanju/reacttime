import React, { Component } from 'react';

import { NavLink } from "react-router-dom";

class Header extends Component {

  render() {
    return (
      <header>
        <ul>
          <li><NavLink to="/">Home</NavLink></li>
          <li><NavLink to="/books">Books</NavLink></li>
          <li><NavLink to="/about">About</NavLink></li>
        </ul>
      </header>
    )
  }

}

export default Header;
