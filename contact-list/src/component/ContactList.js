import React, { Component } from 'react';
import Contact from './Contact';

class ContactList extends Component {
  render() {
    let searchText = this.props.searchText;
    let contacts = this.props.contacts.filter(
      contact => contact.name.indexOf(searchText) !== -1
    );
    return (
      <ul>
        {
          contacts.map(
            (contact) =>
              <Contact
                  key={ contact.email }
                  name={ contact.name }
                  email={ contact.email } />
            )
        }
      </ul>
    )
  }
}

export default ContactList
