import React, { Component } from 'react';

import { connect } from 'react-redux';

class UserDetails extends Component {

  render() {
    if (!this.props.user) {
      return <div>Select a user</div>
    }
    return (
      <div>
        <h4>{ this.props.user.id } { this.props.user.firstName } { this.props.user.lastName }</h4>
      </div>
    )
  }

}

function mapStateToProps(state) {
    return {
        user: state.activeUser
    };
}

export default connect(mapStateToProps)(UserDetails);
