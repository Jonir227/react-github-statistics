import React, { Component, Fragment } from 'react';
import { withRouter, Route } from 'react-router-dom';
import { SearchContainer } from './pages';
import { Header } from './components';

class App extends Component {
  render() {
    return (
      <Fragment>
        <Header/>
        <Route path="/" component={SearchContainer} />
      </Fragment>
    );
  }
}

export default withRouter(App);
