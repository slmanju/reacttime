import React, { Component } from 'react';

import { Route, Switch, Redirect } from "react-router-dom";

import Home from './home';
import Books from './books';
import BookView from './book-view';
import About from './about';
import PageNotFound from './page-not-found';

class Main extends Component {

  render() {
    return (
      <div>
        <Switch>
          <Route path="/" component={ Home } exact />
          <Route path="/books" component={ Books } exact />
          <Route path="/books/:id" component={ BookView} />
          <Route path="/about" component={ About } />
          <Route component={ PageNotFound } />
          <Redirect to="/" />
        </Switch>
      </div>
    )
  }

}

export default Main;
