import React, { Component } from 'react';
import UserRow from './user-item';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { selectUser } from '../actions/index';

class UserList extends Component {

  handleClick(user) {
      this.props.selectUser(user);
  }

  renderList() {
    let users = this.props.users;
    return users.map(user => {
        // return <UserRow firstName={ user.firstName }
        //                 lastName={ user.lastName }
        //                 key={ user.id }
        //                 onClick={ this.props.selectUser } />
        return <li key={ user.id } onClick={ () => this.handleClick(user) }>
                  { user.firstName } { user.lastName }
               </li>
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

function matchDispatchToProps(dispatch) {
  return bindActionCreators({ selectUser }, dispatch);
}

export default connect(mapStateToProps, matchDispatchToProps)(UserList)
