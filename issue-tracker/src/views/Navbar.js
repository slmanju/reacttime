import React, { Component } from 'react';

import { Link } from 'react-router-dom';

class Navbar extends Component {

  render() {
    return (
      <div>
        <Link to={ '/' }>Home</Link> | &nbsp;
        <Link to={ '/issues' }>Issues</Link> | &nbsp;
        <Link to={ '/about' }>About</Link>
      </div>
    );
  }

}

export default Navbar;
