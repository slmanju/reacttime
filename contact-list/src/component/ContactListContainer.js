import React, { Component } from 'react';
import ContactList from './ContactList';

class ContactListContainer extends Component {

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
        <label>Search: <input type="text"/> </label>
        <ContactList contacts={ this.state.contacts } />
      </div>
    );
  }
}

export default ContactListContainer
