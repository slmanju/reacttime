import React, { Component } from 'react';

class UserRow extends Component {

  render() {
    return <li key={ this.props.id }>
              { this.props.firstName } { this.props.lastName }
           </li>
  }

}

export default UserRow
