import React, { Component } from 'react';
import './App.css';

import { Route, Switch, Redirect } from "react-router-dom";

import IssueList from './views/tracker/IssueList';
import IssueEdit from './views/tracker/IssueEdit';

import Home from './views/Home';
import Navbar from './views/Navbar';

const About = () => <div>about page <a href="https://github.com/vasansr/pro-mern-stack/">book</a></div>

const PageNotFound = () => <div>404 page not found</div>

class App extends Component {
  render() {
    return (
      <div className="App">
        Welcome to issue tracker

        <Navbar />

        <hr/>
        <Switch>
          <Route path="/" component={ Home } exact />
          <Route path="/issues" component={ IssueList } exact />
          <Route path="/issues/view/:id" component={ IssueEdit } exact />
          <Route path="/issues/edit/:id" component={ IssueEdit } exact />
          <Route path="/issues/delete/:id" component={ IssueEdit } exact />
          <Route path="/about" component={ About } />
          <Route component={ PageNotFound } />
          <Redirect to="/" />
        </Switch>
      </div>
    );
  }
}

export default App;
