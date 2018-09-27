import React, { Component } from 'react';

class UserRow extends Component {

  handleClick(event) {
      this.props.onClick();
  }

  render() {
    return <li onClick="handleClick">
              { this.props.firstName } { this.props.lastName }
           </li>
  }

}

export default UserRow
