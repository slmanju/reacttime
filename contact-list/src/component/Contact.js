import React, { Component } from 'react';

class Contact extends Component {
  render() {
    return (
      <li>{ this.props.name } - { this.props.email }</li>
    );
  }
}

export default Contact
