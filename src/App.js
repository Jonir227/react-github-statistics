import React, { Component, Fragment } from 'react';
import { withRouter, Route } from 'react-router-dom';
import { MainContainer, SearchContainer, UserInfoContainer } from './pages';
import { Header } from './components';

class App extends Component {
  render() {
    return (
      <Fragment>
        <Header/>
        <Route exact path="/" component={MainContainer} />
        <Route exact path="/search" component={SearchContainer} />
        <Route exact path="/info/:username" component={UserInfoContainer} />
      </Fragment>
    );
  }
}

export default withRouter(App);
