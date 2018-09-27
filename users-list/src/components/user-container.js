import React, { Component } from 'react';
import UserList from './user-list';

class UserContainer extends Component {

  render() {
    return (
      <div>
        <h5>Users List</h5>
        <UserList/>
        <hr/>
        <h5>User Details</h5>
      </div>
    )
  }

}

export default UserContainer
