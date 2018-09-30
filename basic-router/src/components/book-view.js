import React, { Component } from 'react';

class BookView extends Component {

  render() {
    return (
      <div>
        book view: { this.props.match.params.id }
      </div>
    )
  }

}

export default BookView;
