import React, { Component } from 'react';
import Contact from './Contact';

class ContactListContainer extends Component {
  render() {
    return (
      <div>
        <label>Search: <input type="text"/> </label>
        <ul>
          <Contact name="Manjula" email="manjula@gmail.com" />
          <Contact name="Jayawardana" email="jayawardana@gmail.com</" />
          <Contact name="Steve" email="steve@gmail.com" />
          <Contact name="Evan" email="evan@gmail.com" />
        </ul>
      </div>
    );
  }
}

export default ContactListContainer
