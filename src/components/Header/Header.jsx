import React, { Component } from 'react';
import styled from 'styled-components';

const Title = styled.h2`
  color: #7289da;
  font-size: 3.5rem;
  text-align: center;
`;

class Header extends Component {
  render() {
    return (
      <Title>
        Github Statistics
      </Title>
    );
  }
}

export default Header;