import React, { Component } from 'react';
import { InputForm } from '../components';

class MainContainer extends Component {
  componentDidMount() {
    this.props.history.push('/');
  }
  
  render() {
    return (
      <InputForm />
    );
  }
}

export default MainContainer;
