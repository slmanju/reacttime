import React, { Component } from 'react';

class UserRow extends Component {

  render() {
    return <li>
              { this.props.firstName } { this.props.lastName }
           </li>
  }

}

export default UserRow
