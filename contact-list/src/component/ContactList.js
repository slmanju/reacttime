import React, { Component } from 'react';
import Contact from './Contact';

class ContactList extends Component {
  render() {
    let contacts = this.props.contacts;
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
