import React, { Component } from 'react';

class PageNotFound extends Component {

  render() {
    return (
      <div>
        Page not found { this.props.location.pathname }
      </div>
    )
  }

}

export default PageNotFound;
