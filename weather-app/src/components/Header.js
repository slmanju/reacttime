import React, { Component } from 'react';
import { Navbar, Header, Brand } from 'react-bootstrap';

export default class AppHeader extends Component {

  render() {
    return (
      <header className="App-header">
        <Navbar>
          <Navbar.Header>
            <Navbar.Brand>
              <a href="#">React Weather App</a>
            </Navbar.Brand>
          </Navbar.Header>
        </Navbar>
      </header>
    );
  }
}
