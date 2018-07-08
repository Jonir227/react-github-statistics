import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Title = styled.h2`
  color: #7289da;
  font-size: 3.5rem;
  text-align: center;
`;

class Header extends Component {
  render() {
    return (
      <Link to="/">
        <Title>
          Github Statistics
        </Title>
      </Link>
    );
  }
}

export default Header;