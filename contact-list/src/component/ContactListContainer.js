import React, { Component } from 'react';

class ContactListContainer extends Component {
  render() {
    return (
      <div>
        <label>Search: <input type="text"/> </label>
        <ul>
          <li>Manjula - manjula@gmail.com</li>
          <li>Jayawardana - jayawardana@gmail.com</li>
          <li>Steve - steve@gmail.com</li>
          <li>Evan - evan@gmail.com</li>
        </ul>
      </div>
    );
  }
}

export default ContactListContainer
