import React, { Component } from 'react';
import ContactList from './ContactList';
import SearchBar from './SearchBar';

class ContactApp extends Component {

  constructor() {
    super();
    this.state = {
      contacts: [
        { name: "Manjula", email: "manjula@gmail.com" },
        { name: "Jayawardana", email: "jayawardana@gmail.com" }
      ]
    };
  }

  render() {
    return (
      <div>
        <SearchBar />
        <ContactList contacts={ this.state.contacts } />
      </div>
    );
  }
}

export default ContactApp
