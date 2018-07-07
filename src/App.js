import React, { Component, Fragment } from 'react';
import { SearchContainer } from './pages';
import { Header } from './components';

class App extends Component {
  render() {
    return (
      <Fragment>
        <Header/>
        <SearchContainer />
      </Fragment>
    );
  }
}

export default App;