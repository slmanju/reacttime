import React, { Component } from 'react';
import UserList from './user-list';
import UserDetails from './user-details';

class UserContainer extends Component {

  render() {
    return (
      <div>
        <h5>Users List</h5>
        <UserList/>
        <hr/>
        <h5>User Details</h5>
        <UserDetails/>
      </div>
    )
  }

}

export default UserContainer
