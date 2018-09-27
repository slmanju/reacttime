import React, { Component } from 'react';
import UserRow from './user-item';

class UserList extends Component {

  render() {
    let users = [
      { firstName: "Manjula", lastName: "Jayawardana" },
      { firstName: "Avatar", lastName: "Aang" },
      { firstName: "Sokka", lastName: "Nonbender" }
    ];
    return (
      users.map(user => <UserRow firstName={user.firstName} lastName={user.lastName}/>)
    )
  }

}

export default UserList
