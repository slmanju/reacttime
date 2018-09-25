import React, { Component } from 'react';

class SearchBar extends Component {
  render() {
    let contacts = this.props.contacts;
    return <label>Search: <input type="text" placeholder="search" /> </label>
  }
}

export default SearchBar
