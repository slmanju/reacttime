import React, { Component } from 'react';
import ContactList from './ContactList';
import SearchBar from './SearchBar';

class ContactApp extends Component {

  constructor() {
    super();
    this.state = {
      contacts: [],
      searchText: ''
    };
  }

  componentDidMount() {
    this.setState({
      contacts: [
        { name: "Manjula", email: "manjula@gmail.com" },
        { name: "Jayawardana", email: "jayawardana@gmail.com" }
      ]
    });
  }

  handleSearch(searchText) {
    this.setState({
      searchText: searchText
    });
  }

  render() {
    return (
      <div>
        <SearchBar searchText={ this.state.searchText } onSearch={ this.handleSearch.bind(this) }/>
        <ContactList contacts={ this.state.contacts } searchText={ this.state.searchText } />
      </div>
    );
  }
}

export default ContactApp
