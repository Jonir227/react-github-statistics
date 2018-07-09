import React from 'react';
import styled from 'styled-components';
import ListItem from './ListItem';

const Results = styled.ul`
  list-style-type: none;
  width: 90%;
  margin-left: 3%;
  overflow: hidden;
`;

const List = ({ users }) => {
  return (
    <Results>
      {
        users.map(user => (
          <ListItem key={user.id} {...user} />
        ))
      }
    </Results>
  );
};

export default List;