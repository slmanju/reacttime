import React, { Component } from 'react';

import { Link } from 'react-router-dom';

class BookList extends Component {

  render() {
    return (
      <div>
        <ul>
            {
                [...Array(5).keys()].map(n => {
                    return <li key={n}>
                            <Link to={`books/${n+1}`}>
                              Book {n+1}
                            </Link>
                          </li>;
                })
            }
            </ul>
      </div>
    )
  }

}

export default BookList;
