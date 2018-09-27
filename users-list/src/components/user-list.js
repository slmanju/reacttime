import React, { Component } from 'react';
import UserRow from './user-item';

import { connect } from 'react-redux';

class UserList extends Component {

  renderList() {
    let users = this.props.users;
    return users.map(user => {
        return <UserRow firstName={ user.firstName }
                        lastName={ user.lastName }
                        key={ user.id } />
    });
  }

  render() {
    return (
        <ul>
          { this.renderList() }
        </ul>
    )
  }

}

function mapStateToProps(state) {
  return {
    users: state.users
  }
}

export default connect(mapStateToProps)(UserList)
