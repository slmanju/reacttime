import React, { Component } from 'react';

class SearchBar extends Component {

  onTextChange(event) {
    console.log(event.target.value);
    this.props.onSearch(event.target.value);
  }

  render() {
    return <label>Search: <input type="text"
                                  placeholder="search"
                                  value={ this.props.searchText }
                                  onChange={ this.onTextChange.bind(this) }/> </label>
  }
}

export default SearchBar
